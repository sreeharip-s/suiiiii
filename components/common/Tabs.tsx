
import React, { useState } from 'react';

interface TabsProps {
    tabs: string[];
    children: React.ReactNode[];
    variant?: 'primary' | 'secondary';
}

export const Tabs: React.FC<TabsProps> = ({ tabs, children, variant = 'primary' }) => {
    const [activeTab, setActiveTab] = useState(0);

    const primaryBase = "px-4 py-2 text-sm font-medium rounded-t-lg";
    const primaryActive = "bg-orange-400 text-black font-semibold shadow-md";
    const primaryInactive = "bg-neutral-900 text-gray-400 hover:bg-neutral-800 hover:text-white";

    const secondaryBase = "px-4 py-2 rounded-full text-sm font-bold border";
    const secondaryActive = "bg-orange-500 text-white border-transparent";
    const secondaryInactive = "border-neutral-800 text-gray-400 hover:bg-neutral-800 hover:text-white";
    
    return (
        <div>
            <div className={`flex ${variant === 'primary' ? 'border-b border-neutral-800 mb-4' : 'flex-wrap gap-2 mb-6'}`}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`transition-all duration-200 ${ variant === 'primary' ? `${primaryBase} ${index > 0 ? 'ml-1' : ''}` : secondaryBase} ${
                            activeTab === index ? (variant === 'primary' ? primaryActive : secondaryActive) : (variant === 'primary' ? primaryInactive : secondaryInactive)
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div>
                {children.map((child, index) => (
                    <div key={index} className={activeTab === index ? 'block' : 'hidden'}>
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
};
