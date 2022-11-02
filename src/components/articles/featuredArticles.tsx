import React from "react";
import styled from "styled-components";
import { Article } from "./article";
import clsx from "clsx";
import { Flex } from "../flex";
import { ShowMoreButton } from "../buttons/showMore";
import { articles } from "@site/data/article";

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

export function HomepageArticles() {
  return (
    <section>
      <Container className="container">
        <div>
          <div>
            <Title>Featured Articles</Title>
          </div>
        </div>
        <Row>
          {articles.map((e, i) => (
            <Article
              backgroundImage={e.backgroundImage}
              content={e.content}
              link={e.link}
              title={e.title}
              key={i}
            />
          ))}
        </Row>
        <Flex.Center style={{ marginTop: "50px" }}>
          <ShowMoreButton href="https://blog.duckie.team/" target={"_blank"}>
            Medium 에서 더 많은 글 보기
          </ShowMoreButton>
        </Flex.Center>
      </Container>
    </section>
  );
}
