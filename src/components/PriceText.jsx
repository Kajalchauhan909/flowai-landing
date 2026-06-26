'use client';
  import { useEffect, useRef } from 'react';
  import { pricingStore } from '@/lib/pricingStore';
  import { computePrice } from '@/lib/pricingMatrix';

  export default function PriceText({ tierKey }) {
    const ref = useRef(null);

    useEffect(() => {
      ref.current.textContent = computePrice(tierKey, pricingStore.get());
      return pricingStore.subscribe((state) => {
        ref.current.textContent = computePrice(tierKey, state); // direct DOM write — bypasses React render
      });
    }, [tierKey]);

    return <span ref={ref} className="price-text font-heading text-3xl" />;
  }