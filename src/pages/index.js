import Layout from "@theme/Layout";
import MultiComGraph from "@site/src/components/MultiComGraph";
import ParallelModels from "@site/src/components/Parallel/ParallelModels";
import BannerHome from "@site/src/components/BannerHome";

import styles from "./index.module.css";
import Jerry from "../components/ThreeModels/Jerry";
import ParallelPhone from "../components/Parallel/ParallelPhone";
import CommunityNetwork from "../components/CommunityNetwork";
import Store from "../components/Store";
import CodeExample from "../components/CodeExample";
import BrowserOnly from "@docusaurus/BrowserOnly";


export default function Home() {
  return (
    <Layout title="Home" description="home">
      <>
        <BrowserOnly>
          {() =>
            <BannerHome />
          }
        </BrowserOnly>
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
          <BrowserOnly>
            {() =>
              <MultiComGraph />
            }
          </BrowserOnly>
          <CommunityNetwork />
          <Store />
          <CodeExample language={"python"} />
          <section id="discord">
            <h2>Join us</h2>
            <div className={styles.contact} >
              <iframe src="https://discord.com/widget?id=1142922830682529862&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe></div>
          </section>
        </main>
      </>
    </Layout>
  );
}
