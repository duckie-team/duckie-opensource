import React from "react";
import { Project, Tag as ProjectTag, Target as ProjectTarget } from "./type";
import { projectQuackQuackAndroid } from "./data/quack-quack-android";
import { projectPaginationList } from "./data/pagination-list";
import { projectDuckieQuackTracker } from "./data/duckie-quack-tracker";
import { projectDuckiePlayer } from "./data/duckie-player";
import { projectGfmDsl } from "./data/gfm-dsl";
import { projectComposableFunctionReferenceErrorSuppressor } from "./data/composable-function-reference-error-suppressor";
import { projectDuckieDomainShortener } from "./data/duckie-domain-shortener";
import { projectDuckieOpensource } from "./data/duckie-opensource";

export { Project, ProjectTag, ProjectTarget };

// 새로운 프로젝트가 추가되면 아래에 작성해주세요!
export const projects: Project[] = [
  projectQuackQuackAndroid,
  projectPaginationList,
  projectDuckieQuackTracker,
  projectDuckiePlayer,
  projectGfmDsl,
  projectComposableFunctionReferenceErrorSuppressor,
  projectDuckieDomainShortener,
  projectDuckieOpensource,
];
