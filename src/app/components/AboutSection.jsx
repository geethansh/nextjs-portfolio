"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import HoverImage from "./HoverImage/HoverImage";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";




const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
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
      <ul className="list-disc pl-2 ">
        <li className=" flex gap-3">• Java Full Stack Developement
        <a href="/Certificates/JAVA_FULL_STACK-Geethansh_P-1.png" target="_blank" rel="noopener noreferrer" title="View">
        <EyeIcon className="h-10 w-10 text-[#ADB7BE]  top-1/2 left-1/2 " />
</a>
        </li>
        <li className=" flex gap-3">• Data Structures and Algorithms with Java
        <a href="javascript:void(0)" rel="noopener noreferrer" title="In Progress...." >
        <EyeIcon className="h-10 w-10 text-[#ADB7BE]  top-1/2 left-1/2 " />
</a>
        </li>
        <li className=" flex gap-3">• Electronic Arts SWE Virtual Experience
        <a href="/Certificates/a77WE3de8qrxWferQ_Electronic Arts_uyKZMfjqsET4CnAjq_1706640573343_completion_certificate-1.png" target="_blank" rel="noopener noreferrer" title="View">
        <EyeIcon className="h-10 w-10 text-[#ADB7BE]  top-1/2 left-1/2 " />
</a> </li>
        <li className=" flex gap-3">• J.P. Morgan Chase SWE Virtual Experience
        <a href="/Certificates/R5iK7HMxJGBgaSbvk_J.P. Morgan_uyKZMfjqsET4CnAjq_1703774645811_completion_certificate-1.png" target="_blank" rel="noopener noreferrer" title="View">
        <EyeIcon className="h-10 w-10 text-[#ADB7BE]  top-1/2 left-1/2 " />
</a></li>    

        <li className=" flex gap-3">• HackerRank Problem Solving
        <a href="/Certificates/PS.png" target="_blank" rel="noopener noreferrer" title="View">
        <EyeIcon className="h-10 w-10 text-[#ADB7BE]  top-1/2 left-1/2 " />
</a></li>

<li className=" flex gap-3">• HackerRank SWE Intern
<a href="/Certificates/HR SWE INT.png" target="_blank" rel="noopener noreferrer" title="View">
<EyeIcon className="h-10 w-10 text-[#ADB7BE]  top-1/2 left-1/2 " />
</a></li>  
      </ul>
    ),
  },

  {
    title: "Interests",
    id: "interest",
    content: (
      <ul className="list-disc pl-2">
        <li>Open Source contribution</li>
        <li>Artificial Intelligence & Machine Learning</li>
        <li>Game Design and Developement</li>
        <li>Fitness</li>      
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
            Hello, I&apos;m a self-taught committed full-stack developer with experience in Java,
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
            <TabButton
              selectTab={() => handleTabChange("interest")}
              active={tab === "interest"}
            >
              {" "}
              Interests{" "}
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
