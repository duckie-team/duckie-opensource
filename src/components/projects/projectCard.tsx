import clsx from "clsx";
import React from "react";
import styled from "styled-components";
import { ToolTip } from "../tooltip";
import Link from "@docusaurus/Link";

const BackgroundImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  transition: 300ms;

  @media (max-width: 1440px) {
    width: 100%;
  }
`;

const Outer = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: 300ms;
  /* border: solid 1px var(--ifm-color-emphasis-300);
  padding: 20px; */
  border-radius: 12px;
  width: 100%;
  flex: 1 1;

  &:hover {
    text-decoration: none !important;
    transform: translateY(-4px);

    ${BackgroundImage} {
      transform: scale(1.05);
    }
  }
`;

const BackgroundImageOuter = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 8px;

  @media (max-width: 1440px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: var(--ifm-font-color-base);
`;
const Content = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--ifm-color-emphasis-600);
`;

const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const Tag = styled.div`
  padding: 2px 6px;
  background-color: rgba(239, 138, 51, 0.15);
  color: #ef8a33;
  border-radius: 4px;
  font-size: 14px;
`;

const Icon = styled.div`
  background-color: var(--ifm-color-emphasis-100);
  border-radius: 4px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
    fill: var(--ifm-color-emphasis-500);
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export function ProjectCard({
  backgroundImage,
  title,
  content,
  link,
  tags,
  icons,
}: {
  backgroundImage: string;
  title: string;
  content: string;
  link: string;
  tags: string[];
  icons: {
    name: string;
    icon: React.ReactNode;
  }[];
}) {
  return (
    <Outer href={link}>
      <BackgroundImageOuter>
        <BackgroundImage src={backgroundImage} />
      </BackgroundImageOuter>
      <Title>{title}</Title>
      <Tags>
        {tags.map((e) => (
          <Tag key={e}>{e}</Tag>
        ))}
      </Tags>
      <Content>{content}</Content>
      <Icons>
        {icons.map((E, i) => (
          <ToolTip text={E.name} key={i}>
            <Icon>{E.icon}</Icon>
          </ToolTip>
        ))}
      </Icons>
    </Outer>
  );
}
