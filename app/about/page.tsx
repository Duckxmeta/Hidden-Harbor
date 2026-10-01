import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { MARINA_INFO } from '@/lib/siteData';
import { HeartHandshake, ShieldCheck, Anchor, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: "Our History & New Chapter | Hidden Harbor Marina Center Hill Lake",
  description: "Learn about Hidden Harbor Marina. Operating on Center Hill Lake since 1989. Founded by the Leiser family, continuing under new ownership in 2026 with the same local staff.",
};

export default function AboutPage() {
  return (
    <div className="bg-cream-100 min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-cedar-600">
            HERITAGE & COMMUNITY
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-lake-950 tracking-tight mt-1">
            About Hidden Harbor Marina
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            Operating on Center Hill Lake since 1989—a quiet cove, friendly faces, and thirty-five years of family lake memories.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-cream-300 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cedar-600">
              ESTABLISHED 1989
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-lake-950 tracking-tight">
              Thirty-Five Years on Tennessee Water
            </h2>

            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p>
                Hidden Harbor Marina was established in 1989 in Casey Cove, a protected nook on the western waters of Center Hill Lake. For decades, the marina operated under the dedicated stewardship of the Leiser family, building a warm community of dock slip holders, cabin guests, and summer boaters.
              </p>
              <p>
                From the beginning, Hidden Harbor was built on simple values: clean facilities, well-maintained rental boats, straightforward pricing, and genuine local hospitality.
              </p>
            </div>

            {/* Calm "New Chapter" Note */}
            <div className="p-6 bg-cream-100 rounded-xl border border-cream-300 space-y-3">
              <div className="flex items-center space-x-2 text-cedar-600 font-bold text-base">
                <HeartHandshake className="w-5 h-5 shrink-0" />
                <span>A Calm New Chapter in 2026</span>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                In 2026, Hidden Harbor entered its next chapter under local owner Bobby Davis. Rather than changing what makes this cove special, Bobby’s commitment is simple: preserve the relaxed atmosphere, care for the lake community, and maintain the exact same high standards.
              </p>
              <p className="text-slate-700 text-sm leading-relaxed">
                The dock team and staff who greet you on arrival remain the exact same faces who have served our guests for years. Our phone number <strong>(615) 597-8800</strong> and email address <strong>info@hiddenharbortn.com</strong> remain unchanged.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={MARINA_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sand-300 hover:bg-sand-400 text-lake-950 font-bold px-7 py-3.5 rounded-lg shadow-md transition-all inline-flex items-center space-x-2"
              >
                <span>Book a Boat or Cabin</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                href="/rentals"
                className="bg-lake-900 hover:bg-lake-800 text-white font-semibold px-7 py-3.5 rounded-lg transition-all"
              >
                Explore Boat Rentals
              </Link>
            </div>

          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-cream-300 bg-lake-950">
              <Image
                src="/banner.png"
                alt="Aerial view of Hidden Harbor Marina on Center Hill Lake"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-6 bg-cream-100 rounded-xl border border-cream-300 space-y-3 text-sm text-slate-700">
              <div className="flex items-center space-x-3 mb-2">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-sand-300 bg-cream-50">
                  <Image src="/logo.jpg" alt="Hidden Harbor Logo" fill className="object-cover" />
                </div>
                <h3 className="font-serif font-bold text-lake-950 text-base">Key Facts at a Glance</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Anchor className="w-4 h-4 text-cedar-600 shrink-0" />
                  <span><strong>Operating Since:</strong> 1989</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-cedar-600 shrink-0" />
                  <span><strong>Current Ownership:</strong> Bobby Davis (since 2026)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-cedar-600 shrink-0" />
                  <span><strong>Staff:</strong> Original local team retained</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
