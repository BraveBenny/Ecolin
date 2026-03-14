"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function ScrollBloomLogo() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                } else {
                    // Reset when out of view so the animation replays on re-entry
                    setInView(false);
                }
            },
            {
                threshold: 0.3, // Trigger when 30% of the section is visible
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div 
            ref={containerRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] pointer-events-none flex items-center justify-center overflow-visible"
        >
            <style jsx>{`
                @keyframes tonalBloom {
                    0% {
                        opacity: 0.03;
                        transform: scale(0.98);
                        filter: brightness(0.95);
                    }
                    35% {
                        opacity: 0.14;
                        transform: scale(1.02);
                        filter: brightness(1.1);
                    }
                    100% {
                        opacity: 0.08;
                        transform: scale(1);
                        filter: brightness(1);
                    }
                }
                @keyframes sweepGlow {
                    0% {
                        transform: translateX(-150%) skewX(-25deg);
                        opacity: 0;
                    }
                    20% {
                        opacity: 1;
                    }
                    80% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateX(150%) skewX(-25deg);
                        opacity: 0;
                    }
                }
                .animate-tonal-bloom {
                    animation: tonalBloom 2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
                }
                .animate-sweep-glow {
                    animation: sweepGlow 2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
                }
            `}</style>
            
            <div 
                className={`relative w-full h-full ${
                    inView ? "animate-tonal-bloom" : "opacity-[0.03] scale-[0.98]"
                }`}
            >
                <Image
                    src="/images/logo-minimal.png"
                    alt="Background Watermark"
                    fill
                    className="object-contain"
                />
                
                {/* Elevated subtle light wash / sweep */}
                {inView && (
                    <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
                        <div className="w-[150%] h-[200%] bg-gradient-to-r from-transparent via-[#EAE4D9]/40 to-transparent mix-blend-overlay animate-sweep-glow blur-[40px] pointer-events-none"></div>
                    </div>
                )}
            </div>
        </div>
    );
}
