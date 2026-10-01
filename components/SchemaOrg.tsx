import React from 'react';
import { MARINA_INFO } from '@/lib/siteData';

export default function SchemaOrg() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Marinas",
        "@id": "https://hiddenharbormarina.stellarims.com/#marina",
        "name": MARINA_INFO.name,
        "description": "Hidden Harbor Marina on Center Hill Lake provides pontoon, houseboat, deck boat, and fishing boat rentals, rustic and luxury cabin rentals, campsites, covered boat slips, fuel dock, and ship store in Smithville, Tennessee.",
        "url": "https://hiddenharbormarina.stellarims.com",
        "telephone": MARINA_INFO.phone,
        "email": MARINA_INFO.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": MARINA_INFO.streetAddress,
          "addressLocality": MARINA_INFO.addressLocality,
          "addressRegion": MARINA_INFO.addressRegion,
          "postalCode": MARINA_INFO.postalCode,
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": MARINA_INFO.geo.latitude,
          "longitude": MARINA_INFO.geo.longitude
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "08:00",
            "closes": "17:00"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": MARINA_INFO.googleRating,
          "reviewCount": MARINA_INFO.googleReviewCount
        },
        "priceRange": "$$"
      },
      {
        "@type": "LodgingBusiness",
        "@id": "https://hiddenharbormarina.stellarims.com/#lodging",
        "name": "Hidden Harbor Marina Cabins & Camping",
        "description": "Lakeside cabin rentals and 22 water/electric campsites on Center Hill Lake at Hidden Harbor Marina.",
        "telephone": MARINA_INFO.phone,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": MARINA_INFO.streetAddress,
          "addressLocality": MARINA_INFO.addressLocality,
          "addressRegion": MARINA_INFO.addressRegion,
          "postalCode": MARINA_INFO.postalCode,
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": MARINA_INFO.geo.latitude,
          "longitude": MARINA_INFO.geo.longitude
        },
        "checkinTime": "15:00",
        "checkoutTime": "10:00"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
