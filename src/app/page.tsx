"use client";

import Image from 'next/image';
import ProductSpotlight from "@/components/ProductSpotlight";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-white text-gray-900 font-sans selection:bg-[#A98E5D] selection:text-white">

      {/* The White Snow Noise Overlay (Global) */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'
        }}>
      </div>

      {/* Section 1: Desktop Hero (Split-Panel Integration) */}
      <section className="relative w-full min-h-[90vh] flex flex-col md:flex-row bg-white overflow-hidden">

        {/* Col 1: Text, CTA, Reduced Logo (Left Panel) */}
        <div className="w-full lg:w-1/4 md:w-1/3 bg-white/95 backdrop-blur-sm px-8 md:px-12 lg:px-16 py-16 flex flex-col justify-center z-10 shadow-[20px_0_50px_rgba(0,0,0,0.02)]">

          {/* Tasteful, Reduced Logo */}
          <div className="relative w-28 h-28 mb-10 shrink-0 hidden md:block animate-[fadeInUp_1s_ease-out_forwards]">
            <Image
              src="/images/logo-minimal.png"
              alt="ecolin logo"
              fill
              className="object-contain object-left-top"
              priority
            />
          </div>
          {/* Mobile Logo Fallback (Centered) */}
          <div className="relative w-32 h-32 mb-10 shrink-0 md:hidden animate-[fadeInUp_1s_ease-out_forwards] mx-auto">
            <Image
              src="/images/logo-minimal.png"
              alt="ecolin logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Typography */}
          <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif text-gray-900 leading-[1.1] mb-6 tracking-tight animate-[fadeInUp_1.2s_ease-out_forwards] text-center md:text-left">
            Preserve <span className="italic text-[#A98E5D]">Elegance.</span>
          </h1>

          <p className="text-gray-500 text-lg md:text-xl font-light mb-12 max-w-sm leading-relaxed animate-[fadeInUp_1.4s_ease-out_forwards] text-center md:text-left mx-auto md:mx-0">
            The definitive standard in breathable muslin garment care.
          </p>

          {/* Call-to-Action */}
          <div className="animate-[fadeInUp_1.6s_ease-out_forwards] flex justify-center md:justify-start">
            <button className="bg-gray-900 text-white hover:bg-[#A98E5D] transition-colors duration-500 rounded-none px-12 py-5 uppercase tracking-widest text-sm font-bold shadow-xl shadow-gray-900/10">
              Shop the Collection
            </button>
          </div>

        </div>

        {/* Col 2: Full Wardrobe Panel (Right Visual) */}
        <div className="w-full lg:w-3/4 md:w-2/3 relative min-h-[60vh] md:min-h-[90vh] bg-gray-50 flex items-center justify-center border-l-4 border-l-[#A98E5D] shadow-[-10px_0_30px_rgba(0,0,0,0.03)] z-0 overflow-hidden">

          <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-light text-xs uppercase tracking-widest z-0">
            Image: lifestyle-closet-minimal.png
          </div>

          {/* High-res Image with slow pan animation */}
          <div className="absolute inset-0 animate-[slowPan_25s_linear_infinite_alternate]">
            <Image
              src="/images/lifestyle-closet-minimal.png"
              alt="Ecolin Lifestyle Closet"
              fill
              className="object-cover object-center z-10 transition-opacity duration-1000"
              onLoad={(e) => (e.currentTarget.style.opacity = "1")}
              style={{ opacity: 0 }}
              priority
            />
          </div>
        </div>

      </section>

      {/* Keep the draft Product Spotlight for now below the hero */}
      <section className="py-24 bg-white border-t border-gray-100">
        <ProductSpotlight />
      </section>

      <style jsx>{`
          @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slowPan {
              from { transform: scale(1.05) translate(0, 0); }
              to { transform: scale(1.1) translate(-2%, 2%); }
          }
      `}</style>
    </main>
  );
}
