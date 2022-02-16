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

//Creando los nodos del encabezado de la tabla de atletas

let rowHeadAthletes = document.createElement('tr');
let headNameAthletes = document.createElement('th');
headNameAthletes.innerHTML = "Nombre";
let headGenderAthletes = document.createElement('th');
headGenderAthletes.innerHTML = "Género";
let headHeightAthletes = document.createElement('th');
headHeightAthletes.innerHTML = "Altura (cm)";
let headWeightAthletes = document.createElement('th');
headWeightAthletes.innerHTML = "Peso (kg)";
let headSportAthletes = document.createElement('th');
headSportAthletes.innerHTML = "Deporte";
let headNocAthletes = document.createElement('th');
headNocAthletes.innerHTML = "COI";
let headAgeAthletes = document.createElement('th');
headAgeAthletes.innerHTML = "Edad";
let headEventAthletes = document.createElement('th');
headEventAthletes.innerHTML = "Evento deportivo";
let headMedalAthletes = document.createElement('th');
headMedalAthletes.innerHTML = "Medallas";

//Creando los hijos de los nodos

rowHeadAthletes.appendChild(headNameAthletes);
rowHeadAthletes.appendChild(headGenderAthletes);
rowHeadAthletes.appendChild(headHeightAthletes);
rowHeadAthletes.appendChild(headWeightAthletes);
rowHeadAthletes.appendChild(headSportAthletes);
rowHeadAthletes.appendChild(headNocAthletes);
rowHeadAthletes.appendChild(headAgeAthletes);
rowHeadAthletes.appendChild(headEventAthletes);
rowHeadAthletes.appendChild(headMedalAthletes);

let rowAthletes = document.getElementById("thAthletes");
rowAthletes.appendChild(rowHeadAthletes);


