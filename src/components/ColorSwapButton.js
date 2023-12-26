import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const ColorSwapButton = ({ isDarkMode, onClick, buttonStyles, containerStyles }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={containerStyles}>
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundColor: isDarkMode ? "#505050" : "#d7d7d7",
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
          ...buttonStyles, // Apply additional button styles
        }}
      >
        <FontAwesomeIcon
          icon={faLightbulb}
          color={isDarkMode ? "white" : "black"}
        />
      </button>
    </div>
  );
};

export default ColorSwapButton;