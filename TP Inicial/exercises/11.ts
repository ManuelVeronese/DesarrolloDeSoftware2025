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
      description: plan.description,
      //aqui debe devolver la conversion
    };
  });
}

console.log(convertPlanPrice('ARS'))