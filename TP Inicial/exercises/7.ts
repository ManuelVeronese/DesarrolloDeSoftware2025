
// Exporta una función que reciba una fecha y 
// devuelva la primera noticia que tenga una fecha igual a la recibida


//Importar los datos desde el archivo data.ts
import { data, News } from "../data";

function filterNewsByDate(fechaPublicada: string): News []{
    return data.news.filter(function(news){
        return news.publishedAt===fechaPublicada //este news debe ser igual al news del parametro de la 2da funcion
    })
}

console.log(filterNewsByDate("2024-03-20T13:06:00Z"))