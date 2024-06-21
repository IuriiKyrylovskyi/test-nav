import { INavItem } from '@/interfaces/navItems';
import { maxFrequency, minFrequency } from './constants';

const navItems: INavItem[] = [
  {
    id: 1,
    frequency: minFrequency,
    isActive: true,
  },
  {
    id: 2,
    frequency: maxFrequency,
  },
];

export default navItems;
