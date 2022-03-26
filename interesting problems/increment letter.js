function myFunction(str) {
  let array = str.split("");
  let result = array
    .map((item) => {
      if (item === "z") {
        return "a";
      } else {
        return String.fromCharCode(item.charCodeAt(0) + 1);
      }
    })
    .join("");

  return result;
}

function myFunction(str) {
  const arr = [...str];
  const correctedArray = arr.map((e) =>
    String.fromCharCode(e.charCodeAt() + 1)
  );
  return correctedArray.join("");
}

myFunction("bnchmf");
myFunction("bgddrd");
myFunction("sdrshmf");
