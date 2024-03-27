import React from "react";
import "./Hero.scss";
import video from "../../data/coding.mp4";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import FloatingButtons from "react-floating-buttons";
import Linkedin from "../../data/linkedin.png";
import Github from "../../data/github.png";
import X from "../../data/x.png";
import Instagram from "../../data/instagram.jpg";
import Gfg from "../../data/gfg.png";
import Leetcode from "../../data/leetcode.webp";
import { ReactTyped } from "react-typed";

let top = window.innerWidth <= 845 ? -4 : 3.25;
let left = window.innerWidth <= 845 ? 20 : 12;
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.3,
      staggerChildren: 0.1,
    },
  },
};

const textVariants2 = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 2,
    },
  },
  exit: {
    opacity: 0,
    x: "100vw",
  },
  hover: {
    scale: 1.2,
    textShadow: "0px 0px 8px rgb(255, 0, 0)",
  },
};
function Body() {
  const navigate = useNavigate();
  const handleButtonClick = (url) => {
    window.location.href = url;
  };
  return (
    <div className="hero">
      <div className="cursor"></div>

      <div className="video">
        <video
          src={video}
          muted
          autoPlay
          loop
          controlsList="nodownload"
        ></video>
        <div></div>

        <motion.div
          className="text"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            variants={textVariants}
            data-cursorpointer={true}
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover="hover"
          >
            HI,I'M ARIJIT,
          </motion.h2>
          <motion.h1
            variants={textVariants2}
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover="hover"
            data-cursorpointer={true}
          >
            <ReactTyped
              strings={["Full Stack Web Developer", "Coder.", "Engineer."]}
              typeSpeed={150}
              loop
            />
          </motion.h1>
          <motion.div className="btn" variants={textVariants}>
            <motion.button
              onClick={() => navigate("/contact")}
              variants={textVariants}
              className="button button1"
              style={{
                border: "1px solid hsla(255, 80%, 49%, 0.76)",
                marginRight: "4.5rem",
              }}
              data-cursorpointer={true}
            >
              Contact Me
            </motion.button>
            <FloatingButtons
              buttonType="plus"
              dimension={55}
              buttonsList={[
                {
                  onClick: () => {
                    handleButtonClick(
                      "https://www.linkedin.com/in/arijit-char-241468217/"
                    );
                  },
                  src: Linkedin,
                },
                {
                  onClick: () => {
                    handleButtonClick("https://github.com/Arijit-Char");
                  },
                  src: Github,
                },
                {
                  onClick: () => {
                    handleButtonClick("https://leetcode.com/ARIJIT_CHAR/");
                  },
                  src: Leetcode,
                },
                {
                  onClick: () => {
                    handleButtonClick(
                      "https://auth.geeksforgeeks.org/user/arijitchar24/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"
                    );
                  },
                  src: Gfg,
                },
                {
                  onClick: () => {
                    handleButtonClick("https://twitter.com/char_arijit");
                  },
                  src: X,
                },
                {
                  onClick: () => {
                    handleButtonClick(
                      "https://www.instagram.com/a__ri__ji__t/"
                    );
                  },
                  src: Instagram,
                },
              ]}
              top={`${top}vh`}
              left={`${left}vw`}
              direction="circular"
              degree="360"
              itemBackgroundColor="white"
              backgroundColor="transparent"
              buttonColor="hsla(253, 100%, 55%, 0.91)"
            />
            <motion.button
              variants={textVariants}
              className="button button2"
              style={{ border: "1px solid hsla(255, 80%, 49%, 0.76)" }}
              data-cursorpointer={true}
            >
              <Link to="https://drive.google.com/file/d/1AW6C3sRD_pH4rogsFlwUJRy-N7QTnfCY/view?usp=sharing">
                Resume
              </Link>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Body;
