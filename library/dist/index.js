var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var index_exports = {};
__export(index_exports, {
  Button: () => Button,
  Card: () => Card,
  ProfileCard: () => ProfileCard
});
module.exports = __toCommonJS(index_exports);

// src/components/Button/Button.jsx
var import_react = __toESM(require("react"));
var Button = ({
  text = "Click Me",
  bgColor = "#4f46e5",
  hoverColor = "#4338ca",
  textColor = "#ffffff",
  size = "medium",
  onClick = () => {
  }
}) => {
  const [isHovered, setIsHovered] = (0, import_react.useState)(false);
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
  return /* @__PURE__ */ import_react.default.createElement(
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
var import_react2 = __toESM(require("react"));
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
  const [isHovered, setIsHovered] = (0, import_react2.useState)(false);
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
  return /* @__PURE__ */ import_react2.default.createElement(
    "div",
    {
      style: styles,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false)
    },
    imageUrl && /* @__PURE__ */ import_react2.default.createElement(
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
    /* @__PURE__ */ import_react2.default.createElement("h3", { style: { margin: "0 0 8px 0", color: textColor, fontSize: "18px" } }, title),
    /* @__PURE__ */ import_react2.default.createElement("p", { style: { margin: 0, color: textColor, opacity: 0.75, fontSize: "14px", lineHeight: 1.5 } }, description)
  );
};

// src/components/ProfileCard/profilecard.jsx
var import_react3 = __toESM(require("react"));
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
  const [isHovered, setIsHovered] = (0, import_react3.useState)(false);
  const [isFollowing, setIsFollowing] = (0, import_react3.useState)(false);
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
  return /* @__PURE__ */ import_react3.default.createElement(
    "div",
    {
      style: cardStyle,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false)
    },
    /* @__PURE__ */ import_react3.default.createElement(
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
    /* @__PURE__ */ import_react3.default.createElement("h3", { style: { margin: "12px 0 2px 0", color: textColor, fontSize: "17px" } }, name),
    /* @__PURE__ */ import_react3.default.createElement("p", { style: { margin: "0 0 8px 0", color: accentColor, fontSize: "13px", fontWeight: 600 } }, role),
    /* @__PURE__ */ import_react3.default.createElement("p", { style: { margin: 0, color: textColor, opacity: 0.7, fontSize: "13px", lineHeight: 1.5 } }, bio),
    /* @__PURE__ */ import_react3.default.createElement("button", { style: buttonStyle, onClick: handleFollow }, isFollowing ? "Following" : "Follow")
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Card,
  ProfileCard
});
