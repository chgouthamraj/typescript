//built-in types
let weight: number = 180;

let age = 24;
//type string
let myname: string = 'leo';

//type boolean
let isChecked: boolean;
isChecked = true;

//type inference and assignment
// if we assign anything to the variable then typescript will know its type and infer it.
let height = 120;
let height2: number = 140;

//if we dont assign any value while declaring a value then typescript will not no its type and it will not infer it.
let value;
value = 100;
value = 'hello';
value = [];

// to assign multiple types
let amount: number | string = 'hello world';
