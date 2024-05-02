import React, { useRef, useEffect } from "react";
import Header from "../Header/Header";
import "./Experience.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import E0 from "../../data/E0.jpg";
import E1 from "../../data/E1.png";
import E2 from "../../data/E2.png";
import E3 from "../../data/E3.svg";
import E4 from "../../data/E4.png";

const items = [
  {
    id: 1,
    title: "ReactJS Development Intern @ThePortfolyo",
    semTitle:
      "Working as a React Developer Intern at ThePortfolyo.com, demonstrating proficiency and expertise in Front-End development.",
    img: E0,
    desc1:
      "1.Currently interning as a React Developer, collaborating closely with a mentor to execute tasks and projects.",
    desc2:
      "2.Actively contributing to the development of ThePortfolyo.com’s core products as a React Developer intern.",
    desc3:
      "3.Focusing on React development under the guidance of a dedicated mentor, while also adhering to strict data security protocols and professional conduct standards.",
    Link: "https://www.linkedin.com/in/arijit-char-241468217/",
    sdate: "04/2024",
    edate: "Present",
  },
  {
    id: 2,
    title: "Web Development Intern @Codeway Solutions",
    semTitle:
      "During this internship I had the opportunity to work on two exciting projects that showcased my skills and passion for web development.",
    img: E2,
    desc1:
      "1.Developed an E-Commerce Website using React, Node.js, Express.js and MongoDB, featuring seamless browsing, cart management, and secure checkout functionalities.",
    desc2:
      "2.Designed and implemented a Project Management Tool with React, Node.js, and MongoDB, enabling project creation, task assignment, and progress tracking for enhanced collaboration.",
    desc3:
      "3.Leveraged hands-on experience at Codeway Solutions to hone web development skills and tackle real-world challenges in a dynamic team environment.",
    Link: "https://mvp.microsoft.com/studentambassadors/certificate/7f3d5bed-3e0d-4a97-ba59-5e85b50c1650",
    sdate: "01/2024",
    edate: "02/2024",
  },
  {
    id: 3,
    title: "Frontend Web Development Intern @IBM",
    semTitle:
      "Spearheaded the development of Alphabet Safari, an educational website for children, during my Frontend Web Development internship at IBM.",
    img: E3,
    desc1:
      "1.Demonstrated proficiency in HTML, CSS, and JavaScript while adhering to IBM's guidelines to create a visually engaging and user-friendly website.",
    desc2:
      "2.Took on a leadership role within the team, guiding and collaborating with team members to implement interactive features, resulting in a dynamic and engaging learning platform.",
    desc3: "3.Recognized for project contributions.",
    Link: "https://drive.google.com/file/d/1A_3n-gdSlpKBX9U65jIMg3IFEppnim9j/view?usp=sharing",
    sdate: "06/2023",
    edate: "07/2023",
  },
  {
    id: 4,
    title: "Microsoft Student Ambassador Alpha",
    semTitle:
      "Student Ambassadors are a global group of campus leaders who are eager to help fellow students, create robust tech communities and develop technical and career skills for the future.",
    img: E1,
    desc1:
      "1.I actively spread awareness about Microsoft Learn as a valuable learning resource among my peers.",
    desc2:
      "2.I plan and host workshops and webinars to provide hands-on learning experiences for students interested in Microsoft technologies.",
    desc3:
      "3.I build and nurture a vibrant community of students interested in Microsoft technologies through engaging discussions and collaborative opportunities.",
    Link: "https://mvp.microsoft.com/studentambassadors/certificate/7f3d5bed-3e0d-4a97-ba59-5e85b50c1650",
    sdate: "01/2024",
    edate: "Present",
  },
  {
    id: 5,
    title: "DSA Lead @GDSC Calcutta University",
    semTitle:
      "GDSC, short for Google Developer Student Clubs, are student-led community groups focused on learning Google technologies and are managed by Google Developers.",
    img: E4,
    desc1:
      "1.Facilitate collaborative learning environments where students can discuss DSA concepts, solve problems together, and share resources.",
    desc2:
      "2.Offer workshops or webinars to teach fundamental DSA concepts, problem-solving strategies, and coding techniques.",
    desc3:
      "3.Arranged guest lectures and networking events with industry professionals to provide valuable insights and opportunities.",
    Link: "https://gdsc.community.dev/university-of-calcutta-kolkata/",
    sdate: "08/2023",
    edate: "Present",
  },
];

const Comp = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  return (
    <section>
      <div className="container">
        <div
          className="imagecont"
          ref={ref}
          style={{ height: "65vh", width: "33vw" }}
          data-cursorpointer={true}
        >
          <img src={item.img} alt="" />
        </div>
        <motion.div className="textcont" style={{ y }}>
          <div
            class="col-md-3 py-3 mt-3 project_card2 mx-auto project3_anim"
            id="project3"
          >
            <div class="project_intro mt-4">
              <h3 data-cursorpointer={true}>{item.title}</h3>
              <h4 data-cursorpointermini={true} style={{ fontSize: "0.8rem" }}>
                {item.semTitle}
              </h4>
            </div>
            <h5 class="text-center mx-2 my-3 project_desc">
              <h5 class="text-start">Achievements/Tasks</h5>
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
            <h6 class="project_tech_hd" style={{ fontSize: "1rem" }}>
              {item.sdate}-{item.edate}
            </h6>

            <center>
              <button
                class="btn btn_effect ms-4 p-2 my-1 project_links"
                style={{ float: "left", marginLeft: "2rem" }}
              >
                <a data-cursorpointer={true} href={item.Link}>
                  Certificate Link
                  <i class="fa-solid fa-arrow-right-long ms-1"></i>
                </a>
              </button>
            </center>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function Experience() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleXaxis = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="experience" ref={ref}>
      <div className="cursor"></div>

      <div className="header">
        <Header />
      </div>
      <div className="heading">
        <h1 style={{ margin: "0px", padding: "0px" }}>Experience</h1>
        <motion.div
          className="progBar"
          style={{ scaleX: scaleXaxis }}
        ></motion.div>
      </div>
      {items.map((item) => (
        <Comp item={item} key={item.id} />
      ))}
    </div>
  );
}
