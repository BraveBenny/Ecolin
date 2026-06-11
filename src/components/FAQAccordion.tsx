'use client';

import React, { useState } from 'react';

interface FAQAccordionProps {
  children: React.ReactNode;
}

export function FAQAccordion({ children }: FAQAccordionProps) {
  return (
    <div className="space-y-4">
      {children}
    </div>
  );
}

interface FAQAccordionItemProps {
  question: string;
  isOpen?: boolean;
  onToggle?: () => void;
  children: React.ReactNode;
}

export function FAQAccordionItem({
  question,
  isOpen: propsIsOpen,
  onToggle,
  children,
}: FAQAccordionItemProps) {
  const [localIsOpen, setLocalIsOpen] = useState(false);
  
  const isControlled = onToggle !== undefined;
  const isOpen = isControlled ? propsIsOpen : localIsOpen;
  
  const handleToggle = () => {
    if (isControlled && onToggle) {
      onToggle();
    } else {
      setLocalIsOpen(!localIsOpen);
    }
  };

  return (
    <div className="border-b border-[#A98E5D]/15 py-4 transition-colors duration-300">
      <button
        type="button"
        className="w-full flex items-center justify-between text-left py-3 group cursor-pointer focus:outline-none"
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        <span className="font-serif text-lg md:text-xl text-gray-900 group-hover:text-[#8C734B] transition-colors duration-300 pr-8">
          {question}
        </span>
        
        {/* Minimal Plus/Minus Icon with clean rotation transition */}
        <span className="relative flex items-center justify-center w-5 h-5 shrink-0">
          {/* Horizontal line */}
          <span className="absolute w-4 h-0.5 bg-gray-600 group-hover:bg-[#8C734B] transition-colors duration-300"></span>
          {/* Vertical line (rotates to 0/90 degrees to show/hide) */}
          <span 
            className={`absolute w-0.5 h-4 bg-gray-600 group-hover:bg-[#8C734B] transition-transform duration-500 ease-in-out ${
              isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
            }`}
          ></span>
        </span>
      </button>
      
      {/* Smooth height transition using grid rows */}
      <div 
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 pb-5 pt-1' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="font-sans font-light text-gray-600 leading-relaxed text-[15px] md:text-base space-y-4 max-w-3xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
