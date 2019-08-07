// Part 1:
//  - What will print and why?
//    A: 1, 2, undefined, because each definition 
//    of a exists only in its respective function.
//
//  - What will change if we delete line 5? Why?
//    A: Nothing??

// Part 2:
// - change to ES6 syntax

// Part 3:
// - modify so that it prints 1, 2, 2 in that order. Console.logs must stay in place.

const x = () => {
  const a = 2;
  console.log(a);
}

const y = () => {
  const a = 2;
  console.log(a);
  x();
}

const a = 1;
console.log(a);
y();