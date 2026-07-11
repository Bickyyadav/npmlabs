import React, { useState } from "react";

export const ProfileCard = ({
    name = "Jane Doe",
    role = "Product Designer",
    bio = "Passionate about crafting delightful user experiences.",
    avatarUrl = "https://i.pravatar.cc/150",
    bgColor = "#ffffff",
    accentColor = "#4f46e5",
    textColor = "#111827",
    size = "medium",
    onFollow = () => { },
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);

    const sizeStyles = {
        small: { width: "220px", padding: "16px", avatar: "60px" },
        medium: { width: "280px", padding: "22px", avatar: "80px" },
        large: { width: "340px", padding: "28px", avatar: "100px" },
    };

    const currentSize = sizeStyles[size] || sizeStyles.medium;

    const cardStyle = {
        width: currentSize.width,
        padding: currentSize.padding,
        backgroundColor: bgColor,
        borderRadius: "16px",
        boxShadow: isHovered
            ? "0 10px 24px rgba(0,0,0,0.14)"
            : "0 2px 8px rgba(0,0,0,0.08)",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.25s ease",
        textAlign: "center",
        fontFamily: "sans-serif",
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
        transition: "all 0.2s ease",
    };

    const handleFollow = () => {
        setIsFollowing((prev) => !prev);
        onFollow(!isFollowing);
    };

    return (
        <div
            style={cardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={avatarUrl}
                alt={name}
                style={{
                    width: currentSize.avatar,
                    height: currentSize.avatar,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: `3px solid ${accentColor}`,
                }}
            />
            <h3 style={{ margin: "12px 0 2px 0", color: textColor, fontSize: "17px" }}>
                {name}
            </h3>
            <p style={{ margin: "0 0 8px 0", color: accentColor, fontSize: "13px", fontWeight: 600 }}>
                {role}
            </p>
            <p style={{ margin: 0, color: textColor, opacity: 0.7, fontSize: "13px", lineHeight: 1.5 }}>
                {bio}
            </p>
            <button style={buttonStyle} onClick={handleFollow}>
                {isFollowing ? "Following" : "Follow"}
            </button>
        </div>
    );
};

export default ProfileCard;