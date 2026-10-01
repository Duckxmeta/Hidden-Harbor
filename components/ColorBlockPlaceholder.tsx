import React from 'react';
import { Camera } from 'lucide-react';

interface ColorBlockPlaceholderProps {
  title: string;
  category?: string;
  aspectRatio?: string;
}

export default function ColorBlockPlaceholder({ 
  title, 
  category = "Photo Needed",
  aspectRatio = "aspect-[16/10]" 
}: ColorBlockPlaceholderProps) {
  return (
    <div className={`relative w-full ${aspectRatio} bg-gradient-to-br from-lake-950 via-lake-900 to-cedar-700 flex flex-col items-center justify-center p-6 text-center text-white overflow-hidden rounded-lg border border-lake-800`}>
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d9be9b_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="relative z-10 space-y-2">
        <div className="w-10 h-10 rounded-full bg-sand-300/20 text-sand-300 flex items-center justify-center mx-auto border border-sand-300/40">
          <Camera className="w-5 h-5" />
        </div>
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-sand-300 block">
          {category}
        </span>
        <h3 className="font-serif text-lg md:text-xl font-bold text-white tracking-tight">
          {title}
        </h3>
      </div>
    </div>
  );
}
