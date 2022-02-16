import data from './data/athletes/athletes.js';

// estas funciones son de ejemplo

export const getCountry = (country) => {data.filter((item) => item.team === country);
  return 'getCountry';
};
//GIT 