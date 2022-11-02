import React from "react";
import styled from "styled-components";
import { Project } from "./project";
import DocusaurusImageUrl from "../../../static/img/example.png";
import clsx from "clsx";
import { projects } from "@site/data/project";
import { Flex } from "../flex";
import { ShowMoreButton } from "../buttons/showMore";

const Container = styled.div``;

const Title = styled.h3`
  display: block;
  font-size: 28px;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
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
          {Object.values(projects)
            .filter((e) => e.showFeaturedProjects)
            .map((project) => (
              <Project
                title={project.name}
                content={project.description}
                tags={project.tags}
                backgroundImage={project.backgroundImage}
                icons={project.target}
                link={project.link}
                key={project.name}
              />
            ))}
        </Row>
        <Flex.Center style={{ marginTop: "50px" }}>
          <ShowMoreButton href="https://github.com/duckie-team">
            모든 프로젝트
          </ShowMoreButton>
        </Flex.Center>
      </Container>
    </section>
  );
}
