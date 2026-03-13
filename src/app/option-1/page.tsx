"use client";

import Image from 'next/image';

export default function Option1Page() {
    return (
        <main className="flex flex-col min-h-screen text-gray-900 font-sans overflow-x-hidden">

            {/* Section 1: The Modern Hero (Tactile & Fluid) */}
            <section className="relative flex flex-col md:flex-row w-full min-h-[95vh] bg-gradient-to-br from-[#EAE4D9] via-[#DBCBB5] to-[#C4B097] px-6 sm:px-12 lg:px-24">

                {/* Left Column (Text) */}
                <div className="w-full md:w-1/2 flex flex-col justify-center py-20 md:py-0 z-10 animate-[fadeIn_1s_ease-out_forwards]">
                    <div className="max-w-xl">
                        <span className="text-[#8C734B] uppercase tracking-[0.3em] text-[10px] font-bold mb-8 block">
                            Museum-Grade Preservation
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 leading-[1.1] mb-10">
                            Breathable luxury<br />for your <span className="italic font-light text-gray-800">wardrobe.</span>
                        </h1>
                        <p className="text-gray-800/80 text-lg md:text-xl font-light mb-12 leading-relaxed max-w-lg">
                            The modern standard in garment care. Protective muslin storage designed to extend the life of your curated collection.
                        </p>
                        <button className="bg-gray-900 text-white px-10 py-5 uppercase tracking-widest text-xs font-bold transition-all duration-700 ease-out hover:bg-[#8C734B] hover:scale-105 shadow-xl shadow-gray-900/10">
                            Discover the Collection
                        </button>
                    </div>
                </div>

                {/* Right Column (Image) */}
                <div className="w-full md:w-1/2 relative flex items-center justify-center py-12 md:py-24 z-10">
                    <div className="relative w-full aspect-[4/5] max-w-md mx-auto rounded-sm overflow-hidden shadow-2xl shadow-[#8C734B]/20 border border-white/20 group">
                        {/* Fallback layout visual */}
                        <div className="absolute inset-0 flex items-center justify-center text-[#8C734B] font-light text-xs uppercase tracking-widest bg-[#EAE4D9]/50 z-0">
                            Image: lifestyle-closet-minimal.png
                        </div>
                        <Image
                            src="/images/lifestyle-closet-minimal.png" // Ensured .png extension
                            alt="Ecolin Lifestyle Closet"
                            fill
                            className="object-cover object-center z-10 opacity-0 transition-all duration-[1.5s] ease-out group-hover:scale-105"
                            onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Section 2: The Philosophy (Logo Use #1 - Watermark) */}
            <section className="relative py-32 md:py-48 px-6 w-full text-center flex items-center justify-center bg-white overflow-hidden">
                {/* Massive Logo Watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-5 pointer-events-none">
                    <Image
                        src="/images/logo-minimal.png"
                        alt="Background Watermark"
                        fill
                        className="object-contain"
                    />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto space-y-12 px-4">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 tracking-tight leading-tight">
                        The Shift from Plastic<br />to <span className="italic text-[#8C734B]">Preservation.</span>
                    </h2>
                    <div className="w-12 h-px bg-[#A98E5D] mx-auto"></div>
                    <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed max-w-2xl mx-auto">
                        Everything needs protection, why not your precious clothes. High-end garments require the ability to breathe to maintain their structural and textile integrity. Plastic traps off-gassing chemicals and moisture, silently deteriorating fabrics over time.
                    </p>
                </div>
            </section>

            {/* Section 3: Product Spotlight (Interactive & Sleek) */}
            <section className="py-24 px-6 md:px-12 w-full bg-[#F9F8F6]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Floating Image */}
                    <div className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center p-8 lg:p-12">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-light text-xs uppercase tracking-widest z-0">
                            Image: product-suit-cover.png
                        </div>
                        <Image
                            src="/images/product-suit-cover.png" // Ensured .png extension
                            alt="Signature Suit Cover"
                            fill
                            className="object-contain z-10 p-8 md:p-16 opacity-0 transition-opacity duration-1000 animate-[floating_6s_ease-in-out_infinite]"
                            onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                        />
                        {/* Custom CSS for floating animation injected via style tag for simplicity, ideally in globals.css */}
                        <style jsx>{`
                @keyframes floating {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                    100% { transform: translateY(0px); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
             `}</style>
                    </div>

                    {/* Right: Text */}
                    <div className="flex flex-col space-y-8 z-10">
                        <h3 className="text-[#A98E5D] uppercase tracking-[0.3em] text-[10px] font-bold">
                            THE SIGNATURE SUIT COVER
                        </h3>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-[1.2] font-serif">
                            Uncompromising Protection for <span className="italic text-[#8C734B]">Timeless</span> Elegance.
                        </h2>
                        <p className="text-gray-600 leading-relaxed font-light text-lg lg:text-xl pb-6">
                            Engineered for longevity. Our signature suit cover features a sheer organza window for effortless wardrobe navigation, and an exclusive padded channel designed specifically for cedar or lavender essential oils.
                        </p>
                        <ul className="space-y-6 font-light text-gray-700 text-lg">
                            <li className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-[#A98E5D] rounded-full mr-4 shadow-sm shadow-[#A98E5D]/50 shrink-0"></span>
                                100% Breathable Cotton Muslin
                            </li>
                            <li className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-[#A98E5D] rounded-full mr-4 shadow-sm shadow-[#A98E5D]/50 shrink-0"></span>
                                Acid-free preservation environment
                            </li>
                            <li className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-[#A98E5D] rounded-full mr-4 shadow-sm shadow-[#A98E5D]/50 shrink-0"></span>
                                Natural moth deterrent channel
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 4: The Craftsmanship (Modern Bento Grid) */}
            <section className="py-32 px-6 md:px-12 w-full bg-gray-900 text-[#EAE4D9]">
                <div className="max-w-7xl mx-auto space-y-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-center font-light tracking-wide drop-shadow-sm">The Craftsmanship</h2>

                    {/* Bento Grid layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {/* Card 1 */}
                        <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 lg:p-12 transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[#8C734B]/50 hover:bg-white/10 shadow-lg">
                            <span className="text-[#A98E5D] text-4xl font-serif italic block mb-6 transition-transform duration-700 group-hover:scale-110 origin-left">01</span>
                            <h4 className="text-2xl font-serif text-white mb-4">Cotton Muslin</h4>
                            <p className="text-[#EAE4D9]/70 font-light leading-relaxed text-lg">
                                Sourced for its tight weave and supreme breathability, creating an optimal microclimate for natural fibers like wool, silk, and cashmere.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 lg:p-12 transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[#A98E5D]/50 hover:bg-white/10 shadow-lg md:translate-y-8">
                            <span className="text-[#A98E5D] text-4xl font-serif italic block mb-6 transition-transform duration-700 group-hover:scale-110 origin-left">02</span>
                            <h4 className="text-2xl font-serif text-white mb-4">Acid-Free Finish</h4>
                            <p className="text-[#EAE4D9]/70 font-light leading-relaxed text-lg">
                                Zero harsh chemicals or bleaches are used in our dying process, ensuring your garments remain carefully encased in a truly neutral environment.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 lg:p-12 transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[#8C734B]/50 hover:bg-white/10 shadow-lg lg:-translate-y-4">
                            <span className="text-[#A98E5D] text-4xl font-serif italic block mb-6 transition-transform duration-700 group-hover:scale-110 origin-left">03</span>
                            <h4 className="text-2xl font-serif text-white mb-4">Moth Deterrent</h4>
                            <p className="text-[#EAE4D9]/70 font-light leading-relaxed text-lg">
                                A thoughtfully integrated, enclosed padded pocket meticulously designed to house natural cedar wood blocks or dried lavender sachets securely.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: The Invitation (CTA / Logo Use #2) */}
            <section className="py-32 px-6 w-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#EAE4D9] via-[#DBCBB5] to-[#C4B097]">
                <div className="max-w-2xl mx-auto flex flex-col items-center z-10 w-full">

                    {/* Center Logo */}
                    <div className="relative w-28 h-28 md:w-32 md:h-32 mb-10">
                        <Image
                            src="/images/logo-minimal.png"
                            alt="ecolin logo"
                            fill
                            className="object-contain drop-shadow-md"
                        />
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-gray-900 mb-6 drop-shadow-sm">
                        Join the Waitlist.
                    </h2>
                    <p className="text-gray-800 font-light text-lg md:text-xl mb-12">
                        Secure your museum-grade garment care before our winter launch.
                    </p>

                    <form className="w-full max-w-md mx-auto flex items-end group relative" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full pb-4 bg-transparent border-b-2 border-gray-900/40 text-gray-900 placeholder-gray-900/50 focus:outline-none focus:border-gray-900 transition-colors rounded-none font-medium text-lg px-2"
                            required
                        />
                        <button type="submit" className="absolute right-0 bottom-4 p-2 text-gray-900 opacity-50 hover:opacity-100 transition-opacity" aria-label="Submit">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </form>
                </div>
            </section>

        </main>
    );
}
