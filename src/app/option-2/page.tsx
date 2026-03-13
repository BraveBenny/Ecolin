"use client";

import Image from 'next/image';

export default function Option2Page() {
    return (
        <main className="flex flex-col min-h-screen bg-white text-gray-900 font-sans selection:bg-[#A98E5D] selection:text-white">

            {/* Section 1: The Hero (Split-Screen Precision) */}
            <section className="flex flex-col md:flex-row w-full min-h-screen border-b border-gray-200">

                {/* Left: Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-between p-8 md:p-16 lg:p-24 bg-white border-r border-gray-200 animate-[fadeIn_1s_ease-out_forwards]">
                    <div className="relative w-24 h-12">
                        <Image
                            src="/images/logo-minimal.png"
                            alt="ecolin logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>

                    <div className="my-24">
                        <h1 className="text-5xl md:text-6xl lg:text-8xl font-thin tracking-tighter text-gray-900 leading-[1.05]">
                            The quiet art<br />of garment<br />care.
                        </h1>
                    </div>

                    <div>
                        <button className="text-sm tracking-widest uppercase font-bold text-gray-900 pb-1 border-b border-transparent hover:border-gray-900 transition-colors duration-300">
                            Discover Form & Function
                        </button>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-screen overflow-hidden bg-gray-50 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-light text-xs uppercase tracking-widest z-0">
                        Image: lifestyle-closet-minimal.png
                    </div>
                    <Image
                        src="/images/lifestyle-closet-minimal.png" // Ensured .png extension
                        alt="Ecolin Lifestyle Closet"
                        fill
                        className="object-cover object-center z-10 opacity-0 transition-opacity duration-1000 animate-[panImage_20s_linear_infinite_alternate]"
                        onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                        priority
                    />
                    {/* Custom keyframes for slow pan */}
                    <style jsx>{`
                @keyframes panImage {
                    from { transform: scale(1.05) translate(0, 0); }
                    to { transform: scale(1.05) translate(-2%, 2%); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
                </div>
            </section>

            {/* Section 2: The Philosophy (Typography Focus) */}
            <section className="py-48 px-6 md:px-12 w-full bg-[#FAFAFA] border-b border-gray-200 overflow-hidden text-center md:text-left">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-tight text-gray-900 max-w-5xl leading-tight">
                        Museum-Level Preservation, woven into 100% natural <span className="text-[#A98E5D]">Muslin.</span>
                    </h2>
                </div>
            </section>

            {/* Section 3: Product Spotlight (Flipped Layout) */}
            <section className="w-full bg-white border-b border-gray-200">
                <div className="md:grid flex flex-col-reverse md:grid-cols-2 relative">

                    {/* Left: Text */}
                    <div className="w-full flex flex-col justify-center p-8 md:p-16 lg:p-24 border-r border-gray-200 z-10">
                        <div className="max-w-lg">
                            <h3 className="text-[#A98E5D] uppercase tracking-[0.2em] text-xs font-bold mb-8">
                                The Signature Suit Cover
                            </h3>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-[1.1] mb-8 font-serif">
                                Uncompromising Protection for Timeless Elegance.
                            </h2>
                            <div className="w-12 h-px bg-gray-300 mb-8"></div>
                            <p className="text-gray-600 leading-relaxed font-light text-lg mb-8">
                                Engineered with clinical precision for longevity. Our signature suit cover features a sheer organza window for effortless wardrobe navigation, and an exclusive padded channel designed specifically for cedar or lavender essential oils.
                            </p>

                            <ul className="space-y-6 font-light text-gray-600 text-[15px] uppercase tracking-wide">
                                <li className="flex items-center">
                                    <span className="w-1 h-1 bg-gray-900 mr-4"></span>
                                    100% Breathable Cotton Muslin
                                </li>
                                <li className="flex items-center">
                                    <span className="w-1 h-1 bg-gray-900 mr-4"></span>
                                    Acid-free preservation environment
                                </li>
                                <li className="flex items-center">
                                    <span className="w-1 h-1 bg-gray-900 mr-4"></span>
                                    Natural moth deterrent channel
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right: Sharp Image */}
                    <div className="relative w-full h-[600px] md:h-auto flex items-center justify-center bg-[#FAFAFA] p-12 lg:p-24 group">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-light text-xs uppercase tracking-widest z-0">
                            Image: product-suit-cover.png
                        </div>
                        <Image
                            src="/images/product-suit-cover.png" // Ensured .png extension
                            alt="Signature Suit Cover"
                            fill
                            className="object-contain z-10 p-12 lg:p-24 opacity-0 transition-all duration-700 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)] group-hover:drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] group-hover:-translate-y-2"
                            onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                        />
                    </div>
                </div>
            </section>

            {/* Section 4: The Craftsmanship (Minimalist Accordion/List) */}
            <section className="w-full bg-white flex flex-col border-b border-gray-200">
                <div className="flex flex-col w-full">
                    {/* Row 1 */}
                    <div className="group w-full flex flex-col md:flex-row items-baseline justify-between p-8 md:p-12 lg:px-24 border-b border-gray-200 hover:bg-[#FAFAFA] transition-colors duration-500 cursor-pointer">
                        <div className="flex items-baseline space-x-8 md:space-x-16 mb-4 md:mb-0">
                            <span className="text-[#A98E5D] text-lg font-mono">01</span>
                            <h4 className="text-3xl lg:text-5xl font-thin tracking-tight text-gray-900">Breathable Cotton</h4>
                        </div>
                        <div className="flex items-center space-x-6 text-gray-400 group-hover:text-[#A98E5D] transition-colors">
                            <p className="font-light max-w-sm hidden md:block text-sm text-gray-500 text-right group-hover:text-gray-900 transition-colors">
                                Sourced for tight weave and breathability.
                            </p>
                            <span className="text-3xl font-light transform -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">→</span>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="group w-full flex flex-col md:flex-row items-baseline justify-between p-8 md:p-12 lg:px-24 border-b border-gray-200 hover:bg-[#FAFAFA] transition-colors duration-500 cursor-pointer">
                        <div className="flex items-baseline space-x-8 md:space-x-16 mb-4 md:mb-0">
                            <span className="text-[#A98E5D] text-lg font-mono">02</span>
                            <h4 className="text-3xl lg:text-5xl font-thin tracking-tight text-gray-900">Acid-Free Finish</h4>
                        </div>
                        <div className="flex items-center space-x-6 text-gray-400 group-hover:text-[#A98E5D] transition-colors">
                            <p className="font-light max-w-sm hidden md:block text-sm text-gray-500 text-right group-hover:text-gray-900 transition-colors">
                                Zero harsh chemicals in our dying process.
                            </p>
                            <span className="text-3xl font-light transform -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">→</span>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="group w-full flex flex-col md:flex-row items-baseline justify-between p-8 md:p-12 lg:px-24 hover:bg-[#FAFAFA] transition-colors duration-500 cursor-pointer">
                        <div className="flex items-baseline space-x-8 md:space-x-16 mb-4 md:mb-0">
                            <span className="text-[#A98E5D] text-lg font-mono">03</span>
                            <h4 className="text-3xl lg:text-5xl font-thin tracking-tight text-gray-900">Moth Deterrent</h4>
                        </div>
                        <div className="flex items-center space-x-6 text-gray-400 group-hover:text-[#A98E5D] transition-colors">
                            <p className="font-light max-w-sm hidden md:block text-sm text-gray-500 text-right group-hover:text-gray-900 transition-colors">
                                Enclosed pocket for cedar or lavender.
                            </p>
                            <span className="text-3xl font-light transform -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">→</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: The Invitation (The Stamp) */}
            <section className="py-48 px-6 w-full flex items-center justify-center bg-white relative">

                <div className="relative w-full max-w-3xl border border-gray-200 p-12 md:p-24 text-center bg-white shadow-sm flex flex-col items-center">

                    {/* Wax Seal / Stamp Logo */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white px-6">
                        <div className="relative w-20 h-20">
                            <Image
                                src="/images/logo-minimal.png"
                                alt="ecolin logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-thin tracking-tight text-gray-900 mb-6 mt-6">
                        Join the Waitlist
                    </h2>
                    <p className="text-gray-500 font-light text-lg mb-12">
                        Secure your museum-grade garment care before our winter launch.
                    </p>

                    <form className="w-full max-w-md mx-auto flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full pb-4 bg-transparent border-b border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors rounded-none font-light text-center"
                            required
                        />
                        <button type="submit" className="w-full bg-gray-900 text-white py-4 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-[#A98E5D] transition-colors duration-500 mt-4 rounded-none">
                            Submit Request
                        </button>
                    </form>
                </div>

            </section>

        </main>
    );
}
