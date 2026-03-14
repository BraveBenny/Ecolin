import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Sustainability",
    description: "Discover Ecolin's commitment to sustainable, plastic-free garment care and eco-friendly manufacturing practices.",
};

export default function SustainabilityPage() {
    return (
        <main className="flex flex-col min-h-screen bg-white text-gray-900 font-sans selection:bg-[#A98E5D] selection:text-white">
            <section className="relative w-full min-h-[50vh] flex items-center justify-center bg-[#EAE4D9]/30 px-6 py-20">
                <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
                    <span className="text-[#A98E5D] uppercase tracking-widest text-xs font-bold">Responsibility</span>
                    <h1 className="text-5xl md:text-6xl font-serif leading-tight">
                        Ending the Plastic <span className="italic text-[#A98E5D]">Era.</span>
                    </h1>
                    <p className="text-xl font-light text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        A wardrobe built to last forever shouldn&apos;t rely on synthetic materials that pollute the earth.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 w-full">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        <div className="space-y-6">
                            <div className="w-12 h-px bg-[#A98E5D]"></div>
                            <h2 className="text-3xl font-serif text-gray-900">Zero Plastic</h2>
                            <p className="font-light text-gray-600 leading-relaxed text-lg">
                                Billions of single-use plastic dry cleaning bags end up in landfills every year. Even reusable synthetic garment bags shed microplastics. We use 100% natural, biodegradable cotton muslin, natural organza silk, and plastic-free trims.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="w-12 h-px bg-[#A98E5D]"></div>
                            <h2 className="text-3xl font-serif text-gray-900">Chemical Neutrality</h2>
                            <p className="font-light text-gray-600 leading-relaxed text-lg">
                                Our muslin is unbleached and acid-free, manufactured without the harsh sizing and finishing chemicals standard in commercial fabrics. This protects both your garments and the waterways near our production facilities.
                            </p>
                        </div>
                        <li className="flex items-start">
                            <span className="text-[#A98E5D] mr-3 mt-1.5 shrink-0">•</span>
                            <div>
                                <strong className="text-gray-900 font-medium block">Durable Construction</strong>
                                We designed our bags to sustain years of use. They aren&apos;t temporary covers; they are a permanent home for your garments.
                            </div>
                        </li>
                        <div className="space-y-6">
                            <div className="w-12 h-px bg-[#A98E5D]"></div>
                            <h2 className="text-3xl font-serif text-gray-900">Sustainable Packaging</h2>
                            <p className="font-light text-gray-500 text-lg">
                    We believe that true luxury is inherently sustainable. It&apos;s about creating things that last, and caring for them in ways that don&apos;t harm the environment.
                </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
