import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import ColorBlockPlaceholder from '@/components/ColorBlockPlaceholder';
import { MARINA_INFO } from '@/lib/siteData';
import { ExternalLink, Users, ArrowRight, ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
  title: "Boat Rentals on Center Hill Lake | Pontoons, Houseboats & Fishing Boats",
  description: "Explore boat rentals at Hidden Harbor Marina on Center Hill Lake in Smithville, TN. Rent double-decker pontoons with slides, deck boats, fishing boats, and houseboats.",
};

export default function RentalsIndexPage() {
  const fleetCategories = [
    {
      title: "Pontoon Boats & Double-Deckers with Slides",
      slug: "pontoons",
      href: "/rentals/pontoons",
      categoryName: "Pontoons & Double-Deckers",
      capacity: "10 to 14 Passengers",
      startingRate: "From ~$300 – $470 / day in season",
      summary: "Hidden Harbor Marina offers premium pontoon rentals on Center Hill Lake, including classic cruisers and popular double-decker pontoons featuring water slides. Perfect for family reunions, summer parties, and peaceful coving."
    },
    {
      title: "Deck Boats",
      slug: "deck-boats",
      href: "/rentals/deck-boats",
      categoryName: "Watersport Deck Boats",
      capacity: "Up to 10 Passengers",
      startingRate: "Starting daily rates available upon booking",
      summary: "Spacious deck boat rentals combine the speed and maneuverability of a runabout with the comfortable seating layout of a pontoon. Ideal for cruising, tubing, and exploring secret coves across Center Hill Lake."
    },
    {
      title: "Fishing Boats",
      slug: "fishing-boats",
      href: "/rentals/fishing-boats",
      categoryName: "Center Hill Angling",
      capacity: "2 to 4 Anglers",
      startingRate: "From ~$135 / day",
      summary: "Reliable, economical fishing boat rentals outfitted for early morning bass fishing and quiet angling trips on Center Hill Lake. Head out to deep drop-offs and wooded coves where smallmouth bass bite."
    },
    {
      title: "Houseboats",
      slug: "houseboats",
      href: "/rentals/houseboats",
      categoryName: "Multi-Day Houseboats",
      capacity: "Sleeps up to 10 Guests",
      startingRate: "Weekend packages from ~$1,900",
      summary: "Experience a multi-day floating retreat on Center Hill Lake. Our houseboat rentals feature full kitchens, private bedrooms, top sun decks, and home-like amenities for immersive lake vacations."
    }
  ];

  return (
    <div className="bg-cream-100 min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-cedar-600">
            CENTER HILL LAKE FLEET
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-lake-950 tracking-tight mt-1">
            Boat Rentals at Hidden Harbor Marina
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            Choose from double-decker pontoon boats with water slides, roomy deck boats, economic fishing boats, and multi-day houseboats—all departing directly from Casey Cove in Smithville, TN.
          </p>

          {/* Rate Disclaimer Box */}
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg text-xs sm:text-sm text-amber-900 text-left flex items-start space-x-3">
            <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <p>
              <strong>Pricing Notice:</strong> Rates listed on this site represent estimated starting prices and vary by season, day of week, and holiday. Rates are subject to change. Please confirm exact current pricing when completing your booking.
            </p>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {fleetCategories.map((boat) => (
            <div 
              key={boat.slug}
              className="bg-white rounded-2xl border border-cream-300 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-lake-950">
                  <ColorBlockPlaceholder
                    title={boat.title}
                    category={boat.categoryName}
                    aspectRatio="aspect-[16/10]"
                  />
                  <div className="absolute top-4 right-4 bg-lake-950/80 backdrop-blur-md text-sand-300 px-3 py-1 rounded-full text-xs font-bold border border-sand-300/30">
                    {boat.startingRate}
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-4">
                  <div className="flex items-center space-x-3 text-xs font-semibold text-cedar-600 uppercase tracking-wider">
                    <span className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-sand-500" />
                      <span>{boat.capacity}</span>
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl font-bold text-lake-950 tracking-tight group-hover:text-cedar-600 transition-colors">
                    <Link href={boat.href}>{boat.title}</Link>
                  </h2>

                  <p className="text-slate-700 text-sm leading-relaxed">
                    {boat.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-8 pt-0 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-slate-100 mt-4">
                <Link
                  href={boat.href}
                  className="inline-flex items-center space-x-1.5 text-sm font-bold text-lake-950 hover:text-cedar-600 transition-colors py-2"
                >
                  <span>View Fleet Specs & FAQ</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={MARINA_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sand-300 hover:bg-sand-400 text-lake-950 font-bold text-sm px-5 py-2.5 rounded-md text-center inline-flex items-center justify-center space-x-1.5 transition-colors focus:ring-2 focus:ring-sand-300"
                >
                  <span>Book Now</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* What to Expect Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 border border-cream-300 shadow-sm space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cedar-600">
              IMPORTANT RENTAL POLICIES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-lake-950 tracking-tight mt-1">
              General Rental Rules & Details
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-700">
            <div className="p-4 bg-cream-100 rounded-lg space-y-2">
              <h3 className="font-bold text-lake-950">Fuel & Sales Tax</h3>
              <p className="leading-relaxed">
                Initial rental rates do not include fuel or sales tax. Boats depart with a full tank and are refueled at our dock upon return based on actual usage.
              </p>
            </div>
            <div className="p-4 bg-cream-100 rounded-lg space-y-2">
              <h3 className="font-bold text-lake-950">Safety Equipment</h3>
              <p className="leading-relaxed">
                All rentals include required US Coast Guard-approved life jackets, safety throwable cushions, anchor line, and mandatory safety orientation before departure.
              </p>
            </div>
            <div className="p-4 bg-cream-100 rounded-lg space-y-2">
              <h3 className="font-bold text-lake-950">Driver Requirements</h3>
              <p className="leading-relaxed">
                Boating drivers must be at least 21 years old with a valid driver’s license. Tennessee boating safety requirements apply for operators born after Jan 1, 1989.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
