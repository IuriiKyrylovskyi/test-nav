import { minLengthForDot } from '@/utils/constants';

const insertDot = (n: number) => {
  if (n.toString().length <= minLengthForDot) return n;

  const position = 3;
  return [
    n.toString().slice(0, position),
    '.',
    n.toString().slice(position),
  ].join('');
};

export default insertDot;
