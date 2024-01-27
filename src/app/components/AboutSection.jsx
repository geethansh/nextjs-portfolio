"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import HoverImage from "./HoverImage/HoverImage";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
        <div>
          <HoverImage src="/images/icons8-java-480.png" alt="Java" />
        </div>
        <div>
          <HoverImage
            src="/images/icons8-react-a-javascript-library-for-building-user-interfaces-96.png"
            alt="ReactJS"
          />
        </div>
        <div>
          <HoverImage
            src="/images/icons8-javascript-480.png"
            alt="JavaScript"
          />
        </div>
        <div>
          <HoverImage src="/images/icons8-html5-480.png" alt="HTML5" />
        </div>
        <div>
          <HoverImage src="/images/icons8-css-480.png" alt="CSS3" />
        </div>
        <div>
          <HoverImage
            src="/images/icons8-spring-boot-480.png"
            alt="Springboot"
          />
        </div>
        <div>
          <HoverImage src="/images/icons8-nextjs-480.png" alt="NextJS" />
        </div>
        <div>
          <HoverImage
            src="/images/icons8-amazon-web-services-480.png"
            alt="AWS"
          />
        </div>
        <div>
          <HoverImage src="/images/icons8-git-480.png" alt="Git" />
        </div>
        <div>
          <HoverImage src="/images/icons8-mysql-240.png" alt="MySQL" />
        </div>
        <div>
          <HoverImage
            src="/images/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png"
            alt="MongoDB"
          />
        </div>
        <div>
          <HoverImage src="/images/icons8-python-480.png" alt="Python" />
        </div>
        <div>
          <HoverImage src="/images/icons8-docker-240.png" alt="Docker" />
        </div>
        <div>
          <HoverImage
            src="/images/icons8-kubernetes-480.png"
            alt="Kubernetes"
          />
        </div>
      </div>
    ),
  },

  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Java Full Stack Developement</li>
        <li>DSA with Java</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <Image src="/images/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg" width={600} height={600} /> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 underline decoration-red-500">
            About Me
          </h2>
          <p className="text-base lg:text-lg">
            Hello, I'm a committed full-stack developer with experience in Java,
            ReactJS, MySQL, NextJS, and Spring Boot, among other technologies.
            Constantly improving my skills, I focus on creating efficient and
            user-friendly applications. I value collaboration and approach every
            project with a mindset of continuous learning in the ever-evolving
            landscape of software development.
          </p>
        </div>
        <div className="justify-center pl-5 text-2xl">
          <div className="flex flex-row justify-start mt-2">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              className=" "
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
