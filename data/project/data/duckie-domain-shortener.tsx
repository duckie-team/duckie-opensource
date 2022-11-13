import React from "react";
import { targets } from "../targets";
import { Project } from "../type";

export const projectDuckieDomainShortener: Project = {
  name: "duckie-domain-shortener",
  backgroundImage: require(`@site/static/img/project/project2.png`).default,
  description:
    "“link.duckie.team” 단축 링크 생성을 위한 JVM 라이브러리 입니다. 긴 주소를 짧은 주소로 단축할때와, 클릭 통계를 낼 때 유용하게 쓰일 수 있습니다.",
  iconImage: require(`@site/static/img/project/project2.png`).default,
  tags: ["Library"],
  targets: [targets.android, targets.jetpackCompose],
  link: "/project/duckie-domain-shortener",
  showFeaturedProjects: false,
  repositoryUrl: "https://github.com/duckie-team/duckie-domain-shortener",
  docsUrl: "/docs/duckie-domain-shortener",
  page: {
    api: true,
    readmeUrl:
      "https://raw.githubusercontent.com/duckie-team/duckie-domain-shortener/main/README.md",
  },
};
