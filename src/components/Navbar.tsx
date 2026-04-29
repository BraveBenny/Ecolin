"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-50 h-20 flex items-center justify-between px-8 sm:px-16 lg:px-28">
            {/* Left Side: Home Link */}
            <div className="flex-1">
                <Link href="/" className="font-serif text-xl tracking-wide text-gray-900 hover:text-[#A98E5D] transition-colors duration-500">
                    <span className="hidden md:inline">Home</span>
                    <span className="md:hidden">Ecolin</span>
                </Link>
            </div>

            {/* Center: Wordmark */}
            <div className="hidden md:flex flex-1 justify-center items-center">
                <span className="font-serif text-2xl lg:text-3xl tracking-wide text-[#8C734B]">
                    Ecolin
                </span>
            </div>

            {/* Right Side: Links */}
            <div className="flex flex-1 justify-end items-center">
                <div className="hidden md:flex items-center space-x-10 text-[13px] font-medium tracking-widest uppercase text-gray-500">
                    <Link
                        href="/products"
                        className={`hover:text-gray-900 transition-colors duration-500 ${pathname.startsWith('/products') ? 'text-gray-900' : ''}`}
                    >
                        Products
                    </Link>
                    <Link
                        href="/wholesale"
                        className={`hover:text-gray-900 transition-colors duration-500 ${pathname === '/wholesale' ? 'text-gray-900' : ''}`}
                    >
                        Wholesale
                    </Link>
                    <Link
                        href="/contact"
                        className={`hover:text-gray-900 transition-colors duration-500 ${pathname === '/contact' ? 'text-gray-900' : ''}`}
                    >
                        Contact
                    </Link>
                </div>
                
                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-3 -mr-3 text-gray-900 hover:text-[#A98E5D] transition-colors"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl shadow-gray-900/5 md:hidden flex flex-col items-center py-8 space-y-8 text-[13px] font-medium tracking-widest uppercase text-gray-500 z-50">
                    <Link href="/" onClick={() => setIsMenuOpen(false)} className={`hover:text-gray-900 transition-colors ${pathname === '/' ? 'text-gray-900' : ''}`}>Home</Link>
                    <Link href="/products" onClick={() => setIsMenuOpen(false)} className={`hover:text-gray-900 transition-colors ${pathname.startsWith('/products') ? 'text-gray-900' : ''}`}>Products</Link>
                    <Link href="/wholesale" onClick={() => setIsMenuOpen(false)} className={`hover:text-gray-900 transition-colors ${pathname === '/wholesale' ? 'text-gray-900' : ''}`}>Wholesale</Link>
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)} className={`hover:text-gray-900 transition-colors ${pathname === '/contact' ? 'text-gray-900' : ''}`}>Contact</Link>
                </div>
            )}
        </nav>
    );
}
