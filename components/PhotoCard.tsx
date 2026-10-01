import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface PhotoCardProps {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  subtitle?: string;
}

export default function PhotoCard({ title, href, imageSrc, imageAlt, subtitle }: PhotoCardProps) {
  return (
    <Link 
      href={href} 
      className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-sand-300"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-lake-900">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>
      
      <div className="p-5 flex items-center justify-between bg-white border-t border-slate-100">
        <div>
          <span className="font-bold text-sm tracking-wider uppercase text-lake-950 group-hover:text-cedar-600 transition-colors">
            {title}
          </span>
          {subtitle && (
            <p className="text-xs text-slate-500 mt-0.5 font-sans">{subtitle}</p>
          )}
        </div>
        <div className="w-8 h-8 rounded-full bg-cream-200 group-hover:bg-sand-300 flex items-center justify-center text-lake-950 transition-colors shrink-0 ml-2">
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}
