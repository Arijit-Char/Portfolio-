import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Skills.scss";
import Header from "../Header/Header";
import { SiExpress } from "react-icons/si";

export default function Skills() {
  const [selectedTab, setSelectedTab] = useState("skills");

  const handleTabClick = (tab) => {
    if (selectedTab === tab) {
      setSelectedTab(null);
    } else {
      setSelectedTab(tab);
    }
  };

  return (
    <div>
            <div className="cursor"></div>
    
      <div className="header">
        <Header />
      </div>
      <div className="headrow ">
        <div
          style={{ marginTop: "0rem !importent" }}
          className="col-md-6 mx-auto d-flex flex-wrap mb-4 justify-content-center bio_tabs"
        >
          <div
            className={`tabs flex-item mx-auto tablinks bio_tabs_item ${
              selectedTab === "skills" && "active"
            }`}
            onClick={() => handleTabClick("skills")}
          >
            MY SKILLS
          </div>
          <div
            className={`tabs flex-item mx-auto tablinks bio_tabs_item ${
              selectedTab === "additionalSkills" && "active"
            }`}
            onClick={() => handleTabClick("additionalSkills")}
          >
            ADDITIONAL SKILLS
          </div>
        </div>
      </div>
      {selectedTab === "skills" && (
        <motion.div
          className="details-window content_abtme  active-content_abtme"
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeInOut" },
          }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="container-fluid">
            <div class="headrow">
              <div class="col-lg-8 mx-auto abt_cont pb-4">
                <div class="row d-flex flex-wrap">
                  <div
                    className="skill_boxtype2 mt-5 text-center mx-auto"
                    style={{ borderBottom: "10px solid rgb(203, 178, 106)" }}
                  >
                    <h5 style={{ color: "rgb(203, 178, 106)" }}>
                      <b>MARKUP / STYLING LANGUAGE</b>
                    </h5>
                    <div className="text-center px-4" style={{ float: "left" }}>
                      {" "}
                      <i data-cursorpointer={true}
                        className="fa-brands fa-html5"
                        style={{ color: "rgba(255, 103, 57, 0.9)" }}
                      ></i>{" "}
                      <h6>HTML</h6>{" "}
                    </div>
                    <div className="text-center">
                      {" "}
                      <i data-cursorpointer={true}
                        className="fa-brands fa-css3-alt"
                        style={{ color: "rgb(93, 173, 226)" }}
                      ></i>{" "}
                      <h6>CSS</h6>{" "}
                    </div>
                  </div>
                  <div
                    className="skill_boxtype1 mt-5 text-center mx-auto"
                    style={{ borderBottom: "10px solid rgb(203, 178, 106)" }}
                  >
                    <h5 style={{ color: "rgb(203, 178, 106)" }}>
                      {" "}
                      <b>CSS FRAMEWORK</b>
                    </h5>
                    <div className="text-center">
                      {" "}
                      <i data-cursorpointer={true}
                        className="fa-brands fa-bootstrap"
                        style={{ color: "rgb(175, 122, 197)" }}
                      ></i>{" "}
                      <h6>BOOTSTRAP</h6>{" "}
                    </div>
                  </div>
                  <div
                    className="skill_boxtype1 mt-5 text-center mx-auto"
                    style={{ borderBottom: "10px solid rgb(203, 178, 106)" }}
                  >
                    <h6 style={{ color: "rgb(203, 178, 106)" }}>
                      WEB LANGUAGE
                    </h6>
                    <div className="text-center">
                      {" "}
                      <i data-cursorpointer={true}
                        className="fa-brands fa-js-square"
                        style={{ color: "yellow" }}
                      ></i>{" "}
                      <h6>JAVA SCRIPT</h6>{" "}
                    </div>
                  </div>
                </div>
                <div class="row d-flex flex-wrap">
                  <div
                    class="skill_boxtype1 mt-5 text-center mx-auto"
                    style={{ borderBottom: "10px solid rgb(203, 178, 106)" }}
                  >
                    <h5 style={{ color: "rgb(203, 178, 106)" }}>
                      JAVASCRIPT FRAMEWORK
                    </h5>
                    <div className="text-center">
                      {" "}
                      <i data-cursorpointer={true}
                        className="fa-brands fa-react"
                        style={{ color: "rgb(97, 218, 251)" }}
                      ></i>{" "}
                      <h6>REACT JS</h6>{" "}
                    </div>
                  </div>
                  <div
                    class="skill_boxtype1 mt-5 text-center mx-auto"
                    style={{ borderBottom: "10px solid rgb(203, 178, 106)" }}
                  >
                    <h5 style={{ color: "rgb(203, 178, 106)" }}>
                      PACKAGE MANAGER
                    </h5>
                    <div className="text-center">
                      {" "}
                      <i data-cursorpointer={true}
                        className="fa-brands fa-npm"
                        style={{ color: "rgb(203, 0, 0)" }}
                      ></i>{" "}
                      <h6>NPM</h6>{" "}
                    </div>
                  </div>
                  <div
                    class="skill_boxtype2 mt-5 text-center mx-auto"
                    style={{ borderBottom: "10px solid rgb(203, 178, 106)" }}
                  >
                    <h5 style={{ color: "rgb(203, 178, 106)" }}>
                      DATABASE MANAGEMENT
                    </h5>
                    <div className="text-center px-4" style={{ float: "left" }}>
                      {" "}
                      <i data-cursorpointer={true}
                        className="fa-solid fa-database"
                        style={{ color: "rgb(62, 110, 147)" }}
                      ></i>{" "}
                      <h6>SQL</h6>{" "}
                    </div>
                    <div className="text-center">
                      {" "}
                      <i data-cursorpointer={true}
                        className="fa-brands fa-envira"
                        style={{ color: "rgb(130, 224, 170)" }}
                      ></i>{" "}
                      <h6>
                        MONGO DB <br /> (NO SQL)
                      </h6>{" "}
                    </div>
                  </div>
                </div>
                <div class="row d-flex flex-wrap">
                  <div
                    class="skill_boxtype2 mt-5 text-center mx-auto "
                    style={{ borderBottom: "10px solid rgb(203, 178, 106)" }}
                  >
                    <h5 style={{ color: "rgb(203, 178, 106)" }}>
                      VERSION CONTROL
                    </h5>
                    <div
                      className="text-center"
                      style={{ float: "left", paddingLeft: "0rem" }}
                    >
                      {" "}
                      <i data-cursorpointer={true}
                        className="fa-brands fa-git-alt"
                        style={{ color: "rgb(241, 78, 50)" }}
                      ></i>{" "}
                      <h6 style={{ paddingLeft: "4rem" }}>GIT</h6>{" "}
                    </div>
                    <div className="text-center">
                      {" "}
                      <i data-cursorpointer={true}
                        className="fa-brands fa-github"
                        style={{ color: "white" }}
                      ></i>{" "}
                      <h6>GITHUB</h6>{" "}
                    </div>
                  </div>
                  <div
                    class="skill_boxtype2 mt-5 text-center mx-auto"
                    style={{ borderBottom: "10px solid rgb(203, 178, 106)" }}
                  >
                    <h5 style={{ color: "rgb(203, 178, 106)" }}>
                      PROGRAMMING LANGUAGE
                    </h5>
                    <div className="text-center px-4" style={{ float: "left" }}>
                      {" "}
                      <i data-cursorpointer={true}
                        className="fa-solid fa-c"
                        style={{ color: "blue" }}
                      ></i>{" "}
                      <h6>C LANGUAGE</h6>{" "}
                    </div>
                    <div className="text-center">
                      {" "}
                      <i data-cursorpointer={true} style={{ color: "blue" }}>C++</i> <h6>C++</h6>{" "}
                    </div>
                  </div>
                  <div
                    class="skill_boxtype2 mt-5 text-center mx-auto"
                    style={{ borderBottom: "10px solid rgb(203, 178, 106)" }}
                  >
                    <h5 style={{ color: "rgb(203, 178, 106)" }}>
                      BACKEND TECHNOLOGIES
                    </h5>
                    <div className="text-center px-4" style={{ float: "left" }}>
                      {" "}
                      <i data-cursorpointer={true}
                        className="fa-brands fa-node"
                        style={{ color: "lightgreen" }}
                      ></i>{" "}
                      <h6>NODE JS</h6>{" "}
                    </div>
                    <div className="text-center">
                      <i data-cursorpointer={true} style={{ color: "yellow" }}>
                        <SiExpress />
                      </i>{" "}
                      <h6 style={{ paddingTop: "29px" }}>EXPRESS JS</h6>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      {selectedTab === "additionalSkills" && (
        <motion.div
          className="details-window"
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeInOut" },
          }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div class="col-md-6 mx-auto abt_cont extra_skill_text">
            <h2 style={{ color: "rgb(203, 178, 106); line-height: 1.5" }}>
              SOFT SKILLS
            </h2>
            <h4 class="text-start text-white">
              <ul>
                <li>
                  Communication &amp; Interpersonal skills
                  <h6 class="ms-5 mt-2">
                    Have the ability to successfully express the desired message
                    while keeping the listener engaged.
                  </h6>
                </li>
                <li>
                  Public speaking skills
                  <h6 class="ms-5 mt-2">
                    {" "}
                    Have substantial public speaking experience in the form of
                    event hosting and presenting presentations in front of big
                    groups. Participated in several debate and MUN competitions,
                    which aided in the development of these talents.{" "}
                  </h6>
                </li>
                <li>
                  Leadership &amp; Management skills
                  <h6 class="ms-5 mt-2">
                    {" "}
                    Skilled in organising others to achieve a common objective
                    and motivating the team to achieve the desired result. Can
                    organise and communicate properly in order to help a team or
                    project.{" "}
                  </h6>
                </li>
                <li>
                  Quick &amp; Visual Learner
                  <h6 class="ms-5 mt-2">
                    I am a strong visual learner who is driven to tackle
                    challenges and find an efficient solution rapidly.
                  </h6>
                </li>
                <li>
                  {" "}
                  Effective Problem Solver
                  <h6 class="ms-5 mt-2">
                    {" "}
                    I have the capability to solve problems and determining the
                    cause of the problem. Identifying, prioritizing, and
                    selecting alternatives for a solution; and implementing a
                    solution.
                  </h6>
                </li>
              </ul>
            </h4>
          </div>
        </motion.div>
      )}
     

    </div>
  );
}
