import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="border p-4 shadow-md rounded">
      <h3 className="text-lg font-bold">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Card;
