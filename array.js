// 1        chequear el largo del array

// const array = [1, 2, 3, 4, 5, 6, 2, 8, 6, 1];
// const largo = array.length;
// console.log(largo);

// 2        devolver la variable en la posición 3 del array

// const array = ["cero", "uno", "dos", "tres", "cuatro"];
// const tercero = array[3];
// console.log(tercero);

// 3        devolver la variable en la última posición del array

// const array = ["cero", "uno", "dos", "tres", "cuatro"];
// const tercero = array[array.length - 1];
// console.log(tercero);

// 4        mezclar los dos arrays en uno solo

// const names = ["carlos", "juan", "alma", "martin"];
// const lastNames = ["pepper", "onion", "banana"];
// const allNames = names.concat(lastNames);
// console.log(allNames);

// 5       invertir el orden de los elementos del array

// let array = ["cero", "uno", "dos", "tres", "cuatro"];
// array = array.reverse();
// console.log(array);

// 6       agregar el elemento al principio del array

// const elemento = "nuevo";
// let array = ["cero", "uno", "dos", "tres", "cuatro"];
// array.unshift(elemento);
// console.log(array);

// 6       agregar el elemento al final del array

// const elemento = "nuevo";
// let array = ["cero", "uno", "dos", "tres", "cuatro"];
// array.push(elemento);
// console.log(array);

// 7       agregar al array un nuevo elemento con el mes faltante

// const months = ["Jan", "March", "April", "June"];
// months.splice(1, 0, "Feb");
// console.log(months);

// 8       remover el primer elemento del array

// let array = ["cero", "uno", "dos", "tres", "cuatro"];
// array.shift();
// console.log(array);

// 9       remover el ultimo elemento del array

// let array = ["cero", "uno", "dos", "tres", "cuatro"];
// array.pop();
// console.log(array);

//       devolver los primeros 3 elementos del array

// const array = [1, 2, 3, 4];
// let result = array.slice(0, 3);
// console.log(result);

//       devolver los ultimos 3 elementos del array

// const array = [1, 2, 3, 4];
// let result = array.slice(-3);
// console.log(result);

//       remover los tres primeros elementos del array y devolver el resto

// const array = [1, 2, 3, 4];
// let result = array.slice(3);
// console.log(result);

// 12       devolver 3 elementos del array comenzando en la posicion 3

// let array = ["cero", "uno", "dos", "tres", "cuatro", "cinco"];
// const elementos = array.splice(3, 3);
// console.log(elementos);

// 13       devolver los elementos del array en un solo string

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join();
// console.log(text);

// 14       devolver los elementos del array en un solo string
//          separando  cada elemento con /

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join("/");
// console.log(text);

// 15       devolver los elementos del array en un solo string
//          separando  cada elemento con un espacio en blanco

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join(" ");
// console.log(text);

// spread operator

// 16        devolver el numero máximo contenido en el array

// const numeros = [1, 5, 3, 6, 8, 7, 4, 55];
// const maximo = Math.max(...numeros);
// console.log(maximo);

// 17       devolver los elementos del array en un solo string

// const greeting = ["H", "o", "l", "a"];
// let text = greeting.join("");
// console.log(text);

// 18       invertir el orden del string

// let cadena = "dlrow olleh";
// cadena = cadena.split("").reverse().join("");
// console.log(cadena);

//         devolver el array ordenado de mayor a menor

// let array = [1, 2, 3, 4];
// array.sort((a, b) => b - a);
// console.log(array);

//         devolver el array ordenado alfabeticamente

// let array = ["z", "c", "d", "a", "y", "a", "w"];
// array.sort();
// console.log(array);

//         ordenar el array de objetos segun la propiedad b de menor a mayor

// let array1 = [
//   { a: 2, b: 10 },
//   { a: 5, b: 4 },
// ];

// let array2 = [
//   { a: 1, b: 7 },
//   { a: 2, b: 1 },
// ];

// const sort = (x, y) => x.b + y.b;
// let result1 = array1.sort(sort);
// let result2 = array2.sort(sort);
// console.log(result1);
// console.log(result2);

//         ordenar el array de objetos segun la propiedad b de mayor a menor

// let array1 = [
//   { a: 2, b: 10 },
//   { a: 5, b: 4 },
// ];

// let array2 = [
//   { a: 1, b: 7 },
//   { a: 2, b: 1 },
// ];

// const sort = (x, y) => x.b + y.b;
// let result1 = array1.sort(sort);
// let result2 = array2.sort(sort);
// console.log(result1);
// console.log(result2);

//           devolver la suma de los dos arrays

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// let resultado = array1.concat(array2);
// console.log(resultado);

//           devolver un array de un solo nivel de dimensión

// let array = [1, 2, 3, 4, [5, 6, 7], [8, 9, 10]];
// let resultado = array.flat();
// console.log(resultado);

//           escribir una función que devuelva la suma de todos los
//           arrays en un solo array

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let array3 = [7, 8, 9];

// const result = (...arrays) => {
//   return arrays.flat();
// };

// console.log(result(array1, array2, array3));
