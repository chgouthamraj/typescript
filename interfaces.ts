let obj: {
  name: string;
  lastName: string;
  age: number;
  isActive: boolean;
} = {
  name: 'raj',
  lastName: 'jelkm',
  age: 18,
  isActive: true,
};

//we can define a type and assign it to a paticular value with interfaces.

interface Person {
  name: string;
  lastName: string;
  age: number;
  isActive: boolean;
}

let objs2: Person = {
  name: 'jeklk',
  lastName: 'ggg',
  age: 20,
  isActive: false,
};


