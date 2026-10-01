import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TrustStrip from '@/components/TrustStrip';
import PhotoCard from '@/components/PhotoCard';
import FaqSection from '@/components/FaqSection';
import { MARINA_INFO, HOMEPAGE_REVIEWS } from '@/lib/siteData';
import { Star, MapPin, ArrowRight, ExternalLink, Anchor, ShieldCheck, HeartHandshake } from 'lucide-react';

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
      
      {/* HERO SECTION - Matching concept art concept art (concepthhm.jpg) */}
      <section className="relative min-h-[85vh] flex items-end md:items-center justify-start overflow-hidden bg-lake-950 pb-16 md:pb-0">
        
        {/* Full Bleed Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2000&auto=format&fit=crop"
            alt="Pontoons docked on Center Hill Lake pier at Hidden Harbor Marina"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Subtle gradient overlay to ensure text readability matching art */}
          <div className="absolute inset-0 bg-gradient-to-r from-lake-950/80 via-lake-950/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-lake-950/90 via-transparent to-lake-950/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16 md:py-32">
          <div className="max-w-2xl">
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

      {/* FOUR PHOTO CARDS SECTION - Matching concept art grid */}
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
            <PhotoCard
              title="PONTOONS"
              subtitle="Double-deckers with slides & classic cruisers"
              href="/rentals/pontoons"
              imageSrc="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=800&auto=format&fit=crop"
              imageAlt="Pontoon boat on Center Hill Lake"
            />
            <PhotoCard
              title="HOUSEBOATS"
              subtitle="Multi-day lake getaways with full amenities"
              href="/rentals/houseboats"
              imageSrc="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop"
              imageAlt="Houseboat cruising calm lake water"
            />
            <PhotoCard
              title="CABINS"
              subtitle="Lakeside rustic & modern cabin rentals"
              href="/stay/cabins"
              imageSrc="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop"
              imageAlt="Wooden cabin nestled in green forest near lake"
            />
            <PhotoCard
              title="CAMPING"
              subtitle="22 water/electric RV sites & rustic spots"
              href="/stay/camping"
              imageSrc="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800&auto=format&fit=crop"
              imageAlt="Tent camping setup near water at sunset"
            />
          </div>
        </div>
      </section>

      {/* WHY HIDDEN HARBOR & NEW CHAPTER SECTION */}
      <section className="py-16 md:py-24 bg-white border-y border-cream-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
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

            {/* Visual Feature Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop"
                  alt="Center Hill Lake serene waters"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-md mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop"
                  alt="Docked boats at Hidden Harbor Marina"
                  fill
                  className="object-cover"
                />
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
