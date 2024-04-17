import React, { Suspense } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import MultiComGraph from "@site/src/components/MultiComGraph";
import ParallelContent from "@site/src/components/ParallelContent";
import BannerHome from "@site/src/components/BannerHome";

import styles from "./index.module.css";
import layouts from "@site/src/css/layouts.scss";
import { Canvas } from "@react-three/fiber";
import { Model } from "../components/ThreeModels/Jerry_robot";
import { OrbitControls } from "@react-three/drei";
import ModelViewer from "../components/ThreeModels/ModelViewer";

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
        {/*<BannerHome />*/}
        {/*<Banner/>*/}
        <ModelViewer scale="1" modelPath={"/models/jerry_robot-web.glb"} />
        <main className={styles.main} style={{ marginTop: "120px" }}>
          <MultiComGraph />
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
        <section id={"stores"} className="childWrapperL">
          <h3 className={styles.storesTitle}>Retrouve CODDE Pi sur le store</h3>
          <div className={styles.stores}>
            {/*<Store */}
            {/*title="Google LLC, Public domain, attraverso Wikimedia Commons" */}
            {/*href="https://commons.wikimedia.org/wiki/File:Google_Play_Arrow_logo.svg" */}
            {/*src={'https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg'}>*/}
            {/*    /!*<strong>Google PLay Store</strong><br/> (Décembre 2021)*!/*/}
            {/*</Store>*/}
            <a href="https://play.google.com/store/apps/details?id=com.wdm.dopy&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
              <img
                /*width={150} height={150}*/
                height={150}
                width={387}
                alt="Disponible sur Google Play"
                src="https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png"
              />
            </a>
            {/*<Store
                        title="Font Awesome Free 5.4.1 by @fontawesome - https://fontawesome.com, CC BY 4.0 <https://creativecommons.org/licenses/by/4.0>, via Wikimedia Commons"
                        href="https://commons.wikimedia.org/wiki/File:Font_Awesome_5_brands_app-store-ios.svg"
                        src={'https://upload.wikimedia.org/wikipedia/commons/2/26/Font_Awesome_5_brands_app-store-ios.svg'}
                        invert>
                        <strong>App Store</strong><br/> (Janvier 2021)
                    </Store>*/}
            <div className={styles.stores}>
              <p>App Store (soon)</p>
            </div>
          </div>
          {/*<p className={styles.storeDateDispo}>Disponible en Décembre 2021</p>*/}
        </section>
      </>
    </Layout>
  );
}
