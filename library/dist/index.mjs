// src/components/Button/Button.jsx
import React, { useState } from "react";
var Button = ({
  text = "Click Me",
  bgColor = "#4f46e5",
  hoverColor = "#4338ca",
  textColor = "#ffffff",
  size = "medium",
  onClick = () => {
  }
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const sizeStyles = {
    small: { padding: "6px 12px", fontSize: "12px" },
    medium: { padding: "10px 20px", fontSize: "14px" },
    large: { padding: "14px 28px", fontSize: "16px" }
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
    ...sizeStyles[size] || sizeStyles.medium
  };
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      style: styles,
      onClick,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false)
    },
    text
  );
};

// src/components/Card/Card.jsx
import React2, { useState as useState2 } from "react";
var Card = ({
  title = "Card Title",
  description = "This is a short card description.",
  bgColor = "#ffffff",
  hoverBgColor = "#f9fafb",
  borderColor = "#e5e7eb",
  textColor = "#111827",
  size = "medium",
  imageUrl = ""
}) => {
  const [isHovered, setIsHovered] = useState2(false);
  const sizeStyles = {
    small: { width: "220px", padding: "12px" },
    medium: { width: "300px", padding: "18px" },
    large: { width: "380px", padding: "24px" }
  };
  const styles = {
    backgroundColor: isHovered ? hoverBgColor : bgColor,
    border: `1px solid ${borderColor}`,
    borderRadius: "12px",
    boxShadow: isHovered ? "0 8px 20px rgba(0,0,0,0.12)" : "0 2px 6px rgba(0,0,0,0.06)",
    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
    transition: "all 0.2s ease",
    cursor: "pointer",
    ...sizeStyles[size] || sizeStyles.medium
  };
  return /* @__PURE__ */ React2.createElement(
    "div",
    {
      style: styles,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false)
    },
    imageUrl && /* @__PURE__ */ React2.createElement(
      "img",
      {
        src: imageUrl,
        alt: title,
        style: {
          width: "100%",
          height: "140px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "12px"
        }
      }
    ),
    /* @__PURE__ */ React2.createElement("h3", { style: { margin: "0 0 8px 0", color: textColor, fontSize: "18px" } }, title),
    /* @__PURE__ */ React2.createElement("p", { style: { margin: 0, color: textColor, opacity: 0.75, fontSize: "14px", lineHeight: 1.5 } }, description)
  );
};

// src/components/ProfileCard/profilecard.jsx
import React3, { useState as useState3 } from "react";
var ProfileCard = ({
  name = "Jane Doe",
  role = "Product Designer",
  bio = "Passionate about crafting delightful user experiences.",
  avatarUrl = "https://i.pravatar.cc/150",
  bgColor = "#ffffff",
  accentColor = "#4f46e5",
  textColor = "#111827",
  size = "medium",
  onFollow = () => {
  }
}) => {
  const [isHovered, setIsHovered] = useState3(false);
  const [isFollowing, setIsFollowing] = useState3(false);
  const sizeStyles = {
    small: { width: "220px", padding: "16px", avatar: "60px" },
    medium: { width: "280px", padding: "22px", avatar: "80px" },
    large: { width: "340px", padding: "28px", avatar: "100px" }
  };
  const currentSize = sizeStyles[size] || sizeStyles.medium;
  const cardStyle = {
    width: currentSize.width,
    padding: currentSize.padding,
    backgroundColor: bgColor,
    borderRadius: "16px",
    boxShadow: isHovered ? "0 10px 24px rgba(0,0,0,0.14)" : "0 2px 8px rgba(0,0,0,0.08)",
    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
    transition: "all 0.25s ease",
    textAlign: "center",
    fontFamily: "sans-serif"
  };
  const buttonStyle = {
    marginTop: "14px",
    padding: "8px 20px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "13px",
    color: isFollowing ? accentColor : "#ffffff",
    backgroundColor: isFollowing ? "#ffffff" : accentColor,
    border: `2px solid ${accentColor}`,
    transition: "all 0.2s ease"
  };
  const handleFollow = () => {
    setIsFollowing((prev) => !prev);
    onFollow(!isFollowing);
  };
  return /* @__PURE__ */ React3.createElement(
    "div",
    {
      style: cardStyle,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false)
    },
    /* @__PURE__ */ React3.createElement(
      "img",
      {
        src: avatarUrl,
        alt: name,
        style: {
          width: currentSize.avatar,
          height: currentSize.avatar,
          borderRadius: "50%",
          objectFit: "cover",
          border: `3px solid ${accentColor}`
        }
      }
    ),
    /* @__PURE__ */ React3.createElement("h3", { style: { margin: "12px 0 2px 0", color: textColor, fontSize: "17px" } }, name),
    /* @__PURE__ */ React3.createElement("p", { style: { margin: "0 0 8px 0", color: accentColor, fontSize: "13px", fontWeight: 600 } }, role),
    /* @__PURE__ */ React3.createElement("p", { style: { margin: 0, color: textColor, opacity: 0.7, fontSize: "13px", lineHeight: 1.5 } }, bio),
    /* @__PURE__ */ React3.createElement("button", { style: buttonStyle, onClick: handleFollow }, isFollowing ? "Following" : "Follow")
  );
};
export {
  Button,
  Card,
  ProfileCard
};
