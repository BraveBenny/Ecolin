import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Sustainability",
    description: "Discover Ecolin's commitment to sustainable, plastic-free garment care and eco-friendly manufacturing practices.",
    alternates: {
        canonical: '/sustainability',
    },
    openGraph: {
        title: "Sustainability | Ecolin",
        description: "Discover Ecolin's commitment to sustainable, plastic-free garment care and eco-friendly manufacturing practices.",
        url: "https://ecolin.ca/sustainability",
    }
};

export default function SustainabilityPage() {
    return (
        <main className="flex flex-col min-h-screen bg-white text-gray-900 font-sans selection:bg-[#A98E5D] selection:text-white">

            {/* ── 1. HERO ── */}
            <section className="relative w-full bg-gradient-to-br from-[#EAE4D9] to-[#F5F2EC] px-6 py-24 text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    <span className="text-[#A98E5D] uppercase tracking-widest text-xs font-bold">Our Commitment</span>
                    <h1 className="text-5xl md:text-6xl font-serif leading-tight">
                        Ending the Plastic <span className="italic text-[#A98E5D]">Era</span>
                    </h1>
                    <p className="font-serif text-xl md:text-2xl text-gray-500 italic">
                        Protection that costs the planet nothing.
                    </p>
                    <p className="font-light text-gray-600 leading-relaxed text-lg max-w-2xl mx-auto">
                        The garment storage industry has spent decades selling synthetic covers, plastic bags, and polyester cases that quietly damage the clothes they&apos;re supposed to protect. Every Ecolin product is a direct rejection of that.
                    </p>
                    <div className="w-10 h-px bg-[#A98E5D] mx-auto mt-4"></div>
                </div>
            </section>

            {/* ── 2. IMPACT STATS ── */}
            <section className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#e8e2d8] border-y border-[#e8e2d8]">
                {[
                    { num: "100%", label: "Unbleached, acid-free muslin. No synthetic fabric content." },
                    { num: "0",    label: "Synthetic fiber content. Every thread touching your garments is 100% natural." },
                    { num: "2×",   label: "Products designed to permanently replace single-use alternatives." },
                    { num: "∞",    label: "Washable, reusable, and built for years of repeated use." },
                ].map(({ num, label }) => (
                    <div key={num} className="flex flex-col items-center justify-center text-center px-6 py-10 gap-3">
                        <span className="font-serif text-4xl font-bold text-[#A98E5D]">{num}</span>
                        <span className="text-xs text-gray-500 leading-relaxed uppercase tracking-wide">{label}</span>
                    </div>
                ))}
            </section>

            {/* ── 3. THE PROBLEM ── */}
            <section className="bg-[#111] text-white px-6 md:px-16 py-24">
                <div className="max-w-3xl mx-auto space-y-8">
                    <span className="text-[#A98E5D] uppercase tracking-widest text-xs font-bold">What&apos;s actually happening</span>
                    <h2 className="font-serif text-3xl md:text-4xl text-white leading-snug">
                        The Silent Damage Inside Your Closet
                    </h2>
                    <p className="font-light text-gray-400 leading-relaxed text-lg">
                        Most people storing their favourite clothes in a plastic dry-cleaning bag, a nylon zip cover, or a sealed vinyl pouch don&apos;t realise those materials are actively working against them: trapping moisture, off-gassing acidic compounds, and providing zero protection against moths that can destroy natural fibre garments in a single season.
                    </p>
                    <blockquote className="border-l-2 border-[#A98E5D] pl-6 font-serif text-lg italic text-gray-300 leading-relaxed">
                        Muslin has been used in museum-grade and archival textile storage for centuries. It&apos;s not a trend. It&apos;s the material conservators have reached for when irreplaceable garments cannot be replaced.
                    </blockquote>
                </div>
            </section>

            {/* ── 4. COMPARISON TABLE ── */}
            <section className="bg-[#fafaf8] px-6 md:px-16 py-24">
                <div className="max-w-4xl mx-auto space-y-10">
                    <div className="space-y-3">
                        <span className="text-[#A98E5D] uppercase tracking-widest text-xs font-bold">The difference, clearly</span>
                        <h2 className="font-serif text-3xl md:text-4xl text-gray-900 leading-snug">
                            Muslin vs. Plastic: What Actually Happens Over Time
                        </h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b-2 border-[#e8e2d8]">
                                    <th className="text-left py-4 px-5 text-xs font-bold uppercase tracking-widest text-[#A98E5D]">Ecolin Muslin</th>
                                    <th className="text-left py-4 px-5 text-xs font-bold uppercase tracking-widest text-gray-400">Plastic / Polyester Bag</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#f0ede8]">
                                {[
                                    ["✓ Breathes, allowing gentle air circulation", "✗ Seals, trapping humidity and moisture"],
                                    ["✓ Acid-free, creating a chemically neutral environment", "✗ Off-gasses, releasing compounds onto fabric"],
                                    ["✓ Natural moth deterrent by material", "✗ No pest protection whatsoever"],
                                    ["✓ Washable and built to last years with care", "✗ Degrades, tears, yellows, and must be replaced"],
                                    ["✓ Biodegradable at end of life", "✗ Goes to landfill and persists for hundreds of years"],
                                ].map(([pro, con], i) => (
                                    <tr key={i}>
                                        <td className="py-4 px-5 text-sm text-green-800 font-light leading-relaxed">{pro}</td>
                                        <td className="py-4 px-5 text-sm text-gray-400 font-light leading-relaxed">{con}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── 5. FOUR PILLARS ── */}
            <section className="bg-white px-6 md:px-16 py-24">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="space-y-3">
                        <span className="text-[#A98E5D] uppercase tracking-widest text-xs font-bold">How we build it</span>
                        <h2 className="font-serif text-3xl md:text-4xl text-gray-900 leading-snug">
                            Built on Four Non-Negotiables
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        {[
                            {
                                title: "Zero Plastic",
                                body: "Billions of single-use plastic dry cleaning bags end up in landfills every year. Even reusable synthetic garment bags shed microplastics. We use 100% natural, biodegradable cotton muslin, natural organza silk, and plastic-free trims.",
                            },
                            {
                                title: "Chemical Neutrality",
                                body: "Our muslin is unbleached and acid-free, manufactured without the harsh sizing and finishing chemicals standard in commercial fabrics. This protects both your garments and the waterways near our production facilities.",
                            },
                            {
                                title: "Durable Construction",
                                body: "We designed our bags to sustain years of use — machine washable, built to last. They aren't temporary covers; they are a permanent home for your garments, engineered against disposability on principle.",
                            },
                            {
                                title: "Designed for Reuse",
                                body: "True sustainability means never needing a replacement. Every Ecolin bag is machine washable, repairable, and biodegradable at end of life. We design against disposability — not just in materials, but in the lifetime of the product itself.",
                            },
                        ].map(({ title, body }) => (
                            <div key={title} className="space-y-5">
                                <div className="w-12 h-px bg-[#A98E5D]"></div>
                                <h3 className="font-serif text-2xl text-gray-900">{title}</h3>
                                <p className="font-light text-gray-600 leading-relaxed text-lg">{body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 6. LOOKING FORWARD ── */}
            <section className="bg-[#EAE4D9]/40 px-6 md:px-16 py-24">
                <div className="max-w-3xl mx-auto space-y-10">
                    <div className="space-y-3">
                        <span className="text-[#A98E5D] uppercase tracking-widest text-xs font-bold">Looking forward</span>
                        <h2 className="font-serif text-3xl md:text-4xl text-gray-900 leading-snug">
                            Our Ongoing Commitments
                        </h2>
                    </div>
                    <div className="flex flex-col gap-6">
                        {[
                            {
                                icon: "🌿",
                                title: "Natural materials only",
                                body: "No synthetic fabrics. No plastic fibre. Across every product we make, now and in the future. This is not a policy we review — it's a founding constraint that shapes every design decision we make.",
                            },
                            {
                                icon: "🔁",
                                title: "Designed for reuse",
                                body: "Every Ecolin bag is machine washable and built to last for years. We design against disposability on principle — because a product that needs replacing has already failed its purpose.",
                            },
                        ].map(({ icon, title, body }) => (
                            <div key={title} className="flex items-start gap-6 bg-white rounded-lg px-7 py-6 shadow-sm">
                                <span className="text-2xl mt-1 flex-shrink-0">{icon}</span>
                                <div className="space-y-2">
                                    <strong className="block text-sm font-bold tracking-wide text-gray-900">{title}</strong>
                                    <p className="font-light text-gray-600 leading-relaxed text-base">{body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 7. CTA ── */}
            <section className="bg-[#111] px-6 py-24 text-center">
                <div className="max-w-2xl mx-auto space-y-6">
                    <h2 className="font-serif text-3xl md:text-4xl text-white leading-snug">
                        Built to Last. Built to Do No Harm.
                    </h2>
                    <p className="font-light text-gray-400 text-lg leading-relaxed">
                        The right garment bag protects your clothes and costs the planet nothing.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Link
                            href="/products"
                            className="inline-block bg-[#A98E5D] text-white text-xs font-bold tracking-widest uppercase px-10 py-4 hover:bg-[#8f7649] transition-colors duration-200"
                        >
                            Shop the Collection
                        </Link>
                        <Link
                            href="/about"
                            className="inline-block border border-gray-600 text-gray-300 text-xs font-bold tracking-widest uppercase px-10 py-4 hover:border-gray-400 hover:text-white transition-colors duration-200"
                        >
                            Learn About Our Materials
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
