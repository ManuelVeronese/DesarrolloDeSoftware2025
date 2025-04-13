// Exporta una función que devuelva un array de usuarios solo con su nombre completo
//  (nombre + apellido) y su edad actual en años
interface SimpleUser {
  fullname: string;
  years: number;
}


//Importar los datos desde el archivo data.ts
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