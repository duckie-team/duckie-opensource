import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import { HomepageArticles } from "../components/articles/featuredAritcles";
import { HomepageProjects } from "../components/projects/featuredProjects";

import "./mainpage.css";
import styled from "styled-components";
import { HomepageHero } from "../components/HomepageHero";

const Divver = styled.div`
  margin-bottom: 96px;
  display: flex;
  flex-direction: column;
  gap: 96px;
`;

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <Divver>
          <HomepageHero />
          <HomepageFeatures />
          <HomepageArticles />
          <HomepageProjects />
        </Divver>
      </main>
    </Layout>
  );
}
