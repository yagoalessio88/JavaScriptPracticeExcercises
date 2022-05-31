function leerPersonas() {
  let personas = [];
  for (let i = 0; i < 50; i++) {
    let sexo = prompt("indique sexo (m/f):");
    let edad = prompt("indique edad:");
    personas.unshift({ sexo, edad });
  }
  function showPersonas(personas) {
    let mayores = 0;
    let menores = 0;
    let masculinasMayores = 0;
    let femeninasMenores = 0;
    let mujeres = 0;
    let porcentajeMayores = 0;
    let porcentajeMujeres = 0;
    personas.map((persona) => {
      if (persona.edad > 18) {
        mayores += 1;
      }
      if (persona.edad < 18) {
        menores += 1;
      }
      if (persona.edad > 18 && persona.sexo === "m") {
        masculinasMayores += 1;
      }
      if (persona.edad < 18 && persona.sexo === "f") {
        femeninasMenores += 1;
      }
      if (persona.sexo === "f") {
        mujeres += 1;
      }
    });
    porcentajeMayores = (mayores * 100) / 50;
    porcentajeMujeres = (mujeres * 100) / 50;

    console.log("Personas mayores de 18 años:" + mayores);
    console.log("Personas menores de 18 años:" + menores);
    console.log("Personas masculinas mayores de 18 años:" + masculinasMayores);
    console.log("Personas femeninas menores de 18 años:" + femeninasMenores);
    console.log(
      `Las personas mayores de edad representan el %${porcentajeMayores} del total.`
    );
    console.log(
      `Las personas de sexo femenino representan el %${porcentajeMujeres} del total.`
    );
  }
  showPersonas(personas);
}
leerPersonas();
