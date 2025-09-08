"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import github from "@/assets/icons/github.svg";
import linkedin from "@/assets/icons/linkedin.svg";
import { motion } from "motion/react";
import julee from "@/assets/images/julee.jpg";
import ExperienceCard from "@/components/ExperienceCard";
import aceny from "@/assets/images/aceny.png";
import gwn from "@/assets/images/gwn.jpg";
import ProjectCard from "@/components/ProjectCard";
import weekly from "@/assets/images/weekly.png";
import cs161 from "@/assets/images/cs161.jpg";

const experiences = [
  {
    position: "Project Lead",
    company: "Alliance for Clean Energy, New York",
    time: "Jan 2025 - May 2025",
    description:
      "As Project Lead, I guided a team of five software developers and a product designer in building a full-stack web application for ACE NY. I structured the project around Agile sprints, promoted a collaborative workflow, and consistently reviewed pull requests to maintain code quality. Acting as the main bridge between the client and development team, I led weekly meetings to translate client needs into actionable goals and kept the project aligned with their vision.",
    photo: aceny,
    webLink: "https://ace-ny.vercel.app/",
  },
  {
    position: "Full-Stack Web Developer",
    company: "Alliance for Clean Energy, New York",
    time: "Aug 2024 - Dec 2024",
    description:
      "In this role, I developed a full-stack React web app in TypeScript that showcased renewable energy projects across New York. I engineered an interactive Google Maps feature with custom markers, significantly improved performance by optimizing image queries, and designed using Styled Components. To enrich the platform’s dataset, I created a Python web scraper that consolidated project information from 1000+ records across multiple state databases.",
    photo: aceny,
    webLink: "https://ace-ny.vercel.app/",
  },
  {
    position: "Mobile App Developer",
    company: "Girls Write Now",
    time: "Jan 2024 - May 2024",
    description:
      "I built an iOS mobile app with Expo Router for Girls Write Now, granting users seamless access to an archive of more than 800 stories. My focus was on creating a smooth authentication flow by connecting the frontend and backend through SQL Supabase and ensuring new users had a frictionless onboarding experience. To elevate usability, I styled the app with React StyleSheets, following a designer’s hi-fidelity prototype to deliver a clean and engaging interface.",
    photo: gwn,
  },
];

const projects = [
  {
    title: "Weekly",
    description:
      "I am developing a full-stack web app that helps people stay connected by sharing weekly update videos within private circles. Using Figma for design and React with Tailwind CSS for implementation, I built a smooth, responsive interface. I integrated Firebase authentication, database, and storage to support user circles, videos, and comments. To improve performance and engagement, I leveraged React Query for real-time post and comment updates, ensuring a seamless flow of communication across the platform.",
    photo: weekly,
    time: "July 2025 - Present",
    techStack:
      "TypeScript, React, Tailwind CSS, Firebase, TanStack Query, Next.js, Git",
    webLink: "",
  },
  {
    title: "Secure File Sharing System",
    description:
      "I designed and built a secure file-sharing system in Go that provided end-to-end encryption for sensitive data transfers. The system implemented user authentication and file operations with Encrypt-then-MAC and public key encryption, ensuring both confidentiality and integrity. By incorporating cryptographic hashes and digital signatures, I strengthened the system’s ability to verify authenticity and prevent tampering. Through rigorous testing with the Gingko framework, I validated functionality and resilience against malicious attacks, improving overall security by 50%.",
    photo: cs161,
    time: "July 2024",
    techStack: "Go, Gingko, VS Code, Git",
    webLink: "",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="px-33 py-30">
        <div className="w-full h-121 flex justify-between items-center">
          {/* Introduction */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              {/* Animated Text */}
              <motion.div
                initial={{ opacity: 0, x: -50 }} // Start invisible and slightly offset
                animate={{ opacity: 1, x: 0 }} // Fade in and slide to final position
                transition={{ duration: 0.7, delay: 0.2 }} // Smooth timing and slight delay
              >
                <h1 className="text-5xl font-medium">
                  Hi, I&apos;m{" "}
                  <span className="text-julee-blue font-bold">Justin Lee</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }} // Start invisible and slightly offset
                animate={{ opacity: 1, x: 0 }} // Fade in and slide to final position
                transition={{ duration: 0.7, delay: 0.4 }} // Smooth timing and slight delay
              >
                <h2 className="text-3xl text-julee-grey">
                  &mdash; front-end developer, cal student, dog and cat
                  enthusiast.{" "}
                  <a
                    href="mailto:junseo@berkeley.edu"
                    className="text-julee-blue"
                  >
                    junseo@berkeley.edu
                  </a>
                </h2>
              </motion.div>
            </div>

            {/* Social Media Links */}
            <motion.div
              className="flex gap-10"
              initial={{ opacity: 0, x: -50 }} // Start invisible and slightly offset
              animate={{ opacity: 1, x: 0 }} // Fade in and slide to final position
              transition={{ duration: 0.7, delay: 0.7 }} // Smooth timing and slight delay
            >
              {/* Social Media Icons */}
              <a href="https://github.com/jjstnlee/" target="_blank">
                <Image src={github} alt="GitHub" width={62} height={62} />
              </a>
              <a href="https://www.linkedin.com/in/jjstnlee/" target="_blank">
                <Image src={linkedin} alt="LinkedIn" width={62} height={62} />
              </a>
            </motion.div>
          </div>

          {/* Headshot */}
          <Image
            src={julee}
            alt="julee"
            width={600}
            height={600}
            style={{ objectFit: "cover" }}
            className="w-[425px] h-[386px] rounded-2xl"
          />
        </div>
      </div>

      <div className="bg-julee-blue text-white h-full px-32 py-25 flex flex-col gap-20">
        <h1 className="text-5xl font-bold text-white">experience</h1>
        <div className="flex flex-col gap-10">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              position={exp.position}
              company={exp.company}
              time={exp.time}
              description={exp.description}
              photo={exp.photo}
              webLink={exp.webLink}
            />
          ))}
        </div>
      </div>

      <div className="bg-white text-black h-full px-32 py-25 flex flex-col gap-20">
        <h1 className="text-5xl font-bold text-julee-blue">projects</h1>
        <div className="flex flex-col gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              time={project.time}
              description={project.description}
              photo={project.photo}
              webLink={project.webLink}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
    </>
  );
}
