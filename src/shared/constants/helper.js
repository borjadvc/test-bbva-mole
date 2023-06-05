export const ButtonTypes = {
  default: { class: 'button--view' },
};

const Size = {
  S: 'S',
  M: 'M',
  L: 'L',
};

const SizeMap = {};
SizeMap[Size.S] = 'small-size';
SizeMap[Size.M] = 'medium-size';
SizeMap[Size.L] = 'long-size';

export { SizeMap, Size };
