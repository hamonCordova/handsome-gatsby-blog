import React from 'react';
import * as S from './styled';

const MenuLinks = () => {
    const links = [
        {
            label: 'Home',
            path: '/',
        },
        {
            label: 'Sobre Mim',
            path: '/about/',
        },
    ];

    return (
        <S.MenuLinksWrapper>
            <S.MenuLinksList>
                {links.map((link, i) => {
                    return (
                        <S.MenuLinksItem key={i}>
                            <S.MenuLinksLink to={link.path} activeClassName="active">
                                {link.label}
                            </S.MenuLinksLink>
                        </S.MenuLinksItem>
                    );
                })}
            </S.MenuLinksList>
        </S.MenuLinksWrapper>
    );
};
export default MenuLinks;


