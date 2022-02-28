/* eslint-disable no-undef */
//import { getCountry } from './data.js';

import { filterData, getByCountries } from "./data.js";
import data from "./data/athletes/athletes.js";

const athletesData = data.athletes;


//Obteniendo elementos del DOM
const firstTable = document.getElementById("tbAthletes");
const athletesTableLink = document.getElementById("atlethesLink");
const informationDisplay = document.getElementById("firstPage");
const athletesTableDisplay = document.getElementById("secondPage");
const atletheCount = document.getElementById("atletheCount");
const countriesSelect = document.getElementById("selectCountries");
const genderSelect = document.getElementById("selectGender");

function paintTable(data) {
  let athletesInformation = ``;

  for (const item of data) {//Recorriendo arreglo y agregando cada fila
    athletesInformation += ` 
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
    </tr>
  `;
  }

  firstTable.innerHTML = athletesInformation;//Agregando esa cadena al HTML
  atletheCount.innerHTML = data.length; // Pantalla muestra cantidad de atletas
}

//Pintar países en el select, estamos sacando de el arreglo data un listado unico y ordenado de países

function paintCountries(data) {
  let sortData = getByCountries(data);
  let countriesSelectOption = `<option class="option-gender" value="_all">Países</option>`;
  for (const item of sortData) {
    countriesSelectOption += `
        <option class="option-country" value="${item}">${item}</option>
    `;
  }

  countriesSelect.innerHTML = countriesSelectOption;
}

//Pintar géneros en el select

function paintGender(data) {
  let dataGender = data.map((ele) => ele.gender);//recorriendo el data busca el gender
  let setDataGender = Array.from(new Set(dataGender));// Queda en valores unicos y no repetidos
  let gendersSelectOption = `<option class="option-gender" value="_all">Género</option>`;

  for (const item of setDataGender) {
    gendersSelectOption += `
    
        <option class="option-gender" value="${item}">${item}</option>
    `;
  }

  genderSelect.innerHTML = gendersSelectOption;
}

//Eventos del DOM
//Quita la seccion de información y muestra la página con los filtros y la tabla de atletas
athletesTableLink.addEventListener("click", () => {
  paintTable(athletesData);
  paintCountries(athletesData);
  paintGender(athletesData);
  informationDisplay.style.display = "none";
  athletesTableDisplay.style.display = "block";
});

// Captura el país que el usuario escoje y muestra la tabla filtrada

let selectedCountry;
countriesSelect.addEventListener("change", (e) => { // En el evento change
  selectedCountry = e.target.value;// Toma el valor que la persona selecciono
  paintTable(filterData(athletesData, selectedCountry, selectedGender));

});

// Captura el género que el usuario escoje y muestra la tabla filtrada
let selectedGender;
genderSelect.addEventListener("change", (e) => {
  selectedGender = e.target.value;
  paintTable(filterData(athletesData, selectedCountry, selectedGender));
});





