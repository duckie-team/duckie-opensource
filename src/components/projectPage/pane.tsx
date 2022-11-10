import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import styled from "styled-components";
import { PageLayout } from "@site/src/components/pageLayout";
import { Flex } from "@site/src/components/flex";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { ToolTip } from "@site/src/components/tooltip";
import { ProjectCard } from "@site/src/components/projects/projectCard";
import { db } from "@site/data/db";
import axios from "axios";
import { ProjectTag, ProjectTarget } from "@site/data/project";
import { Git } from "@icons-pack/react-simple-icons";
import Link from "@docusaurus/Link";

const BookSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="192"
    height="192"
    fill="var(--ifm-color-emphasis-600);"
    viewBox="0 0 256 256"
  >
    <rect width="256" height="256" fill="none"></rect>
    <path d="M208,24H72A32.1,32.1,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-24,96-25.6-19.2a3.9,3.9,0,0,0-4.8,0L128,120V40h56Z"></path>
  </svg>
);

export type PaneAbout = {
  icon: React.ReactNode;
  text: string;
  link: string;
};

export type PaneContributor = {
  name: string;
  image: string;
  link: string;
};

const About = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--ifm-color-emphasis-600);
`;

const AboutIcon = styled.div`
  width: 20px;
  height: 20px;
`;

const LinkText = styled.a`
  color: var(--ifm-color-emphasis-600);
  transition: 100ms;
  &:hover {
    text-decoration: none;
  }
`;

const Border = styled.div`
  border-top: solid 1px var(--ifm-color-emphasis-300);
  margin: 16px 0px;
`;

const ContributorImage = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 99999px;
  border: solid 1px var(--ifm-color-emphasis-300);
`;

const ContributorLink = styled.a`
  width: 36px;
  height: 36px;
`;

function Contributor({
  image,
  name,
  link,
}: {
  image: string;
  name: string;
  link: string;
}) {
  return (
    <ContributorLink href={link} target={"_blank"}>
      <ToolTip text={name}>
        <ContributorImage src={image} alt={name} />
      </ToolTip>
    </ContributorLink>
  );
}

const Contributors = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
`;

const DocumentButton = styled.a`
  border: solid 1px var(--ifm-color-emphasis-300);
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

const Label = styled.div`
  color: var(--ifm-color-emphasis-600);
  font-size: 14px;
`;

const Tags = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
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
  border-radius: 4px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
    fill: var(--ifm-color-emphasis-600);
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const BigTextDivver = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  gap: 4px;
`;

const BigTextIcon = styled.div`
  width: 20px;
  height: 20px;
  svg {
    width: 20px !important;
    height: 20px !important;
  }
`;

const BigText = styled(Link)`
  padding: 0 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--ifm-color-emphasis-800);
  &:hover {
    color: var(--ifm-color-emphasis-800);
  }
`;

export function ProjectPane({
  abouts,
  tags,
  contributors,
  targets,
  repositoryUrl,
  docsUrl,
}: {
  abouts: PaneAbout[];
  tags: ProjectTag[];
  contributors: PaneContributor[];
  targets: ProjectTarget[];
  repositoryUrl: string;
  docsUrl?: string;
}) {
  return (
    <Flex.Column>
      <Flex.Column gap="4px">
        <Label>Repository</Label>
        <BigTextDivver>
          <BigTextIcon>
            <Git />
          </BigTextIcon>
          <BigText href={repositoryUrl}>{repositoryUrl}</BigText>
        </BigTextDivver>
      </Flex.Column>
      <Border />
      {docsUrl && (
        <>
          <Flex.Column gap="4px">
            <Label>Docs</Label>
            <BigTextDivver>
              <BigTextIcon>{BookSvg}</BigTextIcon>
              <BigText href={docsUrl}>{docsUrl}</BigText>
            </BigTextDivver>
          </Flex.Column>

          <Border />
        </>
      )}
      <Flex.Column gap="8px">
        {abouts.map((e, i) => (
          <About key={i}>
            <AboutIcon>{e.icon}</AboutIcon>
            {e.link ? <LinkText href={e.link}>{e.text}</LinkText> : e.text}
          </About>
        ))}
        <Tags>
          {tags.map((e, i) => (
            <Tag key={i}>{e}</Tag>
          ))}
        </Tags>
      </Flex.Column>
      <Border />
      <Flex.Column gap="8px">
        <Label>targets</Label>
        <Icons>
          {targets.map((e, i) => (
            <ToolTip text={e.name} key={i}>
              <Icon>{e.icon}</Icon>
            </ToolTip>
          ))}
        </Icons>
      </Flex.Column>
      <Border />
      <Flex.Column gap="8px">
        <Label>Contributors</Label>
        <Contributors>
          {contributors.map((e, i) => (
            <Contributor image={e.image} name={e.name} key={i} link={e.link} />
          ))}
        </Contributors>
      </Flex.Column>
    </Flex.Column>
  );
}
