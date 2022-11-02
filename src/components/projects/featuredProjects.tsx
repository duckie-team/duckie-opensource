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

const CI_ANDROID = (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Android</title>
    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396" />
  </svg>
);

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;

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
                link={"/"}
                key={project.name}
              />
            ))}
        </Row>
        <Flex.Center style={{ marginTop: "50px" }}>
          <ShowMoreButton href="/">모든 프로젝트 보기</ShowMoreButton>
        </Flex.Center>
      </Container>
    </section>
  );
}
