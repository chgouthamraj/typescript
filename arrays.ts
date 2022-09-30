//array declaration in typescript
let arrayOfString: string[] = ['a', 'b', 'c'];
let arrayOfBoolean: boolean[] = [true, false, true];
let arrayValues: number[] = [1, 2, 3, 5];

//for array of objects
let arrayOfObjects: { name: string; age: number; isActive: boolean }[] = [];
arrayOfObjects.push({
  name: 'raj',
  age: 20,
  isActive: true,
});

//for array of arrays
let arrayOfArrays: string[][] = [
  ['a', 'b', 'c'],
  ['a', 'c'],
];
