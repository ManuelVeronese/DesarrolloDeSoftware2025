
// Exporta una función que  devuelva los usuarios activos mayores de 18 años


//Importar los datos desde el archivo data.ts
import { data, User } from "../data";

//aca obtenemos todos los cumples de los usuarios
//esta funcion se usa en las demas funciones, pues sirve para obtener el anio
console.log("obtener fechas cumple");
function getBirthDates() {
    return data.users.map(user => user.birthdate); // Se usa "birthdate" en lugar de "birthDate"
}

console.log(getBirthDates());
// Resultado esperado: ["2005-04-10", "2010-06-15", "2000-12-01"]

//aca obtenemos solo el año
console.log("obtener año fechas cumple");

function getYearsFromBirthDates() {
    return getBirthDates().map(birthdate => birthdate.split("-")[0]);
}

console.log(getYearsFromBirthDates());
// Resultado esperado: ["2005", "2010", "2000"]

//pasamos a numero
console.log("obtener año fechas cumple en numero");

function getYearsFromBirthDatesInNumber() {
    return getBirthDates().map(birthdate => parseInt(birthdate.split("-")[0]));
    //parseInt(birthdate.split("-")[0]) toma el primer elemento del array (el año, que es un string), y lo convierte en un número.
}

console.log(getYearsFromBirthDatesInNumber());
// Resultado esperado: [2005, 2010, 2000]

//obtener adultos
console.log("obtener año de adultos (añoActual-añoFechaCumple)");

function getAnioAdults() {
    const anioActual = 2025
    let birthYears = getYearsFromBirthDatesInNumber();
    return birthYears.filter(function(year) {
        //en "function(year)" estamos definiendo una función anónima (una función sin nombre) que se utiliza directamente en ese momento.
        return anioActual - year >= 18; // Filtra los mayores de 18 años
    });
}

console.log(getAnioAdults());
console.log("obtener usuarios activos");

//obtener usuarios activos
function getActiveUsers() {
    return data.users.filter(users=>users.active)
}

console.log(getActiveUsers());

console.log("obtener adultos mayores")
function getAdults() {
    const anioActual = 2025;
  
    // Filtrar los usuarios y devolver solo los que son adultos
    return data.users.filter(function(user) {
      // Obtiene el año de nacimiento del usuario
      let birthYear = parseInt(user.birthdate.split("-")[0]);
      return anioActual - birthYear >= 18; // Filtra los mayores de 18 años
    });
  }
// Resultado esperado: Los usuarios con active: true

//getUser

