import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "FAQ",
    description: "Frequently asked questions about Ecolin's breathable muslin garment preservation systems.",
};

export default function FAQPage() {
    return (
        <main className="flex flex-col min-h-screen bg-white text-gray-900 font-sans selection:bg-[#A98E5D] selection:text-white">
            <section className="relative w-full min-h-[40vh] flex items-center justify-center bg-gray-50 px-6 py-20">
                <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-serif leading-tight">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg font-light text-gray-500 leading-relaxed max-w-xl mx-auto">
                        Everything you need to know about our products and how to care for your garments.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 w-full">
                <div className="max-w-3xl mx-auto space-y-12">
                    
                    <div className="space-y-4">
                        <h3 className="text-xl font-serif text-gray-900">Why is muslin better than plastic or nylon?</h3>
                        <p className="font-light text-gray-600 leading-relaxed">
                            Natural fibers in clothing need to breathe. Plastic and synthetic covers trap moisture which can lead to mold and mildew. They also emit off-gassing chemicals that can permanently yellow or degrade fine fabrics over time. 100% cotton muslin acts as a physical barrier against dust and light while allowing free air circulation.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-serif text-gray-900">Are Ecolin bags acid-free?</h3>
                        <p className="font-light text-gray-600 leading-relaxed">
                            Yes. All Ecolin muslin is carefully sourced and processed to be completely acid-free, providing a chemically neutral environment that is safe for long-term archival storage of your most precious garments.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-serif text-gray-900">How do I wash my Ecolin covers?</h3>
                        <p className="font-light text-gray-600 leading-relaxed">
                            Ecolin covers are fully machine washable. We recommend washing on a gentle cycle with cold water and a mild, un-scented detergent. Tumble dry on low or hang dry. Do not use bleach or fabric softeners, as these leave residues that defeat the purpose of the acid-free environment.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-serif text-gray-900">How does the moth deterrent channel work?</h3>
                        <p className="font-light text-gray-600 leading-relaxed">
                            Our covers feature an exclusive padded, breathable inner pocket designed to hold natural cedar wood blocks or dried lavender sachets. This keeps the oils from the wood/herbs from directly contacting your garments, while allowing their natural moth-deterrent scent to permeate the bag.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-serif text-gray-900">Do you offer wholesale pricing?</h3>
                        <p className="font-light text-gray-600 leading-relaxed">
                            Yes, we partner with premium dry cleaners, tailors, and boutiques. Please visit our <a href="/wholesale" className="text-[#A98E5D] underline underline-offset-4 hover:text-gray-900 transition-colors">Wholesale</a> page to submit an inquiry.
                        </p>
                    </div>

                </div>
            </section>
        </main>
    );
}
