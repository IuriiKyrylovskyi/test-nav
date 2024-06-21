import { IStoreState } from '@/store';

const removeDigit = (state: IStoreState) => {
  if (!state.entered) return;

  const digits = Array.from(state.entered.toString());

  if (!digits.length) return;

  state.entered = +state.entered.toString().substring(0, digits.length - 1);
};

export default removeDigit;
