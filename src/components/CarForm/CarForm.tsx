import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import NeonButton from '../UI/NeonButton/NeonButton';
import NeonInput from '../UI/NeonInput/NeonInput';
import { ICar } from '../../models/api/Car';
import classes from './CarForm.module.css';

interface CarFormProps {
  buttonText: string;
  createCar: (car: ICar) => void;
  storageKey: string;
}

const CarForm: FC<CarFormProps> = ({ buttonText, storageKey, createCar }) => {
  const [car, setCar] = useState({ name: '', color: '' });
  useEffect(() => {
    setCar(JSON.parse(localStorage.getItem(storageKey) as string));
  }, []);

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setCar({ ...car, name: e.target.value });
    localStorage.setItem(storageKey, JSON.stringify(car));
  };
  const handleColor = (e: ChangeEvent<HTMLInputElement>) => {
    setCar({ ...car, color: e.target.value });
    localStorage.setItem(storageKey, JSON.stringify(car));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createCar(car);
    setCar({ name: '', color: '' });
    localStorage.removeItem(storageKey);
  };

  return (
    <form className={classes.carForm} onSubmit={handleSubmit}>
      <NeonInput
        type="text"
        placeholder="Name"
        className={classes.nameInput}
        value={car.name}
        onChange={handleName}
      />
      <NeonInput
        type="color"
        className={classes.colorInput}
        value={car.color}
        onChange={handleColor}
      />
      <NeonButton type="submit">{buttonText}</NeonButton>
    </form>
  );
};

export default CarForm;
