import React from "react";
import styled from "styled-components";
import { Article } from "./article";
import DocusaurusImageUrl from "../../../static/img/example.png";
import clsx from "clsx";
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
          <Article
            backgroundImage={DocusaurusImageUrl}
            content="덕키팀은 오픈소스의 유연성, 간결성, 성능을 보장하기 위해 끊임없이 소통하고 논의하는 시간을 가졌습니다. 특히, 코드 리뷰를 통해 OOP 설계를 더 좋은 방향으로 바로 잡고, 아주 조금이라도 앱 퍼포먼스에 부정적인 영향을 끼치는 코드를 개선하려고 하였습니다."
            link="/"
            title="QuackQuack의 최고의 Performance를 위해"
          />
          <Article
            backgroundImage={DocusaurusImageUrl}
            content="덕키팀은 오픈소스의 유연성, 간결성, 성능을 보장하기 위해 끊임없이 소통하고 논의하는 시간을 가졌습니다. 특히, 코드 리뷰를 통해 OOP 설계를 더 좋은 방향으로 바로 잡고, 아주 조금이라도 앱 퍼포먼스에 부정적인 영향을 끼치는 코드를 개선하려고 하였습니다."
            link="/"
            title="QuackQuack의 최고의 Performance를 위해"
          />
          <Article
            backgroundImage={DocusaurusImageUrl}
            content="덕키팀은 오픈소스의 유연성, 간결성, 성능을 보장하기 위해 끊임없이 소통하고 논의하는 시간을 가졌습니다. 특히, 코드 리뷰를 통해 OOP 설계를 더 좋은 방향으로 바로 잡고, 아주 조금이라도 앱 퍼포먼스에 부정적인 영향을 끼치는 코드를 개선하려고 하였습니다."
            link="/"
            title="QuackQuack의 최고의 Performance를 위해"
          />
        </Row>
        <Flex.Center style={{ marginTop: "50px" }}>
          <ShowMoreButton href="/">미디움에서 더 많은 글 보기</ShowMoreButton>
        </Flex.Center>
      </Container>
    </section>
  );
}
