type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...arg: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  y = y || 0;
  if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + y;
  return x + y;
};

console.log(adder(1, 2, 3, 4));
