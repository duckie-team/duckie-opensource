import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import styled from "styled-components";
import DOSLogo from "../../../static/img/dos_logo.png";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledFooter = styled.footer`
  width: 100%;
  padding: 32px 0px;
  border-top: solid 1px var(--ifm-color-emphasis-300);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const FooterTitle = styled.div`
  color: #ff8800;
  font-weight: bold;
  font-size: 16px;
`;
const DOSImg = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 4px;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const NavItem = styled.a`
  color: #aeaeae;
`;

function Footer() {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  return (
    <StyledFooter>
      <Flex>
        <FooterTitle>Duckie-Developer</FooterTitle>
        <DOSImg src={DOSLogo} />
      </Flex>
      <Flex>
        <Nav>
          <NavItem href="/">Team Duckie</NavItem>
          <NavItem href="/">Instagram</NavItem>
          <NavItem href="/">Twitter</NavItem>
          <NavItem href="/">Contact</NavItem>
        </Nav>
      </Flex>
    </StyledFooter>
  );
}
export default React.memo(Footer);
