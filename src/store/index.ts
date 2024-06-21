import { frequencyGap, maxFrequency, minFrequency } from 'src/utils/constants';
import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

export interface IFreqState {
  prevFrequency: number;
  nextFrequency: number;
  isPrevActive: boolean;
}

const initFreqState = {
  prevFrequency: minFrequency,
  nextFrequency: maxFrequency,
  isPrevActive: true,
};

export const key: InjectionKey<Store<IFreqState>> = Symbol();

export const store = createStore<IFreqState>({
  state: initFreqState,
  mutations: {
    increaseFrequency(state: IFreqState, isSecond: boolean) {
      return isSecond
        ? (state.nextFrequency += frequencyGap)
        : (state.prevFrequency += frequencyGap);
    },
    decreaseFrequency(state: IFreqState, isSecond: boolean) {
      return isSecond
        ? (state.nextFrequency -= frequencyGap)
        : (state.prevFrequency -= frequencyGap);
    },
    toggleIsFirstActive(state: IFreqState) {
      state.isPrevActive = !state.isPrevActive;
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
