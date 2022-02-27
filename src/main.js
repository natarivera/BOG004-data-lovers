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

  for (const item of data) {
    athletesInformation += `
    <tr>
      <td>${item.name}</td>
      <td>${item.gender}</td>
      <td class="bigsscreen">${item.height}</td>
      <td class="bigsscreen">${item.weight}</td>
      <td class="bigsscreen">${item.sport}</td>
      <td>${item.team}</td>
      <td class="bigsscreen">${item.noc}</td>
      <td class="bigsscreen">${item.age}</td>
      <td class="bigsscreen">${item.event}</td>
      <td>${item.medal}</td>
    </tr>
  `;
  }

  firstTable.innerHTML = athletesInformation;
  atletheCount.innerHTML = data.length;
}

//Pintar países en el select

function paintCountries(data) {
  let sortData = getByCountries(data.athletes);
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
  let dataGender = data.map((ele) => ele.gender);
  let setDataGender = Array.from(new Set(dataGender));
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

let selectedCountry = undefined;
countriesSelect.addEventListener("change", (e) => {
  selectedCountry = e.target.value;
  paintTable(filterData(athletesData, selectedCountry, selectedGender));

});

// Captura el género que el usuario escoje y muestra la tabla filtrada
let selectedGender = undefined;
genderSelect.addEventListener("change", (e) => {
  selectedGender = e.target.value;
  paintTable(filterData(athletesData, selectedCountry, selectedGender));
});

//Inicializa la tabla si el usuario escoje la opción 'países' o la opción 'género' 
//de lo contrario debe filtrar los datos de acuerdo a las especificaciones del usuario.


