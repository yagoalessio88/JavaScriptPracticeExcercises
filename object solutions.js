//           return the value of a in the object

function myFunction(obj) {
  return obj["a"];
}

function myFunction(obj) {
  return obj.a;
}

console.log(myFunction({ a: 1, b: 2, c: 3 }));

//            return true if the property b exists in the object a

function myFunction(a, b) {
  return b in a;
}
function myFunction(a, b) {
  return a[b] ? true : false;
}

myFunction({ a: 1, b: 2, c: 3 }, "b");

//           Write a function that takes a string (a) as argument
//         Create an object that has a property with key 'key' and a value of a
//        Return the object

function myFunction(a) {
  return { key: a };
}

myFunction("a");

// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

function myFunction(a, b) {
  return { [a]: b };
}

myFunction("a", "b");

// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

function myFunction(a, b) {
  let object = {};
  for (let index in a) {
    object = { ...object, [a[index]]: b[index] };
  }
  return object;
}

function myFunction(a, b) {
  return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
}

myFunction(["a", "b", "c"], [1, 2, 3]);
myFunction(["w", "x", "y", "z"], [10, 9, 5, 2]);

// Write a function that takes an object (a) as argument
// Return the sum of all object values

function myFunction(a) {
  return Object.values(a).reduce((acc, curr) => acc + curr);
}

myFunction({ a: 1, b: 2, c: 3 });

// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

function myFunction(obj) {
  const { b, ...rest } = obj;
  return rest;
}

function myFunction(obj) {
  delete obj.b;
  return obj;
}

function myFunction(obj) {
  delete obj["b"];
  return obj;
}

function myFunction(obj) {
  let toDelete = "b";
  delete obj[toDelete];
  return obj;
}

console.log(myFunction({ a: 1, b: 7, c: 3 }));

// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// It should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

function myFunction(x, y) {
  let { c, b: d, e } = y;

  return { ...x, c, d, e };
}

function myFunction(x, y) {
  const { b, ...rest } = y;
  return { ...x, ...rest, d: b };
}
console.log(myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));

// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

function myFunction(a, b) {
  return Object.entries(a).reduce((acc, [key, value]) => {
    return { ...acc, [key]: value * b };
  }, {});
}

console.log(myFunction({ a: 1, b: 2, c: 3 }, 3));

// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

function myFunction(obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    return { ...acc, [value]: key };
  }, {});
}

console.log(myFunction({ z: "a", y: "b", x: "c", w: "d" }));

// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

function myFunction(obj) {
  const newObj = { ...obj };
  for (key in newObj) {
    if (newObj[key].trim() === "") newObj[key] = null;
  }
  return newObj;
}

function myFunction(obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    let newValue = value === "" || value === " " ? null : value;
    return { ...acc, [key]: newValue };
  }, {});
}

console.log(myFunction({ a: "a", b: "b", c: "", d: " " }));

// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

function myFunction(obj) {
  let { fn, ln } = obj;
  let mail, size, weight;
  let newObject = { fn, ln };
  if (["size"] in obj) {
    size = obj.size + "" + "cm";
    newObject = { ...newObject, size };
  }
  if (["weight"] in obj) {
    weight = obj.weight + "" + "kg";
    newObject = { ...newObject, weight };
  }
  if (["mail"] in obj) {
    mail = obj.mail;
    newObject = { ...newObject, mail };
  }
  return newObject;
}

function myFunction(obj) {
  return {
    fn: obj.fn,
    ln: obj.ln,
    ...(obj.size && { size: `${obj.size}cm` }),
    ...(obj.weight && { weight: `${obj.weight}kg` }),
  };
}

console.log(
  myFunction({ fn: "Lisa", ln: "Müller", size: 175, age: 17, weight: 67 })
);

// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array
function myFunction(arr, str) {
  return [
    { ...arr[0], continent: str },
    { ...arr[1], continent: str },
  ];
}

function myFunction(arr, str) {
  return arr.map((obj) => ({ ...obj, continent: str }));
}

console.log(
  myFunction(
    [
      { city: "Tokyo", country: "Japan" },
      { city: "Bangkok", country: "Thailand" },
    ],
    "Asia"
  )
);
