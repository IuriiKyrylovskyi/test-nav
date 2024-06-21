import { IStoreState } from '@/store';
import { defaultFreqLength } from '@/utils/constants';

const enterDigit = (state: IStoreState, val: number) => {
  if (state.entered.toString().length >= defaultFreqLength) return;

  state.entered = +(state.entered.toString() + val);
};

export default enterDigit;
