import data from "../src/data/athletes/athletes.js";
import { filterData, getByCountry, getByGender, getByCountries} from "../src/data.js";
import { describe } from "eslint/lib/rule-tester/rule-tester";


describe('getByCountry tests', () => {
  //Estamos evaluando que sea una funcion.
  it('is a function', () => {
    expect(typeof getByCountry).toBe('function');
  });
  
  test(
    'Result is empty when the country does not exists',// Que el resultado este vacio cuando yo le pase un  pais  que no exista.
    () => {
      const resultado = getByCountry(data.athletes, 'xxxXXxxXXXXXXX');
      expect(resultado.length).toBe(0);
    }
  );
  
  test(
    'Result is not empty when the country does exists',// Que el resultado no este vacio cuando yo le pase un país que exista.
    () => {
      const resultado = getByCountry(data.athletes, 'Russia');
      expect(resultado.length).not.toBe(0);
    }
  );

});


describe('getByGender tests', () => {
  // Que sea una funcion
  it('is a function', () => {
    expect(typeof getByGender).toBe('function');//Obtiene el tipo de lo que tiene enfrente.
  });
  
  test(
    'Result is empty when the gender does not exists',// Que el resultado no este vacio cuando le paso un genero que no exista
    () => {
      const resultado = getByGender(data.athletes, 'xxxXXxxXXXXXXX');
      expect(resultado.length).toBe(0);
    }
  );
  
  test(
    'Result is not empty when the gender does exists',// Que el resultado no este vacio cuando le paso un genero que exista
    () => {
      const resultado = getByGender(data.athletes, 'F');
      expect(resultado.length).not.toBe(0);
    }
  );

});

describe('filterData tests', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });
  
  test(
    'Result is empty when the gender does not exists',// Que el resultado no este vacio cuando el genero no exista
    () => {
      const resultado = filterData(data.athletes, '_all', 'xxxXXxxXXXXXXX');
      expect(resultado.length).toBe(0);
    }
  );
  
  test(
    'Result is not empty when the gender does exists',// Que el resultado no este vacio cuando el genero exista
    () => {
      const resultado = filterData(data.athletes, '_all', 'F');
      expect(resultado.length).not.toBe(0);
    }
  );

  test(
    'Result is empty when the country does not exists', // Que el resultado este vacio cuando el pais no exista.
    () => {
      const resultado = filterData(data.athletes, 'xxxXXxxXXXXXXX', '_all');
      expect(resultado.length).toBe(0);
    }
  );
  
  test(
    'Result is not empty when the country does exists', // Que el resultado este vacio cuando el pais  exista.
    () => {
      const resultado = filterData(data.athletes, 'Russia', '_all');
      expect(resultado.length).not.toBe(0);
    }
  );

});


describe('getByCountries tests', () => {
  // Probar que bycountries sea de tipo función
  it('is a function', () => {
    expect(typeof getByCountries).toBe('function');
  });
  
  test(
    'The function return a list of countries', //Que la funcion retorne un listado de paises
    () => {
      const resultado = getByCountries(data.athletes);
      expect(resultado.length).not.toBe(0);
    }
  );
  
  test(
    'The results are ordered', // Que ese listado este ordenado
    () => {
      const resultado = getByCountries(data.athletes);
      for(var i = 0; i < (resultado.length-1); i++ ){      //recorriendo el arreglo          
        expect(resultado[i].charCodeAt(0)).toBeLessThanOrEqual(resultado[i+1].charCodeAt(0));// convirtiendo el primer caracter en ascii y evaluando que sea menos o igual que el de la derecha.
      }
    }
  );

});