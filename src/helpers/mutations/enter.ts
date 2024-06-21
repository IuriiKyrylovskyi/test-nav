import defineLimits from '../defineLimits';
import { defaultFreqLength, minFrequency } from '@/utils/constants';
import { IStoreState } from '@/store';

const enter = (state: IStoreState, val: number) => {
  if (val.toString().length !== defaultFreqLength) return;

  state.entered = 0;

  return state.navItems.map((el) =>
    el.isActive
      ? defineLimits(val, 'asc') && defineLimits(val, 'des')
        ? (el.frequency = val)
        : (el.frequency = minFrequency)
      : el
  );
};

export default enter;
