import React from "react";
import styled from "styled-components";
import { Flex } from "@site/src/components/flex";
import { ToolTip } from "../tooltip";
import { ProjectTarget } from "@site/data/project";

const Image = styled.img`
  width: 96px;
  height: 96px;
  object-fit: cover;
  border-radius: 8px;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 28px;
  margin-bottom: 4px;
`;

const Description = styled.p`
  margin-bottom: 0px;
  color: var(--ifm-color-emphasis-600);
  font-size: 16px;
`;

const Icon = styled.div`
  border-radius: 4px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
    fill: var(--ifm-color-emphasis-500);
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export function ProjectHeader({
  description,
  iconImage,
  title,
  targets,
}: {
  title: string;
  description: string;
  iconImage: string;
  targets: ProjectTarget[];
}) {
  return (
    <Flex.Row gap="16px">
      <Image src={iconImage} />
      <Flex.Column>
        <Flex.Row gap="12px">
          <Title>{title}</Title>
          <Icons>
            {targets.map((e, i) => (
              <ToolTip text={e.name} key={i}>
                <Icon>{e.icon}</Icon>
              </ToolTip>
            ))}
          </Icons>
        </Flex.Row>
        <Description>{description}</Description>
      </Flex.Column>
    </Flex.Row>
  );
}
