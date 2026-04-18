import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Signature Sweater Muslin Bag",
    description: "Our breathable muslin sweater bag protects your cherished knitwear, cashmere, and wool from damage, moisture, and moths without crushing natural fibers.",
    alternates: {
        canonical: '/products/sweater-muslin-bag',
    },
    openGraph: {
        title: "Signature Sweater Muslin Bag | Ecolin",
        description: "Our breathable muslin sweater bag protects your cherished knitwear, cashmere, and wool from damage, moisture, and moths without crushing natural fibers.",
        url: "https://ecolin.ca/products/sweater-muslin-bag",
    }
};

export default function SweaterBagPage() {
    return (
        <main className="flex flex-col min-h-screen bg-white text-gray-900 font-sans selection:bg-[#A98E5D] selection:text-white pb-24">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Product",
                  "name": "Sweater Muslin Storage Bag",
                  "description": "Protect your fine cashmere and wool knits from moths and dust with our breathable muslin sweater storage bags.",
                  "brand": {
                    "@type": "Brand",
                    "name": "Ecolin"
                  },
                  "material": "100% Breathable Cotton Muslin",
                  "color": "Muslin/Beige"
                })
              }}
            />
            
            <div className="max-w-7xl mx-auto w-full px-6 md:px-12 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                
                {/* Product Image Gallery */}
                <div className="sticky top-24 w-full h-[600px] md:h-[800px] bg-[#F9F8F6] flex items-center justify-center p-8 overflow-hidden rounded-sm border border-gray-100">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-light text-xs uppercase tracking-widest z-0">
                        Image: sweater-muslin-bag-main.png
                    </div>
                    <Image
                        src="/images/sweater-muslin-bag-main.png"
                        alt="Signature Sweater Muslin Bag"
                        fill
                        className="object-contain z-10 p-8 md:p-16 hover:scale-105 transition-transform duration-1000 ease-out"
                        priority
                    />
                </div>

                {/* Product Info */}
                <div className="flex flex-col space-y-10 lg:pl-8 pt-8 lg:pt-0">
                    <div>
                        <span className="text-[#A98E5D] uppercase tracking-[0.3em] text-[12px] font-bold mb-4 block">Signature Edition</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-[1.1] mb-6">
                            The Sweater <span className="italic">Bag</span>
                        </h1>
                        <p className="text-xl font-light text-gray-600 leading-relaxed">
                            For sweaters, blankets, and folded knits.
                        </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed font-light text-lg space-y-4">
                        Protective and breathable storage, our sweater muslin bag preserves and protects the softness and structure of your folded garments.
                    </p>
                    <p className="text-gray-700 leading-relaxed font-light text-lg">
                        Folded knitwear requires space to breathe and protection from natural pests. Specifically dimensioned to house thick winter knits without compression, this bag features our signature natural moth and bug deterrent material.
                    </p>

                    <ul className="space-y-4 font-light text-gray-700 text-base">
                        <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#A98E5D] rounded-full mr-4 shrink-0"></span>
                            Unbleached, acid-free muslin
                        </li>
                        <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#A98E5D] rounded-full mr-4 shrink-0"></span>
                            Generous sizing to prevent fiber compression
                        </li>
                        <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#A98E5D] rounded-full mr-4 shrink-0"></span>
                            Dedicated cedar/lavender piping
                        </li>
                        <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#A98E5D] rounded-full mr-4 shrink-0"></span>
                            Sheer organza viewing window
                        </li>
                    </ul>

                    <p className="text-[14px] text-[#8C734B] font-light tracking-wide">$14.99 USD</p>

                    {/* Shop Action */}
                    <div className="bg-gray-50 border border-gray-100 p-8 flex flex-col items-center text-center space-y-6">
                        <p className="text-sm font-light text-gray-600 leading-relaxed">
                            You are about to continue to our partner store, Treasury Boxes, where you can securely complete your purchase.
                        </p>
                        <div className="w-full flex flex-col items-center">
                            <a 
                                href="https://www.treasuryboxes.com/ecolin-muslin-bags"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-900 text-white hover:bg-[#A98E5D] transition-colors duration-500 rounded-none px-12 py-4 uppercase tracking-widest text-sm font-bold shadow-md shadow-gray-900/10 text-center w-full block"
                            >
                                Shop the Collection
                            </a>
                            <span className="text-[11px] text-gray-400 mt-3 font-light tracking-widest uppercase">
                                Secure checkout via Treasury Boxes
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
