const assert = require("assert")

// Feel free to look things up online!

const reverse = function(str) {
  // TODO - write a function which reverses the string
  reverse = ""
  for(var i = length(str) - 1; i > -1; i--) {
    reverse += str[i]
  }
  return reverse
}

const factorial = function(num) {
  // TODO - write a function which returns the factorial of a positive integer
  // For example, 5! = 5 * 4 * 3 * 2 * 1 = 120
}

const announceDate = function() {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
}

const shiftRight = function(str, num) {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
}

const tokenize = function(str) {
  // TODO - write a function which converts a multi-word string into an array of words
}

const uniqueOnes = function(ary) {
  // TODO - write a function which returns the inputted array without duplicate elements
}

const zip = function(arr1, arr2) {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
}

const unzip = function(arr) {
  // TODO - Write a function which does the opposite of `zip()`
}

// Write tests here:

assert(1 < 2)
assert(1 + 2 == 3)
assert([2, 3][0] === 2)
// assert(reverse("3df") === "fd3")
