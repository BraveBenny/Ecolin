"use client";

import Image from 'next/image';
export default function ProductSpotlight() {
    return (
        <section className="bg-white py-24 px-6 w-full font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left Column: Image Container */}
                <div className="relative w-full h-[600px] flex items-center justify-center bg-gray-50/50 rounded-lg">
                    {/* Fallback placeholder text */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-light text-xs uppercase tracking-widest z-0">
                        Image: product-suit-cover.png
                    </div>

                    <Image
                        src="/images/product-suit-cover.png" // Fixed from .jpg to .png per strict project constraints
                        alt="Signature Suit Cover"
                        fill
                        className="object-contain z-10 opacity-0 transition-opacity duration-1000 p-8"
                        onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                    />
                </div>

                {/* Right Column: Text & Features */}
                <div className="flex flex-col space-y-6 md:pl-8">
                    <h3 className="text-[#A98E5D] uppercase tracking-widest text-xs font-bold w-fit">
                        The Signature Suit Cover
                    </h3>

                    <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight font-serif">
                        Uncompromising Protection for Timeless Elegance.
                    </h2>

                    <p className="text-gray-600 leading-relaxed font-light text-lg pb-4">
                        Engineered for longevity. Our signature suit cover features a sheer organza window for easy wardrobe navigation, and an exclusive padded channel designed specifically for cedar or lavender essential oils.
                    </p>

                    <ul className="space-y-4 font-light text-gray-600 text-base">
                        <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#A98E5D] rounded-full mr-3 shrink-0"></span>
                            100% Breathable Cotton Muslin
                        </li>
                        <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#A98E5D] rounded-full mr-3 shrink-0"></span>
                            Acid-free preservation environment
                        </li>
                        <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#A98E5D] rounded-full mr-3 shrink-0"></span>
                            Natural moth deterrent channel
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
