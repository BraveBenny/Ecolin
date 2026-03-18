"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
    { src: "/images/lifestyle-closet-minimal.png", alt: "Ecolin Lifestyle Closet" },
    { src: "/images/full-closet-both-products-hero.png", alt: "Ecolin Full Closet Display" }
];

export default function HeroImageCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % images.length);
        }, 3000); // Switch every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Fallback layout visual */}
            <div className="absolute inset-0 flex items-center justify-center text-[#8C734B] font-light text-xs uppercase tracking-widest bg-[#EAE4D9]/50 z-0">
                Lifestyle Imagery
            </div>
            
            {images.map((img, index) => (
                <Image
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority={index === 0}
                    className={`object-cover object-center z-10 transition-all duration-[1.5s] ease-in-out group-hover:scale-105 ${
                        index === activeIndex ? "opacity-100" : "opacity-0"
                    }`}
                />
            ))}
        </>
    );
}
