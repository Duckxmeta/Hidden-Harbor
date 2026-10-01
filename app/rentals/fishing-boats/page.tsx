import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import FaqSection from '@/components/FaqSection';
import ColorBlockPlaceholder from '@/components/ColorBlockPlaceholder';
import { MARINA_INFO } from '@/lib/siteData';
import { ExternalLink, Users, Clock, Fuel, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Fishing Boat Rentals on Center Hill Lake | Smithville TN Angling",
  description: "Rent fishing boats on Center Hill Lake starting from ~$135/day at Hidden Harbor Marina in Smithville, TN. Outfitted for bass and walleye fishing.",
};

export default function FishingBoatsPage() {
  const fishingBoatFaqs = [
    {
      question: "How much does it cost to rent a fishing boat?",
      answer: "Fishing boat rentals at Hidden Harbor Marina start from approximately $135 per day. Rates are starting rates, subject to change, and exclude fuel and sales tax."
    },
    {
      question: "What fish species are caught in Center Hill Lake?",
      answer: "Center Hill Lake is renowned for smallmouth bass, largemouth bass, spotted bass, walleye, crappie, catfish, and bluegill."
    },
    {
      question: "Do I need a Tennessee fishing license?",
      answer: "Yes. Anyone 13 years of age and older fishing in Tennessee waters must possess a valid TWRA (Tennessee Wildlife Resources Agency) fishing license."
    },
    {
      question: "Is live bait available at the marina?",
      answer: "Yes! Hidden Harbor Marina’s ship store stocks live bait, tackle, ice, snacks, and cold beverages right on the water."
    }
  ];

  return (
    <div className="bg-cream-100 min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="text-xs text-slate-500 mb-6 flex items-center space-x-2 font-medium">
          <Link href="/" className="hover:text-lake-900">Home</Link>
          <span>/</span>
          <Link href="/rentals" className="hover:text-lake-900">Rentals</Link>
          <span>/</span>
          <span className="text-lake-950 font-bold">Fishing Boats</span>
        </nav>

        {/* Hero Section & Direct Answer Opening */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cedar-600">
              CENTER HILL LAKE ANGLING
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-lake-950 tracking-tight">
              Fishing Boat Rentals at Hidden Harbor Marina
            </h1>
            
            {/* Direct Answer Paragraph (First 40 Words) */}
            <div className="p-5 bg-white rounded-xl border border-cream-300 shadow-sm leading-relaxed text-slate-800 text-base md:text-lg">
              <p>
                <strong>Hidden Harbor Marina rents fishing boats on Center Hill Lake in Smithville, TN starting from about $135 per day</strong> for 2 to 4 anglers. Reliable outboard engines, livewell setups, and safety equipment are included. Rates are subject to change.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={MARINA_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sand-300 hover:bg-sand-400 text-lake-950 font-bold px-7 py-3.5 rounded-lg shadow-md transition-all inline-flex items-center space-x-2"
              >
                <span>Book a Fishing Boat</span>
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
              title="Bass & Walleye Fishing Boats"
              category="Angling Fleet"
              aspectRatio="aspect-[4/3]"
            />
          </div>
        </div>

        {/* Specs Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-cream-300 shadow-sm space-y-2">
            <div className="flex items-center space-x-2 text-cedar-600 font-bold text-sm">
              <Users className="w-5 h-5 text-sand-500" />
              <span>Capacity</span>
            </div>
            <p className="text-xl font-bold text-lake-950">2 – 4 Anglers</p>
            <p className="text-xs text-slate-500">Optimized for fishing</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-cream-300 shadow-sm space-y-2">
            <div className="flex items-center space-x-2 text-cedar-600 font-bold text-sm">
              <Clock className="w-5 h-5 text-sand-500" />
              <span>Hours</span>
            </div>
            <p className="text-xl font-bold text-lake-950">8:30 AM – 4:30 PM</p>
            <p className="text-xs text-slate-500">Early check-in at 8:00 AM</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-cream-300 shadow-sm space-y-2">
            <div className="flex items-center space-x-2 text-cedar-600 font-bold text-sm">
              <Fuel className="w-5 h-5 text-sand-500" />
              <span>Fuel & Tax</span>
            </div>
            <p className="text-xl font-bold text-lake-950">Not Included</p>
            <p className="text-xs text-slate-500">Refueled upon return</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-cream-300 shadow-sm space-y-2">
            <div className="flex items-center space-x-2 text-cedar-600 font-bold text-sm">
              <ShieldCheck className="w-5 h-5 text-sand-500" />
              <span>Starting Rate</span>
            </div>
            <p className="text-xl font-bold text-lake-950">From ~$135 / day</p>
            <p className="text-xs text-slate-500">Subject to change; confirm when booking</p>
          </div>
        </div>

        {/* Details & What's Included */}
        <div className="mt-12 bg-white rounded-2xl p-8 md:p-12 border border-cream-300 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-lake-950">
              Center Hill Lake Fishing Basecamp
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              Center Hill Lake is famous among Tennessee anglers for its trophy smallmouth bass, deep rock bluffs, and quiet feeder creeks. Renting a fishing boat from Hidden Harbor Marina lets you reach deep-water structures and timber coves around Casey Cove without trailering a boat.
            </p>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <p>
                <strong>Rate Disclaimer:</strong> Starting fishing boat rates are approximately $135 per day. Rates vary depending on day and season, and are subject to change. Please confirm current rates on our booking engine.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-cream-100 p-6 md:p-8 rounded-xl border border-cream-300 space-y-4">
            <h3 className="font-serif text-xl font-bold text-lake-950">
              Included Equipment
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-cedar-600 shrink-0 mt-0.5" />
                <span>US Coast Guard approved life jackets</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-cedar-600 shrink-0 mt-0.5" />
                <span>Reliable outboard motor & full gas tank start</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-cedar-600 shrink-0 mt-0.5" />
                <span>Rod holders and swivel seating</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-cedar-600 shrink-0 mt-0.5" />
                <span>Anchor and line for structure fishing</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-200">
              <a
                href={MARINA_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-sand-300 hover:bg-sand-400 text-lake-950 font-bold py-3 px-4 rounded-md text-center block transition-colors"
              >
                Reserve Fishing Boat
              </a>
            </div>
          </div>

        </div>

        {/* Cross Links */}
        <div className="mt-12 text-center text-sm text-slate-600">
          Planning an early morning launch? Consider booking one of our <Link href="/stay/camping" className="text-lake-950 font-bold underline hover:text-cedar-600">Campground Sites</Link> or <Link href="/stay/cabins" className="text-lake-950 font-bold underline hover:text-cedar-600">Lakeside Cabins</Link>.
        </div>

      </div>

      <div className="mt-12">
        <FaqSection items={fishingBoatFaqs} title="Fishing Boat FAQ" />
      </div>
    </div>
  );
}
