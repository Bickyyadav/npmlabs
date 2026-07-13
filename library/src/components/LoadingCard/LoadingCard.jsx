import React from "react";

export const LoadingCard = ({ 
  width = "300px", 
  height = "200px", 
  bg = "#1e293b", 
  accent = "#6366f1",
  borderRadius = "12px" 
}) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  
  return (
    <div 
      style={{
        width: width,
        height: height,
        background: bg,
        borderRadius: borderRadius,
        position: "relative",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)"
      }}
    >
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(90deg, transparent 0%, ${alpha(accent, 0.1)} 50%, transparent 100%)`,
        animation: "shimmer 1.5s infinite",
      }} />
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `
      }} />
      <div style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        width: "calc(100% - 40px)",
        height: "20px",
        background: "rgba(255,255,255,0.05)",
        borderRadius: "4px"
      }} />
      <div style={{
        position: "absolute",
        top: "60px",
        left: "20px",
        width: "60%",
        height: "12px",
        background: "rgba(255,255,255,0.05)",
        borderRadius: "4px"
      }} />
      <div style={{
        position: "absolute",
        bottom: "60px",
        left: "20px",
        width: "80%",
        height: "14px",
        background: "rgba(255,255,255,0.05)",
        borderRadius: "4px"
      }} />
      <div style={{
        position: "absolute",
        bottom: "20px",
        left: "20px",
        width: "40%",
        height: "30px",
        background: "rgba(255,255,255,0.05)",
        borderRadius: "8px"
      }} />
    </div>
  );
};