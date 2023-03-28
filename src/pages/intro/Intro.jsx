import React from "react";
import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.Intro}>
      <div className={styles.Intro_container}>
        <h1 className={styles.Intro_title}>Hello!</h1>
        <p>안녕하세요. 프론트엔드 개발자를 꿈꾸는 김영완 입니다.</p>
      </div>
    </div>
  );
};

export default Intro;
