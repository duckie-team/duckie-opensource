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
import { Project, projects } from "@site/data/project";
import { db } from "@site/data/db";
import axios from "axios";

const Content = styled.div`
  padding: 16px 32px;
  border: solid 1px var(--ifm-color-emphasis-300);
  max-width: calc(100vw - 16px);
  border-radius: 4px;
  width: 100%;
  flex: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 4px 8px;
  }
`;

export function ProjectContent({ readme }: { readme: string }) {
  return (
    <Content>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {readme}
      </ReactMarkdown>
    </Content>
  );
}
