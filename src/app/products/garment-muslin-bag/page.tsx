import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Signature Garment Muslin Bag",
    description: "Our signature breathable muslin garment bag natively protects your suits, dresses, and coats from moisture, dust, and insects.",
    alternates: {
        canonical: '/products/garment-muslin-bag',
    },
    openGraph: {
        title: "Signature Garment Muslin Bag | Ecolin",
        description: "Our signature breathable muslin garment bag natively protects your suits, dresses, and coats from moisture, dust, and insects.",
        url: "https://ecolin.ca/products/garment-muslin-bag",
    }
};

export default function GarmentBagPage() {
    return (
        <main className="flex flex-col min-h-screen bg-white text-gray-900 font-sans selection:bg-[#A98E5D] selection:text-white pb-24">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Product",
                  "name": "Signature Garment Muslin Bag",
                  "description": "Our signature breathable muslin garment bag natively protects your suits, dresses, and coats from moisture, dust, and insects.",
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
                <div className="sticky top-24 w-full h-[600px] md:h-[800px] bg-[#F9F8F6] flex items-center justify-center p-8 overflow-hidden rounded-sm">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-light text-xs uppercase tracking-widest z-0">
                        Image: product-suit-cover.png
                    </div>
                    <Image
                        src="/images/product-suit-cover.png"
                        alt="Signature Garment Muslin Bag"
                        fill
                        className="object-contain z-10 p-8 md:p-16 hover:scale-105 transition-transform duration-1000 ease-out"
                        priority
                    />
                </div>

                {/* Product Info */}
                <div className="flex flex-col space-y-10 lg:pl-8 pt-8 lg:pt-0">
                    <div>
                        <span className="text-[#A98E5D] uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Signature Edition</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-[1.1] mb-6">
                            The Garment <span className="italic">Bag</span>
                        </h1>
                        <p className="text-xl font-light text-gray-600 leading-relaxed">
                            Uncompromising Protection. For Suits, Coats, and Dresses.
                        </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed font-light text-lg">
                        Engineered for longevity. Our signature suit cover features a sheer organza window for effortless wardrobe navigation, and an exclusive padded channel designed specifically for cedar or lavender essential oils.
                    </p>

                    <ul className="space-y-4 font-light text-gray-700 text-base">
                        <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#A98E5D] rounded-full mr-4 shrink-0"></span>
                            100% Breathable Cotton Muslin
                        </li>
                        <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#A98E5D] rounded-full mr-4 shrink-0"></span>
                            Acid-free preservation environment
                        </li>
                        <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#A98E5D] rounded-full mr-4 shrink-0"></span>
                            Natural moth deterrent channel
                        </li>
                        <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#A98E5D] rounded-full mr-4 shrink-0"></span>
                            Sheer organza viewing window
                        </li>
                    </ul>

                    {/* Shop Action */}
                    <div className="bg-gray-50 border border-gray-100 p-8 flex flex-col space-y-6">
                        <p className="text-sm font-light text-gray-500 italic">
                            You will be redirected to our official partner store to complete your purchase securely.
                        </p>
                        <a 
                            href="https://example.com/shop/ecolin" // Placeholder external redirect
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-900 text-white hover:bg-[#A98E5D] transition-colors duration-500 rounded-none px-12 py-5 uppercase tracking-widest text-sm font-bold shadow-md shadow-gray-900/10 text-center w-full"
                        >
                            Shop Now
                        </a>
                    </div>
                </div>

            </div>
        </main>
    );
}
