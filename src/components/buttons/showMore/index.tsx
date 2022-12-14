import Link from "@docusaurus/Link";
import React from "react";
import styled from "styled-components";

export const ShowMoreButton = styled(Link)`
  border: solid 1px var(--ifm-color-emphasis-600);
  padding: 12px 40px;
  border-radius: 8px;
  color: var(--ifm-color-emphasis-600);
  text-decoration: none;
  transition: 200ms;
  font-size: 14px;

  &:hover {
    border: solid 1px var(--ifm-color-emphasis-800);
    color: var(--ifm-color-emphasis-800);
    text-decoration: none;
  }
`;
