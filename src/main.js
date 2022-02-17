import { getCountry } from './data.js';
import athletes from './data/athletes/athletes.js';
// import data from './data/lol/lol.js';
import data from './data/athletes/athletes.js';
// import data from './data/rickandmorty/rickandmorty.js';

const athletesData = data.athletes;

// Evento para hacer click en el link y que nos lleve a la tabla.
let firstLink = document.getElementById("atlethesLink");   
firstLink.addEventListener("click", paintCountriesIntoSelect);

// Funcion 
// function firstHide(){
    
// }

//Se creo un select con los nombres de los países para que sirva como filtro
// Falta eliminar los países repetidos y ordenarlos alfabéticamente.
function paintCountriesIntoSelect () {
    // para ocultar la introducción y mostrar la tabla
    let secondMain = document.getElementById("secondPage");
    secondMain.style.display='block';
    let  firstMain= document.getElementById("firstPage");
    firstMain.style.display = 'none'; 

    var countries = data.athletes.map(athlete=>athlete.team);
    // Ordena el arreglo de paises alfabeticamente
    countries.sort(
        (a,b)=> {
            if(a > b){
                return 1;
            }else if (a === b){
                return 0;
            }else {
                return -1;
            }
        }
    );
    //Convierto el arreglo en un Set, un set es una estructura donde los elementos no se repiten
    var orderedContries = new Set(countries);
    
    console.table(orderedContries);

    //pinta en el select
    data.athletes.forEach(                                            // Recorriendo el arreglo athletes
        (athlete)=>{   

            let optionCountry = document.createElement("option");   // Creando un hijo  
            optionCountry.value = athlete.team;
            optionCountry.innerHTML = athlete.team;
            filterCountry.appendChild(optionCountry);
        }
    );
}

const filterCountry = document.getElementById("selectCountries");  // Trayendo el elemento tabla_atletas (html)


filterCountry.addEventListener("change", function(evento){
   let countrySelected = evento.target.value;
   getCountry(athletesData, countrySelected)
});

var firstTable = document.getElementById('tbAthletes');

//Aqui vamos a guardar los tr y td con su informacion.
let countriestable = ``

//Recoremos las peliculas
//El operador in es para obtener el indice, 
//en cambio of es el objeto en si.

for (const item of athletesData) {
  //Fijate que utilizamos += para acumular los datos. 
  //Template strings syntax
  countriestable += `
    <tr>
      <td>${item.name}</td>
      <td>${item.gender}</td>
      <td>${item.height}</td>
      <td>${item.weight}</td>
      <td>${item.sport}</td>
      <td>${item.team}</td>
      <td>${item.noc}</td>
      <td>${item.age}</td>
      <td>${item.event}</td>
      <td>${item.medal}</td>
    </td>
  
  `
}
//Finalmente añadimos el contenido a la tabla
firstTable.innerHTML += countriestable