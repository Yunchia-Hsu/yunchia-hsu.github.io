import React from "react";
import "./TProjects.css";
import project1 from "../assets/pong.png";
import project2 from "../assets/muyu.png";

const TProjects: React.FC = () => {
  const projects = [
    {
      title: "MuYu Tea Website",
      description:
        "Full-stack tea courses website.",
      image: project2,
      link: "https://github.com/Yunchia-Hsu/muyu-tea-website",
    },
    {
      title: "Pong Game",
      description: "Full-stack Pong Game with AI opponent.",
      image: project1,
      link: "https://github.com/Yunchia-Hsu/ft_transcendence",
    },
  ];
  return (
    <section id="tprojects" className="projects">
      <div className="project-content">
        <h1>TypeScript Projects</h1>
        <br />
        <div className="project-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              className="project-card"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {" "}
                view project
              </a>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TProjects;
