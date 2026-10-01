import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { MARINA_INFO } from '@/lib/siteData';
import { MapPin, Phone, Mail, Clock, Navigation, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: "Contact & Directions | Hidden Harbor Marina Smithville TN",
  description: "Contact Hidden Harbor Marina on Center Hill Lake. Address: 2685 Casey Cove Rd, Smithville, TN 37166. Phone: (615) 597-8800. Written driving directions from Nashville and Cookeville.",
};

export default function ContactPage() {
  return (
    <div className="bg-cream-100 min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-cedar-600">
            GET IN TOUCH & FIND US
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-lake-950 tracking-tight mt-1">
            Contact Hidden Harbor Marina
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            We are located in Casey Cove on Center Hill Lake in Smithville, Tennessee. Contact our dock team for boat rentals, cabin reservations, campsite availability, or slip inquiries.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1: Address */}
          <div className="bg-white p-6 rounded-xl border border-cream-300 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-lake-900 text-sand-300 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-lg font-bold text-lake-950">Address & NAP</h2>
            <address className="not-italic text-sm text-slate-700 leading-relaxed">
              <strong>{MARINA_INFO.name}</strong><br />
              {MARINA_INFO.streetAddress}<br />
              {MARINA_INFO.addressLocality}, {MARINA_INFO.addressRegion} {MARINA_INFO.postalCode}
            </address>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-white p-6 rounded-xl border border-cream-300 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-lake-900 text-sand-300 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-lg font-bold text-lake-950">Phone</h2>
            <p className="text-sm text-slate-700">
              <a href={`tel:${MARINA_INFO.phoneRaw}`} className="font-bold text-lake-950 hover:text-cedar-600 text-base">
                {MARINA_INFO.phone}
              </a>
            </p>
            <p className="text-xs text-slate-500">
              Call direct for boat slip waitlist and dock questions.
            </p>
          </div>

          {/* Card 3: Email */}
          <div className="bg-white p-6 rounded-xl border border-cream-300 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-lake-900 text-sand-300 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-lg font-bold text-lake-950">Email</h2>
            <p className="text-sm text-slate-700">
              <a href={`mailto:${MARINA_INFO.email}`} className="font-bold text-lake-950 hover:text-cedar-600 break-all">
                {MARINA_INFO.email}
              </a>
            </p>
            <p className="text-xs text-slate-500">
              General inquiries and reservation questions.
            </p>
          </div>

          {/* Card 4: Hours Summary */}
          <div className="bg-white p-6 rounded-xl border border-cream-300 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-lake-900 text-sand-300 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-lg font-bold text-lake-950">Operating Hours</h2>
            <p className="text-xs font-bold text-lake-950 leading-relaxed">
              Sun–Thu: 9 AM – 5 PM<br />
              Fri & Sat: 9 AM – 6 PM
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              In-season schedule May 18th through Labor Day.
            </p>
          </div>

        </div>

        {/* Real Hours Graphic Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-cream-300 shadow-card mb-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-5 relative aspect-square max-w-sm mx-auto w-full rounded-xl overflow-hidden shadow-md border border-cream-300 bg-lake-950">
            <Image
              src="/hours.jpg"
              alt="Hidden Harbor Marina Hours of Operation: Sunday through Thursday 9:00 AM to 5:00 PM, Friday and Saturday 9:00 AM to 6:00 PM starting May 18th through Labor Day"
              fill
              className="object-contain"
            />
          </div>

          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center space-x-2 text-cedar-600 font-bold text-xs uppercase tracking-wider">
              <Clock className="w-4 h-4 text-sand-500" />
              <span>OFFICIAL MARINA HOURS</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-lake-950">
              Hours of Operation
            </h2>

            <div className="space-y-3 text-slate-700 text-sm md:text-base leading-relaxed">
              <p>
                Hidden Harbor Marina operates on seasonal hours to accommodate Center Hill Lake boaters, cabin guests, and slip holders.
              </p>
              
              <div className="p-5 bg-cream-100 rounded-xl border border-cream-300 space-y-2">
                <h3 className="font-bold text-lake-950 text-base">In-Season Hours (May 18th through Labor Day):</h3>
                <ul className="space-y-1.5 text-sm text-slate-800">
                  <li className="flex justify-between border-b border-cream-300 pb-1">
                    <span>Sunday – Thursday:</span>
                    <span className="font-bold text-lake-950">9:00 AM – 5:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-cream-300 pb-1">
                    <span>Friday & Saturday:</span>
                    <span className="font-bold text-lake-950">9:00 AM – 6:00 PM</span>
                  </li>
                </ul>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed flex items-center space-x-1.5 pt-1">
                <Calendar className="w-4 h-4 text-cedar-600 shrink-0" />
                <span>Standard off-season hours are daily 8:00 AM – 5:00 PM. Hours are subject to change seasonally. Please call <strong>(615) 597-8800</strong> to verify during late fall and winter months.</span>
              </p>
            </div>
          </div>

        </div>

        {/* Written Driving Directions */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-cream-300 shadow-card mb-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cedar-600">
                WRITTEN DRIVING DIRECTIONS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-lake-950 tracking-tight mt-1">
                How to Reach Hidden Harbor Marina
              </h2>
            </div>

            {/* Directions from Nashville */}
            <div className="p-5 bg-cream-100 rounded-xl border border-cream-300 space-y-2">
              <h3 className="font-serif text-lg font-bold text-lake-950 flex items-center space-x-2">
                <Navigation className="w-4 h-4 text-cedar-600" />
                <span>From Nashville, TN (~1 Hour / 60 Miles)</span>
              </h3>
              <ol className="list-decimal list-inside text-sm text-slate-700 space-y-1.5 leading-relaxed">
                <li>Take <strong>I-40 East</strong> toward Knoxville for approximately 50 miles.</li>
                <li>Take <strong>Exit 273</strong> for TN-56 toward Smithville / McMinnville.</li>
                <li>Turn right onto <strong>TN-56 South</strong> and continue for about 6 miles.</li>
                <li>Turn left onto <strong>Casey Cove Rd</strong> and follow the signs straight to Hidden Harbor Marina.</li>
              </ol>
            </div>

            {/* Directions from Cookeville */}
            <div className="p-5 bg-cream-100 rounded-xl border border-cream-300 space-y-2">
              <h3 className="font-serif text-lg font-bold text-lake-950 flex items-center space-x-2">
                <Navigation className="w-4 h-4 text-cedar-600" />
                <span>From Cookeville, TN (~40 Minutes / 32 Miles)</span>
              </h3>
              <ol className="list-decimal list-inside text-sm text-slate-700 space-y-1.5 leading-relaxed">
                <li>Take <strong>TN-111 South</strong> toward Sparta.</li>
                <li>Take the exit for <strong>US-70 West / TN-56 South</strong> toward Smithville.</li>
                <li>Turn onto <strong>Casey Cove Rd</strong> and proceed to the marina entrance.</li>
              </ol>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-6 h-[400px] lg:h-auto rounded-xl overflow-hidden shadow-sm border border-cream-300 relative">
            <iframe
              title="Hidden Harbor Marina Location Map"
              src="https://maps.google.com/maps?q=Hidden%20Harbor%20Marina%202685%20Casey%20Cove%20Rd%20Smithville%20TN%2037166&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '350px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </div>
  );
}
