const insertDot = (n: number) => {
  const position = 3;
  return [
    n.toString().slice(0, position),
    '.',
    n.toString().slice(position),
  ].join('');
};

export default insertDot;
