import Image from 'next/image';
import Link from 'next/link';
import NewsletterSignup from '@/components/forms/NewsletterSignup';
import ScrollBloomLogo from '@/components/effects/ScrollBloomLogo';
import HeroImageCarousel from '@/components/effects/HeroImageCarousel';
import BrandSignatureSection from '@/components/BrandSignatureSection';

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-[#A98E5D] selection:text-white">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  "name": "Ecolin",
                  "url": "https://ecolin.ca/"
                })
              }}
            />

            {/* The White Snow Noise Overlay (Global) for texture */}
            <div
                className="fixed inset-0 pointer-events-none z-50 opacity-[0.04] mix-blend-multiply"
                style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'
                }}>
            </div>

            {/* Section 1: The Modern Hero (Tactile & Fluid) */}
            <section className="relative flex flex-col md:flex-row w-full min-h-[90vh] bg-gradient-to-br from-[#EAE4D9] via-[#DBCBB5] to-[#C4B097] px-6 sm:px-12 lg:px-24 overflow-hidden">

                {/* Left Column (Text) */}
                <div className="w-full md:w-1/2 flex flex-col justify-center py-20 md:py-0 z-10 animate-[fadeIn_1s_ease-out_forwards]">
                    <div className="max-w-xl">
                        <span className="text-[#8C734B] uppercase tracking-[0.3em] text-[12px] font-bold mb-8 block">
                            Premium Protection
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 leading-[1.1] mb-10">
                            Luxurious protection<br />for your <span className="italic font-light text-gray-800">wardrobe</span>
                        </h1>
                        <p className="text-gray-800/80 text-lg md:text-xl font-light mb-12 leading-relaxed max-w-lg">
                            The modern standard in garment care. Protective muslin storage designed to extend the life of your garments.
                        </p>
                        <Link href="/products" className="inline-block bg-gray-900 text-white px-10 py-5 uppercase tracking-widest text-xs font-bold transition-all duration-700 ease-out hover:bg-white hover:text-gray-900 border border-transparent hover:border-gray-900 hover:-translate-y-1 shadow-xl shadow-gray-900/10">
                            Discover the Collection
                        </Link>
                    </div>
                </div>

                {/* Right Column (Image) */}
                <div className="w-full md:w-1/2 relative flex items-center justify-center py-12 md:py-24 z-10">
                    <div className="relative w-full aspect-[4/5] max-w-md mx-auto overflow-hidden shadow-2xl shadow-[#8C734B]/20 border border-white/20 group">
                        <HeroImageCarousel />
                    </div>
                </div>
            </section>

            {/* Section 2: The Philosophy (Logo Use #1 - Watermark) */}
            <section className="relative py-32 md:py-48 px-6 w-full text-center flex items-center justify-center bg-white overflow-hidden">
                {/* Subtle Interactive Watermark */}
                <ScrollBloomLogo />

                <div className="relative z-10 max-w-4xl mx-auto space-y-12 px-4">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 tracking-tight leading-tight">
                        The Shift from Plastic<br />to <span className="italic text-[#8C734B]">Protection</span>
                    </h2>
                    <div className="w-12 h-px bg-[#A98E5D] mx-auto"></div>
                    <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed max-w-2xl mx-auto">
                        Everything needs protection, why not your precious clothes. Garments require the ability to breathe in order to maintain their structural and textile integrity. Plastic traps off-gassing chemicals and moisture, silently deteriorating fabrics over time.
                    </p>
                </div>
            </section>

            {/* Section 3: Product Spotlight (Interactive & Sleek) */}
            <section className="py-24 px-6 md:px-12 w-full bg-[#F9F8F6]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Image */}
                    <div className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center p-8 lg:p-12 group perspective-1000">
                        {/* Decorative refined frame */}
                        <div className="absolute inset-4 md:inset-8 border border-[#A98E5D]/20 bg-white/40 backdrop-blur-sm z-0 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-[rgba(169,142,93,0.15)] rounded-sm"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-light text-xs uppercase tracking-widest z-0 pointer-events-none">
                            Image: product-suit-cover.png
                        </div>
                        <Image
                            src="/images/product-suit-cover.png"
                            alt="Signature Suit Cover"
                            fill
                            className="object-contain z-10 p-12 md:p-20 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-4 group-hover:scale-105"
                        />
                    </div>

                    {/* Right: Text */}
                    <div className="flex flex-col space-y-8 z-10">
                        <h3 className="text-[#A98E5D] uppercase tracking-[0.3em] text-[12px] font-bold">
                            THE SIGNATURE GARMENT COVER
                        </h3>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-[1.2] font-serif">
                            Uncompromising Protection for <span className="relative inline-block italic text-[#8C734B] animate-[pulse_4s_ease-in-out_infinite] drop-shadow-[0_0_8px_rgba(140,115,75,0.3)]">Timeless</span> Elegance
                        </h2>
                        <p className="text-gray-600 leading-relaxed font-light text-lg lg:text-xl pb-6">
                            Engineered for longevity, our signature garment cover features a sheer organza window for effortless wardrobe navigation and exclusive padded piping designed to absorb cedar or lavender essential oils.
                        </p>
                        <ul className="space-y-6 font-light text-gray-700 text-lg mb-8">
                            <li className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-[#A98E5D] rounded-full mr-4 shadow-sm shadow-[#A98E5D]/50 shrink-0"></span>
                                100% breathable muslin
                            </li>
                            <li className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-[#A98E5D] rounded-full mr-4 shadow-sm shadow-[#A98E5D]/50 shrink-0"></span>
                                Acid-free protective environment
                            </li>
                            <li className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-[#A98E5D] rounded-full mr-4 shadow-sm shadow-[#A98E5D]/50 shrink-0"></span>
                                Natural moth and bug deterrent
                            </li>
                        </ul>
                        <div className="mt-4">
                            <Link href="/products/garment-muslin-bag" className="text-[#A98E5D] uppercase tracking-widest text-xs font-bold hover:text-gray-900 transition-colors border-b border-[#A98E5D] pb-1 hover:border-gray-900">
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: The Craftsmanship (Modern Bento Grid) */}
            <section className="relative py-32 px-6 md:px-12 w-full bg-gray-900 text-[#EAE4D9]">
                <div className="max-w-7xl mx-auto space-y-16 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16 space-y-8 md:space-y-0 relative z-20">
                        <h2 className="text-3xl md:text-5xl font-serif text-center md:text-left font-light tracking-wide drop-shadow-sm">The Craftsmanship</h2>
                        <span className="font-serif text-3xl md:text-4xl italic text-[#8C734B] opacity-40">Ecolin</span>
                    </div>

                    {/* Bento Grid layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {/* Card 1 */}
                        <div className="group relative overflow-hidden bg-white/5 border border-white/10 p-10 lg:p-12 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-3 hover:border-[#8C734B]/60 hover:bg-white/10 hover:shadow-2xl hover:shadow-[#A98E5D]/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#A98E5D]/0 to-[#A98E5D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out z-0"></div>
                            <div className="relative z-10">
                                <span className="text-[#A98E5D] text-4xl font-serif italic block mb-6 transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-1 origin-left">01</span>
                                <h4 className="text-2xl font-serif text-white mb-4">Muslin</h4>
                                <p className="text-[#EAE4D9]/70 font-light leading-relaxed text-lg transition-colors duration-700 group-hover:text-[#EAE4D9]/90">
                                    Sourced for its tight weave and supreme breathability, creating an optimal microclimate for natural fibers like wool, silk, and cashmere.
                                </p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="group relative overflow-hidden bg-white/5 border border-white/10 p-10 lg:p-12 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-3 hover:border-[#A98E5D]/60 hover:bg-white/10 hover:shadow-2xl hover:shadow-[#A98E5D]/10 md:translate-y-8">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#A98E5D]/0 to-[#A98E5D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out z-0"></div>
                            <div className="relative z-10">
                                <span className="text-[#A98E5D] text-4xl font-serif italic block mb-6 transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-1 origin-left">02</span>
                                <h4 className="text-2xl font-serif text-white mb-4">Acid-Free Finish</h4>
                                <p className="text-[#EAE4D9]/70 font-light leading-relaxed text-lg transition-colors duration-700 group-hover:text-[#EAE4D9]/90">
                                    Zero harsh chemicals or bleaches are used in the production process, ensuring your garments remain safely encased in a truly neutral protective environment.
                                </p>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="group relative overflow-hidden bg-white/5 border border-white/10 p-10 lg:p-12 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-3 hover:border-[#8C734B]/60 hover:bg-white/10 hover:shadow-2xl hover:shadow-[#A98E5D]/10 lg:-translate-y-4">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#A98E5D]/0 to-[#A98E5D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out z-0"></div>
                            <div className="relative z-10">
                                <span className="text-[#A98E5D] text-4xl font-serif italic block mb-6 transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-1 origin-left">03</span>
                                <h4 className="text-2xl font-serif text-white mb-4">Moth Deterrent</h4>
                                <p className="text-[#EAE4D9]/70 font-light leading-relaxed text-lg transition-colors duration-700 group-hover:text-[#EAE4D9]/90">
                                    Crafted from breathable natural muslin. Breathability provides a simple chemical-free way to help protect fabrics during storage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 4.5: Product Spotlight - Sweater Bag */}
            <section className="py-24 px-6 md:px-12 w-full bg-[#F9F8F6]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Text (Swapped for visual balance using order-2 md:order-1) */}
                    <div className="flex flex-col space-y-8 z-10 order-2 md:order-1">
                        <h3 className="text-[#A98E5D] uppercase tracking-[0.3em] text-[12px] font-bold">
                            THE SWEATER BAG
                        </h3>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-[1.2] font-serif">
                            Refined Storage for <span className="relative inline-block italic text-[#8C734B] animate-[pulse_4s_ease-in-out_infinite] drop-shadow-[0_0_8px_rgba(140,115,75,0.3)]">Delicate</span> Knitwear
                        </h2>
                        <p className="text-gray-600 leading-relaxed font-light text-lg lg:text-xl pb-6">
                            Protective breathable storage designed for cashmere, wool, merino, and other knitwear, our sweater muslin bag protects the softness and structure of your folded garments.
                        </p>
                        <ul className="space-y-6 font-light text-gray-700 text-lg mb-8">
                            <li className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-[#A98E5D] rounded-full mr-4 shadow-sm shadow-[#A98E5D]/50 shrink-0"></span>
                                Breathable muslin
                            </li>
                            <li className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-[#A98E5D] rounded-full mr-4 shadow-sm shadow-[#A98E5D]/50 shrink-0"></span>
                                Ideal for folded knitwear
                            </li>
                            <li className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-[#A98E5D] rounded-full mr-4 shadow-sm shadow-[#A98E5D]/50 shrink-0"></span>
                                Preserves softness and structure
                            </li>
                        </ul>
                        <div className="mt-4">
                            <Link href="/products/sweater-muslin-bag" className="text-[#A98E5D] uppercase tracking-widest text-xs font-bold hover:text-gray-900 transition-colors border-b border-[#A98E5D] pb-1 hover:border-gray-900">
                                View Details
                            </Link>
                        </div>
                    </div>

                    {/* Right: Image (Swapped for visual balance using order-1 md:order-2) */}
                    <div className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center p-8 lg:p-12 group perspective-1000 order-1 md:order-2">
                        {/* Decorative refined frame */}
                        <div className="absolute inset-4 md:inset-8 border border-[#A98E5D]/20 bg-white/40 backdrop-blur-sm z-0 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-[rgba(169,142,93,0.15)] rounded-sm"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-light text-xs uppercase tracking-widest z-0 pointer-events-none">
                            Image: sweater-muslin-bag-main.png
                        </div>
                        <Image
                            src="/images/sweater-muslin-bag-main.png"
                            alt="The Sweater Bag"
                            fill
                            className="object-contain z-10 p-12 md:p-20 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-4 group-hover:scale-105"
                        />
                    </div>

                </div>
            </section>

            {/* Section 5: Newsletter (Added Back) */}
            <section className="py-24 px-6 md:px-12 w-full bg-[#D4C5B3] border-t border-[#C4B4A1]">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-serif text-gray-900 tracking-tight">
                        Join the <span className="italic text-[#8C734B] drop-shadow-sm">Ecolin list</span>
                    </h2>
                    <p className="text-lg font-light text-gray-800 max-w-xl mx-auto">
                        Sign up for exclusive insights on wardrobe preservation, sustainable garment protection, and early access to our garment releases.
                    </p>
                    <div className="max-w-md mx-auto pt-4">
                        <NewsletterSignup idContext="home" />
                    </div>
                </div>
            </section>

            {/* Section 4.75: Brand Signature */}
            <BrandSignatureSection />
        </main>
    );
}

