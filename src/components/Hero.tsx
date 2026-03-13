import Image from 'next/image';

export default function Hero() {
    return (
        <section className="w-full min-h-[85vh] flex flex-col items-center justify-center bg-[#EBE6DE] px-6 text-center">

            {/* The Logo Focus */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8">
                <Image
                    src="/images/logo-minimal.png"
                    alt="ecolin"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* Typography */}
            <h1 className="text-4xl md:text-6xl text-gray-900 font-light tracking-wide mb-6">
                The quiet art of garment care.
            </h1>

            <p className="text-gray-600 text-lg md:text-xl font-light mb-12 max-w-2xl">
                Elevate your closet with museum-grade, eco-friendly muslin.
            </p>

            {/* Call to Action */}
            <button className="border border-gray-900 text-gray-900 px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-gray-900 hover:text-[#EBE6DE] transition-colors duration-300">
                Explore the Collection
            </button>

        </section>
    );
}
