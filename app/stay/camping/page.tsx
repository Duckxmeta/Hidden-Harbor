import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import FaqSection from '@/components/FaqSection';
import ColorBlockPlaceholder from '@/components/ColorBlockPlaceholder';
import { MARINA_INFO } from '@/lib/siteData';
import { ExternalLink, Tent, Clock, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Campground & RV Sites on Center Hill Lake | Hidden Harbor Marina",
  description: "Camp at Hidden Harbor Marina on Center Hill Lake in Smithville, TN. 22 water and electric RV sites and rustic primitive tent camping spots.",
};

export default function CampingPage() {
  const campingFaqs = [
    {
      question: "How many campsites are available at Hidden Harbor Marina?",
      answer: "We offer approximately 22 campsites equipped with water and electrical hookups suitable for RVs and trailers, alongside primitive tent sites."
    },
    {
      question: "Are bathhouse and restroom facilities available?",
      answer: "Yes, our campground includes clean bathhouse facilities with warm showers and flush restrooms for registered campers."
    },
    {
      question: "What are the check-in and check-out times for camping?",
      answer: "Campsite check-in begins at 2:00 PM and check-out is by 11:00 AM."
    },
    {
      question: "Are campfires permitted at the campsites?",
      answer: "Campfires are permitted in designated fire rings. Firewood is available for purchase at the marina ship store."
    }
  ];

  return (
    <div className="bg-cream-100 min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="text-xs text-slate-500 mb-6 flex items-center space-x-2 font-medium">
          <Link href="/" className="hover:text-lake-900">Home</Link>
          <span>/</span>
          <Link href="/stay" className="hover:text-lake-900">Stay</Link>
          <span>/</span>
          <span className="text-lake-950 font-bold">Camping</span>
        </nav>

        {/* Hero Section & Direct Answer Opening */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cedar-600">
              CENTER HILL LAKE CAMPGROUND
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-lake-950 tracking-tight">
              Camping & RV Sites at Hidden Harbor Marina
            </h1>
            
            {/* Direct Answer Paragraph (First 40 Words) */}
            <div className="p-5 bg-white rounded-xl border border-cream-300 shadow-sm leading-relaxed text-slate-800 text-base md:text-lg">
              <p>
                <strong>Hidden Harbor Marina offers camping on Center Hill Lake in Smithville, TN</strong>, featuring about 22 sites with water and electric hookups for RVs plus rustic tent spots. Enjoy bathhouses, fire rings, and dock access. Rates are starting rates.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={MARINA_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sand-300 hover:bg-sand-400 text-lake-950 font-bold px-7 py-3.5 rounded-lg shadow-md transition-all inline-flex items-center space-x-2"
              >
                <span>Book Campsite Online</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={`tel:${MARINA_INFO.phoneRaw}`}
                className="bg-white hover:bg-slate-50 text-lake-950 border border-slate-300 font-semibold px-7 py-3.5 rounded-lg transition-all"
              >
                Call (615) 597-8800
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ColorBlockPlaceholder
              title="22 RV Hookup & Primitive Sites"
              category="Campground Park"
              aspectRatio="aspect-[4/3]"
            />
          </div>
        </div>

        {/* Specs Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-cream-300 shadow-sm space-y-2">
            <div className="flex items-center space-x-2 text-cedar-600 font-bold text-sm">
              <Tent className="w-5 h-5 text-sand-500" />
              <span>Hookups</span>
            </div>
            <p className="text-xl font-bold text-lake-950">22 Water / Electric Sites</p>
            <p className="text-xs text-slate-500">Plus primitive tent sites</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-cream-300 shadow-sm space-y-2">
            <div className="flex items-center space-x-2 text-cedar-600 font-bold text-sm">
              <Clock className="w-5 h-5 text-sand-500" />
              <span>Check-In / Out</span>
            </div>
            <p className="text-xl font-bold text-lake-950">2:00 PM / 11:00 AM</p>
            <p className="text-xs text-slate-500">Register at main store upon arrival</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-cream-300 shadow-sm space-y-2">
            <div className="flex items-center space-x-2 text-cedar-600 font-bold text-sm">
              <MapPin className="w-5 h-5 text-sand-500" />
              <span>Setting</span>
            </div>
            <p className="text-xl font-bold text-lake-950">Casey Cove Shoreline</p>
            <p className="text-xs text-slate-500">Shaded woods near water</p>
          </div>
        </div>

        {/* Details & Amenities */}
        <div className="mt-12 bg-white rounded-2xl p-8 md:p-12 border border-cream-300 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-lake-950">
              Lakeside Camping on Center Hill
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              Set up camp beneath towering Tennessee hardwoods just steps from the water. Our campground features 22 sites with convenient water and electrical connections for RVs and camper trailers, as well as secluded tent sites for a traditional rustic experience.
            </p>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <p>
                <strong>Rate Note:</strong> Campsite rates vary depending on site type (RV hookup vs. primitive) and date. Rates shown are starting estimates and subject to change; please confirm when reserving.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-cream-100 p-6 md:p-8 rounded-xl border border-cream-300 space-y-4">
            <h3 className="font-serif text-xl font-bold text-lake-950">
              Campground Amenities
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-cedar-600 shrink-0 mt-0.5" />
                <span>Water and 30/50-amp electrical hookups</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-cedar-600 shrink-0 mt-0.5" />
                <span>Clean bathhouse with hot showers and restrooms</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-cedar-600 shrink-0 mt-0.5" />
                <span>Picnic tables and fire rings at each site</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-cedar-600 shrink-0 mt-0.5" />
                <span>Firewood and ice available at marina store</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-200">
              <a
                href={MARINA_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-sand-300 hover:bg-sand-400 text-lake-950 font-bold py-3 px-4 rounded-md text-center block transition-colors"
              >
                Reserve Campsite Online
              </a>
            </div>
          </div>

        </div>

        {/* Cross Links */}
        <div className="mt-12 text-center text-sm text-slate-600">
          Pair your campsite stay with a day of fishing on a <Link href="/rentals/fishing-boats" className="text-lake-950 font-bold underline hover:text-cedar-600">Fishing Boat Rental</Link> or check out our <Link href="/the-lake" className="text-lake-950 font-bold underline hover:text-cedar-600">Center Hill Lake Visitor Guide</Link>.
        </div>

      </div>

      <div className="mt-12">
        <FaqSection items={campingFaqs} title="Campground FAQ" />
      </div>
    </div>
  );
}
