//import { getCountry } from './data.js';

import { getByCountry } from "./data.js";
import data from "./data/athletes/athletes.js";

const athletesData = data.athletes;

//Obteniendo elementos del DOM
const firstTable = document.getElementById("tbAthletes");
const athletesTableLink = document.getElementById("atlethesLink");
const informationDisplay = document.getElementById("firstPage");
const athletesTableDisplay = document.getElementById("secondPage");
const countriesSelect = document.getElementById("selectCountries");


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

  firstTable.innerHTML += athletesInformation;
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

  countriesSelect.innerHTML += countriesSelectOption;
}

//Eventos del DOM
athletesTableLink.addEventListener("click", () => {
  paintTable(athletesData);
  paintCountries(athletesData);
  informationDisplay.style.display = "none";
  athletesTableDisplay.style.display = "block";
});

countriesSelect.addEventListener('change', (e)=> {
    const country = e.target.value
    const dataFilteredByCountry = getByCountry(athletesData, country)
    paintTable(dataFilteredByCountry)


})

