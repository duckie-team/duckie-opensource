import React from "react";
import styled from "styled-components";
import { DuckieIcon } from "../../duckie-icon";

const Container = styled.div`
  margin-top: 96px;
  margin-bottom: 128px;

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
    left: 470px;
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
      left: 240px;
      background-color: #ff8300;
      position: absolute;
    }
  }
`;

const Desc = styled.p`
  color: var(--ifm-color-emphasis-600);
  font-size: 20px;
`;

const Duckie = styled.div`
  width: 256px;
  height: 256px;
  user-select: none;
  @media (max-width: 810px) {
    width: 96px;
    height: 96px;
  }
`;

export function TeamPageHero() {
  return (
    <section>
      <Container className="container">
        <Divver>
          <Duckie>
            <DuckieIcon animation={"wave"} onHover />
          </Duckie>
          <div>
            <Title>
              덕키를
              <br />
              만드는 사람들
            </Title>
            <Desc>덕질에 진심인 사람들, 덕키 팀 😎</Desc>
          </div>
        </Divver>
      </Container>
    </section>
  );
}
