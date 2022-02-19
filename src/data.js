// estas funciones son de ejemplo

export const getByCountry = (data, country) => {
  const countryFilterData = data.filter(item => item.team === country);
  return countryFilterData;
};

export const getByGender = (data,gender) => {
  const genderFilterData = data.filter(item => item.gender === gender);
  return genderFilterData;
};




