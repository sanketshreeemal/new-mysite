'use client';

import React from 'react';

const collageItems = [
  {
    id: 1,
    color: '#D97757', // Clay / Terracotta
    left: '-2%', // Cut off from left edge
    top: '18%', // Adjusted for height increase
    width: '20%', // Adjusted width for cut off
    height: '30%', // +20% visually
    zIndex: 10,
  },
  {
    id: 2,
    color: '#6B705C', // Olive Green
    left: '12%',
    top: '60%',
    width: '8%',
    height: '30%',
    zIndex: 20,
  },
  {
    id: 3,
    color: '#D4A373', // Gold / Muted Yellow
    left: '24%',
    top: '34%',
    width: '14%',
    height: '18%',
    zIndex: 10,
  },
  {
    id: 4,
    color: '#4A6670', // Teal / Slate
    left: '26%',
    top: '64%',
    width: '12%',
    height: '36%',
    zIndex: 20,
  },
  {
    id: 5,
    color: '#C1A57B', // Sand / Khaki
    left: '43%',
    top: '26%',
    width: '18%',
    height: '60%',
    zIndex: 30,
  },
  {
    id: 6,
    color: '#2D3142', // Charcoal / Navy
    left: '66%',
    top: '21%',
    width: '10%',
    height: '46%',
    zIndex: 20,
  },
  {
    id: 7,
    color: '#6D597A', // Muted Purple
    left: '80%',
    top: '58%',
    width: '20%',
    height: '38%',
    zIndex: 10,
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
            className="absolute rounded-[4px] border-[0.5px] bg-white/85"
            style={{
              left: item.left,
              top: item.top,
              width: item.width,
              height: item.height,
              zIndex: item.zIndex,
              borderColor: item.color,
            }}
          >
            {/* Empty container as requested - no gradients, just the unified card look */}
          </div>
        ))}
      </div>
    </section>
  );
}
