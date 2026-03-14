import ContactForm from "@/components/forms/ContactForm";

export const metadata = {
    title: "Contact",
    description: "Get in touch with Ecolin for general inquiries, support, or questions about our garment preservation collections.",
    alternates: {
        canonical: '/contact',
    },
    openGraph: {
        title: "Contact | Ecolin",
        description: "Get in touch with Ecolin for general inquiries, support, or questions about our garment preservation collections.",
        url: "https://ecolin.ca/contact",
    }
};

export default function ContactPage() {
    return (
        <main className="flex flex-col min-h-screen bg-white text-gray-900 font-sans selection:bg-[#A98E5D] selection:text-white pb-24">
            
            <section className="py-24 px-6 md:px-12 w-full text-center max-w-3xl mx-auto space-y-6 bg-white">
                <span className="text-[#A98E5D] uppercase tracking-widest text-xs font-bold block">Get in Touch</span>
                <h1 className="text-4xl md:text-5xl font-serif leading-tight">
                    Contact <span className="italic text-[#A98E5D]">Ecolin</span>
                </h1>
                <p className="font-light text-gray-500 text-lg">
                    We&apos;re here to assist you with inquiries about our products, your orders, or general support.
                </p>
            </section>

            <section className="px-6 md:px-12 w-full max-w-xl mx-auto">
                <ContactForm />
            </section>
        </main>
    );
}
