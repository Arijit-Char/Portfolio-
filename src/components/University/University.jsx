import React from "react";
import "./University.scss";
import { motion } from "framer-motion";
import Header from "../Header/Header";
import Univ from "../../data/University.png";

export default function University() {
  return (
    <motion.div
      className="univ"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="cursor"></div>

      <div className="header">
        <Header />
      </div>

      <motion.div
        className="col-lg-4 univcus abt_cont edu_cont p-3 mt-2 me-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <i
          data-cursorpointer={true}
          className="fa-solid fa-user-graduate mt-2 mb-3"
          style={{ color: "rgb(203, 178, 106)", fontSize: "50px" }}
        ></i>
        <h5 data-cursorpointermini={true}>2021-2025</h5>
        <h5 data-cursorpointermini={true}>UNDER-GRADUATION (B.Tech)</h5>
        <h4 data-cursorpointermini={true} className="text-white">
          Information Technology
        </h4>
        <h6 data-cursorpointermini={true}>
          GPA - 8.45 / 10 (till 4th Semester)
        </h6>
        <h5
          data-cursorpointermini={true}
          style={{ color: "white", fontSize: "1.3rem", fontWeight: "700" }}
        >
          University of Calcutta
        </h5>
        <img style={{ width: "6.5rem" }} src={Univ} alt="" />
        <h5 className="text-start text-light mt-2">
          <ul style={{ lineHeight: "1.5" }}>
            <li data-cursorpointermini={true} style={{ listStyle: "none" }}>
              A third year student pursuing Information Technology at Calcutta
              University.
            </li>
          </ul>
        </h5>
      </motion.div>
    </motion.div>
  );
}
