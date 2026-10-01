import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MARINA_INFO, DEVELOPER_CREDIT } from '@/lib/siteData';
import { MapPin, Phone, Mail, Clock, ExternalLink, Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-lake-950 text-slate-300 border-t border-lake-800 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-lake-800">
          
          {/* Column 1: Brand Logo & NAP */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-sand-300/40 bg-cream-50">
                <Image
                  src="/logo.jpg"
                  alt="Hidden Harbor Marina Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-[10px] tracking-[0.2em] text-sand-300 font-bold uppercase block">
                  Center Hill Lake
                </span>
                <h2 className="font-serif text-xl font-bold text-white tracking-tight">
                  Hidden Harbor Marina
                </h2>
              </div>
            </div>
            
            <address className="not-italic text-sm text-slate-300 space-y-2.5">
              <p className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-sand-300 shrink-0 mt-0.5" />
                <span>
                  {MARINA_INFO.name}<br />
                  {MARINA_INFO.streetAddress}<br />
                  {MARINA_INFO.addressLocality}, {MARINA_INFO.addressRegion} {MARINA_INFO.postalCode}
                </span>
              </p>

              <p className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-sand-300 shrink-0" />
                <a href={`tel:${MARINA_INFO.phoneRaw}`} className="hover:text-sand-300 transition-colors">
                  {MARINA_INFO.phone}
                </a>
              </p>

              <p className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-sand-300 shrink-0" />
                <a href={`mailto:${MARINA_INFO.email}`} className="hover:text-sand-300 transition-colors">
                  {MARINA_INFO.email}
                </a>
              </p>
            </address>

            {/* Google Rating Badge */}
            <div className="pt-2">
              <a 
                href={MARINA_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-lake-900 border border-lake-800 hover:border-sand-400 px-3 py-2 rounded-md transition-colors text-xs text-slate-200"
              >
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white">{MARINA_INFO.googleRating}</span>
                <span className="text-slate-400">({MARINA_INFO.googleReviewCount} Google reviews)</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Explore & Rent
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/rentals/pontoons" className="hover:text-sand-300 transition-colors">
                  Pontoon Rentals (Double Deckers)
                </Link>
              </li>
              <li>
                <Link href="/rentals/deck-boats" className="hover:text-sand-300 transition-colors">
                  Deck Boat Rentals
                </Link>
              </li>
              <li>
                <Link href="/rentals/fishing-boats" className="hover:text-sand-300 transition-colors">
                  Fishing Boat Rentals
                </Link>
              </li>
              <li>
                <Link href="/rentals/houseboats" className="hover:text-sand-300 transition-colors">
                  Houseboat Rentals
                </Link>
              </li>
              <li>
                <Link href="/stay/cabins" className="hover:text-sand-300 transition-colors">
                  Cabin Rentals
                </Link>
              </li>
              <li>
                <Link href="/stay/camping" className="hover:text-sand-300 transition-colors">
                  Campground & RV Sites
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Marina Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Marina & Visitors
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/slips" className="hover:text-sand-300 transition-colors">
                  Covered & Uncovered Boat Slips
                </Link>
              </li>
              <li>
                <Link href="/the-lake" className="hover:text-sand-300 transition-colors">
                  Center Hill Lake Day Guide
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sand-300 transition-colors">
                  Our History & New Chapter
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sand-300 transition-colors">
                  Contact & Driving Directions
                </Link>
              </li>
              <li>
                <a 
                  href={MARINA_INFO.bookingUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sand-300 font-semibold inline-flex items-center space-x-1 hover:underline"
                >
                  <span>Online Reservations System</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours & Season */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
              Hours & Info
            </h3>
            <div className="flex items-start space-x-2 text-sm text-slate-300">
              <Clock className="w-4 h-4 text-sand-300 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-white">{MARINA_INFO.hoursInSeason}</p>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {MARINA_INFO.hoursSeasonalNote}
                </p>
              </div>
            </div>

            <div className="p-3 bg-lake-900/80 rounded-md border border-lake-800 text-xs leading-relaxed text-slate-400">
              <span className="font-semibold text-slate-200 block mb-1">Pricing Disclaimer:</span>
              {MARINA_INFO.rateDisclaimer}
            </div>
          </div>

        </div>

        {/* Bottom Bar with Developer Credit Tag */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© {new Date().getFullYear()} Hidden Harbor Marina. Operating on Center Hill Lake since 1989.</p>
          
          <div className="flex items-center space-x-4">
            <p className="text-slate-400">
              2685 Casey Cove Rd, Smithville, TN 37166
            </p>
            <span className="hidden sm:inline text-slate-700">•</span>
            {/* Developer Credit Tag */}
            <p className="text-slate-400">
              Website built by{' '}
              <a
                href={DEVELOPER_CREDIT.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand-300 font-semibold hover:text-white hover:underline transition-colors inline-flex items-center space-x-1"
                title="Custom Website Development by Kyle Kinkin"
              >
                <span>{DEVELOPER_CREDIT.name}</span>
                <ExternalLink className="w-3 h-3 opacity-75" />
              </a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
