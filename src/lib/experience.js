/**
 * Dynamic Experience Calculator
 * Automatically calculates experience duration based on the current calendar date.
 */

export function getFullTimeMonths(now = new Date()) {
  const startYear = 2026;
  const startMonth = 6; // July (0-indexed: 6)
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const months = (currentYear - startYear) * 12 + (currentMonth - startMonth) + 1;
  return Math.max(1, months);
}

export function getTestrigInternshipMonths() {
  return 6; // Jan 2026 – June 2026 (6 months)
}

export function getShoratInternshipMonths() {
  return 2; // Jan 2025 – Feb 2025 (2 months)
}

export function getTotalExperienceMonths(now = new Date()) {
  return getShoratInternshipMonths() + getTestrigInternshipMonths() + getFullTimeMonths(now);
}

export function formatDuration(months) {
  if (months < 12) {
    return `${months} ${months === 1 ? 'month' : 'months'}`;
  }
  const years = Math.floor(months / 12);
  const remMonths = months % 12;
  if (remMonths === 0) {
    return `${years} ${years === 1 ? 'year' : 'years'}`;
  }
  return `${years} ${years === 1 ? 'year' : 'years'} ${remMonths} ${remMonths === 1 ? 'month' : 'months'}`;
}
