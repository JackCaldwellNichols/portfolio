import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/image1.png",
      projectName: "The Solar System in 3D",
      projectLink: "https://netlify.com",
      projectDescription:
        "This is an educative web application that allows a user to explore our solar system in three dimensions. There are is also information on each planet within the Solar System, and the use has the ability to take a tour and learn a thing or two!",
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
        externalLink: "https://sage-otter-e5ba16.netlify.app/",
      },
    },
    {
      image: "/image3.png",
      projectName: "Films4Geeks",
      projectLink: "https://netlify.com",
      projectDescription:
        "The final project in my bootcamp programme with the coding academy 4GeeksAcademy, we created, using user-stories to formulate our ideas, a full-stack interactive movie application. The applicaiton allows a user to have a user-profile where they can see/save their favourite movies, as well as search for movies, leave comments, watch trailers, and more...",
      projectTech: [
        "React",
        "Javascript",
        "Python",
        "Flask",
        "RestAPI",
        "CSS",
      ],
      projectExternalLinks: {
        github: "https://github.com/MireyaCR/Film4Geeks/tree/dev",
        externalLink: "https://sample-service-name-fa9s.onrender.com/",
      },
    },
    {
      image: "/image2.png",
      projectName: "The Wave Box",
      projectLink: "https://netlify.com",
      projectDescription:
        "A fully responsive landing page for a crossfit / training centre based in Madrid, The Wave Box. The page offers a user information on the location, prices, images of the centre, and a contact section for more information.",
      projectTech: [
        "React/Vite",
        "Javascript",
        "Ant Design",
        "MaterialUI",
        "SCSS",
        "Bootstrap"
      ],
      projectExternalLinks: {
        github: "https://github.com/JackCaldwellNichols/the-wave-page",
        externalLink: "https://644aa5a0c8e84203eb2b0dbd--candid-meringue-ef185c.netlify.app/#",
      },
    },
    {
      image: "/image4.png",
      projectName: "Super Hero Centre",
      projectLink: "https://github.com/JackCaldwellNichols/super-hero-center",
      projectDescription:
        "A full stack web application, offering a user the chance to delve into the world of superheroes - 563 to be precise. Built using MERN stack, and offering user interactivity to dynamically update their profile and account, as well as drawing information from external API's.",
      projectTech: [
        "React/Vite",
        "ReactJS",
        "MongoDB",
        "NodeJS",
        "Javascript",
        "SCSS",
        "ExpressJS",
        "Bcrypt",
        "REST API's"
      ],
      projectExternalLinks: {
        github: "https://github.com/JackCaldwellNichols/super-hero-center",
        externalLink: "https://herocentre.onrender.com/",
      },
    },
    {
      image: "/image4.png",
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
        "Stripe"
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
                  <div className="project-image-overlay"></div>
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
