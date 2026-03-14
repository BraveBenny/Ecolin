import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-[#DBCBB5]/20 text-gray-900 py-20 px-8 sm:px-16 lg:px-28 border-t border-[#A98E5D]/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
                
                {/* Brand Identity */}
                <div className="flex flex-col space-y-6 max-w-sm">
                    <h3 className="font-serif text-3xl italic tracking-wide text-gray-900">Ecolin</h3>
                    <p className="text-gray-600 font-light text-sm leading-relaxed">
                        The definitive standard in breathable muslin garment care. Preserving the integrity of your curated wardrobe through sustainable, archival materials.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col md:flex-row gap-12 md:gap-24 text-[13px] font-medium tracking-widest uppercase text-gray-500">
                    <div className="flex flex-col space-y-4">
                        <Link href="/" className="hover:text-[#A98E5D] transition-colors duration-500">Home</Link>
                        <Link href="/products" className="hover:text-[#A98E5D] transition-colors duration-500">Products</Link>
                        <Link href="/sustainability" className="hover:text-[#A98E5D] transition-colors duration-500">Sustainability</Link>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <Link href="/wholesale" className="hover:text-[#A98E5D] transition-colors duration-500">Wholesale</Link>
                        <Link href="/faq" className="hover:text-[#A98E5D] transition-colors duration-500">FAQ</Link>
                        <Link href="/contact" className="hover:text-[#A98E5D] transition-colors duration-500">Contact</Link>
                    </div>
                </div>
            </div>

            {/* Copyright & Legal */}
            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#A98E5D]/10 flex flex-col md:flex-row justify-between items-center text-[11px] uppercase tracking-widest text-gray-400 font-medium">
                <p>&copy; {new Date().getFullYear()} Ecolin</p>
                <div className="flex space-x-8 mt-6 md:mt-0">
                    <a href="#" className="hover:text-gray-900 transition-colors duration-500">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-900 transition-colors duration-500">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
