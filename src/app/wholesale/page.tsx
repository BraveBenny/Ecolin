import WholesaleForm from "@/components/forms/WholesaleForm";

export const metadata = {
    title: "Wholesale",
    description: "Partner with Ecolin. We supply premium breathable muslin garment covers to dry cleaners, tailors, and luxury boutiques.",
    alternates: {
        canonical: '/wholesale',
    },
    openGraph: {
        title: "Wholesale | Ecolin",
        description: "Partner with Ecolin. We supply premium breathable muslin garment covers to dry cleaners, tailors, and luxury boutiques.",
        url: "https://ecolin.ca/wholesale",
    }
};

export default function WholesalePage() {
    return (
        <main className="flex flex-col min-h-screen bg-white text-gray-900 font-sans selection:bg-[#A98E5D] selection:text-white pb-24">
            
            <section className="py-24 px-6 md:px-12 w-full text-center max-w-3xl mx-auto space-y-6 bg-white">
                <span className="text-[#A98E5D] uppercase tracking-widest text-xs font-bold block">B2B Partnerships</span>
                <h1 className="text-4xl md:text-5xl font-serif leading-tight">
                    Wholesale <span className="italic text-[#A98E5D]">Inquiries</span>
                </h1>
                <p className="font-light text-gray-500 text-lg">
                    We partner with luxury dry cleaners, bespoke tailors, and premium boutiques to elevate the standard of garment care.
                </p>
            </section>

            <section className="px-6 md:px-12 w-full max-w-xl mx-auto">
                <div className="bg-[#F9F8F6] p-8 mb-12 border border-gray-100">
                    <h3 className="text-xl font-serif text-gray-900 mb-4">Why Partner with Ecolin?</h3>
                    <ul className="space-y-3 font-light text-gray-600 text-sm">
                        <li className="flex items-start">
                            <span className="text-[#A98E5D] mr-2">•</span>
                            Added Value: Offer clients a sustainable, premium alternative to plastic poly bags.
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#A98E5D] mr-2">•</span>
                            Client Loyalty: Returning garments in breathable muslin builds trust and demonstrates care for their investment.
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#A98E5D] mr-2">•</span>
                            Volume Pricing: Favorable margins for bulk orders designed for high-end service providers.
                        </li>
                    </ul>
                </div>

                <WholesaleForm />
            </section>
        </main>
    );
}
