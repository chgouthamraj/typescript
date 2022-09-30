const add = (n1: number, n2: number): number => {
  return n1 + n2;
};

//never let typescript to infer(decide) what we want we need to declare it so that we never retun a wrong type

const compare = (n1: number, n2: number): boolean => {
  return n1 > n2;
};

//if we dont have a return type then we need to menntion void

const printValue = (): void => {
  console.log('hello');
};
