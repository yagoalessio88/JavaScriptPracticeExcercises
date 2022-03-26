// Write a function that takes a Set and a value as arguments
// Check if the value is present in the Set

function myFunction(set, val) {
  return val in [...set];
}

function myFunction(set, val) {
  return set.has(val);
}

myFunction(new Set([1, 2, 3]), 2);

// Write a function that takes a Set as argument
// Convert the Set to an Array
// Return the Array

function myFunction(set) {
  return [...set];
}

myFunction(new Set([1, 2, 3]));

// Write a function that takes two Sets as arguments
// Create the union of the two sets
// Return the result
// Tipp: try not to switch to Arrays, this would slow down your code
function myFunction(a, b) {
  return new Set([...a, ...b]);
}
function myFunction(a, b) {
  const result = new Set(a);
  b.forEach((el) => result.add(el));
  return result;
}

console.log(myFunction(new Set("123"), new Set("234")));

// Write a function that takes three elements of any type as arguments
// Create a Set from those elements
// Return the result

function myFunction(a, b, c) {
  return new Set([a, b, c]);
}

function myFunction(a, b, c) {
  const set = new Set();
  set.add(a);
  set.add(b);
  set.add(c);
  return set;
}

myFunction(1, "b", 3);
myFunction(NaN, null, false);

// Write a function that takes a Set and a value as argument
// If existing in the Set, remove the value from the Set
// Return the result
function myFunction(set, val) {
  set.delete(val);
  return set;
}

console.log(myFunction(new Set([1, 2, 3]), 1));
console.log(myFunction(new Set("12345"), "3"));

// Write a function that takes a Set and an array as arguments
// If not already existing, add each element in the array to the Set
// Return the modified Set
function myFunction(set, arr) {
  arr.forEach((e) => set.add(e));
  return set;
}
console.log(myFunction(new Set([1, 2, 3]), [4, 5, 6]));
console.log(myFunction(new Set("12345"), [..."6789"]));

// Write a function that takes two sets (a and b) as arguments
// Get the intersection of the sets
// In other words, return a set containing all elements that are both in a as well as b
function myFunction(a, b) {
  let set = new Set();
  a.forEach((e) => {
    if (a.has(e)) {
      set.add(e);
    }
  });
  return set;
}

function myFunction(a, b) {
  const int = new Set();
  a.forEach((el) => b.has(el) && int.add(el));
  return int;
}

console.log(myFunction(new Set([1, 2, 3]), new Set([4, 5, 6])));

console.log(myFunction(new Set("12345"), new Set([..."45678"])));
console.log(myFunction(new Set([1, 2, 3]), new Set([2, 3, 4])));
