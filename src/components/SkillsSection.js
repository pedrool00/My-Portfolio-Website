import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, useMediaQuery } from "@chakra-ui/react";
import Card from "./Card";

// Array of skill objects
const skills = [
  {
    title: "Cybersecurity",
    description: "Knowledgeable about cybersecurity frameworks...",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Full Stack",
    description: "Experienced in building robust and scalable web applications...",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Data Science and AI",
    description: "Skilled as a Data Scientist, with expertise in utilizing Excel...",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Elite Athlete",
    description: "I have been the Spanish national champion in the 800m...",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

// SkillsSection component
const SkillsSection = () => {
  const [isMobile] = useMediaQuery("(max-width: 767px)");

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      backgroundColor="#878787"
      isDarkBackground
      p={8}
      spacing={8}
    >
      {/* Heading */}
      <Heading as="h1" id="skills-section" color="white" textAlign="center">
        Skills
      </Heading>
      {/* Grid layout for projects */}
      <Box
        display="grid"
        gridTemplateColumns={
          isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 80%))"
        }
        gridGap={8}
        justifyContent="center"
      >
        {/* Render each project as a Card component */}
        {skills.map((skill) => (
          <Card
            key={skill.title}
            title={skill.title}
            description={skill.description}
            imageSrc={skill.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default SkillsSection;
