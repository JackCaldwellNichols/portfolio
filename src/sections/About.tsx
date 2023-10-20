import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";
import {
  TbBrandJavascript,
  TbBrandReact,
  TbBrandPython,
  TbBrandCss3,
  TbBrandTypescript,
  TbBrandNextjs,
  TbBrandMongodb,
  TbBrandBootstrap,
  TbBrandFirebase,
} from "react-icons/tb";

import { SiFlask, SiTailwindcss } from "react-icons/si";

import { FaNodeJs } from "react-icons/fa";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hi there! My name is Jack, and I am passionate about creating
            digital content for the web. My interest in web development was
            sparked in 2018 when I first had the idea of creating a platform for
            users to find information about all of the mountains in my home
            country, Scotland, called The Ben Bagger. The idea stuck with me,
            and I was intrigued as to how I could make it a reality.
          </p>
          <p className="about-grid-info-text">
            Fast-forward a few years, and I started to put my interest into
            practice, through introductory courses, before diving into an
            intensive programme with 4GeeksAcademy, an award-winning coding
            academy. Here I was able to immerse myself in the world of
            programming and web-development.
          </p>
          <p className="about-grid-info-text">
            I have since been working with companies and NGO's to design and
            develop applications and web pages. I have expanded my skillset,
            through continuously building and developing applications for mobile
            and web on a daily basis, using a wide variety of programming
            languages and technologies.
          </p>
          <p className="about-grid-info-text">
            Below are some I am comfotable with and have been working with
            recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">
              <TbBrandReact className="item-icon" />
              <p>React</p>
            </li>
            <li className="about-grid-info-list-item">
              <TbBrandJavascript className="item-icon" />
              <p>Javascript</p>
            </li>
            <li className="about-grid-info-list-item">
              <TbBrandNextjs className="item-icon" />
              <p>Next.js</p>
            </li>
            <li className="about-grid-info-list-item">
              <TbBrandReact className="item-icon" />
              <p>React Native</p>
            </li>
            <li className="about-grid-info-list-item">
              <TbBrandMongodb className="item-icon" />
              <p>MongoDB</p>
            </li>
            <li className="about-grid-info-list-item">
              <FaNodeJs className="item-icon" />
              <p>Node.js</p>
            </li>
            <li className="about-grid-info-list-item">
              <TbBrandFirebase className="item-icon" />
              <p>Firebase</p>
            </li>
            <li className="about-grid-info-list-item">
              <TbBrandPython className="item-icon" />
              <p>Python</p>
            </li>
            <li className="about-grid-info-list-item">
              <SiFlask className="item-icon" />
              <p>Flask</p>
            </li>
            <li className="about-grid-info-list-item">
              <TbBrandCss3 className="item-icon" />
              <p>CSS/SCSS</p>
            </li>
            <li className="about-grid-info-list-item">
              <TbBrandTypescript className="item-icon" />
              <p>Typescrript</p>
            </li>
            <li className="about-grid-info-list-item">
              <SiTailwindcss className="item-icon" />
              <p>Tailwind</p>
            </li>
            <li className="about-grid-info-list-item">
              <TbBrandBootstrap className="item-icon" />
              <p>Bootstrap</p>
            </li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image
              src="/Jack.png"
              alt="profile"
              fill
              style={{ objectFit: "cover", filter: "grayscale(100)" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
