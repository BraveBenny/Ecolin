"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-50 h-20 flex items-center justify-between px-8 sm:px-16 lg:px-28">
            {/* Left Side: Home Link */}
            <div className="flex-1">
                <Link href="/" className="font-serif text-xl tracking-wide text-gray-900 hover:text-[#A98E5D] transition-colors duration-500">
                    Home
                </Link>
            </div>

            {/* Center: Wordmark */}
            <div className="hidden md:flex flex-1 justify-center items-center">
                <span className="font-serif text-2xl lg:text-3xl tracking-wide text-[#8C734B]">
                    Ecolin
                </span>
            </div>

            {/* Right Side: Links */}
            <div className="hidden md:flex flex-1 justify-end items-center space-x-10 text-[13px] font-medium tracking-widest uppercase text-gray-500">
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
        </nav>
    );
}
