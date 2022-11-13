import React from "react";
import { targets } from "../targets";
import { Project } from "../type";

export const projectDuckieOpensource: Project = {
  name: "duckie-opensource",
  backgroundImage: require(`@site/static/img/project/project3.png`).default,
  description: "덕키의 프로젝트들을 오픈소스로 공개합니다!",
  iconImage: require(`@site/static/img/project/project3.png`).default,
  tags: ["Web"],
  targets: [targets.react],
  link: "/project/duckie-opensource",
  showFeaturedProjects: true,
  repositoryUrl: "https://github.com/duckie-team/duckie-opensource",
  docsUrl: "/docs/duckie-opensource",
  page: {
    api: true,
    readmeUrl:
      "https://raw.githubusercontent.com/duckie-team/duckie-opensource/main/README.md",
  },
};
