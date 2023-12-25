import React, { useState, useEffect } from "react";
import { VStack, Heading, Box, Button, useBreakpointValue } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gcpIcon from '../images/gcp-icon.jpg';
import eccIcon from '../images/ecc-icon.jpg';
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import {
  faGoogle,
  faAws,
  faMicrosoft,
  faMeta,
} from "@fortawesome/free-brands-svg-icons";

const fontAwesomeCertifications = [
  {
    title: "Google Cybersecurity Professional Certificate",
    icon: faGoogle
  },
  {
    title: "Google Data Analytics Professional Certificate",
    icon: faGoogle
  },
  {
    title: "Meta Front-End Developer Professional Certificate",
    icon: faMeta
  },
  {
    title: "Meta Back-End Developer Professional Certificate",
    icon: faMeta
  },
  {
    title: "AWS Cloud Solutions Architect Professional Certificate",
    icon: faAws
  },
  {
    title: "Microsoft Azure Security Engineer Professional Certificate",
    icon: faMicrosoft
  },
];

const nonFontAwesomeCertifications = [
  {
    title: "Google Cloud Data Engineering, Big Data, and Machine Learning",
    icon: gcpIcon,
  },
  {
    title: "EC-Council Cybersecurity Attack and Defense Specialization",
    icon: eccIcon,
  },
];

const getCertificationLink = (title) => {
  switch (title) {
    case "Google Cybersecurity Professional Certificate":
      return "https://coursera.org/share/46872d128018b1d023c6192d1e5c3b7b";
    case "Google Data Analytics Professional Certificate":
      return "https://coursera.org/share/69dabd0a27e62df060e8071d4c2d178a";
    case "Meta Front-End Developer Professional Certificate":
      return "https://coursera.org/share/f92b4cce28cbf4f954585e71d5de9cc4";
    case "Meta Back-End Developer Professional Certificate":
      return "https://coursera.org/share/c906b1a943859c5f056b6a4660dea3e6";
    case "AWS Cloud Solutions Architect Professional Certificate":
      return "https://coursera.org/share/21f2a643e29abb56e33a72b1db581a07";
    case "Microsoft Azure Security Engineer Professional Certificate":
      return "https://coursera.org/share/d90eeede62f103ea15239ff94686bb75";
    case "Google Cloud Data Engineering, Big Data, and Machine Learning":
      return "https://coursera.org/share/661cc71eaa597d2f6d9f43517f2b82a6";
    case "EC-Council Cybersecurity Attack and Defense Specialization":
      return "https://coursera.org/share/fa05e40c7eed6b3c9a0ddcd82fcf451c";
    default:
      return "#";
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const CertificationsSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Set isDarkMode to true as the default
  const [showButton, setShowButton] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = document.documentElement.scrollHeight - window.innerHeight - 20;
      setShowButton(window.scrollY >= scrollThreshold);
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
      mt={8}
      mb={8}
    >
      <VStack spacing={8} textAlign="center" mt={8}>
        <Heading as="h1" color={isDarkMode ? "white" : "black"} id="certifications-section">
          Certifications
        </Heading>
        <VStack spacing={4} w="100%" maxW={isMobile ? "460px" : "540px"}>
          {fontAwesomeCertifications.map((certification, index) => (
            <a
              href={getCertificationLink(certification.title)}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <Box
                borderWidth="1px"
                borderRadius="lg"
                p={4}
                borderColor={isDarkMode ? "white" : "black"}
                display="flex"
                justifyContent="center"
                alignItems="center"
                transition="transform 0.3s ease-in-out"
                _hover={{ transform: "scale(1.1)" }}
                w={isMobile ? "85%" : "100%"}
                mx={isMobile ? "auto" : 0}
              >
                <VStack spacing={2}>
                  <Heading as="h3" color={isDarkMode ? "white" : "black"} size={isMobile ? "md" : "lg"} mb={2}>
                    {certification.title}
                  </Heading>
                  <FontAwesomeIcon icon={certification.icon} color={isDarkMode ? "#CDCDCD" : "#696969"} size={isMobile ? "lg" : "2x"} />
                </VStack>
              </Box>
            </a>
          ))}
          {nonFontAwesomeCertifications.map((certification, index) => (
            <a
              href={getCertificationLink(certification.title)}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <Box
                borderWidth="1px"
                borderRadius="lg"
                p={4}
                borderColor={isDarkMode ? "white" : "black"}
                display="flex"
                justifyContent="center"
                alignItems="center"
                transition="transform 0.3s ease-in-out"
                _hover={{ transform: "scale(1.1)" }}
                w={isMobile ? "85%" : "100%"}
                mx={isMobile ? "auto" : 0}
              >
                <VStack spacing={2}>
                  <Heading as="h3" color={isDarkMode ? "white" : "black"} size={isMobile ? "md" : "lg"} mb={2}>
                    {certification.title}
                  </Heading>
                  <img src={certification.icon} alt="Icon" width={isMobile ? 26 : 40} height={isMobile ? 32 : 42} />
                </VStack>
              </Box>
            </a>
          ))}

          <Box
            p={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
            w="100%"
          >
            <Heading as="h3" size="lg" color={isDarkMode ? "white" : "black"} my={2}>
            Never Stop Learning
          </Heading>
        </Box>
        {showButton && (
        <div
          style={{
            position: "fixed",
            bottom: "22%",
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
        <Button
          onClick={scrollToTop}
          colorScheme="white"
          color={isDarkMode ? "white" : "black"}
          variant="outline"
          size="lg"
          borderRadius="full"
          boxShadow="md"
          _hover={{
            transform: "translateY(-4px)",
            transition: "transform 0.3s ease-in-out",
            boxShadow: "lg",
          }}
        >
          Go to Top
       
        </Button>
      </VStack>
    </VStack>
  </FullScreenSection>
  );
};

export default CertificationsSection;
