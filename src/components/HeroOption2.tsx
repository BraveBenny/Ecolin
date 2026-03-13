import Image from "next/image";

export default function HeroOption2() {
    return (
        <section className="bg-[#F9F7F2] text-[#1A2A36] w-full font-sans">
            {/* Header */}
            <header className="w-full py-6 px-8 sm:px-16 lg:px-24 flex justify-between items-center bg-[#F9F7F2] border-b border-[#e8e4db]">
                <div className="relative w-36 h-12 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center text-xs text-[#1A2A36] font-light z-0 uppercase tracking-widest">logo</div>
                    <Image
                        src="/images/logo-minimal.png"
                        alt="ecolin logo"
                        fill
                        className="object-contain z-10 opacity-0 transition-opacity duration-700"
                        onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                    />
                </div>
                <nav className="hidden md:flex space-x-12 text-xs tracking-widest font-semibold uppercase text-[#1B263B]">
                    <a href="#" className="hover:text-[#B8860B] transition-colors">Shop</a>
                    <a href="#" className="hover:text-[#B8860B] transition-colors">Philosophy</a>
                    <a href="#" className="hover:text-[#B8860B] transition-colors">Journal</a>
                </nav>
            </header>

            {/* Fold 1: Hero */}
            <div className="flex flex-col md:flex-row w-full min-h-[90vh]">
                {/* Text Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-16 md:py-0 border-r border-[#e8e4db]">
                    <div className="max-w-xl mx-auto md:mx-0">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#1A2A36] leading-tight mb-8">
                            Museum-Level Preservation for Your Wardrobe.
                        </h1>
                        <p className="text-[#1B263B] text-lg md:text-xl font-light mb-12 leading-relaxed">
                            Crafted from 100% breathable muslin with signature organza windows and natural essential oil channels. Step away from plastic.
                        </p>
                        <button className="bg-[#B8860B] hover:bg-[#966b04] text-white px-10 py-5 uppercase tracking-[0.2em] text-xs font-bold transition-colors duration-300 shadow-xl shadow-[#B8860B]/20">
                            Upgrade Your Closet
                        </button>
                    </div>
                </div>

                {/* Image Content */}
                <div className="w-full md:w-1/2 relative min-h-[50vh] bg-[#e8e4db] flex items-center justify-center border-l-8 border-[#B8860B]">
                    {/* Fallback image placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center text-[#1A2A36] font-light z-0">
                        Image: lifestyle-closet-minimal.png
                    </div>
                    <Image
                        src="/images/lifestyle-closet-minimal.png"
                        alt="Premium bespoke garment bags in closet layout"
                        fill
                        className="object-cover object-center z-10 opacity-0 transition-opacity duration-1000"
                        onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                    />
                </div>
            </div>

            {/* Fold 2: Product Spotlight */}
            <div className="py-24 px-8 sm:px-16 lg:px-24 bg-white border-y border-[#e8e4db]">
                <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2 flex flex-col space-y-8 pr-0 md:pr-12">
                        <div className="w-16 h-1 bg-[#B8860B]"></div>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#1A2A36]">The Signature Suit Cover</h2>
                        <h3 className="text-xl text-[#1B263B] font-light tracking-wide">40” × 24” × 4”</h3>
                        <p className="text-[#1B263B] font-light leading-relaxed text-lg">
                            Engineered for longevity. Our signature suit cover features a sheer organza window for easy wardrobe navigation, and an exclusive padded channel designed specifically for cedar or lavender essential oils.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 border-t border-[#e8e4db] pt-8">
                            <div>
                                <h4 className="font-bold text-[#1A2A36] mb-2 uppercase text-xs tracking-widest">Material</h4>
                                <p className="font-light text-sm">100% Breathable Cotton Muslin</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#1A2A36] mb-2 uppercase text-xs tracking-widest">Feature</h4>
                                <p className="font-light text-sm">Organza Viewing Window</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#1A2A36] mb-2 uppercase text-xs tracking-widest">Environment</h4>
                                <p className="font-light text-sm">Acid-free preservation</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#1A2A36] mb-2 uppercase text-xs tracking-widest">Protection</h4>
                                <p className="font-light text-sm">Natural moth deterrent channel</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 relative aspect-[4/5] bg-[#F9F7F2] border-8 border-white shadow-2xl overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center text-[#1A2A36] font-light z-0">
                            Image: product-suit-cover.png
                        </div>
                        <Image
                            src="/images/product-suit-cover.png"
                            alt="40 inch suit cover detail highlighting organza window"
                            fill
                            className="object-cover object-center z-10 opacity-0 transition-opacity duration-700 hover:scale-105 transition-transform"
                            onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                        />
                    </div>
                </div>
            </div>

            {/* Fold 3: Philosophy */}
            <div className="bg-[#1A2A36] text-[#F9F7F2] py-32 px-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8860B] rounded-full blur-3xl opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1B263B] rounded-full blur-3xl opacity-50"></div>

                <div className="max-w-4xl mx-auto space-y-12 relative z-10">
                    <span className="text-[#B8860B] tracking-[0.3em] uppercase text-xs font-bold">The Promise</span>
                    <h2 className="text-4xl md:text-6xl font-serif leading-tight">Your Clothes Deserve Better Than Plastic.</h2>
                    <p className="text-xl font-light leading-relaxed max-w-2xl mx-auto text-[#e8e4db]">
                        The shift from plastic dry-cleaning bags to natural muslin isn't just about aesthetics—it's about preservation. Plastic traps off-gassing chemicals and moisture, deteriorating fabrics over time. ecolin allows natural fibers to breathe, rest, and outlive fleeting trends.
                    </p>
                </div>
            </div>
        </section>
    );
}
