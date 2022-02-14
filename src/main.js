import { getCountry } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/athletes/athletes.js';
// import data from './data/rickandmorty/rickandmorty.js';

// Evento para hacer click en el link y que nos lleve a la tabla.
let firstLink = document.getElementById("atlethesLink");   
firstLink.addEventListener("click", firstHide)

// Funcion para ocultar la introducción y mostrar la tabla
function firstHide(){
    let secondMain = document.getElementById("secondPage");
    secondMain.style.display='block';
    let  firstMain= document.getElementById("firstPage");
    firstMain.style.display = 'none';  
}

const filterCountry = document.getElementById("selectCountries");  // Trayendo el elemento tabla_atletas (html)
data.athletes.forEach(                                            // Recorriendo el arreglo athletes
    (athlete)=>{   

        let optionCountry = document.createElement("option");   //Creando un div
        optionCountry.innerHTML = athlete.team;
        optionCountry.value = athlete.team;
        filterCountry.appendChild(optionCountry);
    }
    
);

filterCountry.addEventListener("change", function(evento){
    console.log(evento.target.value);
});


