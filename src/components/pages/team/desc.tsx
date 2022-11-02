import React, { useState } from "react";
import styled, { css, Keyframes, keyframes } from "styled-components";

const Divver = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 810px) {
    flex-direction: column;
  }
`;
const Title = styled.h2``;
const P = styled.p`
  font-size: 20px;
  color: var(--ifm-color-emphasis-600);
  max-width: 50%;

  @media (max-width: 810px) {
    max-width: 100%;
  }
`;

export function TeamPageDescription() {
  return (
    <section>
      <Divver className="container">
        <Title>덕질로 하나가 된 팀</Title>
        <P>
          각자의 직업과 삶이 있는 다양한 사람들이, "덕질"을 위해 하나로
          뭉쳤어요. 조금 더 나은 덕질을 위해, 조금 더 행복한 덕질을 위해, 덕키
          팀은 열심히 일하고 있습니다!
        </P>
      </Divver>
    </section>
  );
}
