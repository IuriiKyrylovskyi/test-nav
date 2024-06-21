import { INavItem } from '@/interfaces/navItems';
import defineLimits from '../defineLimits';
import { frequencyGap } from '@/utils/constants';

const increaseFrequency = (items: INavItem[]) => {
  return items.map((el) =>
    el.isActive && defineLimits(el.frequency, 'asc')
      ? (el.frequency += frequencyGap)
      : el
  );
};

export default increaseFrequency;
