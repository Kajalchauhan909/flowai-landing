'use client';
  import { useState } from 'react';
  import { pricingStore } from '@/lib/pricingStore';

  export default function PricingToggle() {
    const [billing, setBilling] = useState('monthly'); // local UI state only — fine, it's this component's own concern
    const [currency, setCurrency] = useState('USD');

    return (
      <div className="flex gap-4 items-center">
        <select
          value={currency}
          onChange={(e) => { setCurrency(e.target.value); pricingStore.set({ currency: e.target.value }); }}
          aria-label="Select currency"
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </select>

        <button
          onClick={() => { const next = billing === 'monthly' ? 'annual' : 'monthly'; setBilling(next); pricingStore.set({ billing: next }); }}
          aria-pressed={billing === 'annual'}
        >
          {billing === 'monthly' ? 'Switch to Annual (save 20%)' : 'Switch to Monthly'}
        </button>
      </div>
    );
  }