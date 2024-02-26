import React from "react";
import Showroom from "@site/src/components/Showroom";
import styles from "./styles.module.scss";

export default function ParallelContent({
  children,
  side,
  src,
  alt,
  media_width,
  media_height,
  asymmetric,
}) {
  return (
    <section className={side === "left" ? styles.left : styles.right}>
      <div
        className={styles.colText}
        style={{ flex: asymmetric === "text" ? "3" : "2" }}
      >
        {children}
      </div>
      <div
        className={styles.colMedia}
        style={{ flex: asymmetric === "media" ? "3" : "2" }}
      >
        {src.includes(".mp4") || src.includes(".webm") ? (
          <Showroom
            src={src}
            media_width={media_width}
            media_height={media_height}
          />
        ) : (
          <img
            src={src}
            alt={alt}
            width={media_width ?? 1200}
            height={media_height ?? 900}
          />
        )}
      </div>
    </section>
  );
}
