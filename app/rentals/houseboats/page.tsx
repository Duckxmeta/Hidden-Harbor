import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import FaqSection from '@/components/FaqSection';
import { MARINA_INFO } from '@/lib/siteData';
import { ExternalLink, Users, Clock, Fuel, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Houseboat Rentals on Center Hill Lake | Multi-Day Vacations",
  description: "Rent houseboats on Center Hill Lake at Hidden Harbor Marina in Smithville, TN. Multi-day rentals with weekend packages starting from ~$1,900.",
};

export default function HouseboatsPage() {
  const houseboatFaqs = [
    {
      question: "How many guests can stay on a houseboat rental?",
      answer: "Our houseboats sleep up to 8 to 10 guests depending on the layout, featuring private bedrooms, fold-out sofas, and full bathroom facilities."
    },
    {
      question: "How much does a houseboat rental cost on Center Hill Lake?",
      answer: "Weekend houseboat rentals start from approximately $1,900. Rates vary based on season and trip duration, and are subject to change. Confirm exact pricing when booking."
    },
    {
      question: "Do I need previous captaining experience to rent a houseboat?",
      answer: "No prior experience is required, but our dock team provides a thorough hands-on captain orientation covering driving, anchoring, navigation, and onboard systems before departure."
    },
    {
      question: "What is provided on the houseboat?",
      answer: "Houseboats feature full kitchens with stoves and refrigerators, marine air conditioning, generator power, upper sun decks, grill, and bathroom/shower facilities."
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
          <span className="text-lake-950 font-bold">Houseboats</span>
        </nav>

        {/* Hero Section & Direct Answer Opening (First 40 Words Target for AI Citations) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cedar-600">
              CENTER HILL LAKE HOUSEBOAT VACATIONS
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-lake-950 tracking-tight">
              Houseboat Rentals at Hidden Harbor Marina
            </h1>
            
            {/* Direct Answer Paragraph (First 40 Words) */}
            <div className="p-5 bg-white rounded-xl border border-cream-300 shadow-sm leading-relaxed text-slate-800 text-base md:text-lg">
              <p>
                <strong>Hidden Harbor Marina offers multi-day houseboat rentals on Center Hill Lake in Smithville, TN</strong>, sleeping up to 10 guests with full kitchens and sun decks. Weekend packages start from ~$1,900. Rates are subject to change.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={MARINA_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sand-300 hover:bg-sand-400 text-lake-950 font-bold px-7 py-3.5 rounded-lg shadow-md transition-all inline-flex items-center space-x-2"
              >
                <span>Book a Houseboat</span>
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

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card border border-cream-300">
            <Image
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop"
              alt="Houseboat floating on Center Hill Lake near Smithville TN"
              fill
              priority
              className="object-cover"
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
            <p className="text-xl font-bold text-lake-950">Sleeps up to 10</p>
            <p className="text-xs text-slate-500">Private staterooms & bunks</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-cream-300 shadow-sm space-y-2">
            <div className="flex items-center space-x-2 text-cedar-600 font-bold text-sm">
              <Clock className="w-5 h-5 text-sand-500" />
              <span>Check-In / Out</span>
            </div>
            <p className="text-xl font-bold text-lake-950">Multi-Day Trips</p>
            <p className="text-xs text-slate-500">Weekend, Mid-week & Weekly</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-cream-300 shadow-sm space-y-2">
            <div className="flex items-center space-x-2 text-cedar-600 font-bold text-sm">
              <Fuel className="w-5 h-5 text-sand-500" />
              <span>Fuel & Taxes</span>
            </div>
            <p className="text-xl font-bold text-lake-950">Not Included</p>
            <p className="text-xs text-slate-500">Generator & engine fuel paid at return</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-cream-300 shadow-sm space-y-2">
            <div className="flex items-center space-x-2 text-cedar-600 font-bold text-sm">
              <ShieldCheck className="w-5 h-5 text-sand-500" />
              <span>Starting Rate</span>
            </div>
            <p className="text-xl font-bold text-lake-950">Weekend from ~$1,900</p>
            <p className="text-xs text-slate-500">Subject to change; confirm when booking</p>
          </div>
        </div>

        {/* Details & Features */}
        <div className="mt-12 bg-white rounded-2xl p-8 md:p-12 border border-cream-300 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-lake-950">
              The Ultimate Floating Vacation on Center Hill Lake
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              A houseboat rental turns all of Center Hill Lake into your private front yard. Wake up in a tranquil cove, drink morning coffee on the top deck as mist rises over limestone cliffs, and spend your days swimming, fishing, and grilling out with family and friends.
            </p>
            <p className="text-slate-700 leading-relaxed text-base">
              Each vessel is maintained with care and includes a full kitchen, living area, air conditioning, outdoor grill, slide, and upper sun deck.
            </p>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <p>
                <strong>Rate Note:</strong> Weekend houseboat packages start around $1,900 in season. Rates vary by duration and dates. Rates are starting rates and subject to change. Confirm details on the direct booking page.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-cream-100 p-6 md:p-8 rounded-xl border border-cream-300 space-y-4">
            <h3 className="font-serif text-xl font-bold text-lake-950">
              Onboard Amenities
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-cedar-600 shrink-0 mt-0.5" />
                <span>Full kitchen with stove, oven, sink, & refrigerator</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-cedar-600 shrink-0 mt-0.5" />
                <span>Air conditioning and generator power</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-cedar-600 shrink-0 mt-0.5" />
                <span>Private staterooms and full bathroom / shower</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-cedar-600 shrink-0 mt-0.5" />
                <span>Upper sun deck with waterslide and outdoor grill</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-200">
              <a
                href={MARINA_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-sand-300 hover:bg-sand-400 text-lake-950 font-bold py-3 px-4 rounded-md text-center block transition-colors"
              >
                Check Houseboat Availability
              </a>
            </div>
          </div>

        </div>

        {/* Cross Links */}
        <div className="mt-12 text-center text-sm text-slate-600">
          Prefer land accommodations? See our <Link href="/stay/cabins" className="text-lake-950 font-bold underline hover:text-cedar-600">Lakeside Cabin Rentals</Link> or learn about our <Link href="/slips" className="text-lake-950 font-bold underline hover:text-cedar-600">Covered Boat Slips</Link>.
        </div>

      </div>

      <div className="mt-12">
        <FaqSection items={houseboatFaqs} title="Houseboat Rental FAQ" />
      </div>
    </div>
  );
}
