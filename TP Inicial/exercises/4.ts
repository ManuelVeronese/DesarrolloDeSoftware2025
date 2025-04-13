
// Exporta una función que devuelva true si es que existe 
// al menos una noticia de 5 estrellas


//Importar los datos desde el archivo data.ts
import { data, News } from "../data";

function getNiceNotice(puntaje:number){
    return data.news.filter(function(news){
        return news.stars===puntaje;
    })
}

console.log(getNiceNotice(5))
