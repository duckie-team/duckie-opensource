import React from "react";
import { targets } from "../targets";
import { Project } from "../type";

export const projectComposableFunctionReferenceErrorSuppressor: Project = {
  name: "composable-function-reference-error-suppressor",
  backgroundImage: require(`@site/static/img/project/project1.png`).default,
  description:
    "Composable 함수를 레퍼런스 참조하게 되면 발생하는 `COMPOSABLE_FUNCTION_REFERENCE` 에러를 억제시키는 코틀린 컴파일러 플러그인 입니다. Composable 함수에 리플렉션이 필요할 때 사용할 수 있습니다.",
  iconImage: require(`@site/static/img/project/project1.png`).default,
  tags: ["Compiler Plugin"],
  targets: [targets.kotlin, targets.jetpackCompose],
  link: "/project/composable-function-reference-error-suppressor",
  showFeaturedProjects: true,
  repositoryUrl:
    "https://github.com/duckie-team/composable-function-reference-error-suppressor",
  docsUrl: "/docs/composable-function-reference-error-suppressor",
  page: {
    api: true,
    readmeUrl:
      "https://raw.githubusercontent.com/duckie-team/composable-function-reference-error-suppressor/main/README.md",
  },
};
