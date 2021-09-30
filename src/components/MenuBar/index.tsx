import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as S from './styled';
import { Home, SearchAlt2 as Search, UpArrowAlt as Arrow } from "styled-icons/boxicons-solid"
import { LightBulb as Light } from "styled-icons/octicons"
import { Grid } from "@styled-icons/bootstrap"

const MenuBar = () => {
    return (
      <S.MenuBarWrapper>
          <S.MenuBarGroup>
              <S.MenuBarLink activeClassName="active" to="/" title="Voltar para Home">
                  <S.MenuBarItem>
                      <Home />
                  </S.MenuBarItem>
              </S.MenuBarLink>
              <S.MenuBarLink to="/search/" title="Pesquisar">
                  <S.MenuBarItem>
                      <Search />
                  </S.MenuBarItem>
              </S.MenuBarLink>
          </S.MenuBarGroup>
          <S.MenuBarGroup>
              <S.MenuBarItem title="Mudar o tema">
                  <Light />
              </S.MenuBarItem>
              <S.MenuBarItem title="Mudar visualização">
                  <Grid />
              </S.MenuBarItem>
              <S.MenuBarItem title="Ir para o Topo">
                  <Arrow />
              </S.MenuBarItem>
          </S.MenuBarGroup>
      </S.MenuBarWrapper>
    );
};
export default MenuBar;


