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
  gap: 8px;
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
          <NavItem target={"_blank"} href="https://duckie.team">
            Team Duckie
          </NavItem>
          <NavItem
            target={"_blank"}
            href="https://www.instagram.com/duckie_team/"
          >
            Instagram
          </NavItem>
          <NavItem target={"_blank"} href="https://twitter.com/duckie_team">
            Twitter
          </NavItem>
          <NavItem target={"_blank"} href="mailto://developers@duckie.team">
            Contact
          </NavItem>
        </Nav>
      </Flex>
    </StyledFooter>
  );
}
export default React.memo(Footer);
