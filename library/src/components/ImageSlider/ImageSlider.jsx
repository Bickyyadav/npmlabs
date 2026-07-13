import React, { useState, useEffect, useRef } from "react";

export const ImageSlider = ({
  images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80"
  ],
  interval = 3000,
  height = "300px",
  width = "500px",
  showArrows = true,
  showDots = true,
  accent = "#6366f1",
  autoPlay = true
}) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    if (autoPlay) {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1)),
        interval
      );
    }
    return () => {
      resetTimeout();
    };
  }, [current, autoPlay]);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div style={{ position: "relative", width: width, height: height, borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 40px rgba(0,0,0,0.3)" }}>
      <div style={{ display: "flex", height: "100%", transition: "transform 0.5s ease", transform: "translateX(" + (-current * 100) + "%)" }}>
        {images.map((image, index) => (
          <div key={index} style={{ minWidth: "100%", height: "100%", position: "relative" }}>
            <img 
              src={image} 
              alt="" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }} 
            />
            <div style={{ 
              position: "absolute", 
              bottom: 0, 
              left: 0, 
              right: 0, 
              height: "40px", 
              background: "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 100%)" 
            }} />
          </div>
        ))}
      </div>

      {showArrows && (
        <>
          <button 
            onClick={prevSlide}
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.5)",
              border: "none",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#fff",
              fontSize: "20px"
            }}
          >
            &lt;
          </button>
          <button 
            onClick={nextSlide}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.5)",
              border: "none",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#fff",
              fontSize: "20px"
            }}
          >
            &gt;
          </button>
        </>
      )}

      {showDots && (
        <div style={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "8px" }}>
          {images.map((_, index) => (
            <button 
              key={index} 
              onClick={() => goToSlide(index)}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                border: "none",
                background: current === index ? accent : "rgba(255,255,255,0.3)",
                cursor: "pointer",
                padding: 0
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};