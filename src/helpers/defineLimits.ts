import { maxFrequency, minFrequency } from '@/utils/constants';

type Order = 'asc' | 'des';

const defineLimits = (freq: number, order: Order) => {
  return (
    (freq > minFrequency && order === 'des') ||
    (freq < maxFrequency && order === 'asc')
  );
};

export default defineLimits;
