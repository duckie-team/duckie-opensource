import clsx from "clsx";
import React from "react";
import styled from "styled-components";

const BackgroundImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  transition: 300ms;

  @media (max-width: 1440px) {
    width: 100%;
  }
`;

const Outer = styled.a`
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: 300ms;
  width: 100%;

  &:hover {
    text-decoration: none !important;
    transform: translateY(-4px);

    ${BackgroundImage} {
      transform: scale(1.05);
    }
  }
`;

const BackgroundImageOuter = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 1440px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: var(--ifm-font-color-base);
`;
const Content = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--ifm-color-emphasis-600);
`;
const ViewMore = styled.a`
  text-decoration: underline;
`;

export function Article({
  backgroundImage,
  title,
  content,
  link,
}: {
  backgroundImage: string;
  title: string;
  content: string;
  link: string;
}) {
  return (
    <Outer href={link}>
      <BackgroundImageOuter>
        <BackgroundImage src={backgroundImage} />
      </BackgroundImageOuter>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Outer>
  );
}
