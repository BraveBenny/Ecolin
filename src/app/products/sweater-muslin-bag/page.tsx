import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Signature Sweater Muslin Bag",
    description: "Our breathable muslin sweater bag protects your cherished knitwear, cashmere, and wool from damage, moisture, and moths without crushing natural fibers.",
};

export default function SweaterBagPage() {
    return (
        <main className="flex flex-col min-h-screen bg-white text-gray-900 font-sans selection:bg-[#A98E5D] selection:text-white pb-24">
            
            <div className="max-w-7xl mx-auto w-full px-6 md:px-12 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                
                {/* Product Image Gallery */}
                <div className="sticky top-24 w-full h-[600px] md:h-[800px] bg-[#F9F8F6] flex items-center justify-center p-8 overflow-hidden rounded-sm border border-gray-100">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-light text-xs uppercase tracking-widest z-0">
                        Placeholder: sweater-bag.png
                    </div>
                    {/* Placeholder for when image arrives */}
                    <div className="z-10 text-gray-400 font-serif italic text-3xl">Sweater & Knitwear</div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col space-y-10 lg:pl-8 pt-8 lg:pt-0">
                    <div>
                        <span className="text-[#A98E5D] uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Signature Edition</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-[1.1] mb-6">
                            The Sweater <span className="italic">Bag</span>
                        </h1>
                        <p className="text-xl font-light text-gray-600 leading-relaxed">
                            For Cashmere, Wool, Silk, and Chunky Knits.
                        </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed font-light text-lg">
                        Folded knitwear requires space to breathe and protection from natural pests. Specially dimensioned to house thick winter knits without compressing their loft, this bag features our signature natural moth deterrent pocket.
                    </p>

                    <ul className="space-y-4 font-light text-gray-700 text-base">
                        <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#A98E5D] rounded-full mr-4 shrink-0"></span>
                            Unbleached, acid-free Cotton Muslin
                        </li>
                        <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#A98E5D] rounded-full mr-4 shrink-0"></span>
                            Generous sizing to prevent fiber compression
                        </li>
                        <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#A98E5D] rounded-full mr-4 shrink-0"></span>
                            Dedicated cedar/lavender block pocket
                        </li>
                        <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-[#A98E5D] rounded-full mr-4 shrink-0"></span>
                            Secure Corozo (nut) button closure
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
