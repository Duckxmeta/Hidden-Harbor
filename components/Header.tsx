'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MARINA_INFO } from '@/lib/siteData';
import { Menu, X, ExternalLink, Phone } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-lake-950/95 backdrop-blur-md shadow-md py-2.5 text-white' 
        : 'bg-lake-950 text-white py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand / Logo with real logo.jpg */}
          <Link href="/" className="group flex items-center space-x-3 focus:outline-none">
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shrink-0 border border-sand-300/40 bg-cream-50">
              <Image
                src="/logo.jpg"
                alt="Hidden Harbor Marina Logo"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] md:text-[10px] tracking-[0.2em] text-sand-300 font-bold uppercase transition-colors group-hover:text-white">
                TENNESSEE • CENTER HILL LAKE
              </span>
              <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-white transition-colors group-hover:text-sand-200">
                Hidden Harbor Marina
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-medium">
            <Link 
              href="/rentals" 
              className="text-slate-200 hover:text-sand-300 transition-colors py-1 focus:outline-none focus:text-sand-300"
            >
              Rentals
            </Link>
            <Link 
              href="/stay" 
              className="text-slate-200 hover:text-sand-300 transition-colors py-1 focus:outline-none focus:text-sand-300"
            >
              Stay
            </Link>
            <Link 
              href="/slips" 
              className="text-slate-200 hover:text-sand-300 transition-colors py-1 focus:outline-none focus:text-sand-300"
            >
              Slips
            </Link>
            <Link 
              href="/the-lake" 
              className="text-slate-200 hover:text-sand-300 transition-colors py-1 focus:outline-none focus:text-sand-300"
            >
              The Lake
            </Link>
            <Link 
              href="/about" 
              className="text-slate-200 hover:text-sand-300 transition-colors py-1 focus:outline-none focus:text-sand-300"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-slate-200 hover:text-sand-300 transition-colors py-1 focus:outline-none focus:text-sand-300"
            >
              Contact
            </Link>

            {/* Desktop Primary CTA Button */}
            <a
              href={MARINA_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sand-300 hover:bg-sand-400 text-lake-950 font-bold px-4 py-2 rounded-md shadow-sm transition-all inline-flex items-center space-x-1.5 text-sm focus:ring-2 focus:ring-sand-300"
            >
              <span>Book</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden space-x-2">
            <a
              href={MARINA_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sand-300 text-lake-950 text-xs font-bold px-3 py-1.5 rounded"
            >
              Book
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-200 hover:text-white rounded-md focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-lake-950 border-b border-lake-800 px-4 pt-4 pb-6 space-y-3">
          <Link
            href="/rentals"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-slate-200 hover:text-sand-300"
          >
            Rentals & Fleet
          </Link>
          <Link
            href="/stay"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-slate-200 hover:text-sand-300"
          >
            Cabins & Camping
          </Link>
          <Link
            href="/slips"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-slate-200 hover:text-sand-300"
          >
            Boat Slips & Store
          </Link>
          <Link
            href="/the-lake"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-slate-200 hover:text-sand-300"
          >
            The Lake Guide
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-slate-200 hover:text-sand-300"
          >
            About Hidden Harbor
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-slate-200 hover:text-sand-300"
          >
            Contact & Directions
          </Link>

          <div className="pt-4 border-t border-lake-800 flex flex-col space-y-2">
            <a
              href={`tel:${MARINA_INFO.phoneRaw}`}
              className="flex items-center justify-center space-x-2 w-full py-2.5 px-4 rounded border border-slate-600 text-slate-200 font-medium text-sm"
            >
              <Phone className="w-4 h-4 text-sand-300" />
              <span>Call {MARINA_INFO.phone}</span>
            </a>
            <a
              href={MARINA_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-2.5 px-4 rounded bg-sand-300 text-lake-950 font-bold text-sm"
            >
              <span>Book Online</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
