import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { MARINA_INFO } from '@/lib/siteData';
import { Phone, Mail, Anchor, Fuel, ShoppingBag, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: "Covered Boat Slips & Fuel Dock | Hidden Harbor Marina Center Hill Lake",
  description: "Covered and uncovered boat slips, marine fuel dock, and ship store at Hidden Harbor Marina on Center Hill Lake in Smithville, TN.",
};

export default function SlipsPage() {
  return (
    <div className="bg-cream-100 min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-cedar-600">
            DOCK SERVICES & SLIPS
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-lake-950 tracking-tight mt-1">
            Boat Slips, Fuel & Ship’s Store
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            Hidden Harbor Marina offers covered and uncovered boat slips in peaceful Casey Cove, complete with marine fuel, electrical hookups, and a fully stocked lake store.
          </p>
        </div>

        {/* Hero Feature Box */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-cream-300 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-lake-50 text-lake-900 border border-lake-100 px-3 py-1 rounded-full text-xs font-semibold">
              <Anchor className="w-4 h-4 text-sand-500" />
              <span>Center Hill Lake Dockage</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-lake-950 tracking-tight">
              Protected Boat Slips in Casey Cove
            </h2>

            <p className="text-slate-700 leading-relaxed text-base">
              Located in a quiet, protected arm of Center Hill Lake, Casey Cove protects docked vessels from main-channel wake and high winds. Whether you own a pontoon, runabout, or cruiser, keeping your boat at Hidden Harbor means effortless access whenever you are ready to hit the water.
            </p>

            {/* Waitlist Note */}
            <div className="p-5 bg-cream-100 rounded-xl border border-cream-300 space-y-2">
              <div className="flex items-center space-x-2 font-bold text-lake-950 text-sm">
                <ShieldCheck className="w-5 h-5 text-cedar-600" />
                <span>Slip Availability & Waitlist Policy</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Due to high demand, annual slip availability changes throughout the season. We maintain an active slip waitlist. Please call our dock office at <strong>(615) 597-8800</strong> or email <strong>info@hiddenharbortn.com</strong> to inquire about current slip sizes, pricing, or to be added to the waitlist.
              </p>
            </div>

            {/* Contact CTAs (No fake portal!) */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${MARINA_INFO.phoneRaw}`}
                className="bg-sand-300 hover:bg-sand-400 text-lake-950 font-bold px-7 py-3.5 rounded-lg shadow-md transition-all text-center inline-flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call (615) 597-8800 for Slips</span>
              </a>
              <a
                href={`mailto:${MARINA_INFO.email}?subject=Boat%20Slip%20Inquiry%20-%20Hidden%20Harbor%20Marina`}
                className="bg-lake-900 hover:bg-lake-800 text-white font-semibold px-7 py-3.5 rounded-lg transition-all text-center inline-flex items-center justify-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Email Dock Office</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop"
              alt="Covered boat slips at Hidden Harbor Marina on Center Hill Lake"
              fill
              className="object-cover"
            />
          </div>

        </div>

        {/* Slip Types & Facilities Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-xl border border-cream-300 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-lg bg-lake-900 text-sand-300 flex items-center justify-center">
              <Anchor className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-lake-950">
              Covered & Uncovered Slips
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              We offer various slip sizes to accommodate pontoon boats, deck boats, cruisers, and runabouts. Electrical service and water connections are available at dock locations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-cream-300 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-lg bg-lake-900 text-sand-300 flex items-center justify-center">
              <Fuel className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-lake-950">
              On-Water Fuel Dock
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Convenient fuel dock serving mid-lake boaters on Center Hill Lake. Stop by during operating hours for ethanol-free marine fuel, oil, and friendly dock assistance.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-cream-300 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-lg bg-lake-900 text-sand-300 flex items-center justify-center">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-lake-950">
              Ship’s Store & Provisions
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Our ship’s store is stocked with lake essentials: bagged ice, cold drinks, snacks, ice cream, live bait, tackle, sunblock, and marine supplies.
            </p>
          </div>

        </div>

        {/* Cross Links */}
        <div className="mt-16 text-center text-sm text-slate-600">
          Visiting for the weekend? Check our <Link href="/rentals" className="text-lake-950 font-bold underline hover:text-cedar-600">Boat Rental Options</Link> or view <Link href="/contact" className="text-lake-950 font-bold underline hover:text-cedar-600">Contact Details & Location</Link>.
        </div>

      </div>
    </div>
  );
}
