import React from "react";
import styles from "./banner-home.module.scss";
import ParallelContent from "@site/src/components/ParallelContent";
// import $ from "jquery";
import useWindowDimensions from "@site/src/hooks/WindowDimensions";

let nbRows = 0;
let derniere_position_de_scroll_connue = 0;
let oldPosition = 0;
let ticking = false;

let height = 0;
let step = 0;

function plusDemi(nb) {
  let factor = screen.height > screen.width ? 1.4 : 1;
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

export default class BannerHome extends React.Component {
  intervalID = 0;

  constructor(props) {
    super(props);
    this._isMounted = false;

    this.state = {
      pixelOpacity: 0,
      pixelDisplay: "none",
      headerDisplay: "block",
      pixelArrays: [],
    };

    this.pixelSize = 30;
    this.pixelHighlight = { background: "#e6b905" }; // color primary
    this.pixelOn = { background: "#212121" }; // color surface
    this.pixelOff = { background: "transparent" };
    // this.windowDimensions = useWindowDimensions()
  }

  // const [pixelRef, setPixelRef] = React.useState('0');
  // const [headerRef, setHeaderRef] = React.useState('block');

  // const [pixelHtml, setPixelHtml] = React.useState(Array());
  // const [pixelRefs, setPixelRefs] = React.useState(Array());

  hidePixels = () => {
    const array = [];
    this.state.pixelArrays.forEach((item1, index1) => {
      array[index1] = item1;
      item1.forEach((item2, index2) => {
        array[index1][index2] = (
          <div
            key={"pixel_" + index1 + "_" + index2 + "_" + randomId()}
            style={this.pixelOff}
          />
        );
      });
    });
    this._isMounted &&
      this.setState({ pixelArrays: array.map((item) => item) });
  };

  fade = (sens, hide_pixels) => {
    //console.log('fade OUT')
    if (
      (sens === "in" && this.state.pixelOpacity === "0") ||
      (sens === "out" && this.state.pixelOpacity === "1")
    ) {
      /*let opacity = sens === 'in' ? 0 : 1;
            const intervalID = setInterval(() => {

                if (sens === 'in' && opacity < 1) {
                    opacity = opacity + 0.1;
                    this._isMounted && this.setState({pixelOpacity: opacity});
                } else if (sens === 'out' && opacity > 0) {
                    opacity = opacity - 0.1;
                    this._isMounted && this.setState({pixelOpacity: opacity});
                } else {
                    //console.log('fade OUT clear interval')
                    clearInterval(intervalID);
                    /!*'in' ? this.setState({pixelDisplay: 'block'}) : *!/this.setState({pixelDisplay: 'none'})
                    if (hide_pixels) this.hidePixels();
                }
            }, 20);*/
      let opacity = sens === "in" ? 1 : 0;
      this.setState({ pixelOpacity: opacity });
      this.sleep(500).then((r) => {
        this.setState({ pixelDisplay: "none" }); //todo: inverser si 'in'
        if (hide_pixels) this.hidePixels();
      });
    }
  };

  sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  updatePixels = (nb_rows, nb_colored_rows, step, direction) => {
    const array = this.state.pixelArrays;
    for (let i = 0; i < nb_colored_rows; i++) {
      //for each pixel of the concerned row
      // array[nbRows - i] = []
      const iterator = direction === "up" ? i : nbRows - i;
      //console.log('iterator', iterator)
      if (iterator >= 0 && iterator < nbRows) {
        array[iterator].forEach((pixel, index) => {
          // //console.log(currentValue + ', ' + currentIndex + ', ' + this);
          let proba = step * (nb_colored_rows - i);
          //if (derniere_position_de_scroll_connue % nbRows == 0) //console.log('proba', proba);
          if (probability(proba)) {
            array[iterator][index] = (
              <div
                key={"pixel_" + i + "_" + index + "_" + randomId()}
                style={probaHighlight() ? this.pixelHighlight : this.pixelOn}
              />
            );
          }
        });
      }
    }
    this._isMounted && this.setState({ pixelArrays: array });
  };

  scrollListener = () => {
    // ...
    derniere_position_de_scroll_connue = window.scrollY;
    let nb_colored_rows = 0;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (derniere_position_de_scroll_connue === 0) {
          // TOP
          this.fade("out", true);
          // asyncHidePixels();
          //header visible
          this.setState({ headerDisplay: "block" });
        } else if (oldPosition > derniere_position_de_scroll_connue) {
          //SCROLL UP from custom scroll height
          //this.hidePixels();
          if (derniere_position_de_scroll_connue <= plusDemi(height)) {
            this.setState({ pixelOpacity: "1", pixelDisplay: "block" });
            // //console.log('on est dans la place');
            // if (derniere_position_de_scroll_connue % this.pixelSize == 0) {

            nb_colored_rows =
              plusDemi(nbRows) -
              Math.ceil(derniere_position_de_scroll_connue / this.pixelSize);
            //console.log('nb colored rows => ', nb_colored_rows);
            //for each colored row
            this.updatePixels(nbRows, nb_colored_rows, step, "up");
          }
        } else if (oldPosition < derniere_position_de_scroll_connue) {
          // SCROLL DOWN

          if (derniere_position_de_scroll_connue < plusDemi(height)) {
            //this.hidePixels();
            this.setState({ pixelOpacity: "1", pixelDisplay: "block" });

            nb_colored_rows = Math.ceil(
              derniere_position_de_scroll_connue / this.pixelSize
            );
            //console.log('nb colored rows => ', nb_colored_rows);
            //for each colored row
            this.updatePixels(nbRows, nb_colored_rows, step, "down");
          } else {
            this.fade("out", true);
            //hidePixels();
            //asyncHidePixels();
            this.setState({ headerDisplay: "none" });
            //todo: enlever attribut color de tous les pixels
          }
        }
        // }
        oldPosition = derniere_position_de_scroll_connue;

        ticking = false;
      });
    }

    ticking = true;
  };

  scrollToMain = () => {
    ////console.log('scroll !')
    //window.scrollTo(0, plusDemi(height))
    //$("html, body").animate({scrollTop: plusDemi(height) + 140});
    let pos = derniere_position_de_scroll_connue;
    const plusDemiHeight = plusDemi(height) + 120;
    this.intervalID = setInterval(() => {
      if (pos <= plusDemiHeight) {
        pos = pos + 150;
        this._isMounted && window.scrollTo(0, pos);
        //console.log('pos', pos)
      } else {
        //console.log('progressive SCROLL clear interval')
        clearInterval(this.intervalID);
      }
    }, 50);
  };

  isDesktop = () => {
    return window.innerWidth > 1023;
  };

  componentDidMount() {
    this._isMounted = true;

    // get sreen height
    // const { height, width } = useWindowDimensions();
    height = screen.height; //document.body.clientHeight //window.innerHeight
    const width = screen.width; //document.body.clientWidth //window.innerWidth
    //console.log('width & height => ', width, height);

    // declare table size
    nbRows = Math.ceil(height / this.pixelSize);
    const nbColumns = Math.ceil(width / this.pixelSize);
    //console.log('rows & columns => ', nbRows, nbColumns);

    step = 100 / nbRows;
    //console.log('step = ' + step);

    const arrayPixel = [];
    for (let i = 0; i < nbRows; i++) {
      arrayPixel[i] = [];
      for (let j = 0; j < nbColumns; j++) {
        arrayPixel[i][j] = (
          <div
            key={"pixel_" + i + "_" + j + "_" + randomId()}
            style={this.pixelOff}
          />
        );
      }
    }
    // console.table(pixelHtml)
    this._isMounted && this.setState({ pixelArrays: arrayPixel });
    //console.log('use Effect running')

    document.addEventListener("scroll", this.scrollListener);
  }

  componentWillUnmount() {
    this._isMounted = false;
    clearInterval(this.intervalID);
    document.removeEventListener("scroll", this.scrollListener);
  }

  render() {
    return (
      <>
        <div
          id={"sub-header"}
          className={styles.header}
          style={{ display: this.state.headerDisplay }}
        >
          {
            <section className={styles.banner}>
              <div className={styles.colMedia}>
                <div className={styles.colText}>
                  <h1 className={styles.title}>C.O.D.D.E. Pi®</h1>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <h2>
                    L'appli mobile tout-en-un dans le contrôle de ton ordi à
                    carte unique
                  </h2>
                  <div className={styles.button}>
                    <button onClick={this.scrollToMain}>Découvrir</button>
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={styles.media}
                  priority
                  /*{'https://cdn.dribbble.com/users/9543282/screenshots/16960929/media/b8756407a2bd598e539acc77edbff185.png'}*/
                  src={"/img/codde_pi_introduction_4_3.webp"}
                  title={
                    "CODDE Pi's Robot is writing script, &lt;https://creativecommons.org/licenses/by-nc-nd/4.0/&gt; Creative Commons Mathis Lecomte"
                  }
                  alt={"coddepi's robot is writing python script"}
                  width={800}
                  height={600}
                  objectFit={"contain"}
                />{" "}
                {/**/}
              </div>
              <div className={styles.colText}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h2>
                  L'appli mobile tout-en-un dans le contrôle de ton ordi à carte
                  unique
                </h2>
                <div className={styles.button}>
                  <button onClick={this.scrollToMain}>Découvrir</button>
                </div>
              </div>
            </section>
          }
        </div>

        <div className={styles.pseudoHeader}>
          <p style={{ color: "#121212" }}>
            L&apos;appli mobile tout-en-un dans le contrôle de ton ordi à carte
            unique
          </p>
        </div>
        <div
          className={styles.pixels}
          style={{
            opacity: this.state.pixelOpacity,
            display: this.state.pixelDisplay,
          }}
        >
          {
            this.state.pixelArrays.map((item, index) => {
              return (
                <div key={"pixel_" + index + "_" + randomId()}>{item}</div>
              );
            })
            /*pixelHtml.map((item, index) => {
                            <div>
                                {item.map((item, index) => {
                                    item
                                })}
                            </div>
                        })*/
          }
        </div>
      </>
    );
  }
}
