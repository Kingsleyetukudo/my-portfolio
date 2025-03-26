import ProjectCard from "./ProjectCard";
import project2 from "../images/project-2.png";
import project1 from "../images/project-1.png";
import project3 from "../images/project-3.png";
import project4 from "../images/project-4.png";
import project5 from "../images/project-5.png";
import project6 from "../images/project-6.png";

const works = [
  {
    imgSrc: project1,
    title: "Full stack mini-social app",
    tags: ["API", "Firebase", "Vuejs", "Development"],
    projectLink: "https://ikanchat.netlify.app/",
  },
  {
    imgSrc: project2,
    title: "School Management System",
    tags: ["API", "Development", "Nodejs", "Vuejs"],
    projectLink: "https://schoolistix.netlify.app/",
  },
  {
    imgSrc: project3,
    title: "Simple Dashboard",
    tags: ["Development", "Reactjs"],
    projectLink: "https://tasknownow.netlify.app/",
  },
  {
    imgSrc: project4,
    title: "Country Flag Website",
    tags: ["Web-design", "Development", "Reactjs", "API"],
    projectLink: "https://countriesdetailwithborders.netlify.app/",
  },
  {
    imgSrc: project5,
    title: "Employee Board",
    tags: ["JS", "Development"],
    projectLink: "https://employeetag.netlify.app/",
  },
  {
    imgSrc: project6,
    title: "Simple Bookmark Site",
    tags: ["Web-design", "Development"],
    projectLink: "https://bookmarklandingpagefrontend.netlify.app/",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, index) => (
            <ProjectCard
              key={index}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
