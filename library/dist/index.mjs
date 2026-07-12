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

// src/components/EcommerceCard/EcommerceCard.jsx
import React3, { useState as useState3 } from "react";
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
  const [hovered, setHovered] = useState3(false);
  const [selectedColor, setSelectedColor] = useState3(colors[0]);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  const discountedPrice = price - price * (discount / 100);
  return /* @__PURE__ */ React3.createElement(
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
    /* @__PURE__ */ React3.createElement("div", { style: { position: "relative", height: "200px", overflow: "hidden" } }, /* @__PURE__ */ React3.createElement(
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
    ), discount > 0 && /* @__PURE__ */ React3.createElement("div", { style: {
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
    /* @__PURE__ */ React3.createElement("div", { style: { padding: "16px" } }, /* @__PURE__ */ React3.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" } }, /* @__PURE__ */ React3.createElement("h3", { style: { fontSize: "16px", fontWeight: "700", color: "#fff", margin: 0 } }, title), /* @__PURE__ */ React3.createElement("div", { style: { display: "flex", alignItems: "center", gap: "4px" } }, /* @__PURE__ */ React3.createElement("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "#fbbf24", stroke: "none" }, /* @__PURE__ */ React3.createElement("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })), /* @__PURE__ */ React3.createElement("span", { style: { fontSize: "12px", color: "rgba(255,255,255,0.7)" } }, rating, " (", reviews, ")"))), /* @__PURE__ */ React3.createElement("div", { style: { marginBottom: "12px" } }, /* @__PURE__ */ React3.createElement("div", { style: { display: "flex", alignItems: "flex-end", gap: "4px" } }, /* @__PURE__ */ React3.createElement("span", { style: { fontSize: "20px", fontWeight: "800", color: "#fff" } }, currency, discountedPrice.toFixed(2)), discount > 0 && /* @__PURE__ */ React3.createElement("span", { style: { fontSize: "12px", color: "rgba(255,255,255,0.5)", textDecoration: "line-through" } }, currency, price.toFixed(2)))), /* @__PURE__ */ React3.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ React3.createElement("div", { style: { fontSize: "12px", color: "rgba(255,255,255,0.5)", marginBottom: "6px" } }, "Available colors:"), /* @__PURE__ */ React3.createElement("div", { style: { display: "flex", gap: "8px" } }, colors.map((color, i) => /* @__PURE__ */ React3.createElement(
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
    )))), /* @__PURE__ */ React3.createElement(
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
      /* @__PURE__ */ React3.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "#fff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React3.createElement("circle", { cx: "9", cy: "21", r: "1" }), /* @__PURE__ */ React3.createElement("circle", { cx: "20", cy: "21", r: "1" }), /* @__PURE__ */ React3.createElement("path", { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" })),
      "Add to Cart"
    ))
  );
};

// src/components/SearchBox/SearchBox.jsx
import React4, { useState as useState4, useRef, useEffect } from "react";
var SearchBox = ({
  placeholder = "Search products...",
  accent = "#6366f1",
  bg = "#0f172a",
  onSearch = (term) => console.log("Searching for:", term),
  debounceTime = 300,
  showSuggestions = true,
  initialSuggestions = ["Smartphones", "Laptops", "Headphones", "Watches", "Cameras"]
}) => {
  const [searchTerm, setSearchTerm] = useState4("");
  const [isFocused, setIsFocused] = useState4(false);
  const [suggestions, setSuggestions] = useState4(initialSuggestions);
  const timerRef = useRef(null);
  const inputRef = useRef(null);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    if (searchTerm) {
      timerRef.current = setTimeout(() => {
        onSearch(searchTerm);
      }, debounceTime);
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [searchTerm, debounceTime, onSearch]);
  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    onSearch(suggestion);
    inputRef.current.focus();
  };
  return /* @__PURE__ */ React4.createElement("div", { style: { position: "relative", width: "100%", maxWidth: "500px" } }, /* @__PURE__ */ React4.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    background: "#1e293b",
    borderRadius: "12px",
    padding: "4px 14px",
    border: "1px solid " + (isFocused ? accent : "rgba(255,255,255,0.1)"),
    boxShadow: isFocused ? "0 0 0 2px " + alpha(accent, 0.2) : "none",
    transition: "all 0.2s ease"
  } }, /* @__PURE__ */ React4.createElement(
    "svg",
    {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      style: { flexShrink: 0, marginRight: "10px" },
      stroke: isFocused ? accent : "rgba(255,255,255,0.4)",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    },
    /* @__PURE__ */ React4.createElement("circle", { cx: "11", cy: "11", r: "8" }),
    /* @__PURE__ */ React4.createElement("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
  ), /* @__PURE__ */ React4.createElement(
    "input",
    {
      ref: inputRef,
      type: "text",
      value: searchTerm,
      onChange: (e) => setSearchTerm(e.target.value),
      onFocus: () => setIsFocused(true),
      onBlur: () => setTimeout(() => setIsFocused(false), 200),
      placeholder,
      style: {
        background: "transparent",
        border: "none",
        color: "#fff",
        width: "100%",
        fontSize: "14px",
        padding: "10px 0",
        outline: "none",
        fontFamily: "system-ui, sans-serif"
      }
    }
  ), searchTerm && /* @__PURE__ */ React4.createElement(
    "button",
    {
      onClick: () => setSearchTerm(""),
      style: {
        background: "rgba(255,255,255,0.1)",
        border: "none",
        borderRadius: "50%",
        width: "24px",
        height: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        marginLeft: "8px"
      }
    },
    /* @__PURE__ */ React4.createElement("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "rgba(255,255,255,0.6)", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React4.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), /* @__PURE__ */ React4.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))
  )), showSuggestions && isFocused && searchTerm && /* @__PURE__ */ React4.createElement("div", { style: {
    position: "absolute",
    top: "calc(100% + 8px)",
    left: 0,
    right: 0,
    background: "#1e293b",
    borderRadius: "12px",
    padding: "12px 0",
    zIndex: 10,
    boxShadow: "0 10px 20px rgba(0,0,0,0.4)",
    border: "1px solid rgba(255,255,255,0.08)"
  } }, suggestions.filter(
    (suggestion) => suggestion.toLowerCase().includes(searchTerm.toLowerCase())
  ).map((suggestion, index) => /* @__PURE__ */ React4.createElement(
    "div",
    {
      key: index,
      onMouseDown: () => handleSuggestionClick(suggestion),
      style: {
        padding: "10px 16px",
        cursor: "pointer",
        color: "rgba(255,255,255,0.8)",
        fontSize: "14px",
        transition: "background 0.2s",
        fontFamily: "system-ui, sans-serif"
      },
      onMouseEnter: (e) => {
        e.target.style.background = "rgba(255,255,255,0.05)";
      },
      onMouseLeave: (e) => {
        e.target.style.background = "transparent";
      }
    },
    suggestion
  ))));
};
export {
  Button,
  Card,
  EcommerceCard,
  SearchBox
};
