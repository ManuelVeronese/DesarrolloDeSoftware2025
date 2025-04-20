<<<<<<< HEAD
// Exporta una función que devuelva un array de 
// usuarios solo con su nombre completo (nombre + apellido) 
// y su edad actual en años
=======
// Exporta una función que devuelva un array de usuarios solo con su nombre completo
//  (nombre + apellido) y su edad actual en años
>>>>>>> 21718f8ee98ee1516dd8f6d1c5fe44841dd88ca6
interface SimpleUser {
  fullname: string;
  years: number;
}


//Importar los datos desde el archivo data.ts
<<<<<<< HEAD
import { data } from "../data";

function getCumpleUsuario() {
  return data.users.map(function(user) {
      return user.birthdate;
  });
}

let cumpleañosUsuarios = getCumpleUsuario();
console.log(cumpleañosUsuarios);

//una vez que tenemos los cumple de los usuarios, debemos separarlos por el guion
function getYearsFromBirthDatesInNumber() {
  return getCumpleUsuario().map(function(birthdate) {
      return parseInt(birthdate.split("-")[0]);
  });
}
let cumpleañosUsuariosEnNumero = getYearsFromBirthDatesInNumber();
console.log(cumpleañosUsuariosEnNumero);

function getEdad() {
  const anioActual=2025
  let cumpleañosUsuariosEnNumero = getYearsFromBirthDatesInNumber();
  return cumpleañosUsuariosEnNumero.filter(function(year){
      return anioActual - year ;
  })
}


=======
import { data, User } from "../data";

function usersWithAge(): SimpleUser[]{
  let concatenadoFullname = data.user.name + " " + data.user.lastname;
  let añosCalculado = data.users.birthday;
  return data.users.map(function(user: User){
    return {
      fullname: concatenadoFullname,
      years: añosCalculado
    }
  })
}

console.log(usersWithAge())
>>>>>>> 21718f8ee98ee1516dd8f6d1c5fe44841dd88ca6
