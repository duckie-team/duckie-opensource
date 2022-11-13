import React from "react";
import { targets } from "../targets";
import { Project } from "../type";

export const projectQuackQuackAndroid: Project = {
  name: "quack-quack-android",
  backgroundImage: require(`@site/static/img/project/project1.png`).default,
  description:
    "덕키의 디자인 시스템과 덕키팀에서 사용하는 코드규칙을 코드 린트로 제공합니다",
  iconImage: require(`@site/static/img/project/project1.png`).default,
  tags: ["Design System", "Code Style", "UX Writing"],
  targets: [targets.android, targets.jetpackCompose],
  link: "/project/quack-quack-android",
  showFeaturedProjects: true,
  repositoryUrl: "https://github.com/duckie-team/quack-quack-android",
  docsUrl: "/docs/quack-quack-android",
  page: {
    api: true,
    readmeUrl:
      "https://raw.githubusercontent.com/duckie-team/quack-quack-android/master/README.md",
  },
};
