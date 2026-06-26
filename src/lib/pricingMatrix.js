export const MATRIX = {
    starter:    { base: 29,  tariff: { USD: 1, INR: 78.5, EUR: 0.93 } },
    pro:        { base: 79,  tariff: { USD: 1, INR: 78.5, EUR: 0.93 } },
    enterprise: { base: 199, tariff: { USD: 1, INR: 78.5, EUR: 0.93 } },
  };
  const ANNUAL_DISCOUNT = 0.8;
  const SYMBOL = { USD: '$', INR: '₹', EUR: '€' };

  export function computePrice(tierKey, { currency, billing }) {
    const tier = MATRIX[tierKey];
    const localized = tier.base * tier.tariff[currency];
    const final = billing === 'annual' ? localized * 12 * ANNUAL_DISCOUNT : localized;
    return `${SYMBOL[currency]}${final.toFixed(2)}${billing === 'annual' ? '/yr' : '/mo'}`;
  }
  