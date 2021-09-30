import React from 'react';
import { graphql } from 'gatsby';
import PostItem from "../components/PostItem";
import Pagination from "../components/Pagination";

const BlogListPage = (props : any) => {
    const postsList = props.data.allMarkdownRemark.edges;
    const { currentPage, totalPages } = props.pageContext;

    return (
      <>
          {
              // @ts-ignore
              postsList.map(({node: {frontmatter: {title, date, description, category, background}, timeToRead, fields: { slug }}}, i: number) => {
                  return (
                    <PostItem
                      key={i}
                      slug={slug}
                      background={background}
                      category={category}
                      date={date}
                      timeToRead={timeToRead}
                      title={title}
                      description={description}
                    />
                  );
              })
          }
          <Pagination isFirst={currentPage === 1} isLast={currentPage >= totalPages} currentPage={currentPage} numPages={totalPages} prevPage={ currentPage === 2 ? `/` : `/page/${currentPage - 1}`} nextPage={`/page/${currentPage + 1}`} />
      </>
    );
};

export const query = () => {
    return graphql`
      query PostList($limit: Int!, $skip: Int!) {
            allMarkdownRemark(
              sort: {fields: frontmatter___date, order: DESC}
              skip: $skip
              limit: $limit
            ) {
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
                }
            }
        }
    `;
};

export default BlogListPage;
