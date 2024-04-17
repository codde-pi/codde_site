import React from "react";
import classNames from "classnames";
import styles from "./multi-com-graph.module.scss";
// import SlidingList from "@site/src/components/SlidingList";
import PhoneIcon from "@site/static/img/icon_phone.svg";
import ComputerIcon from "@site/static/img/icon_computer.svg";
import TabletIcon from "@site/static/img/icon_tablet.svg";
import { useState, useEffect, useRef } from "react";
import layouts from "@site/src/css/layouts.scss";
import variables from "@site/src/css/variables.module.scss";

export default function MultiComGraph() {
  const graphRef = useRef();
  // X
  const [width, setX] = useState();

  // This function calculate X and Y
  const getPosition = () => {
    const width = graphRef.current.offsetWidth;
    setX(width);
  };

  const loadinStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };

  // Get the position of the red box in the beginning
  useEffect(() => {
    getPosition();
  }, []);

  // Re-calculate X and Y of the red box when the window is resized by the user
  /* useEffect(() => {
    window.addEventListener("resize", getPosition);
  }, []); */

  const clientsName = ["Phone", "Computer", "Tablet"];
  const clients = [<PhoneIcon />, <ComputerIcon />, <TabletIcon />];

  const protocols = ["Bluetooth", "Wifi Websockets", "USB Serial"];
  const targetDevices = ["SBC", "RP2040", "ESP32", "Arduino"];

  return (
    <section className="wrapperL">
      <h2>Same Code. Different platforms.</h2>
      <div className={styles.graph} ref={graphRef}>
        <div
          className={styles.loading}
          style={{
            width:
              width -
              parseFloat(getComputedStyle(document.documentElement).fontSize), // 1rem,
          }}
        >
          <SquareLoading length={width} numParticles={3} />
          <SquareLoading length={width} coeff={-1} numParticles={3} />
        </div>
        <SlidingList titles={clientsName} items={clients} />
        <SlidingList titles={protocols} blowId={styles.graphBlow} />
        <SlidingList titles={targetDevices} />
      </div>
    </section>
  );
}
export function SquareLoading({ length, coeff, numParticles }) {
  const [direction, setDirection] = useState(1);
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDirection((prevDirection) => (prevDirection ? 0 : 1));
    }, 3000); // 3s trigger + 0.5s sliding animation

    return () => {
      // Cleanup the interval on component unmount
      clearInterval(intervalId);
    };
  }, []);
  const particles = [];
  for (let i = 0; i < numParticles; i++) {
    particles.push(
      <>
        <div
          className={styles.squareLoading}
          style={{
            transition: "transform 1s ease-in-out",
            transitionDelay: `${0.1 * i}s`,
            transform: `translateX(${(coeff ? coeff * direction : direction) * (length / 2)
              }px)`, // rotate(${direction * 360}deg)
          }}
        />
      </>,
    );
  }
  return <div style={{ width: length }}>{particles}</div>;
}
export function SlidingList({ titles, items, delay, blowId }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const boxRef = [useRef(), useRef(), useRef(), useRef()];
  const [toggleAnim, setToggleAnim] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the current index, and loop back to the beginning if reaching the end
      setCurrentIndex((prevIndex) =>
        Math.floor(Math.random() * (titles.length - 0)),
      );
      if (blowId != null) {
        // boxRef.current.animationPlayState = toggleAnim ? "running" : "paused";
        /* element.current.on("animationEnd", function () {
            element.current.style.animationPlayState = "paused";
          }); */
        setToggleAnim((prevAnim) => (prevAnim ? 0 : 1));
        //
        /* boxRef.current.classList.add(styles.sonar);
        void boxRef.current.offsetWidth;
        boxRef.current.classList.remove(styles.sonar); */
      }
    }, 3000);

    return () => {
      clearInterval(intervalId); // Cleanup the interval on component unmount
    };
  }, [titles.length]);
  return (
    <div
      className={classNames(styles.slidingList, toggleAnim ? styles.sonar : "")}
      id={blowId ?? ""}
    >
      <div
        className={styles.slideTransformer}
        style={{
          transition: "transform 0.5s ease-out",
          transform: `translateY(-${currentIndex * (100 / titles.length)}%)`, // Assuming each div takes 100% width
        }}
      >
        {titles.map((title, index) => (
          <div className={styles.slidingItem} key={index}>
            {items != null ? items[index] : ""}
            <p
              style={{
                color:
                  items != null ? variables.colorText : variables.colorPrimary,
              }}
            >
              {title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
