import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import FaqSection from '@/components/FaqSection';
import { MARINA_INFO } from '@/lib/siteData';
import { ExternalLink, Users, Clock, Fuel, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Pontoon Boat Rentals on Center Hill Lake | Double Decker Slides & Cruisers",
  description: "Rent pontoon boats on Center Hill Lake at Hidden Harbor Marina in Smithville, TN. Featuring double-decker pontoons with water slides and spacious classic cruisers.",
};

export default function PontoonsPage() {
  const pontoonFaqs = [
    {
      question: "How many people fit on a pontoon rental?",
      answer: "Our pontoon fleet accommodates groups from 10 to 14 passengers depending on the specific model. Capacity limits strictly follow US Coast Guard safety ratings."
    },
    {
      question: "Are fuel and sales tax included in the pontoon rental price?",
      answer: "No. Pontoon boats depart Casey Cove with a full tank of fuel. You pay only for the fuel you consume during your rental, plus Tennessee sales tax."
    },
    {
      question: "What are the check-in and return times for day rentals?",
      answer: "Standard full-day pontoon rentals begin at 8:30 AM with check-in starting at 8:00 AM. Boats must be refueled and returned to the dock by 4:30 PM."
    },
    {
      question: "Do double-decker pontoons have water slides?",
      answer: "Yes! Our popular double-decker pontoons feature an upper sun deck with an integrated water slide for sliding straight into Center Hill Lake."
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
          <span className="text-lake-950 font-bold">Pontoons</span>
        </nav>

        {/* Hero Section & Direct Answer Opening (First 40 Words Target for AI Citations) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cedar-600">
              CENTER HILL LAKE PONTOON RENTALS
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-lake-950 tracking-tight">
              Pontoon Boat Rentals at Hidden Harbor Marina
            </h1>
            
            {/* Direct Answer Paragraph (First 40 Words) */}
            <div className="p-5 bg-white rounded-xl border border-cream-300 shadow-sm leading-relaxed text-slate-800 text-base md:text-lg">
              <p>
                <strong>Hidden Harbor Marina rents pontoon boats on Center Hill Lake in Smithville, TN</strong>, including classic cruisers and double-deckers with water slides for 10 to 14 passengers. Daily rates range from ~$300 to $470 in season.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={MARINA_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sand-300 hover:bg-sand-400 text-lake-950 font-bold px-7 py-3.5 rounded-lg shadow-md transition-all inline-flex items-center space-x-2"
              >
                <span>Book a Pontoon Online</span>
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
              src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1000&auto=format&fit=crop"
              alt="Pontoon boat cruising Center Hill Lake near Smithville TN"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Key Specifications & Pricing */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-cream-300 shadow-sm space-y-2">
            <div className="flex items-center space-x-2 text-cedar-600 font-bold text-sm">
              <Users className="w-5 h-5 text-sand-500" />
              <span>Capacity</span>
            </div>
            <p className="text-xl font-bold text-lake-950">10 – 14 Passengers</p>
            <p className="text-xs text-slate-500">Based on model weight limits</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-cream-300 shadow-sm space-y-2">
            <div className="flex items-center space-x-2 text-cedar-600 font-bold text-sm">
              <Clock className="w-5 h-5 text-sand-500" />
              <span>Hours & Check-In</span>
            </div>
            <p className="text-xl font-bold text-lake-950">8:30 AM – 4:30 PM</p>
            <p className="text-xs text-slate-500">Check-in opens at 8:00 AM</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-cream-300 shadow-sm space-y-2">
            <div className="flex items-center space-x-2 text-cedar-600 font-bold text-sm">
              <Fuel className="w-5 h-5 text-sand-500" />
              <span>Fuel & Taxes</span>
            </div>
            <p className="text-xl font-bold text-lake-950">Not Included</p>
            <p className="text-xs text-slate-500">Refueled upon return at dock</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-cream-300 shadow-sm space-y-2">
            <div className="flex items-center space-x-2 text-cedar-600 font-bold text-sm">
              <ShieldCheck className="w-5 h-5 text-sand-500" />
              <span>Starting Rate</span>
            </div>
            <p className="text-xl font-bold text-lake-950">~$300 – $470 / day</p>
            <p className="text-xs text-slate-500">Subject to change; confirm when booking</p>
          </div>
        </div>

        {/* Detailed Description & What's Included */}
        <div className="mt-12 bg-white rounded-2xl p-8 md:p-12 border border-cream-300 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-lake-950">
              Why Rent a Pontoon on Center Hill Lake?
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              Center Hill Lake features over 415 miles of winding shoreline, pristine limestone bluffs, and crystal-clear emerald water. A pontoon boat rental from Hidden Harbor Marina gives your group the ultimate platform to relax, swim in secluded coves, anchor near Burgess Falls or Edgar Evins State Park, and enjoy a day on Tennessee water.
            </p>
            <p className="text-slate-700 leading-relaxed text-base">
              Our double-decker pontoons with slides are especially popular for families with kids and teenagers looking for maximum entertainment. All vessels are routinely inspected, sanitized, and equipped with reliable outboard motors.
            </p>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <p>
                <strong>Rate Note:</strong> In-season pontoon day rates range roughly from $300 to $470 per day depending on day of week and model choice. Rates are starting rates and subject to seasonal change. Please confirm exact rates on the booking system.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-cream-100 p-6 md:p-8 rounded-xl border border-cream-300 space-y-4">
            <h3 className="font-serif text-xl font-bold text-lake-950">
              What’s Included with Every Pontoon
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-cedar-600 shrink-0 mt-0.5" />
                <span>US Coast Guard approved life vests for all passengers</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-cedar-600 shrink-0 mt-0.5" />
                <span>Bimini top / sun shade canopy</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-cedar-600 shrink-0 mt-0.5" />
                <span>Swim ladder for easy water re-entry</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-cedar-600 shrink-0 mt-0.5" />
                <span>Anchor and line for cove anchoring</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-cedar-600 shrink-0 mt-0.5" />
                <span>Pre-departure safety orientation by dock staff</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-200">
              <a
                href={MARINA_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-sand-300 hover:bg-sand-400 text-lake-950 font-bold py-3 px-4 rounded-md text-center block transition-colors"
              >
                Reserve Your Pontoon Now
              </a>
            </div>
          </div>

        </div>

        {/* Cross Links to Other Pages */}
        <div className="mt-12 text-center text-sm text-slate-600">
          Looking for a cabin stay alongside your boat rental? Explore our <Link href="/stay/cabins" className="text-lake-950 font-bold underline hover:text-cedar-600">Lakeside Cabins</Link> or plan your drive using our <Link href="/the-lake" className="text-lake-950 font-bold underline hover:text-cedar-600">Center Hill Lake Day Guide</Link>.
        </div>

      </div>

      {/* FAQ Section */}
      <div className="mt-12">
        <FaqSection items={pontoonFaqs} title="Pontoon Rental FAQ" />
      </div>
    </div>
  );
}
