// estas funciones son de ejemplo

export const getByCountry = (data, country) => {
  const dataFiltrada = data.filter(item => item.team === country);

  return dataFiltrada
};
