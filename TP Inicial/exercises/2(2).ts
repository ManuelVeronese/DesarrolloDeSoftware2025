
// Exporta una función que reciba el codigo del plan de suscripciones y devuelva los usuarios asociados a ese plan


//Importar los datos desde el archivo data.ts
import { data, User } from "../data";

function getPlanUserPremium(planCode: string){
    return data.users.filter(function(user){
        return user.subscriptionPlan===planCode;
    })
}

console.log(getPlanUserPremium("basic"))