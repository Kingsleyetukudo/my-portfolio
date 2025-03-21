import figma from "../images/figma.svg";
import css3 from "../images/css3.svg";
import javascript from "../images/javascript.svg";
import nodejs from "../images/nodejs.svg";
import expressjs from "../images/expressjs.svg";
import mongodb from "../images/mongodb.svg";
import react from "../images/react.svg";
import tailwindcss from "../images/tailwindcss.svg";
import wordpress from "../images/wordpress.svg";
import elementor from "../images/elementor.svg";
import vue from "../images/vuejs.svg";
import git from "../images/git.svg";
import pinia from "../images/pinia.svg";
import redux from "../images/redux.svg";
import graphql from "../images/graphql.svg";
import firebase from "../images/firebase.svg";
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: figma,
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: css3,
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: javascript,
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: git,
    label: "Git Hub",
    desc: "Version Control",
  },
  {
    imgSrc: nodejs,
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: expressjs,
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: mongodb,
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: firebase,
    label: "Firebase",
    desc: "Database",
  },
  {
    imgSrc: pinia,
    label: "Pinia",
    desc: "State Management (VueJs)",
  },
  {
    imgSrc: redux,
    label: "Redux",
    desc: "State Management (ReactJs)",
  },
  {
    imgSrc: react,
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: vue,
    label: "Vue",
    desc: "Framework",
  },
  {
    imgSrc: graphql,
    label: "GraphQL",
    desc: "Alternative to REST APIs",
  },
  {
    imgSrc: tailwindcss,
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: wordpress,
    label: "WordPress",
    desc: "CMS",
  },
  {
    imgSrc: elementor,
    label: "Elementor",
    desc: "CMS Page Builder",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          {skillItem.map((item, index) => (
            <SkillCard
              key={index}
              imgSrc={item.imgSrc}
              label={item.label}
              desc={item.desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
