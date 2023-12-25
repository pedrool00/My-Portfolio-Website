import React, { useState, useEffect } from "react";
import { Avatar, Heading, VStack, Button } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const LandingSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Set isDarkMode to true as the default
  const [showButton, setShowButton] = useState(true);
  const greeting = "Hello, this is Pedro!";
  const bio1 = "I am a Cybersecurity professional, specialist in Ethical Hacking.";
  const bio2 = "I am also a self-taught Full-Stack Developer and Data Scientist.";
  const bio3 = "Passionate about sports; Elite Track and Field Athlete.";

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 10; // Adjust this value as needed
      setShowButton(window.scrollY <= scrollThreshold);
    };

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
      backgroundColor={isDarkMode ? "#505050" : "#f0f0f0"}
    >
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
      {showButton && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            right: "1rem",
            transform: "translateY(-50%)",
            marginRight: "1rem",
          }}
        >
          <Button
            onClick={handleToggle}
            backgroundColor={isDarkMode ? "#505050" : "#f0f0f0"}
            color={isDarkMode ? "white" : "black"}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                border: `2px solid ${isDarkMode ? "white" : "black"}`,
                borderRadius: "50%",
                width: "2rem",
                height: "2rem",
              }}
            >
              <FontAwesomeIcon icon={faLightbulb} color={isDarkMode ? "white" : "black"} />
            </div>
          </Button>
        </div>
      )}
    </FullScreenSection>
  );
};

export default LandingSection;

