import React from "react";
import clsx from "clsx";
// import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
// import styles from "./index.module.css";
import "../css/custom.css";
import Link from "@docusaurus/Link";

// function HomepageHeader() {
//   const { siteConfig } = useDocusaurusContext();

//   return (
//     <header className={clsx("hero hero--primary", styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//       </div>
//     </header>
//   );
// }

function Avatar() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className="avatarContainer">
      <div className="mainAvatar"></div>
      <div className="avatarName">
        <span>June</span>
      </div>
      <div className="moveToBlogBtn">
        <Link className="blogLink" to="/Blog">
          MOVE TO BLOG
        </Link>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`June ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      {/* <HomepageHeader /> */}
      <Avatar></Avatar>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
