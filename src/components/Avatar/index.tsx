import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as S from './styled';

const Avatar = () => {
    return (
        <S.AvatarWrapper>
            <StaticImage
                src="../../images/profile-pic.jpg"
                alt="Profile picture"
                layout="fixed"
                placeholder="blurred"
                objectFit="cover"
                width={60}
                height={60}
                loading="eager"
            ></StaticImage>
        </S.AvatarWrapper>
    );
};
export default Avatar;


