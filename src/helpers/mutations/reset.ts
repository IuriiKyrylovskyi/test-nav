import { IStoreState } from '@/store';
import { minFrequency } from '@/utils/constants';

const reset = (state: IStoreState) => {
  state.entered = 0;
  return state.navItems.map((el) =>
    el.isActive ? (el.frequency = minFrequency) : el
  );
};

export default reset;
