'use client';

import React from 'react';
import Image from 'next/image';

const collageItems = [
  {
    id: 1,
    color: '#D97757', // Clay / Terracotta
    left: '-2%', // Cut off from left edge
    top: '18%', // Adjusted for height increase
    width: '20%', // Adjusted width for cut off
    height: '30%', // +20% visually
    zIndex: 10,
    imageUrl: '/images/scene.jpg',
  },
  {
    id: 2,
    color: '#6B705C', // Olive Green
    left: '8%',
    top: '57%',
    width: '10%',
    height: '38%',
    zIndex: 20,
    imageUrl: '/images/fountian-port.jpg',
  },
  {
    id: 3,
    color: '#D4A373', // Gold / Muted Yellow
    left: '24%',
    top: '28%',
    width: '14%',
    height: '22%',
    zIndex: 10,
    imageUrl: '/images/grass-landscape.jpg',
  },
  {
    id: 4,
    color: '#4A6670', // Teal / Slate
    left: '26%',
    top: '64%',
    width: '12%',
    height: '36%',
    zIndex: 20,
    imageUrl: '/images/mountain-port.jpg',
  },
  {
    id: 5,
    color: '#C1A57B', // Sand / Khaki
    left: '43%',
    top: '26%',
    width: '18%',
    height: '60%',
    zIndex: 30,
    imageUrl: '/images/sanket.jpg',
  },
  {
    id: 6,
    color: '#2D3142', // Charcoal / Navy
    left: '66%',
    top: '21%',
    width: '10%',
    height: '46%',
    zIndex: 20,
    imageUrl: '/images/horses-port.jpg',
  },
  {
    id: 7,
    color: '#D4A373', // Gold / Muted Yellow
    left: '82%',
    top: '29%',
    width: '14%',
    height: '28%',
    zIndex: 10,
    imageUrl: '/images/sunset-land.jpg',
  },
  {
    id: 8,
    color: '#6D597A', // Muted Purple
    left: '80%',
    top: '65%',
    width: '20%',
    height: '38%',
    zIndex: 10,
    imageUrl: '/images/river-land.jpg',
  },
];

export default function Collage() {
  return (
    <section className="relative w-[100vw] left-1/2 -translate-x-1/2 mt-16 md:mt-12 lg:mt-10 xl:mt-6 2xl:mt-2 overflow-hidden bg-transparent">
      {/* 
        The aspect ratio determines the fluid scaling of the entire canvas. 
        Instead of stacking on mobile, it just shrinks down perfectly.
      */}
      <div className="relative w-full aspect-[16/10] md:aspect-[24/10] lg:aspect-[28/10] max-w-[1600px] mx-auto">
        {collageItems.map((item) => (
          <div
            key={item.id}
            className="absolute rounded-[4px] border-[0.5px] bg-white/85 overflow-hidden"
            style={{
              left: item.left,
              top: item.top,
              width: item.width,
              height: item.height,
              zIndex: item.zIndex,
              borderColor: item.color,
            }}
          >
            {item.imageUrl ? (
              <Image
                src={item.imageUrl}
                alt={`Collage image ${item.id}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
