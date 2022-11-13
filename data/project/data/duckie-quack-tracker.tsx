import React from "react";
import { targets } from "../targets";
import { Project } from "../type";

export const projectDuckieQuackTracker: Project = {
  name: "duckie-quack-tracker",
  backgroundImage: require(`@site/static/img/project/project1.png`).default,
  description:
    "사용자가 현재 화면을 얼마나 보고 있고, 어떤 컴포넌트들을 확인하였는지 추적하기 위한 라이브러리 입니다. 서비스 기획에 도움이 될 수 있습니다.",
  iconImage: require(`@site/static/img/project/project1.png`).default,
  tags: ["Library"],
  targets: [targets.android, targets.jetpackCompose],
  link: "/project/duckie-quack-tracker",
  showFeaturedProjects: false,
  repositoryUrl: "https://github.com/duckie-team/duckie-quack-tracker",
  docsUrl: "/docs/duckie-quack-tracker",
  page: {
    api: true,
    readmeUrl:
      "https://raw.githubusercontent.com/duckie-team/duckie-quack-tracker/main/README.md",
  },
};
