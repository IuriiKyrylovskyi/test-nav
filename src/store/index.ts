import decreaseFrequency from '@/helpers/mutations/decreaseFrequency';
import enter from '@/helpers/mutations/enter';
import enterDigit from '@/helpers/mutations/enterDigit';
import increaseFrequency from '@/helpers/mutations/increaseFrequency';
import removeDigit from '@/helpers/mutations/removeDigit';
import reset from '@/helpers/mutations/reset';
import toggleActiveFreq from '@/helpers/mutations/toggleActiveFreq';
import { INavItem } from '@/interfaces/navItems';
import navItems from '@/utils/navItems';
import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

export const key: InjectionKey<Store<INavItem[]>> = Symbol();

export interface IStoreState {
  entered: number;
  navItems: INavItem[];
}

const initState: IStoreState = {
  entered: 0,
  navItems: navItems,
};

export const store = createStore<IStoreState>({
  state: initState,
  mutations: {
    increaseFrequency(state: IStoreState) {
      return increaseFrequency(state.navItems);
    },
    decreaseFrequency(state: IStoreState) {
      return decreaseFrequency(state.navItems);
    },
    toggleActiveFreq(state: IStoreState) {
      return toggleActiveFreq(state);
    },
    enter(state: IStoreState, val: number) {
      return enter(state, val);
    },
    enterDigit(state: IStoreState, val: number) {
      return enterDigit(state, val);
    },
    removeDigit(state: IStoreState) {
      return removeDigit(state);
    },
    reset(state: IStoreState) {
      return reset(state);
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
