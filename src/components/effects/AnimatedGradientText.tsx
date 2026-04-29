'use client';

import { useEffect, useRef, useState } from 'react';

export default function AnimatedGradientText({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLSpanElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const currentRef = ref.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                // Keep observing or unobserve? "When section enters viewport: trigger..." 
                // Usually we just let it run or run once. Let's let it run when visible.
            } else {
                setIsVisible(false);
            }
        }, { threshold: 0.1 });

        observer.observe(currentRef);
        return () => {
            if (currentRef) observer.unobserve(currentRef);
        }
    }, []);

    return (
        <span 
            ref={ref}
            className={`italic inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#8C734B] via-[#DBCBB5] to-[#8C734B] bg-[length:200%_auto] transition-all duration-[3000ms] ease-in-out ${isVisible ? 'bg-[position:100%_center]' : 'bg-[position:0%_center]'}`}
        >
            {children}
        </span>
    );
}
