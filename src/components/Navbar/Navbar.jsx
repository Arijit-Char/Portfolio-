import React from "react";
import Header from "../Header/Header";
import "./Navbar.scss";
import "./Anim.scss";
import logo from "../../data/Arijit Char-logos_transparent.png";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className="nav"
      variants={textVariants}
      initial="initial"
      animate="animate"
    >
      <Header />
      <div className="contant">
        <motion.img
          data-cursorpointer={true}
          className="logoimg"
          style={{ width: "15vw", position: "absolute", left: "15vw" }}
          src={logo}
          alt=""
        />
         <Link data-cursorpointer={true} className="adminbtn" to="/admin">Admin Login</Link>
      </div>
      <div className="social">
        <section id="sm" class="pad">
          <ul>
            <li>
              <a  href="https://www.linkedin.com/in/arijit-char-241468217/">
                <i
                  data-cursorpointer={true}
                  class="fab fa-linkedin-in"
                  style={{ fontSize: "2rem" }}
                ></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/a__ri__ji__t/">
                <i
                  data-cursorpointer={true}
                  class="fab fa-instagram"
                  style={{ fontSize: "2rem" }}
                ></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/Arijit-Char">
                <i
                  data-cursorpointer={true}
                  class="fa-brands fa-github"
                  style={{ fontSize: "2rem" }}
                ></i>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
}
