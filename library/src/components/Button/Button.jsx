import React, { useState } from "react";

export const Button = ({
  text = "Click Me",
  bgColor = "#4f46e5",
  hoverColor = "#4338ca",
  textColor = "#ffffff",
  size = "medium",
  onClick = () => {},
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeStyles = {
    small: { padding: "6px 12px", fontSize: "12px" },
    medium: { padding: "10px 20px", fontSize: "14px" },
    large: { padding: "14px 28px", fontSize: "16px" },
  };

  const styles = {
    backgroundColor: isHovered ? hoverColor : bgColor,
    color: textColor,
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: 600,
    transition: "background-color 0.2s ease, transform 0.15s ease",
    transform: isHovered ? "translateY(-1px)" : "translateY(0)",
    ...(sizeStyles[size] || sizeStyles.medium),
  };

  return (
    <button
      style={styles}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </button>
  );
};

export default Button;