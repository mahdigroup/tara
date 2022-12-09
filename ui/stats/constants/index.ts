import { sub } from 'date-fns';

import type { StatsSectionIds, StatsIntervalIds } from 'types/client/stats';

export const STATS_SECTIONS: { [key in StatsSectionIds]?: string } = {
  all: 'All stats',
  accounts: 'Accounts',
  blocks: 'Blocks',
  transactions: 'Transactions',
  gas: 'Gas',
};

export const STATS_INTERVALS: { [key in StatsIntervalIds]: { title: string; start?: Date } } = {
  all: {
    title: 'All time',
  },
  oneMonth: {
    title: '1 month',
    start: getStartDateInPast(1),
  },
  threeMonths: {
    title: '3 months',
    start: getStartDateInPast(3),
  },
  sixMonths: {
    title: '6 months',
    start: getStartDateInPast(6),
  },
  oneYear: {
    title: '1 year',
    start: getStartDateInPast(12),
  },
};

function getStartDateInPast(months: number): Date {
  return sub(new Date(), { months });
}
