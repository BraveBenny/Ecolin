import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Collection",
    description: "Explore the Ecolin collection of breathable, premium muslin garment protection covers and storage bags.",
    alternates: {
        canonical: '/products',
    },
    openGraph: {
        title: "Collection | Ecolin",
        description: "Explore the Ecolin collection of breathable, premium muslin garment protection covers and storage bags.",
        url: "https://ecolin.ca/products",
    }
};

export default function ProductsPage() {
    return (
        <main className="flex flex-col min-h-screen bg-white text-gray-900 font-sans selection:bg-[#A98E5D] selection:text-white">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "CollectionPage",
                  "name": "Ecolin Product Collection",
                  "description": "Discover our collection of premium breathable muslin garment bags and sweater storage solutions.",
                  "url": "https://ecolin.ca/products"
                })
              }}
            />
            <section className="py-24 px-6 md:px-12 w-full text-center">
                <span className="text-[#A98E5D] uppercase tracking-widest text-xs font-bold mb-6 block">Collection</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-[1.2]">
                    Premium Breathable Protection <br className="hidden md:block"/>for your <span className="italic text-[#A98E5D]">Wardrobe</span>
                </h1>
            </section>

            <section className="pb-32 px-6 md:px-12 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                
                {/* Product 1: The Garment Bag */}
                <Link href="/products/garment-muslin-bag" className="group flex flex-col items-center">
                    <div className="relative w-full aspect-[4/5] bg-[#F9F8F6] flex items-center justify-center p-8 mb-8 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-light text-xs uppercase tracking-widest z-0">
                            Image: product-suit-cover.png
                        </div>
                        <Image
                            src="/images/product-suit-cover.png"
                            alt="Signature Garment Muslin Bag"
                            fill
                            className="object-contain z-10 p-8 md:p-12 transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                        />
                    </div>
                    <h2 className="text-2xl font-serif text-gray-900 mb-2 group-hover:text-[#A98E5D] transition-colors">The Signature Garment Bag</h2>
                    <p className="font-light text-gray-500 mb-4">For Suits, Coats, and Dresses</p>
                    <span className="text-[#A98E5D] uppercase tracking-widest text-xs font-bold border-b border-transparent group-hover:border-[#A98E5D] transition-colors pb-1">Explore</span>
                </Link>

                {/* Product 2: The Sweater Bag */}
                <Link href="/products/sweater-muslin-bag" className="group flex flex-col items-center">
                    <div className="relative w-full aspect-[4/5] bg-[#F9F8F6] flex items-center justify-center p-8 mb-8 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-light text-xs uppercase tracking-widest z-0">
                            Placeholder: sweater-bag.png
                        </div>
                        {/* 
                            Assuming no image exists yet for the sweater bag, using a subtle placeholder representation.
                            If an image `product-sweater-bag.png` is placed in public/images, uncomment Image below.
                        */}
                        {/*
                        <Image
                            src="/images/product-sweater-bag.png"
                            alt="Signature Sweater Muslin Bag"
                            fill
                            className="object-contain z-10 p-8 md:p-12 transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                        />
                        */}
                        <div className="z-10 text-gray-400 font-serif italic text-2xl group-hover:scale-105 transition-transform duration-1000">Knitwear Storage</div>
                    </div>
                    <h2 className="text-2xl font-serif text-gray-900 mb-2 group-hover:text-[#A98E5D] transition-colors">The Sweater Bag</h2>
                    <p className="font-light text-gray-500 mb-4">For Cashmere, Wool, and Chunky Knits</p>
                    <span className="text-[#A98E5D] uppercase tracking-widest text-xs font-bold border-b border-transparent group-hover:border-[#A98E5D] transition-colors pb-1">Explore</span>
                </Link>

            </section>
        </main>
    );
}
