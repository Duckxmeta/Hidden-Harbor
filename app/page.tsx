import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TrustStrip from '@/components/TrustStrip';
import PhotoCard from '@/components/PhotoCard';
import FaqSection from '@/components/FaqSection';
import ColorBlockPlaceholder from '@/components/ColorBlockPlaceholder';
import { MARINA_INFO, HOMEPAGE_REVIEWS } from '@/lib/siteData';
import { Star, MapPin, ArrowRight, ExternalLink, Clock, HeartHandshake, Calendar } from 'lucide-react';

export default function HomePage() {
  const homeFaqs = [
    {
      question: "How far is Hidden Harbor Marina from Nashville?",
      answer: "Hidden Harbor Marina is located on Center Hill Lake in Smithville, TN, approximately 60 miles (1 hour drive) east of downtown Nashville via I-40 East and Hwy 56 South."
    },
    {
      question: "How do I book a boat rental, cabin, or campsite?",
      answer: "All boat, cabin, and campsite reservations can be booked online through our direct reservation system at hiddenharbormarina.stellarims.com or by calling our dock office at (615) 597-8800."
    },
    {
      question: "Are fuel and taxes included in rental rates?",
      answer: "No, fuel used and applicable state/local sales taxes are not included in initial rental rates. Boats leave with a full tank of fuel and are refueled upon return at our fuel dock."
    },
    {
      question: "Has the phone number or management changed recently?",
      answer: "Hidden Harbor Marina has operated on Center Hill Lake since 1989. Following the long stewardship of the Leiser family, Bobby Davis stepped in as owner in 2026. Our local staff, phone number (615) 597-8800, and email remain unchanged."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION - Real banner.png aerial view */}
      <section className="relative min-h-[85vh] flex items-end md:items-center justify-start overflow-hidden bg-lake-950 pb-16 md:pb-0">
        
        {/* Full Bleed Real Banner Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner.png"
            alt="Hidden Harbor Marina on Center Hill Lake in Smithville, Tennessee"
            fill
            priority
            className="object-cover object-[center_60%]"
          />
          {/* Subtle gradient overlay to ensure text readability over left side */}
          <div className="absolute inset-0 bg-gradient-to-r from-lake-950/90 via-lake-950/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-lake-950/95 via-transparent to-lake-950/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16 md:py-32">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-sand-300 block mb-2">
              SMITHVILLE, TENNESSEE • CENTER HILL LAKE
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] text-shadow-sm">
              Hidden Harbor Marina
            </h1>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-slate-100 font-light max-w-xl leading-relaxed">
              Boat rentals, cabins, and slips on Center Hill Lake.
            </p>

            {/* CTAs matching concept art buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={MARINA_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sand-300 hover:bg-sand-400 text-lake-950 font-bold text-base px-8 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all text-center inline-flex items-center justify-center space-x-2 focus:ring-2 focus:ring-sand-300"
              >
                <span>Book a boat</span>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </a>

              <a
                href={MARINA_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/40 font-semibold text-base px-8 py-3.5 rounded-lg backdrop-blur-md transition-all text-center focus:ring-2 focus:ring-white"
              >
                Check availability
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <TrustStrip />

      {/* HOURS CARD UNDER TRUST STRIP */}
      <section className="bg-white py-10 border-b border-cream-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream-100 rounded-2xl p-6 md:p-8 border border-cream-300 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Real Hours Image Card */}
            <div className="md:col-span-5 relative aspect-square max-w-sm mx-auto w-full rounded-xl overflow-hidden shadow-md border border-cream-300 bg-lake-950">
              <Image
                src="/hours.jpg"
                alt="Hidden Harbor Marina Hours of Operation: Sunday through Thursday 9:00 AM to 5:00 PM, Friday and Saturday 9:00 AM to 6:00 PM starting May 18th through Labor Day"
                fill
                className="object-contain"
              />
            </div>

            {/* Text Next to Hours Graphic */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center space-x-2 text-cedar-600 font-bold text-xs uppercase tracking-wider">
                <Clock className="w-4 h-4 text-sand-500" />
                <span>MARINA DOCK & STORE HOURS</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-lake-950">
                Current Hours of Operation
              </h2>

              <div className="space-y-3 text-slate-700 text-sm md:text-base">
                <div className="p-4 bg-white rounded-lg border border-cream-300 space-y-1">
                  <p className="font-bold text-lake-950 text-base">In-Season Operating Schedule (May 18 – Labor Day)</p>
                  <ul className="space-y-1 text-slate-700">
                    <li><strong>Sunday – Thursday:</strong> 9:00 AM – 5:00 PM</li>
                    <li><strong>Friday & Saturday:</strong> 9:00 AM – 6:00 PM</li>
                  </ul>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 text-cedar-600 shrink-0" />
                  <span>Standard off-season hours are daily 8:00 AM – 5:00 PM. Hours are subject to seasonal change; please call <strong>(615) 597-8800</strong> to confirm late fall/winter times.</span>
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-1.5 text-sm font-bold text-lake-950 hover:text-cedar-600 transition-colors"
                >
                  <span>View Full Contact Info & Driving Directions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOUR PHOTO CARDS SECTION - Matching concept art structure */}
      <section className="py-16 md:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cedar-600">
              EXPLORE YOUR STAY & PLAY
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-lake-950 tracking-tight mt-1">
              Find Your Center Hill Lake Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Pontoons */}
            <Link 
              href="/rentals/pontoons" 
              className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1"
            >
              <ColorBlockPlaceholder 
                title="PONTOONS" 
                category="Double-Deckers & Cruisers" 
                aspectRatio="aspect-[4/3]"
              />
              <div className="p-5 flex items-center justify-between bg-white border-t border-slate-100">
                <div>
                  <span className="font-bold text-sm tracking-wider uppercase text-lake-950 group-hover:text-cedar-600 transition-colors">
                    PONTOONS
                  </span>
                  <p className="text-xs text-slate-500 mt-0.5">Slides & Cruisers</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-cream-200 group-hover:bg-sand-300 flex items-center justify-center text-lake-950 transition-colors shrink-0 ml-2">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Card 2: Houseboats */}
            <Link 
              href="/rentals/houseboats" 
              className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1"
            >
              <ColorBlockPlaceholder 
                title="HOUSEBOATS" 
                category="Multi-Day Getaways" 
                aspectRatio="aspect-[4/3]"
              />
              <div className="p-5 flex items-center justify-between bg-white border-t border-slate-100">
                <div>
                  <span className="font-bold text-sm tracking-wider uppercase text-lake-950 group-hover:text-cedar-600 transition-colors">
                    HOUSEBOATS
                  </span>
                  <p className="text-xs text-slate-500 mt-0.5">Multi-day rentals</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-cream-200 group-hover:bg-sand-300 flex items-center justify-center text-lake-950 transition-colors shrink-0 ml-2">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Card 3: Cabins */}
            <Link 
              href="/stay/cabins" 
              className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1"
            >
              <ColorBlockPlaceholder 
                title="CABINS" 
                category="Lakeside Cabins" 
                aspectRatio="aspect-[4/3]"
              />
              <div className="p-5 flex items-center justify-between bg-white border-t border-slate-100">
                <div>
                  <span className="font-bold text-sm tracking-wider uppercase text-lake-950 group-hover:text-cedar-600 transition-colors">
                    CABINS
                  </span>
                  <p className="text-xs text-slate-500 mt-0.5">Lakeside rentals</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-cream-200 group-hover:bg-sand-300 flex items-center justify-center text-lake-950 transition-colors shrink-0 ml-2">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Card 4: Camping */}
            <Link 
              href="/stay/camping" 
              className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1"
            >
              <ColorBlockPlaceholder 
                title="CAMPING" 
                category="22 Water/Electric Sites" 
                aspectRatio="aspect-[4/3]"
              />
              <div className="p-5 flex items-center justify-between bg-white border-t border-slate-100">
                <div>
                  <span className="font-bold text-sm tracking-wider uppercase text-lake-950 group-hover:text-cedar-600 transition-colors">
                    CAMPING
                  </span>
                  <p className="text-xs text-slate-500 mt-0.5">RV & tent sites</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-cream-200 group-hover:bg-sand-300 flex items-center justify-center text-lake-950 transition-colors shrink-0 ml-2">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* WHY HIDDEN HARBOR & NEW CHAPTER SECTION */}
      <section className="py-16 md:py-24 bg-white border-y border-cream-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cedar-600">
                  OUR STORY & HERITAGE
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-lake-950 tracking-tight mt-1 leading-tight">
                  A Calm Cove on Center Hill Lake Since 1989
                </h2>
              </div>

              <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                Hidden Harbor Marina is tucked away in Casey Cove—a tranquil, sheltered arm of Center Hill Lake. For over three decades, families and boaters have made this their home base for easy access, warm hospitality, and unforgettable days on Tennessee water.
              </p>

              {/* Calm "New Chapter" Note */}
              <div className="p-6 bg-cream-100 rounded-xl border border-cream-300 space-y-3">
                <div className="flex items-center space-x-2 text-cedar-600 font-semibold text-sm">
                  <HeartHandshake className="w-5 h-5 shrink-0" />
                  <span>A Quiet New Chapter</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Following many wonderful years under the stewardship of the Leiser family, Hidden Harbor entered a new chapter in 2026 under local owner Bobby Davis. The staff who welcome you at the dock remain the exact same faces you know, and our phone number <strong>(615) 597-8800</strong> and email remain unchanged.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 text-lake-950 font-bold hover:text-cedar-600 transition-colors text-sm"
                >
                  <span>Read full history & transition story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Visual Feature: Real Logo & Aerial Overview */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-md border border-cream-300 bg-lake-950">
                <Image
                  src="/banner.png"
                  alt="Aerial overview of Hidden Harbor Marina on Center Hill Lake"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-5 bg-cream-100 rounded-xl border border-cream-300 text-center space-y-2">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto border border-sand-300 bg-cream-50">
                  <Image
                    src="/logo.jpg"
                    alt="Hidden Harbor Marina Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-serif font-bold text-lake-950 text-base">Center Hill Lake • Smithville, TN</p>
                <p className="text-xs text-slate-500">2685 Casey Cove Rd • (615) 597-8800</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS QUOTES */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cedar-600">
              GUEST REVIEWS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-lake-950 tracking-tight mt-1">
              Rated 4.8 / 5.0 from ~280 Reviews
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Here is what lake visitors say about their time at Hidden Harbor Marina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOMEPAGE_REVIEWS.map((review, idx) => (
              <div 
                key={idx}
                className="bg-white p-7 rounded-xl border border-cream-300 shadow-card flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-lake-950">{review.author}</span>
                  <span className="text-slate-400">{review.source}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={MARINA_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm font-bold text-lake-900 hover:text-cedar-600 transition-colors"
            >
              <span>Read all ~280 Google reviews</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* MAP / DIRECTIONS TEASER */}
      <section className="py-16 md:py-24 bg-white border-t border-cream-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cedar-600">
                  CONVENIENT LOCATION
                </span>
                <h2 className="font-serif text-3xl font-bold text-lake-950 tracking-tight mt-1">
                  Getting to Casey Cove
                </h2>
              </div>

              <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-cedar-600 shrink-0 mt-1" />
                  <span>
                    <strong>Hidden Harbor Marina</strong><br />
                    2685 Casey Cove Rd, Smithville, TN 37166
                  </span>
                </p>
                <p>
                  Located just 60 miles east of Nashville on beautiful Center Hill Lake. Easy highway access via I-40 East and TN-56 South.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-lake-900 hover:bg-lake-800 text-white font-semibold px-6 py-3 rounded-md text-sm transition-colors text-center"
                >
                  View Driving Directions
                </Link>
                <Link
                  href="/the-lake"
                  className="border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold px-6 py-3 rounded-md text-sm transition-colors text-center"
                >
                  Center Hill Day Guide
                </Link>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="lg:col-span-7 h-[360px] rounded-xl overflow-hidden shadow-card border border-cream-300">
              <iframe
                title="Hidden Harbor Marina Google Map Location"
                src="https://maps.google.com/maps?q=Hidden%20Harbor%20Marina%202685%20Casey%20Cove%20Rd%20Smithville%20TN%2037166&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </section>

      {/* HOMEPAGE FAQ */}
      <FaqSection items={homeFaqs} />

      {/* FINAL CTA SECTION */}
      <section className="bg-lake-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Ready to Get Out on the Lake?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Reserve your pontoon, houseboat, or cabin online, or call our dock team for current boat slip availability.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={MARINA_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sand-300 hover:bg-sand-400 text-lake-950 font-bold px-8 py-3.5 rounded-lg text-base transition-all inline-flex items-center space-x-2"
            >
              <span>Book Your Reservation</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={`tel:${MARINA_INFO.phoneRaw}`}
              className="bg-lake-800 hover:bg-lake-700 border border-slate-700 text-white font-semibold px-8 py-3.5 rounded-lg text-base transition-all"
            >
              Call (615) 597-8800
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
