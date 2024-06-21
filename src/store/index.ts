import defineLimits from '@/helpers/defineLimits';
import { INavItem } from '@/interfaces/navItems';
import navItems from '@/utils/navItems';
import { frequencyGap, minFrequency } from 'src/utils/constants';
import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

export const key: InjectionKey<Store<INavItem[]>> = Symbol();
interface IStoreState {
  entered: number;
  navItems: INavItem[];
}

const initState: IStoreState = {
  entered: minFrequency,
  navItems: navItems,
};

export const store = createStore<IStoreState>({
  state: initState,
  mutations: {
    increaseFrequency(state: IStoreState) {
      return state.navItems.map((el) =>
        el.isActive && defineLimits(el.frequency, 'asc')
          ? (el.frequency += frequencyGap)
          : el
      );
    },
    decreaseFrequency(state: IStoreState) {
      return state.navItems.map((el) =>
        el.isActive && defineLimits(el.frequency, 'des')
          ? (el.frequency -= frequencyGap)
          : el
      );
    },
    toggleActiveFreq(state: IStoreState) {
      return state.navItems.map((el) =>
        el.isActive ? (el.isActive = false) : (el.isActive = true)
      );
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
