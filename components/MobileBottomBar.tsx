import React from 'react';
import { MARINA_INFO } from '@/lib/siteData';
import { Phone, ExternalLink } from 'lucide-react';

export default function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-lake-900/95 backdrop-blur-md border-t border-lake-800 p-2.5 px-4 shadow-2xl">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a
          href={`tel:${MARINA_INFO.phoneRaw}`}
          className="flex items-center justify-center space-x-2 bg-lake-800 hover:bg-lake-700 text-white font-medium py-2.5 px-3 rounded-md text-sm border border-slate-700 transition-colors"
        >
          <Phone className="w-4 h-4 text-sand-300" />
          <span>Call Marina</span>
        </a>
        <a
          href={MARINA_INFO.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-1.5 bg-sand-300 hover:bg-sand-400 text-lake-950 font-bold py-2.5 px-3 rounded-md text-sm transition-colors"
        >
          <span>Book Online</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
