import Member성빈 from "../static/img/team/성빈 frame.png";
import MemberEvergreen from "../static/img/team/evergreen frame.png";
import MemberDoro from "../static/img/team/doro frame.png";
import Member혀느현스 from "../static/img/team/혀느현스 frame.png";
import Member세현 from "../static/img/team/세현 frame.png";
import Member상우 from "../static/img/team/상우 frame.png";
import Placeholder from "../static/img/team/placeholder.png";

type Member = {
  name: string;
  image: string;
  desc: string;
  link?: string;
};

export const members: Member[] = [
  {
    name: "성빈",
    image: Member성빈,
    desc: "android engineer since 2015 / deep diver / documentationer",
  },
  {
    name: "Evergreen",
    image: MemberEvergreen,
    desc: "녹색 안드로이드 개발자 최상록 입니다",
  },
  {
    name: "doro",
    image: MemberDoro,
    desc: "열심히 살지 말자",
  },
  {
    name: "혀느현스",
    image: Member혀느현스,
    desc: "고등학생 개발자",
  },
  {
    name: "세현",
    image: Member세현,
    desc: "Development for everyone's convenience",
  },
  {
    name: "상우",
    image: Member상우,
    desc: "0_k",
  },
  {
    name: "혜진",
    image: Placeholder,
    desc: "",
  },
  {
    name: "희선",
    image: Placeholder,
    desc: "",
  },
];
