import { FC } from 'react';
import CarForm from '../CarForm/CarForm';
import NeonButton from '../UI/NeonButton/NeonButton';
import GenerateCars from '../../utils/GenerateCars';
import { ICar } from '../../models/api/Car';
import CarApi from '../../api/CarApi';
import classes from './CarForms.module.css';

interface CarFormsProps {
  createFormCar: () => void;
  updateFormCar: (car: ICar) => void;
  startAllCars: () => void;
  stopAllCars: () => void;
  btnText: string[];
}

const CarForms: FC<CarFormsProps> = ({
  updateFormCar,
  createFormCar,
  startAllCars,
  stopAllCars,
  btnText,
}) => {
  const [createCar] = CarApi.useCreateCarMutation();
  return (
    <div className={classes.formsBox}>
      <CarForm
        buttonText={btnText[0]}
        storageKey={btnText[1]}
        createCar={createFormCar}
      />
      <CarForm
        buttonText={btnText[1]}
        storageKey={btnText[1]}
        createCar={updateFormCar}
      />
      <NeonButton
        onClick={() => GenerateCars(100, createCar)}
        className={classes.randomBtn}>
        100
      </NeonButton>
      <NeonButton className={classes.randomBtn} onClick={() => startAllCars()}>
        All
      </NeonButton>
      <NeonButton className={classes.randomBtn} onClick={() => stopAllCars()}>
        Stop
      </NeonButton>
    </div>
  );
};

export default CarForms;
