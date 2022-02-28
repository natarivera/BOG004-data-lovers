/* eslint-disable no-undef */
export const getByCountry = (data, country) => {
  const countryFilterData = data.filter(item => item.team === country);
  return countryFilterData;
};

export const getByGender = (data,gender) => {
  const genderFilterData = data.filter(item => item.gender === gender);
  return genderFilterData;
};


export const filterData = (data, country, gender) =>{
  if (country && country !== "_all") {
    data = getByCountry(data, country);
  }
  if (gender && gender !== "_all") {
    data = getByGender(data, gender);
  }
  return data
}

/**
 * Listado de ciudades ordenadas
 */
export const getByCountries = (data) =>{
  let dataTeam = data.map((ele) => ele.team);
  let sortData = Array.from(new Set(dataTeam.sort()));
  return sortData;
}





