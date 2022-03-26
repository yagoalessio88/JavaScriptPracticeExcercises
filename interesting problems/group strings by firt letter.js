// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

function myFunction(arr) {
  let letter = "A";
  let keyName = "";
  let object = {};

  for (let i = 1; i <= 27; i++) {
    let elements = arr.filter((item) => item[0] === letter);
    if (elements.length !== 0) {
      keyName = letter.toLowerCase();
      object = { ...object, [keyName]: elements };
    }
    letter = String.fromCharCode(letter.charCodeAt(0) + 1);
  }
  console.log(object);
}

myFunction(["Alf", "Alice", "Ben", "Zeta"]);
myFunction(["Berlin", "Paris", "Prague"]);

// return arr.reduce((acc, cur) => {
//   const firstLetter = cur.toLowerCase().charAt(0);
//   return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] };
// }, {});

// item["a"] devuelve items del array que comienzan con esa letra?
// en minuscula??

// [...(acc[firstLetter] || []), cur]

// acc[firstLetter] ???
// , cur    ????
