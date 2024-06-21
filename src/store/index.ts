import defineLimits from '@/helpers/defineLimits';
import { INavItem } from '@/interfaces/navItems';
import navItems from '@/utils/navItems';
import { frequencyGap } from 'src/utils/constants';
import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

export const key: InjectionKey<Store<INavItem[]>> = Symbol();
export const store = createStore<INavItem[]>({
  state: navItems,
  mutations: {
    increaseFrequency(state: INavItem[]) {
      return state.map((el) =>
        el.isActive && defineLimits(el.frequency, 'asc')
          ? (el.frequency += frequencyGap)
          : el
      );
    },
    decreaseFrequency(state: INavItem[]) {
      return state.map((el) =>
        el.isActive && defineLimits(el.frequency, 'des')
          ? (el.frequency -= frequencyGap)
          : el
      );
    },
    toggleActiveFreq(state: INavItem[]) {
      return state.map((el) =>
        el.isActive ? (el.isActive = false) : (el.isActive = true)
      );
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
