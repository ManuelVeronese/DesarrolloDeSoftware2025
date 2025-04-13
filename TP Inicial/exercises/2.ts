
// Exporta una función que reciba el codigo del plan de suscripciones y devuelva los usuarios asociados a ese plan


//Importar los datos desde el archivo data.ts
import { data, User } from "../data";

function filterUserBySubscriptionPlan(subscriptionPlan: String):User[]{
    return data.users.filter(users=>users.subscriptionPlan===subscriptionPlan && (users.active))
}


console.log(filterUserBySubscriptionPlan('premium'))