//if we assign values type script will infer
let obj = {
  name: 'raj',
  age: 28,
  address: 'uppal',
  isActive: true,
};

//assign types to object and assign values
let obj2: {
  name: string;
  age: number;
  address: string;
  isActive: boolean;
} = {
  name: 'raj',
  age: 28,
  address: 'uppal',
  isActive: false,
};

obj2.age = 100;

obj.address.length;
