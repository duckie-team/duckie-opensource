import React from "react";
import Layout from "@theme/Layout";
import styled from "styled-components";

const Divver = styled.div`
  margin-bottom: 96px;
  display: flex;
  flex-direction: column;
  gap: 96px;
`;

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`project`}
      description="덕질엔 끝이 없다, 취향따라 만나는 커뮤니티, 덕키!"
    >
      <main>
        <Divver>projects</Divver>
      </main>
    </Layout>
  );
}
