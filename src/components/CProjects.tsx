import React from "react";
import "./CProjects.css";

import project1 from "../assets/proprmemaybe.png";
import project2 from "../assets/webserver.png";
import project3 from "../assets/minishell.png";
import project4 from "../assets/so-long.png";

const TProjects: React.FC = () => {
  const projects = [
    {
      title: "Prompt Me Maybe in C",
      description:
        "Supercell AI Hackathon winning game: AI-Assisted Retro Ray-Casting shooting game.",
      image: project1,
      link: "https://github.com/Yunchia-Hsu/PromptMeMaybe",
    },
    {
      title: "Webserver in C++",
      description:
        " It is a lightweight, HTTP 1.1-compliant web server built from scratch in C++.",
      image: project2,
      link: "https://github.com/Yunchia-Hsu/webserv",
    },
    {
      title: "Minishell in C",
      description:
        "It is a A simplified bash-like shell in C.",
      image: project3,
      link: "https://github.com/Yunchia-Hsu/minishell",
    },
    {
      title: "Howlloween 2D game in C",
      description:
        "A 2D game written in C!.",
      image: project4,
      link: "https://github.com/Yunchia-Hsu/so_long",
    },
  ];
  return (
    <section id="cprojects" className="projects">
      <div className="project-content">
        <h1>C / C++ Projects</h1>
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
