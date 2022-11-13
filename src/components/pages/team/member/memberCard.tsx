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

const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const Tag = styled.div`
  padding: 2px 6px;
  background-color: rgba(239, 138, 51, 0.15);
  color: #ef8a33;
  border-radius: 4px;
  font-size: 14px;
`;

export function Member({
  image,
  name,
  desc,
  role,
}: {
  image: string;
  name: string;
  desc: string;
  role: string[];
}) {
  return (
    <Outer>
      <BackgroundImageOuter>
        <BackgroundImage src={image} />
      </BackgroundImageOuter>
      <Name>{name}</Name>
      <Desc>{desc}</Desc>
      <Tags>
        {role.map((e) => (
          <Tag key={e}>{e}</Tag>
        ))}
      </Tags>
    </Outer>
  );
}
