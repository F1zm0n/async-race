import { FC } from 'react';
import classes from './CarItem.module.css';
import NeonButton from '../UI/NeonButton/NeonButton';
import RaceTrack from '../UI/RaceTrack/RaceTrack';
import { ICar } from '../../models/api/Car';
import SedanCar from '../UI/SedanCar/SedanCar';
import CarApi from '../../api/CarApi';

interface CarItemProps {
  car: ICar;
}

const CarItem: FC<CarItemProps> = ({ car }) => {
  const [deleteCar] = CarApi.useDeleteCarMutation();
  const deleteMyCar = (myCar: ICar) => {
    deleteCar(myCar);
  };
  return (
    <div className={classes.carItem}>
      <div className={classes.carButtons}>
        <NeonButton className={classes.selectButton}>
          <i className="fa-solid fa-hand-pointer" />
        </NeonButton>
        <NeonButton onClick={() => deleteMyCar(car)}>
          <i className="fa-solid fa-trash" />
        </NeonButton>
        <NeonButton>D</NeonButton>
        <NeonButton>P</NeonButton>
        <div />
      </div>
      <SedanCar color={car?.color} />
      <RaceTrack className={classes.carTrack}>BMW</RaceTrack>
    </div>
  );
};

export default CarItem;
