import React, { Suspense } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import MultiComGraph from "@site/src/components/MultiComGraph";
import ParallelContent from "@site/src/components/Parallel/ParallelContent";
import ParallelModels from "@site/src/components/Parallel/ParallelModels";
import BannerHome from "@site/src/components/BannerHome";

import styles from "./index.module.css";
import layouts from "@site/src/css/layouts.scss";
import { Canvas } from "@react-three/fiber";
import { Model } from "../components/ThreeModels/Jerry_robot";
import { OrbitControls } from "@react-three/drei";
import ModelViewer from "../components/ThreeModels/ModelViewer";
import Phone from "../components/ThreeModels/Phone";
import GltfModel from "../components/ThreeModels/GltfModel";
import Jerry from "../components/ThreeModels/Jerry";
import ParallelPhone from "../components/Parallel/ParallelPhone";
import CommunityNetwork from "../components/CommunityNetwork";
import Store from "../components/Store";
import CodeExample from "../components/CodeExample";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

/* export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
} */
export default function Home() {
  // const [cookies, setCookie, removeCookie] = useCookies(['allow_cookies']);
  // const BannerHome = dynamic(() => import('../components/banner-home'))
  return (
    <Layout title="Home" description="home">
      <>
        <BannerHome />
        <main className={styles.main} style={{ marginTop: "120px" }}>
          <ParallelModels side={'left'} media_height={600} media_width={600} position={[10, 5, 5]}>
            <Jerry position={[0, 0, 0]} />
            <div>
              <h2>This is Jerry.</h2>

              <p>A robot made with <span style={{ color: 'red' }}>❤️</span> by our team, like a thousands of others made by you.</p>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p>But once you've built this amazing machine, how to interact with him, communicate remotely, monitor useful constants and observe what he's recording?</p>
            </div>
          </ParallelModels>
          <ParallelPhone />
          <MultiComGraph />
          <CommunityNetwork />
          <Store />
          <CodeExample language={"python"} />
        </main>
        {/*
      <ImportantInfo>
        <div id={"news"} className={styles.news}>
          <div>
            <h3>Prochaines mises à jour</h3>
            <p>
              Interagis avec tes constructions, grace aux télécommandes
              personnalisables et plus de 20 widgets au choix.{" "}
            </p>
          </div>
          <Image
            src={"/images/controller_news.png"}
            priority={false}
            width={1906}
            height={840}
            alt={"New features"}
            title={
              "Dopy Robot Controlling, &lt;https://creativecommons.org/licenses/by-nc/4.0/&gt; Creative Commons Mathis Lecomte"
            }
          />
        </div>
      </ImportantInfo>
      */}
      </>
    </Layout>
  );
}
