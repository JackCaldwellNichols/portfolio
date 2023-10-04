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
      image: "/hd.png",
      projectName: "Hot Deluge",
      projectLink: "https://hotdeluge.netlify.app/",
      projectDescription:
        "A fully responsive landing page for an altenative, Madrid based rock band. Built using ReactJS, with SCSS, I had to create a small api to consume data to be rendered for each member of the band in the bio section. To provide a better UX I used FramerMotion for smooth transitions and I also incorporated EmailJS to facilitate direct contact with the group.",
      projectTech: [
        "React/Vite",
        "Javascript",
        "SCSS",
        "FramerMotion",
        "SCSS",
        "Responsive Design",
      ],
      projectExternalLinks: {
        github: "https://github.com/JackCaldwellNichols/the-wave-page",
        externalLink: "https://hotdeluge.netlify.app/",
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
      image: "/image5.png",
      projectName: "The Book Corner",
      projectLink: "https://github.com/JackCaldwellNichols/the-book-corner",
      projectDescription:
        "A full stack E-commerce site, allowing a user to browse a selection of books and purchase them. A user can also leave book reviews, modify their profile, and search books that the store has on offer.",
      projectTech: [
        "React/Vite",
        "ReactJS",
        "MongoDB",
        "NodeJS",
        "Javascript",
        "SCSS",
        "ExpressJS",
        "Redux",
        "Firebase",
        "Stripe",
      ],
      projectExternalLinks: {
        github: "https://github.com/JackCaldwellNichols/the-book-corner",
        externalLink: "https://bookcorner.onrender.com",
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
