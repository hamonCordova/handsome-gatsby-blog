import React from 'react';
import { graphql, StaticQuery, useStaticQuery } from "gatsby";
import Avatar from "../Avatar";
import * as S from './styled'

const Profile = () => {
    const {site: {siteMetadata: { title, subTitle, description }}} = useStaticQuery(graphql`
      query {
          site {
            siteMetadata {
              title
              subTitle
              description
            }
          }
        }
    `);

    return (
      <S.ProfileWrapper>
        <S.ProfileLink to="/">
          <Avatar />
          <S.ProfileAuthor>
            {title}
            <S.ProfilePosition>{subTitle}</S.ProfilePosition>
          </S.ProfileAuthor>
        </S.ProfileLink>
        <S.ProfileDescription>{description}</S.ProfileDescription>
      </S.ProfileWrapper>
    );
};
export default Profile;


