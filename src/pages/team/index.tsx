import React, { useCallback, useEffect, useRef, useState } from "react";
import Layout from "@theme/Layout";
import styled from "styled-components";
import { Ducky } from "@site/src/components/ducky";
import ThreeDucky from "../../../static/img/team/3ducky.svg";
import { Flex } from "@site/src/components/flex";
import { TeamPageHero } from "@site/src/components/pages/team/hero";
import { TeamPageDescription } from "@site/src/components/pages/team/desc";
import { TeamPageMember } from "../../components/pages/team/member";
import BrowserOnly from "@docusaurus/BrowserOnly";

const Divver = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-bottom: 64px;
`;

export default function Home(): JSX.Element {
  const [, updateState] = useState({}); // 상태 변수는 선언하지 않는다
  const forceUpdate = useCallback(() => updateState({}), []);
  useEffect(() => {
    forceUpdate();
  }, []);

  return (
    <Layout
      title={`team`}
      description="덕질엔 끝이 없다, 취향따라 만나는 커뮤니티, 덕키!"
    >
      <BrowserOnly>
        {() => (
          <main>
            <Divver>
              <TeamPageHero />
              <TeamPageDescription />
              <TeamPageMember />
            </Divver>
          </main>
        )}
      </BrowserOnly>
    </Layout>
  );
}
