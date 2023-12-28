import React, { useState, useEffect } from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import ColorSwapButton from "./ColorSwapButton";

const LandingSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showButton, setShowButton] = useState(true);

  const greeting = "Hello, this is Pedro!";
  const bio1 = "I am a Cybersecurity professional, specialist in Ethical Hacking.";
  const bio2 = "I am also a self-taught Full-Stack Developer and Data Scientist.";
  const bio3 = "Passionate about sports; Elite Track and Field Athlete.";

  // Toggle dark mode
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Handle scroll event
  const handleScroll = () => {
    const scrollThreshold = 10;
    setShowButton(window.scrollY <= scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground={isDarkMode}
      backgroundColor={isDarkMode ? "#505050" : "#d7d7d7"}
    >
      {/* Content */}
      <VStack spacing={4} textAlign="center" mt={20} mb={5}>
        <Avatar
          size="100%"
          name="Pedro Osorio López"
          src="https://0.gravatar.com/avatar/b3b2625d6092d896f839bc0b14849fae899afe37f857fbf4a66f1eb2a20e9c7e?size=256"
        />
        <Heading as="h1" size="lg" color={isDarkMode ? "white" : "black"} mx={10}>
          {greeting}
        </Heading>
        <Heading as="h2" size="sm" color={isDarkMode ? "white" : "black"} mx={10}>
          {bio1}
        </Heading>
        <Heading as="h2" size="sm" color={isDarkMode ? "white" : "black"} mx={10}>
          {bio2}
        </Heading>
        <Heading as="h2" size="sm" color={isDarkMode ? "white" : "black"} mx={10}>
          {bio3}
        </Heading>
      </VStack>

      {/* Color Swap Button */}
      {showButton && (
        <ColorSwapButton
          isDarkMode={isDarkMode}
          onClick={handleToggle}
          containerStyles={{
            position: "fixed",
            top: "30%",
            right: "0.1rem",
            transform: "translateY(-50%)",
            marginRight: "0.1rem",
          }}
        />
      )}
    </FullScreenSection>
  );
};

export default LandingSection;

