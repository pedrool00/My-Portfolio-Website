import React from "react";
import { Avatar, Heading, VStack, useMediaQuery } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, this is Pedro!";
const bio1 = "I am a Cybersecurity professional, specialist in Ethical Hacking.";
const bio2 = "I am also a self-taught Full-Stack Developer and Data Scientist.";
const bio3 = "Passionate about sports; Elite Track and Field Athlete.";

const LandingSection = () => {
  const [isMobile] = useMediaQuery("(max-width: 767px)");

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <VStack spacing={4} textAlign="center" mt={32} mb={10}>
        <Avatar
          size="100%"
          name="Pedro Osorio López"
          src="https://0.gravatar.com/avatar/b3b2625d6092d896f839bc0b14849fae899afe37f857fbf4a66f1eb2a20e9c7e?size=256"
        />
        <Heading as="h1" size={isMobile ? "lg" : "2xl"} mx={10}>
          {greeting}
        </Heading>
        <Heading as="h2" size={isMobile ? "sm" : "lg"} mx={10}>
          {bio1}
        </Heading>
        <Heading as="h2" size={isMobile ? "sm" : "lg"} mx={10}>
          {bio2}
        </Heading>
        <Heading as="h2" size={isMobile ? "sm" : "lg"} mx={10}>
          {bio3}
        </Heading>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;

