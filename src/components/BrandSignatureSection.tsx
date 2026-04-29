'use client';

import Image from 'next/image';
import SignatureReveal from '@/components/effects/SignatureReveal';
import { useEffect, useRef, useState } from 'react';

export function useSectionReveal(options = { threshold: 0.2 }) {
    const ref = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const currentRef = ref.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(currentRef);
            }
        }, options);

        observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [options.threshold]);

    return { ref, isVisible };
}

export default function BrandSignatureSection() {
    const { ref, isVisible } = useSectionReveal();
    const stateClass = isVisible ? 'animate-visible' : 'animate-ready';

    return (
        <section ref={ref} className="relative py-32 md:py-48 px-6 lg:px-12 w-full bg-gradient-to-b from-[#FDFCF9] via-[#FAF8F4] to-[#FDFCF9] overflow-hidden">
            {/* Divider Line (absolute top) */}
            <div className={`absolute top-0 left-0 h-px bg-[#A98E5D]/15 anim-divider ${stateClass}`}></div>

            <SignatureReveal>
                <div className="max-w-[105rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16 relative px-4">
                    
                    {/* Left Product: Garment Bag */}
                    <div className={`w-full md:w-[38%] flex flex-col items-center group anim-card-left ${stateClass}`}>
                        <div className="relative w-full aspect-[3/4] max-w-[400px] mb-12 overflow-hidden bg-[#FDFBF9]/80 rounded-sm border border-[#E8DFD0] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#A98E5D]/5 transition-all duration-500 ease-out">
                            <Image 
                                src="/images/product-suit-cover.png" 
                                alt="Garment Muslin Bag"
                                fill
                                className="anim-ken-burns object-contain p-8 group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
                            />
                        </div>
                        <div className="text-center w-full">
                            <div className={`w-8 h-px bg-[#A98E5D] mx-auto mb-4 anim-title-left ${stateClass}`}></div>
                            <h3 className={`text-[#8C734B] uppercase tracking-[0.25em] text-[11px] font-bold mb-6 anim-title-left ${stateClass}`}>
                                Garment Muslin Bag
                            </h3>
                            <ul className="space-y-3 font-light text-gray-600 text-[14px] px-4">
                                <li className={`flex items-center justify-center gap-2 anim-bullet-left-1 ${stateClass}`}>
                                    <span className="w-1 h-1 rounded-full bg-[#A98E5D] flex-shrink-0"></span>
                                    Structured garment protection
                                </li>
                                <li className={`flex items-center justify-center gap-2 anim-bullet-left-2 ${stateClass}`}>
                                    <span className="w-1 h-1 rounded-full bg-[#A98E5D] flex-shrink-0"></span>
                                    Breathable natural storage
                                </li>
                                <li className={`flex items-center justify-center gap-2 anim-bullet-left-3 ${stateClass}`}>
                                    <span className="w-1 h-1 rounded-full bg-[#A98E5D] flex-shrink-0"></span>
                                    Designed for suits and coats
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Center Logo */}
                    <div className={`w-full md:w-[30%] flex flex-col justify-center items-center py-24 md:py-0 relative`}>
                        <div className="absolute w-[220%] h-[220%] bg-gradient-to-radial from-[#A98E5D]/15 to-transparent blur-[60px] opacity-0 [.is-visible_&]:opacity-100 transition-opacity duration-[4000ms] delay-500 pointer-events-none"></div>
                        
                        <div className={`relative w-[360px] h-[125px] md:w-[450px] md:h-[155px] lg:w-[580px] lg:h-[200px] drop-shadow-[0_0_15px_rgba(169,142,93,0.1)] anim-logo ${stateClass}`}>
                            <Image 
                                src="/images/logo-minimal.png" 
                                alt="Ecolin Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <p className={`text-center text-[10px] uppercase tracking-[0.3em] text-[#A98E5D]/60 mt-6 font-light anim-tagline ${stateClass}`}>
                            Crafted for lasting care
                        </p>
                    </div>

                    {/* Right Product: Sweater Bag */}
                    <div className={`w-full md:w-[38%] flex flex-col items-center group anim-card-right ${stateClass}`}>
                        <div className="relative w-full aspect-[3/4] max-w-[400px] mb-12 overflow-hidden bg-[#FDFBF9]/80 rounded-sm border border-[#E8DFD0] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#A98E5D]/5 transition-all duration-500 ease-out">
                            <Image 
                                src="/images/sweater-muslin-bag-main.png" 
                                alt="Sweater Muslin Bag"
                                fill
                                className="anim-ken-burns object-contain p-8 group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
                            />
                        </div>
                        <div className="text-center w-full">
                            <div className={`w-8 h-px bg-[#A98E5D] mx-auto mb-4 anim-title-right ${stateClass}`}></div>
                            <h3 className={`text-[#8C734B] uppercase tracking-[0.25em] text-[11px] font-bold mb-6 anim-title-right ${stateClass}`}>
                                Sweater Muslin Bag
                            </h3>
                            <ul className="space-y-3 font-light text-gray-600 text-[14px] px-4">
                                <li className={`flex items-center justify-center gap-2 anim-bullet-right-1 ${stateClass}`}>
                                    <span className="w-1 h-1 rounded-full bg-[#A98E5D] flex-shrink-0"></span>
                                    Soft storage for knitwear
                                </li>
                                <li className={`flex items-center justify-center gap-2 anim-bullet-right-2 ${stateClass}`}>
                                    <span className="w-1 h-1 rounded-full bg-[#A98E5D] flex-shrink-0"></span>
                                    Preserves shape and texture
                                </li>
                                <li className={`flex items-center justify-center gap-2 anim-bullet-right-3 ${stateClass}`}>
                                    <span className="w-1 h-1 rounded-full bg-[#A98E5D] flex-shrink-0"></span>
                                    Breathable protection
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </SignatureReveal>
        </section>
    );
}
