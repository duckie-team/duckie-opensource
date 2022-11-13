import React from "react";
import { targets } from "../targets";
import { Project } from "../type";

export const projectDuckiePlayer: Project = {
  name: "DuckiePlayer",
  backgroundImage: require(`@site/static/img/project/project3.png`).default,
  description:
    "안드로이드에서 Jetpack Compose 를 이용하여 영상을 효과적으로 표시하기 위한 라이브러리 입니다.",
  iconImage: require(`@site/static/img/project/project3.png`).default,
  tags: ["Library"],
  targets: [targets.android, targets.jetpackCompose],
  link: "/project/DuckiePlayer",
  showFeaturedProjects: false,
  repositoryUrl: "https://github.com/duckie-team/DuckiePlayer",
  docsUrl: "/docs/DuckiePlayer",
  page: {
    api: true,
    readmeUrl:
      "https://raw.githubusercontent.com/duckie-team/DuckiePlayer/main/README.md",
  },
};
