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
    title: "Focus Why!",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>궁금한 것을 못 참고, 원리와 이해를 바탕으로 개발하기 위해 노력합니다.</>
    ),
  },
  {
    title: "Develop with UI/UX",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>사용자의 편의성과 UI/UX를 기반으로 개발하려고 합니다.</>,
  },
  {
    title: "Powered by teamwork",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        좋은 성과는 함께 만들어나가는 것이라 생각하며, 협업 과정에서의 합리적인
        대화를 지향합니다.
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
