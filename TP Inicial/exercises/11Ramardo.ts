// Exporta una función que reciba el codigo de la moneda y devuelva los planes de suscripcion convertidos a esta moneda, conservando el precio en dolar respetando la interfaz
interface PlanConverted {
  code: string;
  usd: number;
  //aqui debe devolver la conversión
  usdConversion: number;
  description: string;
}


//Importar los datos desde el archivo data.ts
import { data } from "../data";

function converterCurrencyType(code: string): PlanConverted[]{
  let conversiónRate=data.dolarConversion[code];
  return data.plans.map(plan=>({
    code:plan.code,
    usd: plan.price,
    usdConversion:Number((plan.price * conversiónRate).toFixed(2)),
    description: plan.description
  }));
}

console.log(converterCurrencyType('ARS'))