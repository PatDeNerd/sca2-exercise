const assert = require("assert");

// Feel free to look things up online!

const reverse = function(str) {
  // TODO - write a function which reverses the string
  let rev = "";
  for(let i = str.length - 1; i > -1; i--) {
    rev += str[i];
  }
  return rev;
}

const factorial = function(num) {
  // TODO - write a function which returns the factorial of a positive integer
  // For example, 5! = 5 * 4 * 3 * 2 * 1 = 120
  let fact = 1;
  for(let i = num; i > 1; i--) {
    fact *= i;
  }
  return fact;
}

const announceDate = function() {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
  const d = new Date();
  const month = d.getMonth() + 1;
  const day = d.getDay();
  const year = d.getFullYear();
  const hour = d.getHours();
  const minute = d.getMinutes();
  if(hour < 12) {
    return "Today's date is " + month + "/" + day + "/" + year + ". It is " + hour + ":" + minute + " in the morning.";
  }
  else {
    return "Today's date is " + month + "/" + day + "/" + year + ". It is " + (hour - 12) + ":" + minute + " PM.";
  }
}

const shiftRight = function(str, num) {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
  let string = "";

  for(let i = 0; i < str.length; i++) {
    string += str[(num - 1 + i) % str.length];
  }

  return string;
}

const tokenize = function(str) {
  // TODO - write a function which converts a multi-word string into an array of words
  return str.split(" ");
}

const uniqueOnes = function(ary) {
  // TODO - write a funcion which returns the inputted array without duplicate elements
  for(let i = 0; i < ary.length; i++) 
  {
      for(let j = i + 1; j < ary.length; j++) 
      {
          if(ary[i] === ary[j])
          {
            ary.splice(j, 1);
            j--;
          }
      }
  }

  return ary;

}

const zip = function(arr1, arr2) {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
  if(!(arr1.length === arr2.length)) {
    return -1;
  }

  else {
    let matrix = [];
    
    for(let i = 0; i < arr1.length; i++) {
      matrix.push( [ arr1[i], arr2[i] ] );
    }

    return matrix;
  }
}

const unzip = function(arr) {
  // TODO - Write a function which does the opposite of `zip()`
  arr1 = [];
  arr2 = [];

  for(let i = 0; i < arr.length; i++) {
    arr1.push(arr[i][0]);
    arr2.push(arr[i][1]);
  }

  return [arr1, arr2];
}

// Write tests here:

assert(1 < 2);
assert(1 + 2 == 3);
assert([2, 3][0] === 2);
assert(reverse("3df") === "fd3");
assert(factorial(4) === 24);
console.log(announceDate());
console.log(shiftRight("Hello", 3));
console.log(uniqueOnes([3,5,5,6,6,6,6,6,6,7]));
assert(zip([1], [1,2]) === -1);
console.log(zip([1,2,3], [2,4,6]));
console.log(unzip( [ [1,2], [2,4], [3,6] ] ))