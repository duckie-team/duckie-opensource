import React from "react";
import { targets } from "../targets";
import { Project } from "../type";

export const projectPaginationList: Project = {
  name: "PaginationList",
  backgroundImage: require(`@site/static/img/project/project3.png`).default,
  description:
    "여러 내용들을 반복하여 순차적으로 가져오기 위한 라이브러리 입니다. Android Jetpack 의 Paging 과 유사하며, Paging 보다 쉽고 간결한 API 제공을 위해 개발됩니다.",
  iconImage: require(`@site/static/img/project/project3.png`).default,
  tags: ["Library"],
  targets: [targets.android, targets.jetpackCompose],
  link: "/project/PaginationList",
  showFeaturedProjects: false,
  repositoryUrl: "https://github.com/duckie-team/PaginationList",
  docsUrl: "/docs/PaginationList",
  page: {
    api: true,
    readmeUrl:
      "https://raw.githubusercontent.com/duckie-team/PaginationList/main/README.md",
  },
};
