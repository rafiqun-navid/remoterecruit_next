"use client";

import React from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  title?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string; // ✅ custom styles support
}

const styles: Record<ButtonVariant, string> = {
  primary: "bg-gradient-to-br from-[#2b6cb0] to-[#1a365d] text-white",
  secondary: "border-2 border-transparent text-[#1e3e85]",
};

export default function Button({
  title,
  icon,
  iconPosition = "left",
  onClick,
  variant = "primary",
  disabled = false,
  fullWidth = false,
  className = "",
}: ButtonProps) {
  const isIconOnly = icon && !title;

  const secondaryStyle = variant === "secondary" ? {
    background: "linear-gradient(white, white) padding-box, linear-gradient(135deg, #2b6cb0, #1a365d) border-box"
  } : {};

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={secondaryStyle}
      className={`
        inline-flex items-center justify-center
        ${className.includes("rounded") ? "" : "rounded-md"} transition
        ${styles[variant]}
        ${fullWidth ? "w-full" : ""}
        ${isIconOnly ? "w-10 h-10 p-0" : "px-4 py-2 gap-2"}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {iconPosition === "left" && icon}
      {title && <span>{title}</span>}
      {iconPosition === "right" && icon}
    </button>
  );
}