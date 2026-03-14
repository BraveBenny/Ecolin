import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="w-full bg-[#272624] text-[#EAE4D9] pt-16 pb-12 md:pt-20 md:pb-14 px-8 sm:px-16 lg:px-28 border-t-0">
            <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-10 md:gap-12">
                
                {/* Centered Logo */}
                <div className="relative w-48 h-16 md:w-64 md:h-24 opacity-90 transition-opacity hover:opacity-100 duration-700">
                    <Image 
                        src="/images/logo-minimal.png" 
                        alt="Ecolin Logo" 
                        fill 
                        className="object-contain filter brightness-0 invert" 
                    />
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[11px] md:text-[12px] font-medium tracking-[0.2em] uppercase text-[#A98E5D]">
                    <Link href="/" className="hover:text-white transition-colors duration-500">Home</Link>
                    <Link href="/products" className="hover:text-white transition-colors duration-500">Products</Link>
                    <Link href="/sustainability" className="hover:text-white transition-colors duration-500">Sustainability</Link>
                    <Link href="/wholesale" className="hover:text-white transition-colors duration-500">Wholesale</Link>
                    <Link href="/faq" className="hover:text-white transition-colors duration-500">FAQ</Link>
                    <Link href="/contact" className="hover:text-white transition-colors duration-500">Contact</Link>
                </div>
            </div>

            {/* Copyright & Legal */}
            <div className="max-w-5xl mx-auto mt-16 md:mt-20 pt-8 border-t border-[#EAE4D9]/10 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-[11px] uppercase tracking-widest text-[#EAE4D9]/40 font-medium">
                <p className="mb-6 md:mb-0">&copy; {new Date().getFullYear()} Ecolin</p>
                <div className="flex space-x-8">
                    <a href="#" className="hover:text-[#EAE4D9] transition-colors duration-500">Privacy Policy</a>
                    <a href="#" className="hover:text-[#EAE4D9] transition-colors duration-500">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
