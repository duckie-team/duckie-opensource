import React from "react";
import styled from "styled-components";
import { ProjectCard } from "./projectCard";
import DocusaurusImageUrl from "../../../static/img/example.png";
import clsx from "clsx";
import { projects } from "@site/data/project";
import { Flex } from "../flex";
import { ShowMoreButton } from "../buttons/showMore";
import { db } from "@site/data/db";

const Container = styled.div``;

const Title = styled.h3`
  display: block;
  font-size: 28px;
  margin-bottom: 40px;
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

export function HomepageProjects() {
  return (
    <section>
      <Container className="container">
        <div>
          <div>
            <Title>Featured Projects</Title>
          </div>
        </div>
        <Row>
          {db.projects
            .filter((e) => e.showFeaturedProjects)
            .map((project) => (
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
        <Flex.Center style={{ marginTop: "50px" }}>
          <ShowMoreButton href="/project">모든 프로젝트 보기</ShowMoreButton>
        </Flex.Center>
      </Container>
    </section>
  );
}
