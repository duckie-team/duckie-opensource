import React from "react";
import Article1Image from "../static/img/example.png";

type Article = {
  title: string;
  content: string;
  link: string;
  backgroundImage: string;
};

export const articles: Article[] = [
  {
    title: "QuackQuack의 최고의 Performance를 위해",
    content:
      "덕키팀은 오픈소스의 유연성, 간결성, 성능을 보장하기 위해 끊임없이 소통하고 논의하는 시간을 가졌습니다. 특히, 코드 리뷰를 통해 OOP 설계를 더 좋은 방향으로 바로 잡고, 아주 조금이라도 앱 퍼포먼스에 부정적인 영향을 끼치는 코드를 개선하려고 하였습니다.",
    link: "https://blog.duckie.team/quack-quack%EC%9D%98-%EC%B5%9C%EA%B3%A0%EC%9D%98-performance%EB%A5%BC-%EC%9C%84%ED%95%B4-ad54421715bc",
    backgroundImage: "https://miro.medium.com/max/720/0*ZdH6gUgQ6uLR7FQx",
  },
  {
    title: "Goodbye AAC ViewModel, Hello ViewModel!",
    content:
      "안드로이드 개발은 그동안 AAC ViewModel 을 필수로 사용해 왔습니다. 하지만 Jetpack Compose 가 등장함으로 AAC ViewModel 은 더 이상 필요 없다는 사실을 아셨나요? 덕키팀은 AAC ViewModel 을 제거하는 새로운 아키텍처를 도전합니다.",
    link: "https://blog.duckie.team/aac-viewmodel-is-deprecated-bff2dfb09438",
    backgroundImage:
      "https://miro.medium.com/max/720/1*w57OBFO7pcA4StZGuiSPfw.jpeg",
  },
  {
    title: "덕키팀에서 Custom Lint를 만드는 여정",
    content:
      "덕키팀은 협업의 코드 품질을 위해 덕키팀만의 코드 스타일을 정의하고 이를 Android Studio 의 린트로 개발하였습니다. 덕키팀만의 린트를 만드는 과정을 소개합니다.",
    link: "https://blog.duckie.team/team-duckie%EC%97%90%EC%84%9C-custom-lint%EB%A5%BC-%EB%A7%8C%EB%93%9C%EB%8A%94-%EC%97%AC%EC%A0%95-a7ecca72a32f",
    backgroundImage:
      "https://miro.medium.com/max/720/1*bd3TGvzWvK2XII3tDuUsTw.png",
  },
];
