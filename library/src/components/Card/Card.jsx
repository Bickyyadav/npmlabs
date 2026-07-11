import React, { useState } from "react";

export const Card = ({
    title = "Card Title",
    description = "This is a short card description.",
    bgColor = "#ffffff",
    hoverBgColor = "#f9fafb",
    borderColor = "#e5e7eb",
    textColor = "#111827",
    size = "medium",
    imageUrl = "",
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const sizeStyles = {
        small: { width: "220px", padding: "12px" },
        medium: { width: "300px", padding: "18px" },
        large: { width: "380px", padding: "24px" },
    };

    const styles = {
        backgroundColor: isHovered ? hoverBgColor : bgColor,
        border: `1px solid ${borderColor}`,
        borderRadius: "12px",
        boxShadow: isHovered
            ? "0 8px 20px rgba(0,0,0,0.12)"
            : "0 2px 6px rgba(0,0,0,0.06)",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.2s ease",
        cursor: "pointer",
        ...(sizeStyles[size] || sizeStyles.medium),
    };

    return (
        <div
            style={styles}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={title}
                    style={{
                        width: "100%",
                        height: "140px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        marginBottom: "12px",
                    }}
                />
            )}
            <h3 style={{ margin: "0 0 8px 0", color: textColor, fontSize: "18px" }}>
                {title}
            </h3>
            <p style={{ margin: 0, color: textColor, opacity: 0.75, fontSize: "14px", lineHeight: 1.5 }}>
                {description}
            </p>
        </div>
    );
};

export default Card;