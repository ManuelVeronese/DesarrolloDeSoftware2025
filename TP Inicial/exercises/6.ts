
// Exporta una función que devuelva el primer usuario que tenga un email asociado a gmail


//Importar los datos desde el archivo data.ts
import { data, User } from "../data";

function getIfGmail(email:String){
    let arrobaIndex = email.indexOf("@"); //buscamos el @
    if (arrobaIndex===-1){
        return false;
    }
    let puntoIndex = email.indexOf(".",arrobaIndex);
    if (puntoIndex===-1){
        return false;
    }
    let dominio = email.substring(arrobaIndex+1,puntoIndex);
    return dominio.toLocaleLowerCase() ==="gmail";
}

function getFirstGmailUser(email:string){
    return data.users.find(function(user){
        let userGmail = getIfGmail(user.email)
        return userGmail
    })
}
//console.log(getIfGmail("Gmail")) //en email de la funcion entraria el arguemtno Gmail
console.log(getFirstGmailUser("Gmail"))