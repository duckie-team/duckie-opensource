import React from "react";
import { Project, Tag as ProjectTag, Target as ProjectTarget } from "./type";
import { projectQuackQuackAndroid } from "./data/quack-quack-android";

export { Project, ProjectTag, ProjectTarget };

// 새로운 프로젝트가 추가되면 아래에 작성해주세요!
export const projects: Project[] = [projectQuackQuackAndroid];
