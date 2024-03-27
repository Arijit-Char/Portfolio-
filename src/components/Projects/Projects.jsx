import React, { useRef, useEffect } from "react";
import Header from "../Header/Header";
import "./Projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import img0 from "../../data/img0.png";
import img1 from "../../data/1.png";
import img2 from "../../data/2.png";
import img3 from "../../data/3.png";
import img4 from "../../data/4.png";
import img5 from "../../data/5.png";
import img6 from "../../data/6.png";
import img8 from "../../data/8.png";
import img9 from "../../data/9.png";
import img10 from "../../data/10.png";
import { FaHtml5 } from "react-icons/fa";
import { SiCsswizardry } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { SiMongoose } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

const items = [
  {
    id: 1,
    title: "Giggly Guru Grove",
    semTitle: "Kid’s Learning Platform",
    img: img0,
    techStacks: [
      <FaHtml5 />,
      <SiCsswizardry />,
      <IoLogoJavascript />,
      <DiMongodb />,
      <SiMongoose />,
      <SiExpress />,
      <FaReact />,
      <FaNodeJs />,
      <FaBootstrap />,
      <FaNpm />,
    ],
    desc1:
      "1.Developed a kids’ learning platform using MERN stack and Material UI",
    desc2:
      "2.Features included keypress-to-sound, text-to-voice, and a secure user signup system",
    desc3: "3.currently integrating Parental control feature",
    sourceCode: "https://github.com/Arijit-Char/HackNITR",
    Link: "https://gigglygurugrove.courses/",
  },

  {
    id: 2,
    title: "Portfolio Website",
    semTitle: "React and Framer Motion Based Portfolio Website",

    img: img2,
    techStacks: [
      <FaHtml5 />,
      <SiCsswizardry />,
      <IoLogoJavascript />,
      <FaReact />,
      <FaNpm />,
    ],
    desc1: "Fully responsive React Portfolio Website",
    desc2:
      "Created all the components from scratch using react and java script.",
    desc3:
      "Hand coded custom amination using css and Framer-Motion and making the website interactive.",
    sourceCode: "https://github.com/Arijit-Char/Portfolio-",
    Link: "https://github.com/Arijit-Char/Portfolio-",
  },
  {
    id: 3,
    title: "Food Delivery App",
    semTitle: "MERN Stack Food Delivery Dynamic Website",
    img: img1,
    techStacks: [
      <FaHtml5 />,
      <SiCsswizardry />,
      <IoLogoJavascript />,
      <DiMongodb />,
      <SiMongoose />,
      <SiExpress />,
      <FaReact />,
      <FaNodeJs />,
      <FaBootstrap />,
      <FaNpm />,
    ],
    desc1:
      "1.Developed a MongoDB-based food delivery app, leveraging Mongoose for seamless database interaction.",
    desc2:
      "2.Designed the app's front-end using ReactJS to create a user-friendly interface.",
    desc3:
      "3.Made RESTful API using Express.js to enable easy communication between the app's front-end and back-end.",
    sourceCode: "https://github.com/Arijit-Char/MERNFoodFrontEnd",
    Link: "https://645e03424051366e39d6f317--incredible-caramel-a602dc.netlify.app/",
  },
  {
    id: 5,
    title: "Mba Chaiwala Clone",
    semTitle: "React and Framer Motion Based Netflix Website",
    img: img4,
    techStacks: [
      <FaHtml5 />,
      <SiCsswizardry />,
      <IoLogoJavascript />,
      <FaReact />,
      <FaNpm />,
    ],
    desc1: "Fully Animated React Mba Chaiwala  Website",
    desc2:
      "Created all the components from scratch using react and java script.",
    desc3: "Used Framer Motion for animation",
    sourceCode: "https://github.com/Arijit-Char/MbaChaiwala_Clone",
    Link: "https://65c791dd37cc55750c320d8c--astonishing-pie-3b95c0.netlify.app/",
  },
  {
    id: 8,
    title: "Quotverse",
    semTitle: "Platform to Discover and Engage with Famous Quotes",
    img: img8,
    techStacks: [
      <FaHtml5 />,
      <SiCsswizardry />,
      <IoLogoJavascript />,
      <FaReact />,
      <SiRedux />,
      <FaNpm />,
    ],
    desc1: "Display a feed of quotes fetched from the quotable.io API.",
    desc2:
      "Implemented Like, Share and Comment feature. Specified section for Liked Quotes. Tranding Quote.",
    desc3:
      "Use Redux for global state management. Responsive for all Screen types.",
    sourceCode: "https://github.com/Arijit-Char/Quotverse",
    Link: "https://quotversebyarijit.netlify.app/",
  },
  {
    id: 10,
    title: "Animated Contact Page",
    semTitle:
      "Interactive and Visually Appealing Contact Page Web Application.",
    img: img10,
    techStacks: [
      <FaHtml5 />,
      <SiCsswizardry />,
      <IoLogoJavascript />,
      <FaReact />,
      <FaNpm />,
    ],
    desc1:
      "This project utilizes React for building user interfaces and Visme for animations.",
    desc2: "Google Sheets Integration",
    desc3: "Implemented custom form validation and submission functionality.",
    sourceCode: "https://github.com/Arijit-Char/Assessli-React-Assignment",
    Link: "https://assessliassignment.netlify.app/",
  },
  {
    id: 4,
    title: "Netflix Clone",
    semTitle: "React Based Netflix Website",
    img: img3,
    techStacks: [
      <FaHtml5 />,
      <SiCsswizardry />,
      <IoLogoJavascript />,
      <FaReact />,
      <FaNpm />,
      <FaBootstrap />,
    ],
    desc1: "Fully responsive React Netflix Website",
    desc2:
      "Created all the components from scratch using react and java script.",
    desc3: "Used API to fetch movie data",
    sourceCode: "https://github.com/Arijit-Char/Netflix_Clone",
    Link: "https://65c78fa1b9545378740413ff--merry-custard-232da2.netlify.app/",
  },

  {
    id: 6,
    title: "E-Commerce Website",
    semTitle: "Html & Css Based E-Commerce Static Website",
    img: img5,
    techStacks: [<FaHtml5 />, <SiCsswizardry />, <IoLogoJavascript />],
    desc1: "Fully responsive Html,Css & Java script Website",
    desc2:
      "A responsive design, ensuring the website is accessible across different devices and screen sizes.",
    desc3: "Static Front-End Website",
    sourceCode:
      "https://github.com/Arijit-Char/FIRST-WEB-DEVELOPMENT-PROJECTOJECT",
    Link: "https://arijit-char.github.io/FIRST-WEB-DEVELOPMENT-PROJECTOJECT/",
  },
  {
    id: 9,
    title: "Weather App",
    semTitle: "React and Node Based Weather App",
    img: img9,
    techStacks: [
      <FaReact />,
      <FaNodeJs />,
      <FaHtml5 />,
      <SiCsswizardry />,
      <IoLogoJavascript />,
      <FaNpm />,
    ],
    desc1: "Search for weather forecasts by city name or coordinates.",
    desc2:
      "Display current weather conditions including temperature, feels like temperature, weather description, humidity, and wind speed.",
    desc3: "Display weather forecast for the next few days.",
    sourceCode: "https://github.com/Arijit-Char/WeatherFrontend",
    Link: "https://weatherappbyarijit.netlify.app/",
  },
  {
    id: 7,
    title: "Note Taking App",
    semTitle: "React Based Note Taking Website",
    img: img6,
    techStacks: [
      <FaReact />,
      <FaHtml5 />,
      <SiCsswizardry />,
      <IoLogoJavascript />,
      <FaNpm />,
    ],
    desc1: "Create a note-taking app using ReactJS",
    desc2: "Created all the components from scratch using React Js.",
    desc3: "Static Front-End Website",
    sourceCode: "https://github.com/Arijit-Char/KeepNotesReact",
    Link: "https://chimerical-gaufre-a360ab.netlify.app/",
  },
];

