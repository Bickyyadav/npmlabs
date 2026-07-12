import React, { useState, useRef, useEffect } from "react";

export const SearchBox = ({
  placeholder = "Search products...",
  accent = "#6366f1",
  bg = "#0f172a",
  onSearch = (term) => console.log("Searching for:", term),
  debounceTime = 300,
  showSuggestions = true,
  initialSuggestions = ["Smartphones", "Laptops", "Headphones", "Watches", "Cameras"]
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState(initialSuggestions);
  const timerRef = useRef(null);
  const inputRef = useRef(null);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
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

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "500px" }}>
      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        background: "#1e293b", 
        borderRadius: "12px", 
        padding: "4px 14px",
        border: "1px solid " + (isFocused ? accent : "rgba(255,255,255,0.1)"),
        boxShadow: isFocused ? "0 0 0 2px " + alpha(accent, 0.2) : "none",
        transition: "all 0.2s ease"
      }}>
        <svg 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          style={{ flexShrink: 0, marginRight: "10px" }}
          stroke={isFocused ? accent : "rgba(255,255,255,0.4)"}
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder={placeholder}
          style={{
            background: "transparent",
            border: "none",
            color: "#fff",
            width: "100%",
            fontSize: "14px",
            padding: "10px 0",
            outline: "none",
            fontFamily: "system-ui, sans-serif"
          }}
        />
        {searchTerm && (
          <button 
            onClick={() => setSearchTerm("")}
            style={{
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
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>
      {showSuggestions && isFocused && searchTerm && (
        <div style={{
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
        }}>
          {suggestions
            .filter(suggestion => 
              suggestion.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((suggestion, index) => (
              <div 
                key={index}
                onMouseDown={() => handleSuggestionClick(suggestion)}
                style={{
                  padding: "10px 16px",
                  cursor: "pointer",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "14px",
                  transition: "background 0.2s",
                  fontFamily: "system-ui, sans-serif"
                }}
                onMouseEnter={e => {
                  e.target.style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={e => {
                  e.target.style.background = "transparent";
                }}
              >
                {suggestion}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};