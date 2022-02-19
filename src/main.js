//import { getCountry } from './data.js';

import { getByCountry, getByGender } from "./data.js";
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

  firstTable.innerHTML = athletesInformation;
  atletheCount.innerHTML = data.length;
}

//Pintar países en el select

function paintCountries(data) {
  let dataTeam = data.map((ele) => ele.team);
  let sortData = Array.from(new Set(dataTeam.sort()));
  let countriesSelectOption = ``;
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
  let gendersSelectOption = ``;

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

countriesSelect.addEventListener("change", (e) => {
  const country = e.target.value;
  const dataFilteredByCountry = getByCountry(athletesData, country);
  paintTable(dataFilteredByCountry,);

});

// Captura el género que el usuario escoje y muestra la tabla filtrada
genderSelect.addEventListener("change", (e) => {
  const gender = e.target.value;
  const dataFilteredByGender = getByGender(athletesData, gender);
  paintTable(dataFilteredByGender);
});

