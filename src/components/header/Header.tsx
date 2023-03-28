import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

interface HeaderType {
  setPageNum: Function;
  pageNum: number;
}

const Header = ({ setPageNum, pageNum }: HeaderType) => {
  const [display, setDisplay] = useState(false);

  const resizeFunc = () => {
    if (window.innerWidth > 500) {
      setDisplay(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeFunc);
  }, []);

  return (
    <article onResize={resizeFunc} className={styles.Header}>
     {/*  ☰ 버튼  */}
      <button
        onClick={() => {
          let state = !display;
          setDisplay(state);
        }}
        className={styles.Header_menu_btn}
      >
        ☰
      </button>

      {/* 카테고리 */}
      <nav
        style={display === true ? { display: "block" } : { display: "none" }}
        className={styles.Header_navigation}
      >
        <ul>
          <li
            onClick={() => {
              setPageNum(0);
            }}
          >
            <Link
              style={
                pageNum === 0
                  ? { color: "brown" }
                  : { color: "rgb(234, 224, 211)" }
              }
              to={"/contents"}
            >
              Contents
            </Link>
          </li>
          <li
            onClick={() => {
              setPageNum(1);
            }}
          >
            <Link
              style={
                pageNum === 1
                  ? { color: "brown" }
                  : { color: "rgb(234, 224, 211)" }
              }
              to={"/about_me"}
            >
              About me
            </Link>
          </li>
          <li
            onClick={() => {
              setPageNum(2);
            }}
          >
            <Link
              style={
                pageNum === 2
                  ? { color: "brown" }
                  : { color: "rgb(234, 224, 211)" }
              }
              to="/skills"
            >
              Skills
            </Link>
          </li>
          <li
            onClick={() => {
              setPageNum(3);
            }}
          >
            <Link
              style={
                pageNum === 3
                  ? { color: "brown" }
                  : { color: "rgb(234, 224, 211)" }
              }
              to="/projects"
            >
              Projects
            </Link>
          </li>
          <li
            onClick={() => {
              setPageNum(4);
            }}
          >
            <Link
              style={
                pageNum === 4
                  ? { color: "brown" }
                  : { color: "rgb(234, 224, 211)" }
              }
              to="/footer"
            >
              Footer
            </Link>
          </li>
        </ul>
      </nav>
    </article>
  );
};

export default Header;
