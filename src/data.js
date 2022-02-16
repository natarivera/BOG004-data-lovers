// estas funciones son de ejemplo

export const getCountry = (data, country) => {
  const dataFiltrada = data.filter(item => item.team === country);
  console.log('ver la dataFiltrada ', dataFiltrada); // eliminar los console.log

  return dataFiltrada
};
