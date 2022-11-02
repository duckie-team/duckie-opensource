import React, { useEffect, useRef, useState } from "react";
import Layout from "@theme/Layout";
import styled from "styled-components";
import { Ducky } from "@site/src/components/ducky";

import Frame0Image from "../../../static/img/team/성빈 frame.png";

const Divver = styled.div`
  height: calc(100vh - 120px - 48px);
  display: flex;
  position: relative;
  width: 100%;
  overflow-x: hidden;
`;

const Road = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  left: 0;
  bottom: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0),
    var(--ifm-color-emphasis-300)
  );

  @media (max-width: 678px) {
    height: 50px;
  }
`;

const DuckyDivver = styled.div`
  position: absolute;
  bottom: 50px;
  transition: 300ms;

  @media (max-width: 678px) {
    bottom: 0px;
  }
`;

const Frames = styled.div`
  position: absolute;
  bottom: 200px;
  transition: 300ms;
  display: flex;
  align-items: center;
  gap: min(30vw, 300px);

  @media (max-width: 678px) {
    bottom: 150px;
  }
`;

const Frame = styled.div`
  height: min(50vh, 80vw);
  width: min(50vh, 80vw);
  border: solid 1px var(--ifm-color-emphasis-600);
  border-radius: 4px;
  overflow: hidden;
`;

const Debug = styled.div`
  position: fixed;
  left: 32px;
  bottom: 32px;
  background-color: #000000;
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 4px;
`;

export default function Home(): JSX.Element {
  const [pos, setPos] = useState(-10);
  const timer = useRef<NodeJS.Timer>();
  const [isStop, setIsStop] = useState(false);

  useEffect(() => {
    const listener = (e: WheelEvent) => {
      setPos((pos) => pos + (e.deltaY > 0 ? 2 : -2));
    };

    window.addEventListener("wheel", listener);
    return () => {
      window.removeEventListener("wheel", listener);
    };
  }, []);

  const stop = () => {
    setIsStop(true);
    clearInterval(timer.current);
  };

  const play = () => {
    setIsStop(false);
    timer.current = setInterval(() => {
      setPos((e) => e + 1);
    }, 100);
  };

  useEffect(() => {
    play();
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
    <Layout
      title={`about`}
      description="덕질엔 끝이 없다, 취향따라 만나는 커뮤니티, 덕키!"
    >
      <main>
        <Debug>
          pos: {pos}
          <br />
          isStop: {isStop ? "true" : "false"}
        </Debug>
        <Divver onClick={() => (isStop ? play() : stop())}>
          <Road />
          <Frames style={{ left: `${(pos <= 10 ? 0 : -(pos - 10)) * 10}px` }}>
            <Frame>
              <img src={Frame0Image} />
            </Frame>
            <Frame></Frame>
            <Frame></Frame>
            <Frame></Frame>
            <Frame></Frame>
            <Frame></Frame>
          </Frames>
          <DuckyDivver style={{ left: `${pos <= 10 ? pos : 10}vw` }}>
            <Ducky glasses animation="walk" isPause={isStop} />
          </DuckyDivver>
        </Divver>
      </main>
    </Layout>
  );
}
