//// HIGHER ORDER METHODS

///////////////////////// forEach

// 1      por cada elemento en el array hacer un console.log de
//         index y elemento

// const array = ["cero", "uno", "dos", "tres", "cuatro", "cinco"];

///////////////////////// map

// 1       crear un nuevo array que contenga el string "hello world"
//         por cada elemento en el array people

// const people = [
//   { name: "bob", age: 20, position: "developer" },
//   { name: "peter", age: 25, position: "designer" },
//   { name: "susy", age: 30, position: "the boss" },
// ];
// const elementos =
// console.log(elementos);

// 2      crear un nuevo array que contenga las edades

// const people = [
//   { name: "bob", age: 20, position: "developer" },
//   { name: "peter", age: 25, position: "designer" },
//   { name: "susy", age: 30, position: "the boss" },
// ];
// const ages =
// });
// console.log(ages);

// 3      crear un nuevo array que contenga el nombre y las edades + 1

// const people = [
//   { name: "bob", age: 20, position: "developer" },
//   { name: "peter", age: 25, position: "designer" },
//   { name: "susy", age: 30, position: "the boss" },
// ];
// const newPeople =
// console.log(newPeople);

/////////////////////////// filter

//        elimina todas las apariciones de "elemento" en el array

// let array = [1, 23, "hola", 56, 88, "pepe", "hola"];
// const elemento = "hola";
// const newArray = array.filter((item) => item !== elemento);
// console.log(newArray);

// 1      crear un nuevo array que contenga las personas
//        cuya edad sea mayor de 20 años

// const people = [
//   { name: "bob", age: 20, position: "developer" },
//   { name: "peter", age: 25, position: "designer" },
//   { name: "susy", age: 30, position: "the boss" },
// ];
// const ages =
// console.log(ages);

// 2      crear un nuevo array que contenga las personas
//        cuya posición sea "developer"

// const people = [
//   { name: "bob", age: 20, position: "developer" },
//   { name: "peter", age: 25, position: "designer" },
//   { name: "susy", age: 30, position: "the boss" },
// ];
// const developers =
// console.log(developers);

//       contar y devolver la cantidad de numeros negativos en el array

// const array = [1, -2, 2, -4, -5];
// const num = array.filter((el) => el < 0).length;
// console.log(num);

//////////////////////////// find

// 1       encontrar la persona con id 3

// const people = [
//   { name: "bob", age: 20, position: "developer", id: 1 },
//   { name: "peter", age: 25, position: "designer", id: 2 },
//   { name: "susy", age: 30, position: "the boss", id: 3 },
// ];
// const person =
// console.log(person);

//////////////////////////// reduce

//            devolver el promedio del array

// let array = [10, 100, 40];
// let promedio = array.reduce((acc, curr) => acc + curr, 0) / array.length;
// console.log(promedio);

//            devolver el total de la suma de todos los salarios

// const people = [
//   { name: "bob", age: 20, position: "developer", id: 1, salary: 200 },
//   { name: "peter", age: 25, position: "designer", id: 2, salary: 300 },
//   { name: "susy", age: 30, position: "the boss", id: 3, salary: 500 },
// ];

//            devolver el string con mayor numero de caracteres del array

// let array = ["I", "need", "candy"];
// let resultado = array.reduce((a, b) => (a.length <= b.length ? b : a));
// console.log(resultado);

/////////////////////////////Set

// 1          crear un nuevo array que contenga todas las categorias
//            en valores únicos (no repetidos)

// const menu = [
//   { name: "pancakes", category: "breakfast" },
//   { name: "burguer", category: "lunch" },
//   { name: "stake", category: "dinner" },
//   { name: "bacon", category: "breakfast" },
//   { name: "eggs", category: "breakfast" },
//   { name: "pasta", category: "dinner" },
// ];

// const categories =
// console.log(categories);

//             sumar los dos arrays en uno solo eliminando valores repetidos
//             y ordenar el array resultante de menor a mayor

// let array1 = [22, 56, 2, 8];
// let array2 = [3, 85, 99, 333];
// let resultado = [...new Set([...array1, ...array2])].sort((a, b) => a - b);
// console.log(resultado);

//            devolver true si todos los elementos del array son iguales

// let array1 = [1, 1, 1, 2];
// let array2 = ["10", 10, 10, 10];
// let array3 = ["test", "test", "test"];

// let resultado1 = new Set(array1).size === 1;
// let resultado2 = new Set(array2).size === 1;
// let resultado3 = new Set(array3).size === 1;

// console.log(resultado1);
// console.log(resultado2);
// console.log(resultado3);
