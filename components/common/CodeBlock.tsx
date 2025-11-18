
import React from 'react';

interface CodeBlockProps {
    children: React.ReactNode;
    className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, className = '' }) => {
    return (
        <div className={`bg-neutral-950 border border-neutral-800 text-emerald-200 p-4 rounded-lg font-mono whitespace-pre-wrap relative ${className}`}>
            <span className="absolute top-0 right-0 bg-neutral-800 text-neutral-400 text-[0.6rem] px-2 py-0.5 border-b border-l border-neutral-700 rounded-bl-md">
                PYTHON
            </span>
            <code>{children}</code>
        </div>
    );
};
