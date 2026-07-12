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

// src/components/EcommerceCard/EcommerceCard.jsx
import React4, { useState as useState4 } from "react";
var EcommerceCard = ({
  image = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
  title = "Premium Sneakers",
  price = 89.99,
  currency = "$",
  discount = 15,
  rating = 4.5,
  reviews = 124,
  colors = ["#6366f1", "#7c3aed", "#e11d48", "#059669"],
  accent = "#6366f1",
  bg = "#0f172a",
  onAddToCart = () => {
  }
}) => {
  const [hovered, setHovered] = useState4(false);
  const [selectedColor, setSelectedColor] = useState4(colors[0]);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  const discountedPrice = price - price * (discount / 100);
  return /* @__PURE__ */ React4.createElement(
    "div",
    {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: {
        background: bg,
        borderRadius: "18px",
        overflow: "hidden",
        width: "280px",
        border: "1px solid " + (hovered ? alpha(accent, 0.25) : "rgba(255,255,255,0.08)"),
        fontFamily: "system-ui,sans-serif",
        transition: "all 0.3s ease",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.4)" : "0 8px 24px rgba(0,0,0,0.2)"
      }
    },
    /* @__PURE__ */ React4.createElement("div", { style: { position: "relative", height: "200px", overflow: "hidden" } }, /* @__PURE__ */ React4.createElement(
      "img",
      {
        src: image,
        alt: title,
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.4s",
          transform: hovered ? "scale(1.05)" : "scale(1)"
        }
      }
    ), discount > 0 && /* @__PURE__ */ React4.createElement("div", { style: {
      position: "absolute",
      top: "12px",
      right: "12px",
      background: "#e11d48",
      color: "#fff",
      padding: "4px 10px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "800"
    } }, "-", discount, "%")),
    /* @__PURE__ */ React4.createElement("div", { style: { padding: "16px" } }, /* @__PURE__ */ React4.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" } }, /* @__PURE__ */ React4.createElement("h3", { style: { fontSize: "16px", fontWeight: "700", color: "#fff", margin: 0 } }, title), /* @__PURE__ */ React4.createElement("div", { style: { display: "flex", alignItems: "center", gap: "4px" } }, /* @__PURE__ */ React4.createElement("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "#fbbf24", stroke: "none" }, /* @__PURE__ */ React4.createElement("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })), /* @__PURE__ */ React4.createElement("span", { style: { fontSize: "12px", color: "rgba(255,255,255,0.7)" } }, rating, " (", reviews, ")"))), /* @__PURE__ */ React4.createElement("div", { style: { marginBottom: "12px" } }, /* @__PURE__ */ React4.createElement("div", { style: { display: "flex", alignItems: "flex-end", gap: "4px" } }, /* @__PURE__ */ React4.createElement("span", { style: { fontSize: "20px", fontWeight: "800", color: "#fff" } }, currency, discountedPrice.toFixed(2)), discount > 0 && /* @__PURE__ */ React4.createElement("span", { style: { fontSize: "12px", color: "rgba(255,255,255,0.5)", textDecoration: "line-through" } }, currency, price.toFixed(2)))), /* @__PURE__ */ React4.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ React4.createElement("div", { style: { fontSize: "12px", color: "rgba(255,255,255,0.5)", marginBottom: "6px" } }, "Available colors:"), /* @__PURE__ */ React4.createElement("div", { style: { display: "flex", gap: "8px" } }, colors.map((color, i) => /* @__PURE__ */ React4.createElement(
      "button",
      {
        key: i,
        onClick: () => setSelectedColor(color),
        style: {
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: color,
          border: selectedColor === color ? "2px solid #fff" : "none",
          cursor: "pointer",
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
        }
      }
    )))), /* @__PURE__ */ React4.createElement(
      "button",
      {
        onClick: onAddToCart,
        style: {
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "none",
          background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")",
          color: "#fff",
          fontSize: "14px",
          fontWeight: "700",
          cursor: "pointer",
          fontFamily: "inherit",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px"
        }
      },
      /* @__PURE__ */ React4.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "#fff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React4.createElement("circle", { cx: "9", cy: "21", r: "1" }), /* @__PURE__ */ React4.createElement("circle", { cx: "20", cy: "21", r: "1" }), /* @__PURE__ */ React4.createElement("path", { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" })),
      "Add to Cart"
    ))
  );
};
export {
  Button,
  Card,
  EcommerceCard,
  ProfileCard
};
