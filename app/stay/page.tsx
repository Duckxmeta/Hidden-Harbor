import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { MARINA_INFO } from '@/lib/siteData';
import { ExternalLink, Home, Tent, ArrowRight, ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
  title: "Lakeside Cabins & Camping on Center Hill Lake | Smithville TN",
  description: "Stay at Hidden Harbor Marina on Center Hill Lake. Rental cabins and 22 water/electric campsite sites in Smithville, TN.",
};

export default function StayIndexPage() {
  return (
    <div className="bg-cream-100 min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-cedar-600">
            LAKESIDE ACCOMMODATIONS
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-lake-950 tracking-tight mt-1">
            Stay at Hidden Harbor Marina
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            Nestled in Casey Cove on Center Hill Lake, we offer clean, comfortable rustic and modern cabin rentals alongside 22 water & electric RV campsites and secluded tent sites.
          </p>

          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg text-xs sm:text-sm text-amber-900 text-left flex items-start space-x-3">
            <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <p>
              <strong>Booking Disclaimer:</strong> Displayed rates are starting rates and subject to seasonal change. Please confirm exact dates and rates when reserving on the official booking portal.
            </p>
          </div>
        </div>

        {/* Stay Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          
          {/* Cabins Card */}
          <div className="bg-white rounded-2xl border border-cream-300 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            <div>
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-lake-950">
                <Image
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop"
                  alt="Lakeside cabin rentals at Hidden Harbor Marina"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6 md:p-8 space-y-4">
                <div className="flex items-center space-x-2 text-xs font-semibold text-cedar-600 uppercase tracking-wider">
                  <Home className="w-4 h-4 text-sand-500" />
                  <span>Rustic & Modern Cabins</span>
                </div>

                <h2 className="font-serif text-2xl font-bold text-lake-950 tracking-tight group-hover:text-cedar-600 transition-colors">
                  <Link href="/stay/cabins">Lakeside Cabin Rentals</Link>
                </h2>

                <p className="text-slate-700 text-sm leading-relaxed">
                  Fully furnished cabins steps away from the water. Equipped with full kitchens, air conditioning, outdoor decks, and grills. Ideal for families, fishing trips, and weekend getaways.
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8 pt-0 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-slate-100 mt-4">
              <Link
                href="/stay/cabins"
                className="inline-flex items-center space-x-1.5 text-sm font-bold text-lake-950 hover:text-cedar-600 transition-colors py-2"
              >
                <span>Cabin Specs & Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={MARINA_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sand-300 hover:bg-sand-400 text-lake-950 font-bold text-sm px-5 py-2.5 rounded-md text-center inline-flex items-center justify-center space-x-1.5 transition-colors"
              >
                <span>Book Cabin</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Camping Card */}
          <div className="bg-white rounded-2xl border border-cream-300 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            <div>
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-lake-950">
                <Image
                  src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800&auto=format&fit=crop"
                  alt="Campground & RV sites on Center Hill Lake"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6 md:p-8 space-y-4">
                <div className="flex items-center space-x-2 text-xs font-semibold text-cedar-600 uppercase tracking-wider">
                  <Tent className="w-4 h-4 text-sand-500" />
                  <span>22 Water / Electric RV Sites & Primitive Spots</span>
                </div>

                <h2 className="font-serif text-2xl font-bold text-lake-950 tracking-tight group-hover:text-cedar-600 transition-colors">
                  <Link href="/stay/camping">Campground & RV Sites</Link>
                </h2>

                <p className="text-slate-700 text-sm leading-relaxed">
                  Camp under the Tennessee stars on Center Hill Lake. Featuring about 22 sites with water and electrical hookups alongside primitive rustic sites, clean bathhouses, and fire rings.
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8 pt-0 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-slate-100 mt-4">
              <Link
                href="/stay/camping"
                className="inline-flex items-center space-x-1.5 text-sm font-bold text-lake-950 hover:text-cedar-600 transition-colors py-2"
              >
                <span>Campsite Details & Rules</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={MARINA_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sand-300 hover:bg-sand-400 text-lake-950 font-bold text-sm px-5 py-2.5 rounded-md text-center inline-flex items-center justify-center space-x-1.5 transition-colors"
              >
                <span>Book Campsite</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
