'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title?: string;
  subtitle?: string;
  items: FaqItem[];
  id?: string;
}

export default function FaqSection({ 
  title = "Frequently Asked Questions", 
  subtitle = "Everything you need to know before visiting Hidden Harbor Marina on Center Hill Lake.",
  items,
  id = "faq"
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured Data JSON-LD for FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section id={id} className="py-16 md:py-24 bg-cream-100 border-t border-cream-300">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-lake-950 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-cream-300 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between font-semibold text-lake-950 hover:text-cedar-600 transition-colors focus:outline-none focus:ring-2 focus:ring-sand-300"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 text-base md:text-lg">{item.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-sand-500' : ''}`} />
                </button>
                
                {isOpen && (
                  <div className="px-5 pb-6 md:px-6 text-slate-700 text-sm md:text-base leading-relaxed border-t border-slate-100 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
