import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "유연성",
    Svg: require("@site/static/img/index_icon_1.svg").default,
    description: (
      <>
        덕키 팀은 오픈소스 생태계를 존중합니다. 따라서 Duckie 제품이 아닌 모든
        제품에서도 활용될 수 있게 설계합니다.
      </>
    ),
  },
  {
    title: "간결성",
    Svg: require("@site/static/img/index_icon_2.svg").default,
    description: (
      <>
        최소한의 부분만 노출시켜 불필요한 설정 없이 쉽고 간편하게 커스터마이징
        할 수 있게 설계합니다.
      </>
    ),
  },
  {
    title: "성능",
    Svg: require("@site/static/img/index_icon_3.svg").default,
    description: (
      <>
        덕키 팀은 성능을 가장 중요시 합니다. 쉽고 간편한 사용성뿐만 아니라
        최상의 성능을 발휘할 수 있도록 설계합니다.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
