
// Exporta una función que  devuelva los usuarios activos mayores de 18 años


//Importar los datos desde el archivo data.ts
import { data, User } from "../data";

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

//saber que usuario es mayor de edad y menor de edad, e imprimirlo

function getMayorEdad() {
    const anioActual=2025
    let cumpleañosUsuariosEnNumero = getYearsFromBirthDatesInNumber();
    return cumpleañosUsuariosEnNumero.filter(function(year){
        return anioActual - year >= 18;
    })
}

let mayorEdad = getMayorEdad();
console.log(mayorEdad)

function getActiveUsers() {
    return data.users.filter(function(users){
        return users.active;
    })
}

let usuarioActivo= getActiveUsers();
console.log(usuarioActivo)

function getUsuarioActivoMayor(){
    let usuariosActivos = getActiveUsers();
    let usuariosMayoresEdad =getMayorEdad();

    //filtramos los usuarios activos mayores de edad
    return usuariosActivos.filter(function(user){
        const yearOfBirth = parseInt(user.birthdate.split("-")[0]);
        return usuariosMayoresEdad.indexOf(yearOfBirth) !== -1;
        //el método indexOf se usa para buscar si un valor 
        // (en este caso, un yearOfBirth de un usuario) 
        // está presente en el array usuariosMayoresEdad
        //y en el array usuariosMayorDeEdad no hay ninguno mayor de edad, devuelve solo 
        //aquellos usuarios mayro de edad. Es decir, va devolviendo los usuarios
        //en formato interfaz, sino devoveria solo el año 
    })
}

let usuarioActivoMayor = getUsuarioActivoMayor();
console.log(usuarioActivoMayor);


