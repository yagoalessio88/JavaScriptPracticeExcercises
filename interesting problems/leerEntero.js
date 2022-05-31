function leerEntero(num) {
  let par;
  if (num % 2 === 0) {
    par = true;
  } else {
    par = false;
  }
  if (par) {
    for (let i = num; i >= 0; i -= 2) {
      console.log(i);
    }
  }
  if (!par) {
    for (let i = num; i >= 0; i -= 3) {
      console.log(i);
    }
  }
}

leerEntero(6);
