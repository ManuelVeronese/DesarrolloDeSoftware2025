// Exporta una función que reciba el codigo de la moneda y devuelva 
// los planes de suscripcion convertidos a esta moneda, conservando 
// el precio en dolar respetando la interfaz
interface PlanConverted {
  code: string;
  usd: number;
  //aqui debe devolver la conversión
  usdConversion: number;
  description: string;
}


//Importar los datos desde el archivo data.ts
import { data, Plan } from "../data";

function convertPlanPrice(code: string): PlanConverted[] {
  let conversion = data.dolarConversion[code];

  return data.plans.map(function (plan) {
    return {
      code: plan.code,
      usd: plan.price,
      usdConversion: Number((plan.price * conversion).toFixed(2)),
<<<<<<< HEAD
      description: plan.description
=======
      description: plan.description,
      //aqui debe devolver la conversion
>>>>>>> 21718f8ee98ee1516dd8f6d1c5fe44841dd88ca6
    };
  });
}

console.log(convertPlanPrice('ARS'))