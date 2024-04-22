import { Children } from "react";
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
}) {
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
          width={media_width ?? 1200}
          height={media_height ?? 900}
          position={position}
        >{Children.toArray(children)[0]}</ModelViewer>
      </div>
    </section>
  );
}
