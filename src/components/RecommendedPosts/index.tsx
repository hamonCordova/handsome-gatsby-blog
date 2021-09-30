import React from "react"
import propTypes from "prop-types"
import * as S from "./styled"

// @ts-ignore
const RecommendedPosts = ({ next, previous }) => (
  <S.RecommendedWrapper>
    {previous && (
      <S.RecommendedAnchor to={previous.fields.slug} className="previous">
        {previous.frontmatter.title}
      </S.RecommendedAnchor>
    )}
    {next && (
      <S.RecommendedAnchor to={next.fields.slug} className="next">
        {next.frontmatter.title}
      </S.RecommendedAnchor>
    )}
  </S.RecommendedWrapper>
)

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPosts
