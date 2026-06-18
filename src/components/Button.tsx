"use client";

// Button.tsx
import React from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
}

const styles = {
  primary: "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700",
  secondary: "bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300",
};

export default function Button({
  title,
  onClick,
  variant = "primary",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
    >
      {title}
    </button>
  );
}