const Pcomp = ({ item }) => {
  const refa = useRef();
  const { scrollYProgress } = useScroll({
    target: refa,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  return (
    <section>
      <div className="container">
        <div className="imagecont" ref={refa} data-cursorpointer={true}>
          <img src={item.img} alt="" />
        </div>
        <motion.div className="textcont" style={{ y }}>
          <div
            class="col-md-3 py-3 mt-3 project_card mx-auto project3_anim"
            id="project3"
          >
            <div class="project_intro mt-4">
              <h3 data-cursorpointer={true}>{item.title}</h3>
              <h4 data-cursorpointermini={true}>{item.semTitle}</h4>
            </div>
            <h5 class="text-center mx-2 my-3 project_desc">
              <h5 class="text-start">Key Features</h5>
              <h6
                class="text-start"
                style={{
                  "line-height": "1.25rem",
                  fontSize: "11px",
                  color: "white",
                }}
              >
                <ul>
                  <li data-cursorpointermini={true}>{item.desc1}</li>
                  <li data-cursorpointermini={true}>{item.desc2}</li>
                  <li data-cursorpointermini={true}>{item.desc3}</li>
                </ul>
              </h6>
            </h5>
            <h6 class="project_tech_hd">Technology Used</h6>
            <h3 class="mb-2 text-light">
              {item.techStacks.map((item) => {
                return <i>{item}</i>;
              })}
            </h3>
            <center>
              <button
                data-cursorpointer={true}
                class="btn btn_effect ms-4 p-2 my-1 project_links"
                style={{ float: "left", marginLeft: "2rem" }}
              >
                <a data-cursorpointer={true} href={item.Link}>
                  Live Preview
                  <i class="fa-solid fa-arrow-right-long ms-1"></i>
                </a>
              </button>
            </center>
            <center>
              <button
                data-cursorpointer={true}
                class="btn btn_effect me-4 p-2 my-1 project_links"
                style={{ float: "right", marginRight: "2rem" }}
              >
                <a data-cursorpointer={true} href={item.sourceCode}>
                  Source Code <i class="fa-solid fa-arrow-right-long ms-1"></i>
                </a>
              </button>
            </center>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const refa = useRef();
  const { scrollYProgress } = useScroll({
    target: refa,
    offset: ["end end", "start start"],
  });

  const scaleXaxis = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" refa={refa}>
      <div className="cursor"></div>

      <div className="header">
        <Header />
      </div>
      <div className="heading">
        <h1 style={{ margin: "0px", padding: "0px" }}>Projects</h1>
        <motion.div
          className="progBar"
          style={{ scaleX: scaleXaxis }}
        ></motion.div>
      </div>
      {items.map((item) => (
        <Pcomp item={item} key={item.id} />
      ))}
    </div>
  );
}
