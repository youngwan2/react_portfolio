import React from "react";
import styles from "./Content.module.css";

const Content = () => {
  return (
    <section className={styles.Content}>
      <div className={styles.Content_container}>
        <nav className={styles.Content_navigation}>
          <h1 className={styles.Content_title}>CONTENTS</h1>
          <ul>
            <li>
              <span>01. About me</span>{" "}
              <span className={styles.Content_sub_text}>
                {" "}
                "간략한 저의 정보를 공유합니다."
              </span>
            </li>
            <li>
              <span>02. Skills </span>{" "}
              <span className={styles.Content_sub_text}>
                {" "}
                "제가 가진 기술을 소개합니다."
              </span>
            </li>
            <li>
              <span>03. Projects</span>{" "}
              <span className={styles.Content_sub_text}>
                {" "}
                "제가 만든 프로젝트를 소개합니다."
              </span>
            </li>
            <li>
              <span>04. Footer</span>{" "}
              <span className={styles.Content_sub_text}>
                {" "}
                "기타 정보를 공유합니다."
              </span>
            </li>
          </ul>
        </nav>
        <div className={styles.Content_aside_image}></div>
      </div>
    </section>
  );
};

export default Content;
