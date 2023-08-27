import Member성빈 from "../static/img/team/성빈 frame.png";
import MemberEvergreen from "../static/img/team/evergreen frame.png";
import MemberDoro from "../static/img/team/doro frame.png";
import Member혀느현스 from "../static/img/team/혀느현스 frame.png";
import Member세현 from "../static/img/team/세현 frame.jpg";
import Member상우 from "../static/img/team/상우 frame.png";
import Member혜진 from "../static/img/team/혜진 frame.png";
import Member이재웅 from "../static/img/team/이재웅 frame.jpg";
import Member서정원 from "../static/img/team/서정원 frame.jpg";
import Member현경 from "../static/img/team/현경 frame.JPG";
import Placeholder from "../static/img/team/placeholder.png";
import {Member} from "@site/src/components/pages/team/member/memberCard";

type Member = {
  name: string;
  image: string;
  desc: string;
  link?: string;
  role: string[];
  isSpecialThanks?: boolean;
};

export const members: Member[] = [
  {
    name: "김혜진",
    image: Member혜진,
    desc: "사용자의 목소리에 집중하는 불편수집가, 주니어 프로덕트 디자이너 김혜진입니다 :)",
    role: ["Product Designer"],
  },
  {
    name: "Evergreen",
    image: MemberEvergreen,
    desc: "녹색 안드로이드 개발자 최상록 입니다",
    role: ["Android"],
  },
  {
    name: "ricky_0_k",
    image: Member상우,
    desc: "사람들과 어우러져 valuable 한 가치를 만들고 싶어하는 안드로이드 개발자입니다",
    role: ["Android"],
  },
  {
    name: "임세현",
    image: Member세현,
    desc: "열정으로 일하는 개발자 임세현입니다 🔥",
    role: ["Android"],
  },
  {
    name: "doro",
    image: MemberDoro,
    desc: "열심히 살지 말자",
    role: ["PM", "iOS", "Backend"],
  },
  {
    name: "이재웅",
    image: Member이재웅,
    desc: "코드 한 줄 쓸 때마다 기도하는 개발자 이재웅입니다.",
    role: ["Backend"],
  },
  {
    name: "이현경",
    image: Member현경,
    desc: '만능 해결사를 꿈꾸는 주니어 기획자',
    role: ["Product Owner"],
  },
  {
    name: "혀느현스",
    image: Member혀느현스,
    desc: "고등학생 개발자 🔭",
    role: ["Web", "Backend"],
    isSpecialThanks: true,
  },
  {
    name: "서정원",
    image: Member서정원,
    desc: "정원입니다",
    role: ["Backend"],
    isSpecialThanks: true,
  },
  {
    name: "희선",
    image: Placeholder,
    desc: "",
    isSpecialThanks: true,
    role: ["Web design"],
  },
  {
    name: "성빈",
    image: Member성빈,
    desc: "덕키의 디자인 시스템 “꽥꽥“을 개발합니다. 꽥꽥을 사용하는 개발자와, 꽥꽥으로 덕키를 마주할 사용자에게 항상 최고의 경험을 제공하기 위해 끊임없이 고민하고 도전합니다.",
    role: ["Android", "Design System Eng"],
    isSpecialThanks: true
  },
];
