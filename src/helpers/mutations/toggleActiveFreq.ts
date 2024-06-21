import { IStoreState } from '@/store';

const toggleActiveFreq = (state: IStoreState) => {
  state.entered = 0;

  return state.navItems.map((el) =>
    el.isActive ? (el.isActive = false) : (el.isActive = true)
  );
};

export default toggleActiveFreq;
