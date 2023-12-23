import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, useMediaQuery } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Cybersecurity",
    description:
      "Knowledgeable about cybersecurity frameworks, and able to implement security controls to ensure compliance with international regulations such as GDPR. Experienced identifying threats, risks, vulnerabilities, security hardening, threat modeling, and incident escalation and response. Proficient in the use of the Linux command line, SQL, Python, Sniffers, SIEM tools, and many more.",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Full Stack",
    description:
      "Experienced in building robust and scalable web applications. Proficient in developing and integrating user-friendly interfaces, designing efficient databases, and implementing server-side logic. On the front-end, I excel in HTML, CSS, and JavaScript frameworks such as React. As for the back-end, I am experienced using Node.js and Python, along with frameworks such as Django.",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Data Science and AI",
    description:
      "Skilled as a Data Scientist, with expertise in utilizing Excel, SQL, Python, and AI to unlock the value hidden in complex datasets. With a strong background in data analysis, statistical modeling, machine learning, and cloud platforms, I specialize in solving business problems and driving data-informed decision-making at scale. I am an effective communicator, capable of translating technical findings into meaningful insights.",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Elite Athlete",
    description:
      "I have been the Spanish national champion in the 800m, representing my country at the highest level. I am honored to have been sponsored by New Balance, a leading global brand. Additionally, in my collegiate career, I studied in the US at TXST University, where I was recognized as the Student-Athlete of the Year due to my athletic achievements. As the team captain, I did my best inspiring my teammates to excel both on and off the track.",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const SkillsSection = () => {
  const [isMobile] = useMediaQuery("(max-width: 767px)");

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      spacing={8}
    >
      <Heading as="h1" id="skills-section" textAlign="center">
        Skills
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={
          isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 80%))"
        }
        gridGap={8}
        justifyContent="center"
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default SkillsSection;
