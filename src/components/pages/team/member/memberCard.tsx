import clsx from "clsx";
import React from "react";
import styled from "styled-components";

const BackgroundImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 8px;
  transition: 300ms;
  user-select: none;

  @media (max-width: 1440px) {
    width: 100%;
  }
`;

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: 300ms;
  width: 100%;
`;

const BackgroundImageOuter = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 1440px) {
    width: 100%;
  }
`;

const Name = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: var(--ifm-font-color-base);
  margin-top: 16px;
`;
const Desc = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--ifm-color-emphasis-600);
`;

export function Member({
  image,
  name,
  desc,
}: {
  image: string;
  name: string;
  desc: string;
}) {
  return (
    <Outer>
      <BackgroundImageOuter>
        <BackgroundImage src={image} />
      </BackgroundImageOuter>
      <Name>{name}</Name>
      <Desc>{desc}</Desc>
    </Outer>
  );
}
