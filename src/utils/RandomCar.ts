const cars = [
  'Audi S3',
  'Audi A4',
  'Audi Q5',
  'Audi R8',
  'Audi TT',
  'BMW M3',
  'BMW X3',
  'BMW X5',
  'BMW Z4',
  'BMW i8',
  'Mercedes C63',
  'Mercedes E350',
  'Mercedes G63',
  'Mercedes S550',
  'Mercedes SLK',
  'Toyota Corolla',
  'Toyota Camry',
  'Toyota RAV4',
  'Toyota Prius',
  'Toyota Highlander',
  'Honda Civic',
  'Honda Accord',
  'Honda CRV',
  'Honda Pilot',
  'Honda Fit',
  'Ford Mustang',
  'Ford Explorer',
  'Ford F-150',
  'Ford Escape',
  'Ford Ranger',
  'Chevrolet Camaro',
  'Chevrolet Silverado',
  'Chevrolet Equinox',
  'Chevrolet Corvette',
  'Chevrolet Malibu',
  'Nissan Altima',
  'Nissan Maxima',
  'Nissan Rogue',
  'Nissan Sentra',
  'Nissan Titan',
  'Hyundai Elantra',
  'Hyundai Sonata',
  'Hyundai Tucson',
  'Hyundai Santa Fe',
  'Hyundai Accent',
  'Kia Optima',
  'Kia Sorento',
  'Kia Rio',
  'Kia Soul',
  'Kia Sportage',
  'Subaru Forester',
  'Subaru Outback',
  'Subaru Impreza',
  'Subaru Legacy',
  'Subaru Crosstrek',
  'Volkswagen Golf',
  'Volkswagen Passat',
  'Volkswagen Tiguan',
  'Volkswagen Beetle',
  'Volkswagen Jetta',
  'Porsche 911',
  'Porsche Cayenne',
  'Porsche Macan',
  'Porsche Panamera',
  'Porsche Boxster',
  'Lamborghini Aventador',
  'Lamborghini Gallardo',
  'Lamborghini Huracan',
  'Lamborghini Murcielago',
  'Lamborghini Diablo',
  'Ferrari 488',
  'Ferrari F8',
  'Ferrari Portofino',
  'Ferrari Roma',
  'Ferrari SF90',
  'Bugatti Veyron',
  'Bugatti Chiron',
  'Bugatti Divo',
  'Bugatti Centodieci',
  'Bugatti Bolide',
  'Rolls-Royce Phantom',
  'Rolls-Royce Ghost',
  'Rolls-Royce Wraith',
  'Rolls-Royce Cullinan',
  'Rolls-Royce Dawn',
];

export default (): string => {
  return cars[Math.floor(Math.random() * cars.length)];
};
