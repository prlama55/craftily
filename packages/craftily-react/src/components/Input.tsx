import React from 'react';

export type TInputProps = React.InputHTMLAttributes<HTMLInputElement>;
const Input: React.FC<TInputProps> = ({ ...props }) => {
  return <input {...props} />;
};

Input.displayName = 'Input';

export default Input;
