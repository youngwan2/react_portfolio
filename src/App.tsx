import React, { useState, useEffect, KeyboardEvent, MouseEvent } from "react";
import Intro from "./pages/intro/Intro";
import Content from "./pages/contents/Content";
import Header from "./components/header/Header";
import AboutMe from "./pages/about-me/AboutMe";
import Skill from "./pages/skill/Skill";
import Projects from "./pages/projects/Projects";
import Footer from "./pages/footer/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";

function App() {
  const navigate = useNavigate();
  const [pageNum, setPageNum] = useState(0);

  // 다음 페이지 이동 함수
  const nextPageFunc = () => {
    if (pageNum < 4) {
      setPageNum(pageNum + 1);
    }
  };

  // 이전 페이지 이동 함수
  const prevPageFunc = () => {
    if (pageNum >= 0) setPageNum(pageNum - 1);
  };

  // 페이지 번호에 따라 페이지 이동을 분기처리한다.
  useEffect(() => {
    switch (pageNum) {
      case -1:
        navigate("/");
        break;
      case 0:
        navigate("/contents");
        break;
      case 1:
        navigate("/about_me");
        break;
      case 2:
        navigate("/skills");
        break;
      case 3:
        navigate("/projects");
        break;
      case 4:
        navigate("/footer");
        break;
      default:
    }
  }, [navigate, pageNum]);

  return (
    <div className="App">
      <div
        style={
          window.location.pathname === "/"
            ? { display: "none" }
            : { display: "block" }
        }
      >
        <Header setPageNum={setPageNum} pageNum={pageNum} />
      </div>
      <button
        style={
          pageNum === -1 ? { visibility: "hidden" } : { visibility: "visible" }
        }
        onClick={prevPageFunc}
        onKeyDown={prevPageFunc}
        className="App_prev_btn pageBtn"
      >
        {"<"}
      </button>
      <button
        style={
          pageNum === 4 ? { visibility: "hidden" } : { visibility: "visible" }
        }
        onClick={nextPageFunc}
        onKeyDown={nextPageFunc}
        className="App_next_btn pageBtn"
      >
        {">"}
      </button>
      <Routes>
        <Route path="*" element={<h1>잘못된 경로입니다.</h1>}></Route>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/contents" element={<Content />}></Route>
        <Route path="/about_me" element={<AboutMe />}></Route>
        <Route path="/skills" element={<Skill />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
