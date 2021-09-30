import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as S from './styled';
import { Github, Twitter, Youtube, Unsplash, Instagram } from 'styled-icons/boxicons-logos';

const SocialLinks = () => {
    const handle = 'hamonCordova';

    const Icons = {
        Github,
        Twitter,
        Youtube,
        Unsplash,
        Instagram,
    } as any;

    const links = [
        {
            label: 'Github',
            url: `https://github.com/${handle}`,
        },
        {
            label: 'Twitter',
            url: `https://twitter.com/${handle}`,
        },
        {
            label: 'Youtube',
            url: `https://www.youtube.com/${handle}`,
        },
        {
            label: 'Instagram',
            url: `https://www.instagram.com/${handle}`,
        },
        {
            label: 'Unsplash',
            url: `https://unsplash.com/${handle}`,
        },
    ];

    return (
        <S.SocialLinksWrapper>
            <S.SocialLinksList>
                {links.map((link, i) => {
                    const Icon = Icons[link.label];
                    return (
                        <S.SocialLinksItem key={i}>
                            <S.SocialLinksLink href={link.url} title={link.label} target="_blank" rel="noopener noreferrer">
                                <S.IconWrapper>
                                    <Icon />
                                </S.IconWrapper>
                            </S.SocialLinksLink>
                        </S.SocialLinksItem>
                    );
                })}
            </S.SocialLinksList>
        </S.SocialLinksWrapper>
    );
};
export default SocialLinks;


