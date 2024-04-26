import React from "react";
import useOnScreen from "@site/src/hooks/use_on_screen";
import styles from "./showroom.module.scss";

export default function Showroom({ src, media_width, media_height }) {
  const ref = React.createRef();
  const isVisible = useOnScreen(ref);

  React.useEffect(() => {
    if (isVisible) {
      ref.current.play();
      //console.log('video is playing')
    } else {
      ref.current.pause();
      //console.log('stop video')
    }
  }, [isVisible, ref]);

  return (
    <video
      ref={ref}
      className={styles.video}
      /*autoPlay*/ loop
      muted
      playsInline
      width={media_width ?? 1600}
      height={media_height ?? 1200}
      title={
        "Dopy app demo, &lt;https://creativecommons.org/licenses/by-nc-nd/4.0/&gt; Creative Commons Mathis Lecomte"
      }
      disablePictureInPicture={true}
    >
      <source src={src} type={"video/webm"} />
    </video>
  );
}
