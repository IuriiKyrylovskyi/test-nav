import { INavItem } from '@/interfaces/navItems';
import defineLimits from '../defineLimits';
import { frequencyGap } from '@/utils/constants';

const decreaseFrequency = (items: INavItem[]) => {
  return items.map((el) =>
    el.isActive && defineLimits(el.frequency, 'des')
      ? (el.frequency -= frequencyGap)
      : el
  );
};

export default decreaseFrequency;
