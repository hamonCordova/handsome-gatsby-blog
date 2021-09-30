const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

// To Add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
    if (node.internal.type === 'MarkdownRemark') {
        // Create a slug
        const slug = createFilePath({
            node,
            getNode,
            basePath: 'pages',
        });

        // Create new query's able field with name of 'slug'
        const { createNodeField } = actions;
        createNodeField({
            node,
            name: 'slug',
            value: `/${slug.slice(12)}`,
        });
    }
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return graphql(`
        query PostList {
            allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
                edges {
                    node {
                        frontmatter {
                            title
                            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                            description
                            category
                            background
                        }
                        timeToRead
                        fields {
                            slug
                        }
                    }
                    previous {
                        frontmatter {
                            title
                        }
                        fields {
                            slug
                        }
                    }
                    next {
                        frontmatter {
                            title
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then(result => {
        const postsList = result.data.allMarkdownRemark.edges;

        // Create blog posts
        postsList.forEach(({ node, previous, next }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve('./src/templates/blog-post.tsx'),
                context: {
                    slug: node.fields.slug,
                    previousPost: next,
                    nextPost: previous
                },
            });
        });

        // Create pagination
        const postsPerPage = 6;
        const totalPages = Math.ceil(postsList.length / postsPerPage);

        Array.from({ length: totalPages }).forEach((_, index) => {
            createPage({
                path: index === 0 ? '/' : `/page/${index + 1}`,
                component: path.resolve('./src/templates/blog-list.tsx'),
                context: {
                    limit: postsPerPage,
                    skip: index * postsPerPage,
                    totalPages,
                    currentPage: index + 1,
                },
            });
        });
    });
};

