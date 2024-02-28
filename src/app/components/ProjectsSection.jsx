"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
//import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Fitness Ecommerce Website (In Progress)",
    description: "This Full Stack Ecommerce Website which revolves around fitness is being made with ReactJS, Java SpringBoot and MySQL as its core tech stack.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/geethansh/ShredUp-Full-Stack-Ecom-Web-Store",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "3D Shirt Designer with AI",
    description: "Create your unique and exclusive shirt with a brand-new 3-D customization tool made using three.js and OpenAI API to create images from prompts.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/geethansh/3D-Shirt-Designer",
    previewUrl: "https://3-d-shirt-designer.vercel.app/",
  },
  {
    id: 3,
    title: "IntelliSum Summarizer",
    description: "An open-source URL/Article summarizer that transforms lengthy text into clear and concise summaries using the GPT-4 summarizer API.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/geethansh/IntelliSum",
    previewUrl: "https://intelli-sum.vercel.app/",
  },
  {
    id: 4,
    title: "Next.js Portfolio Website",
    description: "This is a portfolio website built with Next.js and Tailwind CSS. It showcases my skills, projects, and achievements in an elegant and responsive design.",
    image: "/images/projects/4.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Simulative drone control with gestures",
    description: "Developed CNN-based gesture recognition for simulated drone control, integrating movement commands for user interaction.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/geethansh/Gesture-Controlled-Quadcopter-using-AI",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-4 underline decoration-red-500">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 pt-4">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              showPreviewIcon={project.id !== 5 && project.id!==1}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
