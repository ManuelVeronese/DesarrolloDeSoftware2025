
// Exporta una función que devuelva la sumatoria del precio de todos los planes 
// de suscripcion


//Importar los datos desde el archivo data.ts
import { data, Plan } from "../data";

function sumatoriaPrice(){
    return data.plans.reduce(function(total,plan){
        //reduce() recorre el array sumando los valores de price.
        return total + plan.price;
    },0);
}

const total = sumatoriaPrice();
console.log("Sumatoria de precios", total.toFixed(2)); //redondear a 2 decimales