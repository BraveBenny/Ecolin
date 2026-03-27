"use client";

import { useEffect, useRef, useState } from "react";

interface SignatureRevealProps {
    children: React.ReactNode;
}

export default function SignatureReveal({ children }: SignatureRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Single-play animation for premium feel
                    observer.disconnect();
                }
            },
            {
                threshold: 0.25,
                rootMargin: "0px 0px -100px 0px",
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div 
            ref={ref} 
            className={`w-full signature-reveal-wrapper ${isVisible ? "is-visible" : ""}`}
        >
            {children}
        </div>
    );
}
