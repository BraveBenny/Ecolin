"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm h-16 flex items-center justify-between px-6 sm:px-12 lg:px-24">
            {/* Logo Container */}
            <Link href="/" className="relative h-8 w-24 flex items-center">
                <Image
                    src="/images/logo-minimal.png"
                    alt="ecolin"
                    fill
                    className="object-contain object-left"
                    priority
                />
            </Link>

            {/* Navigation Links */}
            <div className="flex space-x-8 text-sm font-light tracking-wide text-gray-600">
                <Link
                    href="/option-1"
                    className={`hover:text-gray-900 transition-colors ${pathname === '/option-1' ? 'text-gray-900 font-medium' : ''}`}
                >
                    Option 1
                </Link>
                <Link
                    href="/option-2"
                    className={`hover:text-gray-900 transition-colors ${pathname === '/option-2' ? 'text-gray-900 font-medium' : ''}`}
                >
                    Option 2
                </Link>
                <Link
                    href="/option-3"
                    className={`hover:text-gray-900 transition-colors ${pathname === '/option-3' ? 'text-gray-900 font-medium' : ''}`}
                >
                    Option 3
                </Link>
            </div>
        </nav>
    );
}
