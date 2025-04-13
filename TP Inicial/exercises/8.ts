
// Exporta una función que devuelva ordenadas a las noticias desde la mas actual hasta la mas antigua


//Importar los datos desde el archivo data.ts
import { data } from "../data";

function filterNewsByDateOrder(){
    return data.news.sort(function(a,b){
        return a.publishedAt.localeCompare(b.publishedAt)
    });
}
//sort ordena de mayor a menor
//no es necesario convertir a objetos porque todas las noticias tienen están en formato ISO 8601 (YYYY-MM-DDTHH:mm:ssZ),
//y sort puede ordenarlas asi, sino habria que convertir a objetos, ya que
//Al convertirlas en objetos Date, JavaScript las interpreta como valores numéricos en milisegundos desde el 1 de enero de 1970, 
// lo que permite hacer operaciones matemáticas como b - a.
const noticiasOrdenadas = filterNewsByDateOrder();
console.log(noticiasOrdenadas);