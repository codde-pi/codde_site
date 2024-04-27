import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./banner-home.module.scss";
// import $ from "jquery";
import useWindowDimensions from "@site/src/hooks/WindowDimensions";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrowserOnly from "@docusaurus/BrowserOnly";

let nbRows = 0;
let oldPosition = 0;


function plusDemi(nb) {
  // let factor = screen.height > screen.width ? 1.4 : 1;
  let factor = 1;
  //console.log('height', screen.height)
  return nb * factor;
}

function probability(level) {
  let bool;
  const min = 0;
  const max = 100;
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  bool = random <= level;
  return bool;
}

// Probability to highlight pixel in YELLOW
function probaHighlight() {
  let bool;
  const min = 0;
  const max = 100;
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  bool = random <= 1; // proba = 1%
  return bool;
}

function randomId() {
  const min = 0;
  const max = 1000;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getPixelKey = (row, col) => {
  return col + (row * (col + row));
}

const getProgressBar = (counter, total) => {
  let progressCount = Math.floor((counter / total) * 50)
  let progress = [];
  let rest = [];
  for (let i = 0; i < progressCount; i++) {
    progress.push("█");
  }
  for (let i = 0; i < (50 - progressCount); i++) {
    rest.push("▒");
  }
  return <><span>{progress.join("")}</span>{rest.join("")}</>;
}

export default function BannerHome() {
  let ticking = false;
  let current_pos = 0;
  let step = 0;
  let intervalID = 0;
  const { siteConfig } = useDocusaurusContext();

  const { height, width } = useWindowDimensions();
  var _isMounted = false;

  const [pixelDisplay, setPixelDisplay] = useState('none');
  const [pixelOpacity, setPixelOpacity] = useState(0);
  const [headerDisplay, setHeaderDisplay] = useState('none');
  const [pixelArrays, setPixelArrays] = useState([]);
  const [counter, setCounter] = useState(0);
  const [progressBar, setProgressBar] = useState("");

  const pixelSize = 30;
  const pixelHighlight = { background: "#e6b905" }; // color primary
  const pixelOn = { background: "#212121" }; // color surface
  const pixelOff = { background: "transparent" };
  // const windowDimensions = useWindowDimensions()

  // const [pixelRef, setPixelRef] = React.useState('0');
  // const [headerRef, setHeaderRef] = React.useState('block');

  // const [pixelHtml, setPixelHtml] = React.useState(Array());
  // const [pixelRefs, setPixelRefs] = React.useState(Array());

  const hidePixels = () => {
    const array = [];
    pixelArrays.forEach((item1, index1) => {
      array[index1] = item1;
      item1.forEach((item2, index2) => {
        array[index1][index2] = (
          <div
            key={"pixel_" + index1 + "_" + getPixelKey(index1, index2)}
            style={pixelOff}
          />
        );
      });
    });
    _isMounted &&
      setPixelArrays(array.map((item) => item));
  };

  const fade = (sens, hide_pixels) => {
    //console.log('fade OUT')
    if (
      (sens === "in" && pixelOpacity === 0) ||
      (sens === "out" && pixelOpacity === 1)
    ) {
      /*let opacity = sens === 'in' ? 0 : 1;
            const intervalID = setInterval(() => {
   
                if (sens === 'in' && opacity < 1) {
                    opacity = opacity + 0.1;
                    const _isMounted && this.setState({pixelOpacity: opacity});
                } else if (sens === 'out' && opacity > 0) {
                    opacity = opacity - 0.1;
                    const _isMounted && this.setState({pixelOpacity: opacity});
                } else {
                    //console.log('fade OUT clear interval')
                    clearInterval(intervalID);
                    /!*'in' ? const setState({pixelDisplay: 'block'}) : *!/this.setState({pixelDisplay: 'none'})
                    if (hide_pixels) const hidePixels();
                }
            }, 20);*/
      let opacity = sens === "in" ? 1 : 0;
      setPixelOpacity(opacity);
      sleep(500).then((r) => {
        setPixelDisplay("none"); //todo: inverser si 'in'
        if (hide_pixels) hidePixels();
      });
    }
  };

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const updatePixels = (nb_colored_rows, direction) => {
    const array = pixelArrays;
    for (let i = 0; i < nb_colored_rows; i++) {
      //for each pixel of the concerned row
      // array[nbRows - i] = []
      const iterator = direction === "up" ? i : nbRows - i;
      //console.log('iterator', iterator)
      if (iterator >= 0 && iterator < nbRows) {
        array[iterator].forEach((pixel, index) => {
          // //console.log(currentValue + ', ' + currentIndex + ', ' + const ;
          let proba = step * (nb_colored_rows);
          //if (derniere_position_de_scroll_connue % nbRows == 0) //console.log('proba', proba);
          if (probability(proba)) {
            array[iterator][index] = (
              <div
                key={"pixel_" + iterator + "_" + index + "_" + getPixelKey(iterator, index)}
                style={probaHighlight() ? pixelHighlight : pixelOn}
              />
            );
          }
        });
      }
    }
    setPixelArrays(array);
  };
  // Declare a static listener.
  const eventListeners = useRef();
  const scrollHandler = useCallback(() => {
    // ...
    current_pos = window.scrollY;
    let nb_colored_rows = 0;
    // setCounterAnim(false);
    // console.log('scroll event')

    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (current_pos === 0) {
          // TOP
          fade("out", true);
          // asyncHidePixels();
          //header visible
          setHeaderDisplay("block");
        } else if (oldPosition > current_pos) {
          //SCROLL UP from custom scroll height
          //this.hidePixels();
          if (current_pos <= plusDemi(height)) {
            setPixelOpacity(1)
            setPixelDisplay("block");
            console.log('on est dans la place');
            // if (derniere_position_de_scroll_connue % const pixelSize == 0) {

            nb_colored_rows =
              plusDemi(nbRows) -
              Math.ceil(current_pos / pixelSize);
            //console.log('nb colored rows => ', nb_colored_rows);
            //for each colored row
            setProgressBar(getProgressBar(nb_colored_rows, nbRows));
            setCounter(Math.floor(nbRows / nb_colored_rows * 100));
            updatePixels(nb_colored_rows, "up");
          }
        } else if (oldPosition < current_pos) {
          // SCROLL DOWN

          if (current_pos < plusDemi(height)) {
            //this.hidePixels();
            setPixelOpacity(1);
            setPixelDisplay("block");

            nb_colored_rows = Math.ceil(
              current_pos / pixelSize
            );
            // console.log('nb colored rows => ', nb_colored_rows);
            //for each colored row
            // FIXME: doesn't update pixel arrays without this next line
            setProgressBar(getProgressBar(nb_colored_rows, nbRows));
            setCounter(Math.floor(nb_colored_rows / nbRows * 100));
            updatePixels(nb_colored_rows, "down");
          } else {
            fade("out", true);
            //hidePixels();
            //asyncHidePixels();
            setHeaderDisplay("none");
            //todo: enlever attribut color de tous les pixels
          }
        }
        // }
        oldPosition = current_pos;

        ticking = false;
      });
    }

    ticking = true;
  });

  const scrollToMain = () => {
    ////console.log('scroll !')
    //window.scrollTo(0, plusDemi(height))
    //$("html, body").animate({scrollTop: plusDemi(height) + 140});
    let pos = current_pos;
    const plusDemiHeight = plusDemi(height) + 120;
    const intervalID = setInterval(() => {
      if (pos <= plusDemiHeight) {
        pos = pos + 150;
        window.scrollTo(0, pos);
        //console.log('pos', pos)
      } else {
        //console.log('progressive SCROLL clear interval')
        clearInterval(intervalID);
      }
    }, 50);
    /* setTimeout(() => {

      if (pos <= plusDemiHeight) {
        pos = pos + 150;
        _isMounted && scrollTo(0, pos);
      }
    }, 50); */
    console.log("animated")
  };

  const isDesktop = () => {
    return window.innerWidth > 1023;
  };

  useEffect(() => {
    _isMounted = true; // TODO: unused
    if (window.scrollY === 0) {
      setHeaderDisplay('block');
    } else {
      setHeaderDisplay('none');
    }
    //console.log('width & height => ', width, height);

    // declare table size
    nbRows = Math.ceil(window.screen.height / pixelSize);
    const nbColumns = Math.ceil(width / pixelSize);
    //console.log('rows & columns => ', nbRows, nbColumns);

    step = 100 / nbRows;
    //console.log('step = ' + step);

    const arrayPixel = [];
    for (let i = 0; i < nbRows; i++) {
      arrayPixel[i] = [];
      for (let j = 0; j < nbColumns; j++) {
        arrayPixel[i][j] = (
          <div
            key={"pixel_" + i + "_" + j + "_" + getPixelKey(i, j)}
            style={pixelOff}
          />
        );
      }
    }
    // console.table(pixelHtml)
    setPixelArrays(arrayPixel);
    // console.log('use Effect running')
  }, []);

  useEffect(() => {

    // Then will set our current scroll handler to our static listener
    eventListeners.current = scrollHandler;

    // Here will be adding the static listener so we can keep the reference
    // and remove it later on
    window.addEventListener('scroll', eventListeners.current, true);

    return () => {
      window.removeEventListener('scroll', eventListeners.current, true);
    };

  }, [scrollHandler])

  /* componentWillUnmount() {
    const _isMounted = false;
    clearInterval(this.intervalID);
    document.removeEventListener("scroll", const scrollListener);
  } */


  return (
    <>
      <div
        id={"sub-header"}
        className={styles.header}
        style={{ display: headerDisplay }}
      >
        {
          <section className={styles.banner}>
            <div className={styles.colMedia}>
              <div className={styles.colText}>
                <h1 className={styles.title}>{siteConfig.title}</h1>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p>
                  {siteConfig.tagline}
                </p>
                {(counter === 0 || counter >= 100 || window.scrollY === 0) ?
                  <div className={styles.button}>
                    <button onClick={scrollToMain}>Get Started</button>
                  </div>
                  : <div className={styles.button}>
                    <p className={styles.progressBar}>{progressBar} <span>{counter}%</span></p>
                  </div>
                }
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className={styles.mediaWrapper}>
                <img
                  className={styles.media}
                  /*{'https://cdn.dribbble.com/users/9543282/screenshots/16960929/media/b8756407a2bd598e539acc77edbff185.png'}*/
                  src={"/img/codde_pi_introduction_4_3.webp"}
                  title={
                    "CODDE Pi's Robot is writing script, &lt;https://creativecommons.org/licenses/by-nc-nd/4.0/&gt; Creative Commons Mathis Lecomte"
                  }
                  alt={"coddepi's robot is writing python script"}
                  width={800}
                // height={600}
                />{" "}
                {/**/}
              </div>
            </div>
          </section>
        }
      </div >

      <div className={styles.pseudoHeader}>
        <p style={{ color: "#121212" }}>
          {siteConfig.tagline}
        </p>
      </div>
      <div
        className={styles.pixels}
        style={{
          opacity: pixelOpacity,
          display: pixelDisplay,
        }}
      >
        {
          pixelArrays.map((item, index) => {
            return (
              <div key={"pixel_" + index + "_"}>{item.map((item2, index2) => {
                return item2;
              })
              }</div>
            );
          })
        }
      </div>
    </>
  );
}
