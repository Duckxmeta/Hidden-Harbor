import React from 'react';
import { MARINA_INFO } from '@/lib/siteData';
import { Star, Clock, Phone, ShieldCheck } from 'lucide-react';

export default function TrustStrip() {
  return (
    <section className="bg-lake-950 text-white border-y border-lake-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-lake-800">
          
          {/* Trust 1: Google Rating */}
          <a
            href={MARINA_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3.5 pt-4 lg:pt-0 lg:px-4 first:pt-0 hover:text-sand-300 transition-colors group"
          >
            <div className="p-2.5 bg-lake-900 rounded-lg text-amber-400 group-hover:bg-lake-800 transition-colors">
              <Star className="w-5 h-5 fill-amber-400" />
            </div>
            <div>
              <div className="flex items-center space-x-1 font-bold text-base text-white">
                <span>{MARINA_INFO.googleRating} / 5.0</span>
              </div>
              <p className="text-xs text-slate-300">
                ~{MARINA_INFO.googleReviewCount} Google Reviews
              </p>
            </div>
          </a>

          {/* Trust 2: Drive Time */}
          <div className="flex items-center space-x-3.5 pt-4 lg:pt-0 lg:px-4">
            <div className="p-2.5 bg-lake-900 rounded-lg text-sand-300">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-base text-white">~1 Hour East</div>
              <p className="text-xs text-slate-300">
                60 miles from Nashville, TN
              </p>
            </div>
          </div>

          {/* Trust 3: Local Staff */}
          <div className="flex items-center space-x-3.5 pt-4 lg:pt-0 lg:px-4">
            <div className="p-2.5 bg-lake-900 rounded-lg text-sand-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-base text-white">Same Friendly Staff</div>
              <p className="text-xs text-slate-300">
                Local team, operating since 1989
              </p>
            </div>
          </div>

          {/* Trust 4: Direct Phone */}
          <a
            href={`tel:${MARINA_INFO.phoneRaw}`}
            className="flex items-center space-x-3.5 pt-4 lg:pt-0 lg:px-4 hover:text-sand-300 transition-colors group"
          >
            <div className="p-2.5 bg-lake-900 rounded-lg text-sand-300 group-hover:bg-lake-800 transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-base text-white">{MARINA_INFO.phone}</div>
              <p className="text-xs text-slate-300">
                Call us direct for dock info
              </p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
