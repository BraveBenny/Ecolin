"use client";

import { FormEvent } from "react";

export default function NewsletterSignup({ idContext }: { idContext: string }) {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Future Newsletter submission endpoint logic
    };

    return (
        <form className="w-full max-w-sm flex items-end group relative" onSubmit={handleSubmit}>
            <input
                id={`newsletter-email-${idContext}`}
                type="email"
                placeholder="Enter your email address"
                className="w-full pb-2 bg-transparent border-b border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#A98E5D] transition-colors rounded-none font-medium text-sm px-1"
                required
            />
            <label htmlFor={`newsletter-email-${idContext}`} className="sr-only">Email address for newsletter</label>
            <button type="submit" className="absolute right-0 bottom-2 p-1 text-gray-400 hover:text-[#A98E5D] transition-colors" aria-label="Subscribe">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </button>
        </form>
    );
}
