import React, { useCallback, useEffect, useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import { HomepageArticles } from "../components/articles/featuredArticles";
import { HomepageProjects } from "../components/projects/featuredProjects";

import "./mainpage.css";
import styled from "styled-components";
import { HomepageHero } from "../components/HomepageHero";
import BrowserOnly from "@docusaurus/BrowserOnly";

const Divver = styled.div`
  margin-bottom: 96px;
  display: flex;
  flex-direction: column;
  gap: 160px;
`;

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [, updateState] = useState({}); // 상태 변수는 선언하지 않는다
  const forceUpdate = useCallback(() => updateState({}), []);
  useEffect(() => {
    forceUpdate();
  }, []);

  return (
    <Layout
      title={``}
      description="덕질엔 끝이 없다, 취향따라 만나는 커뮤니티, 덕키!"
    >
      <BrowserOnly>
        {() => (
          <main>
            <Divver>
              <HomepageHero />
              <HomepageFeatures />
              <HomepageArticles />
              <HomepageProjects />
            </Divver>
          </main>
        )}
      </BrowserOnly>
    </Layout>
  );
}
