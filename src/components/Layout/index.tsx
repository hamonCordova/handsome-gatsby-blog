import React from 'react';
import Profile from '../Profile';
import '../../styles/reset.css';
import * as S from './styled';
import Sidebar from '../Sidebar';
import MenuBar from '../MenuBar';

const Layout = ({ children }: any) => {
    return (
        <S.LayoutWrapper>
            <Sidebar />
            <S.LayoutMain>{children}</S.LayoutMain>
            <MenuBar />
        </S.LayoutWrapper>
    );
};

export default Layout;
