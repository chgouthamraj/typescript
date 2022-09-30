//union types :it specifies that a type can be anything which is specificed example:number os string

//union type
let value: number | string = 'raj';
value = 5;

//null,undefined,boolean

let values: null | undefined | boolean;

//unios types with array
let array: (string | number)[];

let obj: {
  hello: number | string;
};

//literal types(how assign only a paticular value.we can assign only that paticular value to that variable)
let amountValue: 'raj' = 'raj';
let number: 5 = 5;

let names: 'raj' | 'hello' | 'some' = 'hello';
names = 'raj';

//enums allow us to declare a set of named constants i.e. a collection of related values that can be numeric or string values

enum RainbowTypes {
  RED,
  ORANGE,
  BLUE,
  YELLOW,
}
//to access a value of enum and assign it to a variable
let rainbowColour: RainbowTypes = RainbowTypes.RED;

let objs: {
  property: string;
  //to keep anything optional we have a question mark in front of it
  property2?: string | number;
} = {
  property: 'hello',
};
