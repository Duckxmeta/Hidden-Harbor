import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import FaqSection from '@/components/FaqSection';
import { MARINA_INFO } from '@/lib/siteData';
import { ExternalLink, Users, Clock, Home, CheckCircle2, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Cabin Rentals on Center Hill Lake | Hidden Harbor Marina",
  description: "Rent lakeside cabins on Center Hill Lake at Hidden Harbor Marina in Smithville, TN. Fully equipped with kitchen, air conditioning, and scenic views.",
};

export default function CabinsPage() {
  const cabinFaqs = [
    {
      question: "What are the check-in and check-out times for cabins?",
      answer: "Cabin check-in begins at 3:00 PM and check-out is by 10:00 AM. If you plan to arrive after 5:00 PM, please notify dock staff in advance."
    },
    {
      question: "Are linens and towels provided in the cabin rentals?",
      answer: "Yes, standard bed linens and bath towels are provided. We recommend bringing your own beach towels for lake swimming."
    },
    {
      question: "Are pets allowed in the cabins?",
      answer: "Pet policies vary by cabin unit. Please review specific cabin pet policies or call dock staff at (615) 597-8800 prior to booking."
    },
    {
      question: "What cooking appliances are in the cabins?",
      answer: "Cabins feature full kitchens with a stove, oven, full-size refrigerator, microwave, coffee maker, cookware, and outdoor grill."
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
          <span className="text-lake-950 font-bold">Cabins</span>
        </nav>

        {/* Hero Section & Direct Answer Opening (First 40 Words Target for AI Citations) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cedar-600">
              CENTER HILL LAKE CABIN RENTALS
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-lake-950 tracking-tight">
              Lakeside Cabins at Hidden Harbor Marina
            </h1>
            
            {/* Direct Answer Paragraph (First 40 Words) */}
            <div className="p-5 bg-white rounded-xl border border-cream-300 shadow-sm leading-relaxed text-slate-800 text-base md:text-lg">
              <p>
                <strong>Hidden Harbor Marina offers lakeside cabin rentals on Center Hill Lake in Smithville, TN</strong>, sleeping 2 to 8 guests. Cabins feature full kitchens, air conditioning, private decks, and easy dock access. Rates are starting rates and subject to change.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={MARINA_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sand-300 hover:bg-sand-400 text-lake-950 font-bold px-7 py-3.5 rounded-lg shadow-md transition-all inline-flex items-center space-x-2"
              >
                <span>Book a Cabin Online</span>
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
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop"
              alt="Lakeside cabin on Center Hill Lake near Smithville TN"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Specs Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-cream-300 shadow-sm space-y-2">
            <div className="flex items-center space-x-2 text-cedar-600 font-bold text-sm">
              <Users className="w-5 h-5 text-sand-500" />
              <span>Guest Capacity</span>
            </div>
            <p className="text-xl font-bold text-lake-950">2 – 8 Guests</p>
            <p className="text-xs text-slate-500">1, 2, & 3 Bedroom Layouts</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-cream-300 shadow-sm space-y-2">
            <div className="flex items-center space-x-2 text-cedar-600 font-bold text-sm">
              <Clock className="w-5 h-5 text-sand-500" />
              <span>Check-In / Check-Out</span>
            </div>
            <p className="text-xl font-bold text-lake-950">3:00 PM / 10:00 AM</p>
            <p className="text-xs text-slate-500">Contact dock for late arrival</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-cream-300 shadow-sm space-y-2">
            <div className="flex items-center space-x-2 text-cedar-600 font-bold text-sm">
              <Home className="w-5 h-5 text-sand-500" />
              <span>Location</span>
            </div>
            <p className="text-xl font-bold text-lake-950">Casey Cove</p>
            <p className="text-xs text-slate-500">Short walk to boat docks & store</p>
          </div>
        </div>

        {/* Details & Amenities */}
        <div className="mt-12 bg-white rounded-2xl p-8 md:p-12 border border-cream-300 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-lake-950">
              Comfortable Lake Country Retreats
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              Our cabins provide a peaceful, comfortable retreat situated right near the waters of Casey Cove. Whether you are spending your days on a pontoon boat or exploring nearby state parks, you will love returning to air-conditioned comfort, a hot shower, and an outdoor porch with grill.
            </p>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <p>
                <strong>Rate Note:</strong> Cabin rental pricing varies by season, day of week, and unit size. Rates are starting rates and subject to change; please confirm exact rates on the booking system.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-cream-100 p-6 md:p-8 rounded-xl border border-cream-300 space-y-4">
            <h3 className="font-serif text-xl font-bold text-lake-950">
              Standard Cabin Amenities
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-cedar-600 shrink-0 mt-0.5" />
                <span>Full kitchen with refrigerator, stove, oven, microwave, & cookware</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-cedar-600 shrink-0 mt-0.5" />
                <span>Heating & central air conditioning</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-cedar-600 shrink-0 mt-0.5" />
                <span>Private deck with outdoor seating & grill</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-cedar-600 shrink-0 mt-0.5" />
                <span>Bed linens and bath towels provided</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-200">
              <a
                href={MARINA_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-sand-300 hover:bg-sand-400 text-lake-950 font-bold py-3 px-4 rounded-md text-center block transition-colors"
              >
                Reserve Cabin Online
              </a>
            </div>
          </div>

        </div>

        {/* Cross Links */}
        <div className="mt-12 text-center text-sm text-slate-600">
          Planning to hit the water during your stay? Pair your cabin with a <Link href="/rentals/pontoons" className="text-lake-950 font-bold underline hover:text-cedar-600">Pontoon Rental</Link> or <Link href="/rentals/fishing-boats" className="text-lake-950 font-bold underline hover:text-cedar-600">Fishing Boat</Link>.
        </div>

      </div>

      <div className="mt-12">
        <FaqSection items={cabinFaqs} title="Cabin Rental FAQ" />
      </div>
    </div>
  );
}
