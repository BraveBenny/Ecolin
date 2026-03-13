import Image from 'next/image';

export default function HeroOption3() {
    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-900 border-none m-0 p-0">

            {/* Cinematic Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/lifestyle-closet-minimal.png"
                    alt="Ecolin Closet"
                    fill
                    className="object-cover scale-105 transition-transform duration-[2s]" // Slight scale for a premium feel
                    priority
                />
                {/* Dark gradient overlay to make text pop */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
            </div>

            {/* Centered Editorial Content */}
            <div className="relative z-10 text-center px-6 flex flex-col items-center">
                {/* Subtle gold logo integration */}
                <div className="w-20 h-20 relative mb-6">
                    <Image
                        src="/images/logo-minimal.png"
                        alt="Ecolin Logo"
                        fill
                        className="object-contain brightness-0 invert"
                    />
                </div>

                <h1 className="text-5xl sm:text-7xl lg:text-8xl text-[#EBE6DE] font-serif font-light tracking-tighter mb-4 drop-shadow-sm">
                    Preserve <span className="italic text-[#A98E5D]">Elegance.</span>
                </h1>
                <p className="text-[#EBE6DE]/80 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-10 leading-relaxed">
                    Uncompromising protection for the garments that define you.
                    Experience the standard in eco-friendly muslin storage.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
                    <button className="bg-[#EBE6DE] text-gray-900 px-10 py-4 rounded-none uppercase tracking-[0.2em] text-xs font-bold hover:bg-white transition-colors duration-300 w-full sm:w-auto">
                        View Collection
                    </button>
                    <button className="bg-transparent border border-[#EBE6DE] text-[#EBE6DE] px-10 py-4 rounded-none uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#EBE6DE]/10 transition-colors duration-300 w-full sm:w-auto">
                        Our Philosophy
                    </button>
                </div>
            </div>
        </section>
    );
}
