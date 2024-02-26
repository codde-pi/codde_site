import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import ParallelContent from "@site/src/components/ParallelContent";
import BannerHome from "@site/src/components/BannerHome";

import styles from "./index.module.css";
import layouts from "@site/src/css/layouts.scss";

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
        {/*<Banner/>*/}
        <main className={styles.main} style={{ marginTop: "120px" }}>
          <ParallelContent
            side={"left"}
            alt={"dopy app phone demo"}
            src={"/videos/dopy_phone_demo_000.webm"}
            media_height={810}
            media_width={600}
          >
            <h3>Libère le potentiel de ton mobile</h3>

            <p>
              Plus besoin de faire souffler les ventilos de ta machine de
              guerre, tout ce dont tu as besoin est dans le creux de ta main.{" "}
            </p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p>
              Connecte-toi en SSH, SFTP et affiche toutes les stats de ta
              machine à travers une interface graphique simple.{" "}
            </p>
          </ParallelContent>
          <ParallelContent
            side={"right"}
            alt={"dopy app wide screen demo"}
            src={"/videos/dopy_tablet_demo_000_v2.webm"}
            media_width={700}
            media_height={600}
          >
            <h3>Vois les choses en grand</h3>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p>Et si ta tablette pouvait enfin te servir à quelque chose ? </p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Retrouve toutes les options de ton mobile sur grand écran, et
            profite à 100% de fonctionnalités telles que l&apos;environnement de
            bureau virtuel (VNC), la documentation interactive et le tableau de
            bord.
          </ParallelContent>
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
