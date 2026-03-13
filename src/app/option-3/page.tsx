"use client";

import Image from 'next/image';

export default function Option3Page() {
    return (
        <main className="relative flex flex-col min-h-screen bg-white text-gray-900 font-sans selection:bg-[#A98E5D] selection:text-white">

            {/* The White Snow Noise Overlay */}
            <div
                className="fixed inset-0 pointer-events-none z-50 opacity-[0.04] mix-blend-multiply"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'
                }}>
            </div>

            {/* Section 1: The Hero (Centralized Grid) */}
            <section className="w-full min-h-[90vh] bg-white pt-24 pb-16 flex items-center">
                <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column (Logo & Typography) */}
                    <div className="flex flex-col items-start justify-center h-full animate-[fadeInDown_1s_ease-out_forwards]">
                        {/* Identical Scale Logo, Tightened Vertical Spacing */}
                        <div className="relative w-36 h-36 md:w-48 md:h-48 mb-2">
                            <Image
                                src="/images/logo-minimal.png"
                                alt="ecolin logo"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>

                        {/* Sophisticated H1 Typography */}
                        <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif tracking-tight text-gray-900 mb-4 drop-shadow-sm">
                            Preserve <span className="italic text-[#A98E5D]">Elegance.</span>
                        </h1>
                        <p className="text-gray-500 font-light text-lg md:text-xl tracking-wide max-w-md">
                            The definitive standard in breathable muslin garment care.
                        </p>
                    </div>

                    {/* Right Column (Full Closet Image) */}
                    <div className="w-full animate-[fadeInUp_1.5s_ease-out_forwards] opacity-0 flex items-center justify-center">
                        <Image
                            src="/images/lifestyle-closet-minimal.png"
                            alt="Ecolin Lifestyle Closet"
                            width={1200}
                            height={1500}
                            className="w-full h-auto object-cover rounded-md shadow-sm transition-opacity duration-1000"
                            onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                            style={{ opacity: 0 }}
                            priority
                        />
                    </div>
                </div>

                <style jsx>{`
            @keyframes fadeInDown {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeInUp {
                to { opacity: 1; transform: translateY(0); }
            }
        `}</style>
            </section>

            {/* Section 2: The Philosophy (The Clean Story) */}
            <section className="py-32 px-6 md:px-12 w-full bg-[#FDFCFB] border-b border-gray-100">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24">
                    <div className="w-full md:w-1/3">
                        <h3 className="text-[#A98E5D] uppercase tracking-[0.2em] text-xs font-bold md:mt-4">
                            THE PHILOSOPHY
                        </h3>
                    </div>
                    <div className="w-full md:w-2/3">
                        <p className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight font-serif">
                            A departure from damaging plastic.<br className="hidden md:block" />
                            <span className="text-gray-500 italic mt-4 block">We believe high-end garments must breathe to survive.</span>
                        </p>
                        <p className="mt-8 text-lg font-light text-gray-600 leading-relaxed max-w-2xl">
                            Natural fibers require airflow to maintain structural integrity and color depth. Plastic traps moisture and off-gassing chemicals, slowly deteriorating your investments. Our pristine, airy muslin creates a sanctuary for your wardrobe.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 3: Product Spotlight (The Crisp Exhibit) */}
            <section className="py-32 px-6 md:px-12 w-full bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Sharp Image Wrapper */}
                    <div className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center">
                        {/* Subtle Sharp Gray Square Background */}
                        <div className="absolute inset-0 bg-gray-50 mx-4 md:mr-16 mt-12 mb-4 border border-gray-100 z-0 shadow-sm"></div>

                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-light text-xs uppercase tracking-widest z-0">
                            Image: product-suit-cover.png
                        </div>

                        <Image
                            src="/images/product-suit-cover.png" // using png instead of jpg
                            alt="Signature Suit Cover"
                            fill
                            className="object-contain z-10 p-8 pt-0 drop-shadow-[0_15px_30px_rgba(0,0,0,0.06)] opacity-0 transition-all duration-1000"
                            onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                        />
                    </div>

                    {/* Right: Crisp Text */}
                    <div className="flex flex-col z-10 p-4 md:pl-8">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight mb-8">
                            Uncompromising Protection.
                        </h2>
                        <div className="w-12 h-px bg-gray-300 mb-8"></div>
                        <p className="text-gray-600 font-light text-lg lg:text-xl leading-relaxed">
                            Meticulously tailored from 100% natural, breathable muslin. Our signature cover incorporates a sharp, sheer organza window for effortless visual access without sacrificing airflow.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 4: The Craftsmanship (Sleek Sticky Scroll) */}
            <section className="w-full bg-[#FDFCFB] border-b border-gray-100 relative">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row relative px-6 md:px-12">

                    {/* Left: Sticky Logo */}
                    <div className="w-full md:w-5/12 hidden md:flex sticky top-0 h-screen items-center justify-center border-r border-gray-100">
                        <div className="relative w-48 h-48 opacity-10">
                            <Image
                                src="/images/logo-minimal.png"
                                alt="ecolin spinning watermark"
                                fill
                                className="object-contain origin-center animate-[spin_40s_linear_infinite]"
                            />
                        </div>
                    </div>

                    {/* Mobile Header (replaces sticky on small screens) */}
                    <div className="w-full md:hidden py-24 flex justify-center opacity-10">
                        <div className="relative w-32 h-32">
                            <Image
                                src="/images/logo-minimal.png"
                                alt="ecolin spinning watermark"
                                fill
                                className="object-contain origin-center animate-[spin_40s_linear_infinite]"
                            />
                        </div>
                    </div>

                    {/* Right: Scrolling Content (Sleek Cards) */}
                    <div className="w-full md:w-7/12 py-12 md:py-48 flex flex-col items-center md:items-end justify-center z-10 md:pl-16">

                        {/* Card 1 */}
                        <div className="w-full max-w-lg bg-white border border-gray-100 p-12 shadow-sm mb-32 hover:shadow-md transition-shadow duration-500">
                            <span className="text-[#A98E5D] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">01</span>
                            <h4 className="text-3xl font-serif text-gray-900 mb-6">100% Breathable Cotton</h4>
                            <div className="w-8 h-px bg-gray-200 mb-6"></div>
                            <p className="text-gray-500 font-light leading-relaxed">
                                Sourced for its tight weave and supreme breathability. An optimal microclimate for fine natural fibers.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="w-full max-w-lg bg-white border border-gray-100 p-12 shadow-sm mb-32 hover:shadow-md transition-shadow duration-500">
                            <span className="text-[#A98E5D] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">02</span>
                            <h4 className="text-3xl font-serif text-gray-900 mb-6">Acid-Free Environment</h4>
                            <div className="w-8 h-px bg-gray-200 mb-6"></div>
                            <p className="text-gray-500 font-light leading-relaxed">
                                Zero harsh chemicals in our dying process, ensuring your garments remain carefully encased in a truly neutral space.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="w-full max-w-lg bg-white border border-gray-100 p-12 shadow-sm last:mb-0 hover:shadow-md transition-shadow duration-500">
                            <span className="text-[#A98E5D] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">03</span>
                            <h4 className="text-3xl font-serif text-gray-900 mb-6">Moth Deterrent Channel</h4>
                            <div className="w-8 h-px bg-gray-200 mb-6"></div>
                            <p className="text-gray-500 font-light leading-relaxed">
                                An integrated, enclosed padded pocket meticulously designed to house natural cedar wood blocks or dried lavender sachets.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Section 5: Wardrobe Harmony */}
            <section className="py-48 px-6 w-full flex flex-col items-center justify-center text-center bg-white relative">

                <div className="max-w-2xl mx-auto flex flex-col items-center relative z-10">
                    <h2 className="text-5xl lg:text-7xl font-serif tracking-tight text-gray-900 mb-6 drop-shadow-sm">
                        Sartorial Harmony.
                    </h2>
                    <p className="text-gray-500 font-light text-xl mb-12 max-w-lg">
                        Transform your wardrobe into a curated collection. Consistent, clean, and perfectly protected.
                    </p>

                    <button className="bg-gray-900 text-white hover:bg-[#A98E5D] transition-colors duration-500 rounded-none px-12 py-5 uppercase tracking-[0.2em] text-xs font-bold shadow-xl shadow-gray-900/10">
                        Shop the Collection
                    </button>
                </div>

            </section>

        </main>
    );
}
