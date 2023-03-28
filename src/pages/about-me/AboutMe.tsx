import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={styles.About}>
      <div className={styles.About_container}>
        <div className={styles.About_name}>
          <p>이름</p>
          <span className={styles.About_text}>김영완<br/>(金映完)</span>
        </div>
        <div className={styles.About_birthday}>
          <p>생년월일</p>
          <span className={styles.About_text}>96.01.09</span>
        </div>
        <div className={styles.About_address}>
          <p>주소</p>
          <span className={styles.About_text}>부산 금정구</span>
        </div>
        <div className={styles.About_phone}>
          <p>연락처</p>
          <span className={styles.About_text}>010-6855-3812</span>
        </div>
        <div className={styles.About_email}>
          <p>이메일</p>
          <span className={styles.About_text}>qodna25<br/>@gmail.com</span>
        </div>
        <div className={styles.About_blog}>
          <p>블로그</p>
          <span className={styles.About_text}>블로그명</span>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
