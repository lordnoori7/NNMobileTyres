/**
 * Price list data for /prices.
 *
 * INTENTIONALLY EMPTY. We do not publish prices we have not been given by the
 * owner, and a made-up price table on a live commercial page is worse than no
 * table at all — it sets an expectation the business then has to honour or
 * argue with the customer about.
 *
 * The /prices page renders the "how our pricing works" explainer when this
 * array is empty, and automatically renders a price table instead as soon as
 * real rows are added here. Nothing else needs to change.
 */

export interface PriceRow {
  /** e.g. "205/55 R16" or "Puncture repair". */
  item: string;
  /** Optional grouping, e.g. "Tyre fitting" or "Call-out services". */
  category?: string;
  /** Price as it should be displayed, e.g. "£65" or "From £45". */
  price: string;
  /** Optional clarifier shown under the item, e.g. "budget tier, fitted". */
  note?: string;
}

// TODO owner: real price table.
// Drop the real figures in here, one object per line, and the table on
// /prices appears automatically. Example shape (these are NOT real prices,
// they only show the format):
//
//   { category: 'Puncture repair', item: 'Car tyre puncture repair', price: '£00', note: 'includes new valve and rebalance' },
//   { category: 'Tyre fitting',    item: '205/55 R16 budget',        price: '£00', note: 'fitted, balanced, old tyre taken away' },
//
export const prices: PriceRow[] = [];

/** Grouped view of `prices`, in first-seen category order. */
export function getPricesByCategory(): { category: string; rows: PriceRow[] }[] {
  const groups: { category: string; rows: PriceRow[] }[] = [];
  for (const row of prices) {
    const category = row.category ?? 'Prices';
    const existing = groups.find(g => g.category === category);
    if (existing) existing.rows.push(row);
    else groups.push({ category, rows: [row] });
  }
  return groups;
}
