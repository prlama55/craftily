// src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 border-2 border-color-black"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
