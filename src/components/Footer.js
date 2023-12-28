import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, VStack, useMediaQuery } from "@chakra-ui/react";

// Array of contact information
const Contact = [
  {
    icon: faEnvelope,
    url: "mailto:pol.2000.po@gmail.com",
  },
  {
    icon: faWhatsapp,
    url: "https://api.whatsapp.com/send?phone=644394941",
  },
];

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const textStyle = {
    fontSize: isMobile ? "0.8rem" : "1rem",
  };

  return (
    <Box backgroundColor="#18181b" id="contact-section">
      <footer>
        <VStack
          margin="0 auto"
          px={6}
          py={4}
          color="white"
          alignItems="center"
          maxWidth={{ base: "100%", sm: "640px", md: "768px", lg: "1024px" }}
        >
          {/* HStack for contact information */}
          <HStack
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
          >
            {/* VStack for "Contact Me" text and contact icons */}
            <VStack alignItems="center" spacing={2}>
              <p style={textStyle}>Contact Me:</p>
              <HStack spacing={4}>
                {/* Mapping over the Contact array to display contact icons */}
                {Contact.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredIcon(index)}
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    {/* FontAwesomeIcon component for contact icons */}
                    <FontAwesomeIcon
                      icon={contact.icon}
                      size={isMobile ? "lg" : "2x"}
                      style={{
                        transition: "transform 0.3s ease-in-out",
                        willChange: "transform",
                        transform:
                          hoveredIcon === index ? "scale(1.2)" : "scale(1)",
                      }}
                    />
                  </a>
                ))}
              </HStack>
            </VStack>
            
            {/* VStack for author name and copyright */}
            <VStack alignItems="center">
              <p style={textStyle}>Pedro Osorio Lopez</p>
              <p style={textStyle}>© 2023</p>
            </VStack>
          </HStack>
        </VStack>
      </footer>
    </Box>
  );
};

export default Footer;
