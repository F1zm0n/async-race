const brands = [
  'Tesla',
  'Ford',
  'Chevrolet',
  'Toyota',
  'Honda',
  'BMW',
  'Mercedes',
  'Audi',
  'Porsche',
  'Lexus',
];

// Array of car models
const models = [
  'Model S',
  'Mustang',
  'Camaro',
  'Corolla',
  'Civic',
  'M3',
  'C-Class',
  'A4',
  '911',
  'RX',
];
export default (): string => {
  return brands[Math.floor(Math.random() * brands.length)].concat(
    ' ',
    models[Math.floor(Math.random() * models.length)],
  );
};
