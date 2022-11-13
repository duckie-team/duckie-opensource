import React from "react";
import { targets } from "../targets";
import { Project } from "../type";

export const projectGfmDsl: Project = {
  name: "GfmDsl",
  backgroundImage: require(`@site/static/img/project/project2.png`).default,
  description:
    "코틀린의 DSL 속성을 이용한 Github Flavored Markdown 빌더입니다. 동적으로 Markdown 컨텐츠 생성이 필요할 때 사용할 수 있습니다",
  iconImage: require(`@site/static/img/project/project2.png`).default,
  tags: ["Library"],
  targets: [targets.kotlin],
  link: "/project/GfmDsl",
  showFeaturedProjects: false,
  repositoryUrl: "https://github.com/duckie-team/GfmDsl",
  docsUrl: "/docs/GfmDsl",
  page: {
    api: true,
    readmeUrl:
      "https://raw.githubusercontent.com/duckie-team/GfmDsl/master/README.md",
  },
};
