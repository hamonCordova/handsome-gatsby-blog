import React from "react"
import Profile from "../Profile"
import SocialIcons from "../SocialIcons"

import * as S from "./styled"
import MenuLinks from "../MenuLinks";

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialIcons />
    <MenuLinks />
  </S.SidebarWrapper>
)

export default Sidebar
