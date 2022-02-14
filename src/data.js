import data from './data/athletes/athletes.js';

// estas funciones son de ejemplo

export const getCountry = (country) => {data.filter((athlete) => athlete.team === country);
  return 'getCountry';
};


