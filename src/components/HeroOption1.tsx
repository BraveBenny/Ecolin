import Image from "next/image";

export default function HeroOption1() {
  return (
    <section className="bg-white text-gray-800 w-full font-sans pb-24">
      {/* Header */}
      <header className="w-full py-8 px-6 sm:px-12 lg:px-24 flex justify-between items-center bg-[#F7F5F0]">
        <div className="relative w-32 h-10 bg-gray-100 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-400 font-light z-0">logo</div>
          <Image
            src="/images/logo-minimal.png"
            alt="ecolin logo"
            fill
            className="object-contain z-10 opacity-0 transition-opacity duration-700"
            onLoad={(e) => (e.currentTarget.style.opacity = "1")}
          />
        </div>
        <nav className="hidden md:flex space-x-8 text-sm tracking-wide font-light text-gray-600">
          <a href="#" className="hover:text-gray-900 transition-colors">Shop</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Philosophy</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Journal</a>
        </nav>
      </header>

      {/* Fold 1: Hero */}
      <div className="bg-[#F7F5F0] flex flex-col items-center justify-center pt-16 pb-24 px-6 sm:px-12 lg:px-24 rounded-b-[2.5rem]">
        <div className="max-w-4xl w-full flex flex-col items-center text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-gray-900 leading-tight">
            Preserve Elegance.<br />Breathe Easy.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl">
            The modern standard in garment care. Breathable muslin storage to protect and extend the life of your curated wardrobe.
          </p>
          <button className="bg-[#C2A894] hover:bg-[#b09681] text-white px-8 py-4 rounded-full font-medium tracking-wide transition-colors duration-300">
            Explore the Collection
          </button>
        </div>

        <div className="w-full max-w-5xl mt-16 relative aspect-[16/9] md:aspect-[21/9] bg-[#EAE7DF] rounded-xl overflow-hidden shadow-sm flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-light z-0">
            Image: lifestyle-closet-minimal.png
          </div>
          <Image
            src="/images/lifestyle-closet-minimal.png"
            alt="Minimalist closet showing premium muslin garment bags"
            fill
            className="object-cover object-center z-10 opacity-0 transition-opacity duration-1000"
            onLoad={(e) => (e.currentTarget.style.opacity = "1")}
          />
        </div>
      </div>

      {/* Fold 2: Product Spotlight */}
      <div className="py-24 px-6 sm:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-16 max-w-7xl mx-auto">
        <div className="w-full md:w-1/2 relative aspect-[3/4] bg-[#F7F5F0] rounded-xl overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-light z-0">
            Image: product-suit-cover.png
          </div>
          <Image
            src="/images/product-suit-cover.png"
            alt="40 inch suit cover detail highlighting organza window"
            fill
            className="object-cover object-center z-10 opacity-0 transition-opacity duration-700"
            onLoad={(e) => (e.currentTarget.style.opacity = "1")}
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col space-y-6">
          <h3 className="text-sm tracking-widest text-[#C2A894] uppercase font-semibold">The Signature Suit Cover</h3>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900">40” × 24” × 4” of Pure Protection</h2>
          <p className="text-gray-600 font-light leading-relaxed text-lg">
            Engineered for longevity. Our signature suit cover features a sheer organza window for easy wardrobe navigation, and an exclusive padded channel designed specifically for cedar or lavender essential oils.
          </p>
          <ul className="space-y-4 mt-4 font-light text-gray-600">
            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#C2A894] rounded-full mr-3"></span> 100% Breathable Cotton Muslin</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#C2A894] rounded-full mr-3"></span> Acid-free preservation environment</li>
            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#C2A894] rounded-full mr-3"></span> Natural moth deterrent channel</li>
          </ul>
        </div>
      </div>

      {/* Fold 3: Philosophy */}
      <div className="bg-[#FAF9F7] py-24 px-6 text-center rounded-3xl mx-6 sm:mx-12 lg:mx-24 shadow-sm">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-serif text-gray-900 tracking-wide">Museum-Level Preservation, at Home.</h2>
          <div className="w-12 h-px bg-[#C2A894] mx-auto"></div>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            The shift from plastic dry-cleaning bags to natural muslin isn't just about aesthetics—it's about preservation. Plastic traps off-gassing chemicals and moisture, deteriorating fabrics over time. ecolin allows natural fibers to breathe, rest, and outlive fleeting trends.
          </p>
        </div>
      </div>
    </section>
  );
}
