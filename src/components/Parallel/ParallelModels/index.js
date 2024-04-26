import { Children, useEffect, useState } from "react";
import ModelViewer from "../../ThreeModels/ModelViewer";
import styles from "../styles.module.scss";

export default function ParallelModels({
  children,
  side,
  src,
  media_width,
  media_height,
  asymmetric,
  position,
  title,
}) {
  const [mediaWidth, setMediaWidth] = useState(media_width);
  const [mediaHeight, setMediaHeight] = useState(media_height);
  useEffect(() => {
    if (media_width > window.screen.width) {
      setMediaWidth(window.screen.width);
      setMediaHeight(window.screen.width);
    }
  }, [])
  return (
    <section className={side === "left" ? styles.left : styles.right}>
      <div
        className={styles.colText}
        style={{ flex: asymmetric === "text" ? "3" : "2" }}
      >
        {Children.toArray(children)[1]}
      </div>
      <div
        className={styles.colMedia}
        style={{ flex: asymmetric === "media" ? "3" : "2" }}
      >
        <ModelViewer
          // src={src}
          title={title}
          width={mediaWidth ?? 1200}
          height={mediaHeight ?? 900}
          position={position}
        >{Children.toArray(children)[0]}</ModelViewer>
      </div>
    </section >
  );
}

/* width={mediaWidth ?? 1200}
height={mediaHeight ?? 900} */

