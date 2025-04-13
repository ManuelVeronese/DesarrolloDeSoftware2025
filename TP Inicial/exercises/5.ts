
// Exporta una función que devuelva true si es que existe al menos 
// un plan de suscripciones con coste menor a dos dolares


//Importar los datos desde el archivo data.ts
import { data, Plan } from "../data";

function getPlanBarato(price:number): Plan[] {
    return data.plans.filter(function (plan){
        return plan.price<=price;
    });
}

console.log(getPlanBarato(10))

//en getPlanBarato() pasas el arguemtno y le decis cuanto menor queres que salga
