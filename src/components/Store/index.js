import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.scss";
import layouts from "@site/src/css/layouts.module.scss";
import PlayStore from "@site/static/img/play_store.svg";

export default function Store() {
  const { siteConfig } = useDocusaurusContext();
  return <section id={"stores"} className={layouts.alternateSection}>
    <h2 className={styles.storesTitle}>Download {siteConfig.title}</h2>
    <div className={styles.storeLayout}>
      <a href="https://play.google.com/store/apps/details?id=com.wdm.dopy&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
        <button className={styles.storeButton}><PlayStore /><span>Google Play Store</span></button>
      </a>
    </div></section>;
}
