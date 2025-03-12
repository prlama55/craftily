import React from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ type = "text", placeholder }) => {
  return (
    <input type={type} placeholder={placeholder} className="border rounded px-3 py-2 w-full" />
  );
};

export default Input;
