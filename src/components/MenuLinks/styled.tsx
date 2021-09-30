import styled from 'styled-components';
import { Link } from 'gatsby';

export const MenuLinksWrapper = styled.nav`
    width: 100%;
`;

export const MenuLinksList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
  font-weight: 300;
  font-size: 1.2rem;
`;

export const MenuLinksLink = styled(Link)`
    width: 100%;
    color: #8899a6;
    text-decoration: none;
    transition: color 0.5s;
  
  &.active {
    color: #1fa1f2 !important;
  }
  
    &:hover {
        color: #1fa1f2;
    }

`;

export const MenuLinksItem = styled.li`

  &:not(:first-child) {
    margin-top: 20px;
  }
`;
