# duckie-opensource

Duckie Open-Source Project

> **Note**: 현재 페이지 개발 중입니다. 임시로 덕키 오픈소스 리스트를 표시합니다.

---

## [QuackQuack](https://github.com/duckie-team/quack-quack)

분야: Design System, Code Style, UX Writing  
도구: Android, Jetpack Compose, React

덕키의 디자인 시스템과 덕키팀에서 사용하는 코드 규칙을 
코드 린트로 제공하는 라이브러리 입니다. 꽥꽥은 대부분의
컴포넌트를 hug content 로 설계하여 다양한 화면 밀도에도
뭉개짐 없이 작동하도록 하는 것을 1순위로 생각하며 만들고
있습니다. 

덕키팀은 UX Writing 또한 중요하게 생각합니다. 꽥꽥이는
서비스의 UX Writing 이 덕키의 writing 가이드에 맞게 잘
이루어졌는지 검사하여 오버레이 형식으로 표시하는 기능도
가지고 있습니다. 이 역시 오픈소스이므로 자신의 프로젝트에 맞게
writing 규칙을 조정하여 사용할 수 있습니다.

메인으로 Android 를 지원하며 디자인 시스템만은 Web 도 지원합니다.

## [PaginationList](https://github.com/duckie-team/PaginationList)

분야: Library  
도구: Android, Jetpack Compose

여러 내용들을 반복하여 순차적으로 가져오기 위한 라이브러리 입니다.
Android Jetpack 의 Paging 과 유사하며, Paging 보다 쉽고 간결한 API 제공을 위해 개발됩니다.

## [composable-function-reference-error-suppressor](https://github.com/duckie-team/composable-function-reference-diagnostic-suppressor)

분야: Plugin  
도구: Kotlin Compiler, Jetpack Compose

Composable 함수를 레퍼런스 참조하게 되면 발생하는 `COMPOSABLE_FUNCTION_REFERENCE` 에러를 억제시키는 코틀린 컴파일러 플러그인 입니다.
Composable 함수에 리플렉션이 필요할 때 사용할 수 있습니다.

### [quack-tracker](https://github.com/duckie-team/quack-tracker)

분야: Library  
도구: Android, Jetpack Compose

사용자가 현재 화면을 얼마나 보고 있고, 어떤 컴포넌트들을 확인하였는지 추적하기 위한 라이브러리 입니다.
서비스 기획에 도움이 될 수 있습니다.

### [DuckiePlayer](https://github.com/duckie-team/DuckiePlayer)

분야: Library  
도구: Android, Jetpack Compose

안드로이드에서 Jetpack Compose 를 이용하여 영상을 효과적으로
표시하기 위한 라이브러리 입니다.

### [GfmDsl](https://github.com/duckie-team/GfmDsl)

분야: Library  
도구: Kotlin

코틀린의 DSL 속성을 이용한 Github Flavored Markdown 빌더입니다.
동적으로 Markdown 컨텐츠 생성이 필요할 때 사용할 수 있습니다.

### [duckie-domain-shortener](https://github.com/duckie-team/duckie-domain-shortener)

분야: Library  
도구: URL

“link.duckie.team” 단축 링크 생성을 위한 JVM 라이브러리 입니다. 
긴 주소를 짧은 주소로 단축할때와, 클릭 통계를 낼 때 유용하게 쓰일 수 있습니다.
