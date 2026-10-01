import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import FaqSection from '@/components/FaqSection';
import { MARINA_INFO } from '@/lib/siteData';
import { ExternalLink, Users, Clock, Fuel, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Deck Boat Rentals on Center Hill Lake | High-Speed Lake Cruising",
  description: "Rent deck boats on Center Hill Lake at Hidden Harbor Marina in Smithville, TN. Combine pontoon lounge seating with high-speed performance for watersports.",
};

export default function DeckBoatsPage() {
  const deckBoatFaqs = [
    {
      question: "How many passengers do deck boats hold?",
      answer: "Deck boats at Hidden Harbor Marina carry up to 8 to 10 passengers depending on the specific model specifications."
    },
    {
      question: "Can deck boats tow tubers or watersports?",
      answer: "Yes. Deck boats combine V-hull speed with comfortable deck seating, making them ideal for towing tubers and watersports across open water."
    },
    {
      question: "Is fuel included in deck boat rental rates?",
      answer: "Fuel is not included in the rental price. Boats leave full of gas and are topped off upon return; you pay only for fuel consumed."
    },
    {
      question: "What are check-in and return times?",
      answer: "Check-in begins at 8:00 AM for an 8:30 AM departure. All deck boats must return to the fuel dock by 4:30 PM."
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
          <span className="text-lake-950 font-bold">Deck Boats</span>
        </nav>

        {/* Hero Section & Direct Answer Opening (First 40 Words Target for AI Citations) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cedar-600">
              CENTER HILL LAKE DECK BOAT RENTALS
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-lake-950 tracking-tight">
              Deck Boat Rentals at Hidden Harbor Marina
            </h1>
            
            {/* Direct Answer Paragraph (First 40 Words) */}
            <div className="p-5 bg-white rounded-xl border border-cream-300 shadow-sm leading-relaxed text-slate-800 text-base md:text-lg">
              <p>
                <strong>Hidden Harbor Marina offers deck boat rentals on Center Hill Lake in Smithville, TN</strong> for up to 10 passengers. Deck boats combine pontoon lounge seating with high-speed performance for watersports and lake cruising. Rates are starting rates.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={MARINA_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sand-300 hover:bg-sand-400 text-lake-950 font-bold px-7 py-3.5 rounded-lg shadow-md transition-all inline-flex items-center space-x-2"
              >
                <span>Book a Deck Boat</span>
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
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop"
              alt="Deck boat on Center Hill Lake near Smithville TN"
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
            <p className="text-xl font-bold text-lake-950">Up to 10 Passengers</p>
            <p className="text-xs text-slate-500">Spacious bow & stern lounge</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-cream-300 shadow-sm space-y-2">
            <div className="flex items-center space-x-2 text-cedar-600 font-bold text-sm">
              <Clock className="w-5 h-5 text-sand-500" />
              <span>Check-In Times</span>
            </div>
            <p className="text-xl font-bold text-lake-950">8:30 AM – 4:30 PM</p>
            <p className="text-xs text-slate-500">Arrive by 8:00 AM for orientation</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-cream-300 shadow-sm space-y-2">
            <div className="flex items-center space-x-2 text-cedar-600 font-bold text-sm">
              <Fuel className="w-5 h-5 text-sand-500" />
              <span>Gas & Taxes</span>
            </div>
            <p className="text-xl font-bold text-lake-950">Not Included</p>
            <p className="text-xs text-slate-500">Pay for fuel used at dock</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-cream-300 shadow-sm space-y-2">
            <div className="flex items-center space-x-2 text-cedar-600 font-bold text-sm">
              <ShieldCheck className="w-5 h-5 text-sand-500" />
              <span>Pricing</span>
            </div>
            <p className="text-xl font-bold text-lake-950">Starting Rates</p>
            <p className="text-xs text-slate-500">Subject to change; confirm when booking</p>
          </div>
        </div>

        {/* Details & What's Included */}
        <div className="mt-12 bg-white rounded-2xl p-8 md:p-12 border border-cream-300 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-lake-950">
              The Best of Speed & Comfort on Center Hill
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              If you want to zip between Center Hill Lake’s famous waterfalls, limestone bluffs, and quiet swimming coves with speed and agility, a deck boat rental is your best choice. With open bow seating and powerful outboard power, deck boats combine runabout maneuverability with pontoon seating space.
            </p>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <p>
                <strong>Rate Note:</strong> Deck boat rental prices vary by season and demand. Displayed rates are starting rates and subject to change. Always verify current pricing on our direct booking portal before confirming.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-cream-100 p-6 md:p-8 rounded-xl border border-cream-300 space-y-4">
            <h3 className="font-serif text-xl font-bold text-lake-950">
              What’s Included with Deck Boats
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-cedar-600 shrink-0 mt-0.5" />
                <span>US Coast Guard approved life jackets</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-cedar-600 shrink-0 mt-0.5" />
                <span>Bimini shade canopy top</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-cedar-600 shrink-0 mt-0.5" />
                <span>Towing ski pylon / tow point</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-cedar-600 shrink-0 mt-0.5" />
                <span>Anchor line and safety throwable</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-200">
              <a
                href={MARINA_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-sand-300 hover:bg-sand-400 text-lake-950 font-bold py-3 px-4 rounded-md text-center block transition-colors"
              >
                Reserve a Deck Boat Online
              </a>
            </div>
          </div>

        </div>

        {/* Cross Links */}
        <div className="mt-12 text-center text-sm text-slate-600">
          Also check out our <Link href="/rentals/pontoons" className="text-lake-950 font-bold underline hover:text-cedar-600">Pontoon Rentals with Slides</Link> or view <Link href="/slips" className="text-lake-950 font-bold underline hover:text-cedar-600">Boat Slips & Fuel Dock Services</Link>.
        </div>

      </div>

      <div className="mt-12">
        <FaqSection items={deckBoatFaqs} title="Deck Boat FAQ" />
      </div>
    </div>
  );
}
