import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: "About",
    description: "Learn about Ecolin's dedication to protecting your most treasured garments through premium breathable materials and craftsmanship.",
    alternates: {
        canonical: '/about',
    },
    openGraph: {
        title: "About | Ecolin",
        description: "Learn about Ecolin's dedication to protecting your most treasured garments through premium breathable materials and craftsmanship.",
        url: "https://ecolin.ca/about",
    }
};

export default function AboutPage() {
    return (
        <main className="flex flex-col min-h-screen bg-white text-gray-900 font-sans selection:bg-[#A98E5D] selection:text-white">
            <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-[#F9F8F6] px-6 py-20">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                    <Image src="/images/logo-minimal.png" alt="" fill className="object-contain" />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
                    <span className="text-[#A98E5D] uppercase tracking-widest text-xs font-bold">Our Story</span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight">
                        Redefining Garment <span className="italic text-[#A98E5D]">Preservation</span>
                    </h1>
                    <p className="text-xl font-light text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Ecolin was founded on a simple principle: the garments you treasure deserve an environment that respects their construction.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 w-full">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="prose prose-lg prose-gray max-w-none font-light leading-relaxed">
                        <p>
                            Historically, luxury wardrobes have been entrusted to dry-cleaning plastics or synthetic fabric bags. While these provide the illusion of protection, they fundamentally fail to account for the living nature of natural fibers. Wool, silk, cashmere, and fine cottons need to breathe.
                        </p>
                        <p>
                            Trapped moisture and off-gassing synthetic chemicals silently deteriorate fabrics, causing yellowing, fiber breakdown, and loss of structural integrity.
                        </p>
                        <p>
                            That&apos;s why we created Ecolin. <strong>Your everyday wardrobe deserves the same level of care.</strong>
                        </p>
                        <p>
                            Used by archivists worldwide to preserve historical textiles, unbleached, acid-free muslin creates an optimal microclimate. It acts as a physical barrier against dust and light while allowing air to circulate freely, preventing moisture buildup.
                        </p>
                        <div className="border-l-2 border-[#A98E5D] pl-6 my-12 py-2">
                            <h3 className="text-2xl font-serif text-gray-900 mb-4">The Ecolin Standard</h3>
                            <p className="text-gray-600 m-0">
                                We source only premium, tightly woven cotton muslin. Our proprietary designs integrate seamlessly into the modern closet—featuring sheer organza viewing windows that never rely on vinyl or plastics, and discreet padded channels engineered for natural moth deterrents.
                            </p>
                        </div>
                        <p>
                            Ecolin isn&apos;t just a storage solution; it is a commitment to the longevity of your wardrobe and the beautiful craftsmanship of the garments within it.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
