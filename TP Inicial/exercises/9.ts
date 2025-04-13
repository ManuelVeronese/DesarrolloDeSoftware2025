
// Exporta una función que ordene a los usuarios por edad, mostrando los usuarios más jóvenes primero


//Importar los datos desde el archivo data.ts
import { data } from "../data";

function filterUsersByAge(){
    return data.users.sort(function(a,b){
        return a.birthdate.localeCompare(b.birthdate)
    })
}

const ususariosOrdenados = filterUsersByAge()
console.log(ususariosOrdenados)