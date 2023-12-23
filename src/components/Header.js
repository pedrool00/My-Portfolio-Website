import React, { useEffect, useState, useRef } from "react";
import thmIcon from '../images/thm-icon.jpg';
import courseraIcon from '../images/coursera-icon.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, useMediaQuery } from "@chakra-ui/react";

const faSocials = [
  {
    icon: faInstagram,
    url: "https://www.instagram.com/pedro.o.l/",
  },
  {
    icon: faGithub,
    url: "https://github.com/pedrool00/",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/pedro-osorio-l%C3%B3pez-756809293/",
  },
];

const nonFaSocials = [
  {
    icon: thmIcon,
    url: "https://tryhackme.com/p/pol.2000.po",
  },
  {
    icon: courseraIcon,
    url: "https://www.coursera.org/user/fc9c959f7eb1d15f26afd997dae28429",
  }
]

const Header = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [hoveredFaIcon, setHoveredFaIcon] = useState(null);
  const [hoveredNonFaIcon, setHoveredNonFaIcon] = useState(null);

  const handleFaIconEnter = (index) => {
    setHoveredFaIcon(index);
  };

  const handleFaIconLeave = () => {
    setHoveredFaIcon(null);
  };

  const handleNonFaIconEnter = (index) => {
    setHoveredNonFaIcon(index);
  };

  const handleNonFaIconLeave = () => {
    setHoveredNonFaIcon(null);
  };

  const [hoveredNav, setHoveredNav] = useState(null);
  
  const handleNavEnter = (nav) => {
    setHoveredNav(nav);
  };
  
  const handleNavLeave = () => {
    setHoveredNav(null);
  };

  const handleClick = (anchor) => (e) => {
    e.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const headerRef = useRef(null);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY.current) {
        headerRef.current.style.transform = "translateY(-200px)";
      } else {
        headerRef.current.style.transform = "translateY(0)";
      }
      prevScrollY.current = currentScrollY;
      if (currentScrollY === 0) {
        headerRef.current.style.transform = "translateY(0)";
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      zIndex={9999}
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={10}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={3}>
              {faSocials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    transition: "transform 0.3s ease-in-out",
                    willChange: "transform",
                    display: "inline-block",
                    transform: `scale(${hoveredFaIcon === index ? 1.2 : 1})`,
                  }}
                  onMouseEnter={() => handleFaIconEnter(index)}
                  onMouseLeave={handleFaIconLeave}
                >
                  <FontAwesomeIcon icon={social.icon} size={isMobile ? "lg" : "2x"} />
                </a>
              ))}
              {nonFaSocials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    transition: "transform 0.3s ease-in-out",
                    willChange: "transform",
                    display: "inline-block",
                    transform: `scale(${hoveredNonFaIcon === index ? 1.2 : 1})`,
                  }}
                  onMouseEnter={() => handleNonFaIconEnter(index)}
                  onMouseLeave={handleNonFaIconLeave}
                >
                  <img
                    src={social.icon}
                    alt="Social Icon"
                    width={isMobile ? 24 : 36}
                    height={isMobile ? 24 : 36}
                  />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={4} style={{ flexDirection: isMobile ? "column" : "row", gap: isMobile ? "0.05rem" : "1rem" }}>
              <a
                href="#skills"
                onClick={handleClick("skills")}
                style={{
                  transition: "transform 0.3s ease-in-out",
                  willChange: "transform",
                  display: "inline-block",
                  transform: `scale(${hoveredNav === "skills" ? 1.2 : 1})`,
                  fontSize: isMobile ? "0.8rem" : "1rem",
                  marginBottom: isMobile ? "0.2rem" : 0,
                }}
                onMouseEnter={() => handleNavEnter("skills")}
                onMouseLeave={handleNavLeave}
              >
                Skills
              </a>
              <a
                href="#certifications"
                onClick={handleClick("certifications")}
                style={{
                  transition: "transform 0.3s ease-in-out",
                  willChange: "transform",
                  display: "inline-block",
                  transform: `scale(${hoveredNav === "certifications" ? 1.2 : 1})`,
                  fontSize: isMobile ? "0.8rem" : "1rem",
                  marginBottom: isMobile ? "0.2rem" : 0,
                }}
                onMouseEnter={() => handleNavEnter("certifications")}
                onMouseLeave={handleNavLeave}
              >
                Certifications
              </a>
              <a
                href="#contact"
                onClick={handleClick("contact")}
                style={{
                  transition: "transform 0.3s ease-in-out",
                  willChange: "transform",
                  display: "inline-block",
                  transform: `scale(${hoveredNav === "contact" ? 1.2 : 1})`,
                  fontSize: isMobile ? "0.8rem" : "1rem",
                  marginBottom: isMobile ? "0.2rem" : 0,
                }}
                onMouseEnter={() => handleNavEnter("contact")}
                onMouseLeave={handleNavLeave}
              >
                Contact
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
