import React, { useState, useEffect } from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const LandingSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Set isDarkMode to true as the default
  const [showButton, setShowButton] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
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
              top: "25%",
              right: "0.1rem",
              transform: "translateY(-50%)",
              marginRight: "0.1rem",
            }}
          >
            <button
              onClick={handleToggle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                backgroundColor: isDarkMode ? "#505050" : "#f0f0f0",
                color: isDarkMode ? "white" : "black",
                borderRadius: "50%",
                width: "2rem",
                height: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `2px solid ${isDarkMode ? "white" : "black"}`,
                cursor: "pointer",
                padding: 0,
                outline: "none",
                marginRight: "1rem",
                transition: "transform 0.3s",
                transform: isHovered ? "scale(1.1)" : "scale(1)",
              }}
            >
              <FontAwesomeIcon
                icon={faLightbulb}
                color={isDarkMode ? "white" : "black"}
              />
            </button>
          </div>
        )}
      </FullScreenSection>
    );
};

export default LandingSection;

