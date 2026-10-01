import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { MARINA_INFO, DRIVE_TIMES } from '@/lib/siteData';
import { Clock, MapPin, Fuel, Compass, CheckSquare, ExternalLink, Sun, LifeBuoy } from 'lucide-react';

export const metadata: Metadata = {
  title: "Center Hill Lake Day Guide & Drive Times | Hidden Harbor Marina",
  description: "Plan your day on Center Hill Lake. Drive times from Nashville, Lebanon, Cookeville, Murfreesboro, fuel dock details, what to bring, and local attractions.",
};

export default function TheLakePage() {
  return (
    <div className="bg-cream-100 min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-cedar-600">
            VISITOR & DAY TRIP GUIDE
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-lake-950 tracking-tight mt-1">
            Planning Your Day on Center Hill Lake
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            Everything you need to plan a seamless day or weekend on Middle Tennessee’s premier clearwater lake—from drive times to marine fuel locations and packing lists.
          </p>
        </div>

        {/* Section 1: Drive Times */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-cream-300 shadow-card mb-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cedar-600">
              LOCATION & ACCESS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-lake-950 tracking-tight mt-1">
              Drive Times to Hidden Harbor Marina
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Hidden Harbor Marina is located at 2685 Casey Cove Rd, Smithville, TN 37166 on the west side of Center Hill Lake.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DRIVE_TIMES.map((item, idx) => (
              <div key={idx} className="p-5 bg-cream-100 rounded-xl border border-cream-300 space-y-3">
                <div className="flex items-center space-x-2 text-cedar-600 font-bold text-xs uppercase tracking-wider">
                  <Compass className="w-4 h-4 text-sand-500" />
                  <span>From {item.origin}</span>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-lake-950">{item.time}</p>
                  <p className="text-xs text-slate-500 font-medium">{item.distance}</p>
                </div>
                <p className="text-xs text-slate-600 pt-2 border-t border-cream-300 leading-relaxed">
                  {item.route}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Fuel & Marina Dock Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          <div className="lg:col-span-6 bg-white p-8 md:p-10 rounded-2xl border border-cream-300 shadow-card space-y-6">
            <div className="w-12 h-12 rounded-lg bg-lake-900 text-sand-300 flex items-center justify-center">
              <Fuel className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-lake-950">
                Marine Fuel Dock & Hours
              </h2>
              <p className="text-slate-700 text-sm mt-2 leading-relaxed">
                Hidden Harbor Marina operates a full-service marine fuel dock on Center Hill Lake in Casey Cove.
              </p>
            </div>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start space-x-2.5">
                <Clock className="w-5 h-5 text-cedar-600 shrink-0 mt-0.5" />
                <span><strong>Operating Hours:</strong> Daily 8:00 AM – 5:00 PM (seasonal variations apply)</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Fuel className="w-5 h-5 text-cedar-600 shrink-0 mt-0.5" />
                <span><strong>Fuel Type:</strong> Quality marine gasoline formulated for marine outboard engines</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-5 h-5 text-cedar-600 shrink-0 mt-0.5" />
                <span><strong>Dock Location:</strong> Casey Cove, Smithville, TN 37166</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 bg-white p-8 md:p-10 rounded-2xl border border-cream-300 shadow-card space-y-6">
            <div className="w-12 h-12 rounded-lg bg-lake-900 text-sand-300 flex items-center justify-center">
              <CheckSquare className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-lake-950">
                What to Bring for a Day on the Lake
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Recommended packing checklist for boaters and day visitors:
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700">
              <li className="flex items-center space-x-2">
                <Sun className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Sunscreen & Sunglasses</span>
              </li>
              <li className="flex items-center space-x-2">
                <LifeBuoy className="w-4 h-4 text-cedar-600 shrink-0" />
                <span>Towels & Swimsuits</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckSquare className="w-4 h-4 text-sand-500 shrink-0" />
                <span>Cooler with ice & water</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckSquare className="w-4 h-4 text-sand-500 shrink-0" />
                <span>Government Issued Photo ID</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckSquare className="w-4 h-4 text-sand-500 shrink-0" />
                <span>TWRA Fishing License (if angling)</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckSquare className="w-4 h-4 text-sand-500 shrink-0" />
                <span>Waterproof bag for phones</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Section 3: Nearby Practical Info & State Parks */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-cream-300 shadow-card">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cedar-600">
              EXPLORE THE REGION
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-lake-950 tracking-tight mt-1">
              Nearby Practical Info & State Parks
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Essential services and attractions near Hidden Harbor Marina in DeKalb County, TN.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-6 bg-cream-100 rounded-xl space-y-3">
              <h3 className="font-serif text-lg font-bold text-lake-950">Smithville Town Square</h3>
              <p className="text-slate-700 leading-relaxed">
                Located ~15 minutes away in downtown Smithville, TN. Access grocery stores, pharmacies, local restaurants, and hardware stores.
              </p>
            </div>

            <div className="p-6 bg-cream-100 rounded-xl space-y-3">
              <h3 className="font-serif text-lg font-bold text-lake-950">Edgar Evins State Park</h3>
              <p className="text-slate-700 leading-relaxed">
                Located on the shores of Center Hill Lake nearby. Offers scenic hiking trails, wildlife viewing, and visitor centers.
              </p>
            </div>

            <div className="p-6 bg-cream-100 rounded-xl space-y-3">
              <h3 className="font-serif text-lg font-bold text-lake-950">Burgess Falls State Park</h3>
              <p className="text-slate-700 leading-relaxed">
                Famous for its dramatic 136-foot waterfall cascading into the Falling Water River arm of Center Hill Lake. Accessible by boat or trail.
              </p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-12 text-center flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={MARINA_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sand-300 hover:bg-sand-400 text-lake-950 font-bold px-8 py-3.5 rounded-lg inline-flex items-center justify-center space-x-2"
          >
            <span>Reserve Your Boat Rental</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <Link
            href="/rentals/pontoons"
            className="bg-lake-900 hover:bg-lake-800 text-white font-semibold px-8 py-3.5 rounded-lg"
          >
            Explore Pontoon Fleet
          </Link>
        </div>

      </div>
    </div>
  );
}
