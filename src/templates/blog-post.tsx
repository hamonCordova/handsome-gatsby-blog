import React from 'react';
import { graphql } from 'gatsby';

import * as S from '../components/Post/styled';
import RecommendedPosts from "../components/RecommendedPosts";

const BlogPostPage = ({ data, pageContext }: any) => {
    const post = data.markdownRemark;
    const nextPost = pageContext.nextPost;
    const previousPost = pageContext.previousPost;

    return (
        <>
            <S.PostHeader>
                <S.PostDate>
                    {post.frontmatter.date} • {post.timeToRead} min de leitura
                </S.PostDate>
                <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
                <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
            </S.PostHeader>
            <S.MainContent>
                <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
            </S.MainContent>
            <RecommendedPosts next={nextPost} previous={previousPost}></RecommendedPosts>
        </>
    );
};

export const query = () => {
    return graphql`
        query Post($slug: String!) {
            markdownRemark(fields: { slug: { eq: $slug } }) {
                frontmatter {
                    title
                    description
                    date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYYY")
                }
                html
                timeToRead
            }
        }
    `;
};

export default BlogPostPage;
