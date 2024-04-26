import { useEffect, useState } from "react";
import Phone from "../../ThreeModels/Phone";
import ParallelModels from "../ParallelModels";
import styles from "./phone.module.scss";
import classNames from "classnames";

export default function ParallelPhone() {
  const screenList = [
    "/img/screen_projects.png",
    "/img/screen_controller.png",
    "/img/screen_device.png",
    "/img/screen_diagram.png",
  ];
  const tabList = [
    "Projects management",
    "Custom controllers",
    "Remote Terminal",
    "Diagram designing",
  ]
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the current index, and loop back to the beginning if reaching the end
      setSelected((prevIndex) =>
        prevIndex + 1 >= screenList.length ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(intervalId); // Cleanup the interval on component unmount
    };

  })

  return (<ParallelModels side={'right'} media_height={600} media_width={600} position={[2, 0, 1]} title={"Phone features"}>
    <Phone screenImage={screenList[selected]} />
    <div>
      <h2>Unleash the potential of your smartphone</h2>

      <div className={styles.tabFeatures}>
        {tabList.map((tab, index) => <button key={index} className={classNames(styles.tab, { [styles.disabled]: index !== selected })} onClick={() => setSelected(index)}>{tab}</button>)}
      </div>
      <p>No more need to blow the fans of your war machine,
        everything you need is right on your hand!</p>
      <p>CODDE Pi is able to program and control your robot seemlessly, providing you a complete mobile IDE and customizable control interfaces.</p>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
    </div>
  </ParallelModels>);
}
