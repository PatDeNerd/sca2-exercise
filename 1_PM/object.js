// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const hasFalsyValue = obj => {
  const keys = Object.keys(obj);
  for(let i = 0; i < keys.length; i++) {
    let currObj = "obj." + keys[i];
    try {
      if(hasFalsyValue(eval(currObj))) {
        return true;
      }
    }
    catch(err) {
      if(!eval(currObj)) {
        return true;
      }
    }
  }

  return !obj;
}

const object1 = {
  name: "Patrick",
  age: NaN
};

const object2 = {
  name: "Patrick",
  age: 15
};

const object3 = {
  name: "",
  age: 15
};

const nested1 = {
  house: "Amboy",
  person: object2
};

const nested2 = {
  house: "Amboy",
  person: object3
};

console.log(hasFalsyValue(object1)); //True; NaN
console.log(hasFalsyValue(false));   //True; obj
console.log(hasFalsyValue(object2)); //False
console.log(hasFalsyValue(object3)); //True; ""
console.log();
console.log(hasFalsyValue(nested1)); //False
console.log(hasFalsyValue(nested2)); //True; object3