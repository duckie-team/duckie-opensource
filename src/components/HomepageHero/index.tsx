import React from "react";
import styled from "styled-components";
import { Flex } from "../flex";
import DuckieImage from "../../../static/img/dos_logo.png";

const Container = styled.div`
  margin-top: 96px;

  @media (max-width: 810px) {
    margin-top: 36px;
  }
`;

const Divver = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media (max-width: 810px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  display: block;
  position: relative;
  font-weight: 600;
  font-size: 80px;
  font-family: "Spoqa Han Sans Neo", "sans-serif";

  &::after {
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 8px;
    bottom: 80px;
    left: 520px;
    background-color: #ff8300;
    position: absolute;
  }

  @media (max-width: 810px) {
    font-size: 40px;
    &::after {
      content: "";
      width: 8px;
      height: 8px;
      border-radius: 8px;
      bottom: 40px;
      left: 260px;
      background-color: #ff8300;
      position: absolute;
    }
  }
`;

const Desc = styled.p`
  color: var(--ifm-color-emphasis-600);
  font-size: 14px;
`;

const Duckie = styled.img`
  width: 256px;
  height: 256px;
  user-select: none;
  @media (max-width: 810px) {
    width: 96px;
    height: 96px;
  }
`;

export function HomepageHero() {
  return (
    <section>
      <Container className="container">
        <Divver>
          <div>
            <Duckie src={DuckieImage} />
          </div>
          <div>
            <Title>
              Duckie
              <br />
              Open Source
            </Title>
            <Desc>
              덕키는 개발의 편의를 위해 개발된 모든 제품을 오픈소스로
              공개합니다.
            </Desc>
          </div>
        </Divver>
      </Container>
    </section>
  );
}
