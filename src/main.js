import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/athletes/athletes.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

var athletes = data.athletes;

const rootElement  = document.getElementById("tabla_atletas");// Trayendo el elemento tabla_atletas (html)
data.athletes.forEach(// Recorriendo el arreglo athletes
    (athlete, index)=>{   

        var td = document.createElement("td");//Creando un div     
        td.innerHTML = athlete.name;//Creando un div
        
        var td2 = document.createElement("td");//Creando un div
        td2.innerHTML = athlete.team;

        var td3 = document.createElement("td");//Creando un div
        td3.innerHTML = athlete.noc;

        var td4 = document.createElement("td");//Creando un div
        td4.innerHTML = athlete.sport;

        var tr = document.createElement("tr");
       

        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
    
        rootElement.appendChild(tr);
    }
    
);