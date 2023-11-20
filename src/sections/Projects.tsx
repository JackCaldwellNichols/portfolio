import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/recipifier.png",
      projectName: "Recipifier",
      projectLink:
        "https://recipifier-git-main-jackcaldwellnichols.vercel.app/",
      projectDescription:
        "A fully responsive web application, consuming data from the The Meal DB, providing a user with access to meal recipes, and the ability to search and filter them. User authentication via AuthJS and Google OAth also incorporated to provide a better UX.",
      projectTech: [
        "Typescript",
        "NextJS",
        "AuthJS",
        "Tailwind",
        "RestAPI",
        "Google OAuth",
        "The Meal DB",
      ],
      projectExternalLinks: {
        github: "https://github.com/JackCaldwellNichols/recipifier",
        externalLink:
          "https://recipifier-git-main-jackcaldwellnichols.vercel.app/",
      },
    },
    {
      image: "/reaktamarkt.png",
      projectName: "Reaktia Markt",
      projectLink: "https://reaktiamarkt.netlify.app/",
      projectDescription:
        "A full stack e-commerce platform, fetching data from a third-party API on a front-end built with Reactjs, using Firebase for authentication and Redux for state management, as well as SCSS and Material UI for an interactive and smooth UX. Small api built with Nodejs and Express to handle payments via Stripe.",
      projectTech: [
        "React/Vite",
        "Javascript",
        "SCSS",
        "Redux",
        "Nodejs",
        "Expressjs",
        "Firebase",
        "Stripe",
        "Swiper",
        "Material UI",
      ],
      projectExternalLinks: {
        github: "https://github.com/JackCaldwellNichols/reaktia-markt",
        externalLink: "https://reaktiamarkt.netlify.app/",
      },
    },
    {
      image: "/ss.png",
      projectName: "The Solar System in 3D",
      projectLink: "https://solar-system-in-three-dimensions.netlify.app/",
      projectDescription:
        "This is an educative web application built with NextJS and Typescript that allows a user to explore our solar system in three dimensions. There are is also information on each planet within the Solar System, and the use has the ability to take a tour and learn a thing or two!",
      projectTech: [
        "React/Vite",
        "React Three Fiber",
        "React Three Drei",
        "Javascript",
        "SCSS",
        "MaterialUi",
      ],
      projectExternalLinks: {
        github: "https://github.com/JackCaldwellNichols/3D-solar-system",
        externalLink: "https://solar-system-in-three-dimensions.netlify.app/",
      },
    },
    {
      image: "/movies.png",
      projectName: "React Movies",
      projectLink: "https://github.com/JackCaldwellNichols/react-movies",
      projectDescription:
        "A full stack web application built using the MERN stack, and incorporating the TMDB for API calls. Based on the Netflix UI for a smooth and interactive UX.",
      projectTech: [
        "React/Vite",
        "ReactJS",
        "MongoDB",
        "NodeJS",
        "Javascript",
        "SCSS",
        "ExpressJS",
        "Bcrypt",
        "REST API's",
        "TMDB",
      ],
      projectExternalLinks: {
        github: "https://github.com/JackCaldwellNichols/react-movies",
        externalLink: "https://reactmovies-movifiy.netlify.app",
      },
    },
    {
      image: "/restcountries.png",
      projectName: "React Rest Countries",
      projectLink:
        "https://github.com/JackCaldwellNichols/react-rest-countries/tree/main",
      projectDescription:
        "A full stack, responsive application built with Python/Flask for a robust backend, connected to a Front End UI built with React.js. The front-end is designed on a popular travel web page, and the applciation offers information on all countries of the world. A beutifully responsive application, using React Bootstrap for style, as well as incorporating API's such as Unsplash for images, and Rest Countries for content. On top of thhat, React three/fiber and Drei were used for some 3D imagery.",
      projectTech: [
        "React/Vite",
        "Python",
        "Flask",
        "Javascript",
        "React Bootstrap",
        "JSON Webtoken",
        "State Management",
        "SQL Alchemy",
        "Material UI",
        "React three",
      ],
      projectExternalLinks: {
        github: "https://github.com/JackCaldwellNichols/the-book-corner",
        externalLink:
          "https://6532bc5b635761128c5f0ba7--shimmering-puffpuff-c655d4.netlify.app/",
      },
    },
  ];
  return (
    <div className="projects" id="experience">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <Link
                    href={projectExternalLinks.externalLink}
                    target="_blank"
                  >
                    <div className="project-image-overlay"></div>
                  </Link>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
