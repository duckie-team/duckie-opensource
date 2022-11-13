import React from "react";
import Layout from "@theme/Layout";
import styled from "styled-components";
import { db } from "@site/data/db";
import { ProjectCard } from "@site/src/components/projects/projectCard";

const Container = styled.div`
  margin-bottom: 64px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  row-gap: 48px;

  @media (max-width: 996px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 678px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h1`
  margin-top: 64px;
`;

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`project`}
      description="덕질엔 끝이 없다, 취향따라 만나는 커뮤니티, 덕키!"
    >
      <main>
        <Container className="container">
          <Title>Projects</Title>

          <Row>
            {db.projects.map((project) => (
              <ProjectCard
                title={project.name}
                content={project.description}
                tags={project.tags}
                backgroundImage={project.backgroundImage}
                icons={project.targets}
                link={project.link}
                key={project.name}
              />
            ))}
          </Row>
        </Container>
      </main>
    </Layout>
  );
}
