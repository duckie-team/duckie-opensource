import { members } from "@site/data/member";
import { Flex } from "@site/src/components/flex";
import React from "react";
import styled from "styled-components";
import { Member } from "./memberCard";

const Container = styled.div`
  margin-top: 96px;

  @media (max-width: 810px) {
    margin-top: 36px;
  }
`;

const Title = styled.h2``;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
  row-gap: 48px;

  @media (max-width: 996px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 678px) {
    grid-template-columns: 1fr;
  }
`;

export function TeamPageMember() {
  return (
    <section>
      <Container className="container">
        <Flex.Column gap="80px">
          <Flex.Column>
            <Title>Duckie 팀원</Title>
            <Row>
              {members
                .filter((e) => !e.isSpecialThanks)
                .map((e) => (
                  <Member
                    desc={e.desc}
                    image={e.image}
                    name={e.name}
                    role={e.role}
                  />
                ))}
            </Row>
          </Flex.Column>

          <Flex.Column>
            <Title>Special Thanks</Title>
            <Row>
              {members
                .filter((e) => e.isSpecialThanks)
                .map((e) => (
                  <Member
                    desc={e.desc}
                    image={e.image}
                    name={e.name}
                    role={e.role}
                  />
                ))}
            </Row>
          </Flex.Column>
        </Flex.Column>
      </Container>
    </section>
  );
}
