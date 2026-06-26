'use client';
  import { useState, useEffect } from 'react';
  import { FEATURES } from '@/lib/features';

  export default function FeatureGrid() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const mq = window.matchMedia('(max-width: 768px)');
      const handler = (e) => setIsMobile(e.matches);
      handler(mq);
      mq.addEventListener('change', handler);
      return () => mq.removeEventListener('change', handler);
    }, []);

    return (
      <div className={isMobile ? 'accordion-list' : 'bento-grid'}>
        {FEATURES.map((item, i) => (
          <div
            key={item.id}
            onMouseEnter={() => !isMobile && setActiveIndex(i)}
            onMouseLeave={() => !isMobile && setActiveIndex(null)}
            onClick={() => isMobile && setActiveIndex(activeIndex === i ? null : i)}
            className={`feature-node ${activeIndex === i ? 'is-active' : ''}`}
          >
            <h3 className="font-heading text-lg">{item.title}</h3>
            <div className="panel">
              <p className="text-sm opacity-80 pb-4">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }