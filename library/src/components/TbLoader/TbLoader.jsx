import React, { useState } from "react";

export const TbLoader = ({
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
  onAddToCart = () => {}
}) => {
  const [hovered, setHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  
  const discountedPrice = price - (price * (discount / 100));
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: bg,
        borderRadius: "18px",
        overflow: "hidden",
        width: "280px",
        border: "1px solid " + (hovered ? alpha(accent, 0.25) : "rgba(255,255,255,0.08)"),
        fontFamily: "system-ui,sans-serif",
        transition: "all 0.3s ease",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.4)" : "0 8px 24px rgba(0,0,0,0.2)"
      }}
    >
      <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
        <img 
          src={image} 
          alt={title} 
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover", 
            transition: "transform 0.4s",
            transform: hovered ? "scale(1.05)" : "scale(1)"
          }} 
        />
        {discount > 0 && (
          <div style={{ 
            position: "absolute", 
            top: "12px", 
            right: "12px", 
            background: "#e11d48", 
            color: "#fff", 
            padding: "4px 10px", 
            borderRadius: "20px", 
            fontSize: "12px", 
            fontWeight: "800" 
          }}>
            -{discount}%
          </div>
        )}
      </div>
      
      <div style={{ padding: "16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#fff", margin: 0 }}>{title}</h3>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>{rating} ({reviews})</span>
          </div>
        </div>
        
        <div style={{ marginBottom: "12px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "4px" }}>
            <span style={{ fontSize: "20px", fontWeight: "800", color: "#fff" }}>{currency}{discountedPrice.toFixed(2)}</span>
            {discount > 0 && (
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", textDecoration: "line-through" }}>{currency}{price.toFixed(2)}</span>
            )}
          </div>
        </div>
        
        <div style={{ marginBottom: "16px" }}>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginBottom: "6px" }}>Available colors:</div>
          <div style={{ display: "flex", gap: "8px" }}>
            {colors.map((color, i) => (
              <button 
                key={i}
                onClick={() => setSelectedColor(color)}
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: color,
                  border: selectedColor === color ? "2px solid #fff" : "none",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                }}
              />
            ))}
          </div>
        </div>
        
        <button 
          onClick={onAddToCart}
          style={{
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
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
};