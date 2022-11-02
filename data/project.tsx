import React from "react";
import Project1Img from "../static/img/example.png";

const CI_ANDROID = (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Android</title>
    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396" />
  </svg>
);

type ProjectTags = "Design System" | "Code Style" | "UX Writing";

const targets = {
  android: {
    icon: CI_ANDROID,
    name: "android",
  },
};

type Project = {
  // 프로젝트 이름(레포지토리)
  name: string;

  // 프로젝트 아이콘
  iconImage: string;

  // 프로젝트 배경 이미지
  backgroundImage: string;

  /**
   * 메인 페이지에서는 일정 길이가 넘어가면 알아서 ... 처리가 됩니다.
   */
  description: string;

  /**
   * 오픈소스 태그입니다. 메인페이지 노출과 태그로 프로젝트 보기를 할 때 사용됩니다.
   * 디스플레이 용이 아닌 url과 같이 내부적으로 처리할 때는 "대소문자를 가리지 않고", "띄어쓰기를 -로 치환해서" 사용합니다.
   * 즉 화면에는 "Design System"으로 표시되나 url에서는 'design-system'으로 사용됩니다.
   * 만약 'design-system'으로 처리되는 태그가 여러 종류가 되버리는 경우, 정상적인 작동을 보장하지 않으니, "대소문자"와 "띄어쓰기"를 하나로 통합해주세요!
   * 이를 위해 ProjectTags 타입을 만들었습니다. 프로젝트를 추가할 때는 이 타입에 있는 문자열만 가능하니, 새로운 태그를 추가할 때는 위 타입을 먼저 수정해주세요! (본 파일 맨 상단에 있습니다)
   */
  tags: ProjectTags[];

  /**
   * 해당 오픈소스의 대상(언어, 플랫폼, 런타임 등)입니다. icon에는 React.Node나 svg 파일이 들어갈 수 있습니다.
   * 다른 아이콘을 사용할 수 있겠지만, 가장 권장하는 방법은 https://simpleicons.org/ 에서 svg를 복사한 후
   * 아래 사례처럼 사용하는 것입니다.
   * name의 경우 tooltip과 링크를 위해 있는 기능입니다.
   * 이를 위해 미리 targets 변수를 만들었습니다. targets에 해당 타깃이 있는 경우 targets.android 형태로 적으시면 됩니다.
   */
  target: {
    name: string;
    icon: React.ReactNode | string;
  }[];

  // 링크
  link: string;

  // 랜딩 페이지(/)에 표시
  showFeaturedProjects: boolean;
};

/**
 * 아래 내용을 수정하고 배포하면 프로젝트 전체에 반영됩니다. 아래 주의사항을 잘 읽어주세요!
 *
 * 1. 오브젝트의 '키'와 속성중 'name'은 반드시 동일한 값이어야 합니다.
 * 2. 메인화면에 표시할 수 있는 프로젝트의 수는 "무제한"입니다. (디자인도 적용 되어 있습니다.) 3개로 제한하실려면 직접 3개만 제한하셔야 합니다.
 */
export const projects: {
  [key: string]: Project;
} = {
  "quack-quack": {
    name: "quack-quack",
    backgroundImage: Project1Img,
    description:
      "덕키의 디자인 시스템과 덕키팀에서 사용하는 코드규칙을 코드 린트로 제공하는 라이브러리 입니다. 꽥꽥은 대부분의 컴포넌트를 Hug Content 로 설계하여 다양한 화면 밀도에도 뭉개짐 없이 작동하도록..",
    iconImage: Project1Img,
    tags: ["Design System", "Code Style", "UX Writing"],
    target: [targets.android],
    link: "/",
    showFeaturedProjects: true,
  },
  "quack-quack-1": {
    name: "quack-quack-1",
    backgroundImage: Project1Img,
    description:
      "덕키의 디자인 시스템과 덕키팀에서 사용하는 코드규칙을 코드 린트로 제공하는 라이브러리 입니다. 꽥꽥은 대부분의 컴포넌트를 Hug Content 로 설계하여 다양한 화면 밀도에도 뭉개짐 없이 작동하도록..",
    iconImage: Project1Img,
    tags: ["Design System", "Code Style", "UX Writing"],
    target: [targets.android],
    link: "/",
    showFeaturedProjects: true,
  },
  "quack-quack-2": {
    name: "quack-quack-2",
    backgroundImage: Project1Img,
    description:
      "덕키의 디자인 시스템과 덕키팀에서 사용하는 코드규칙을 코드 린트로 제공하는 라이브러리 입니다. 꽥꽥은 대부분의 컴포넌트를 Hug Content 로 설계하여 다양한 화면 밀도에도 뭉개짐 없이 작동하도록..",
    iconImage: Project1Img,
    tags: ["Design System", "Code Style", "UX Writing"],
    target: [targets.android],
    link: "/",
    showFeaturedProjects: true,
  },
};
