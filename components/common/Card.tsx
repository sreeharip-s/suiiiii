
import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
    return (
        <div className={`bg-[#111111] border border-neutral-800 rounded-xl ${className}`}>
            {children}
        </div>
    );
};
