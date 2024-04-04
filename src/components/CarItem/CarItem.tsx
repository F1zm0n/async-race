import { FC } from 'react';
import classes from './CarItem.module.css';
import NeonButton from '../UI/NeonButton/NeonButton';
import RaceTrack from '../UI/RaceTrack/RaceTrack';
import { ICar } from '../../models/api/Car';
import SedanCar from '../UI/SedanCar/SedanCar';

interface CarItemProps {
  car: ICar;
}

const CarItem: FC<CarItemProps> = ({ car }) => {
  return (
    <div className={classes.carItem}>
      <div className={classes.carButtons}>
        <NeonButton className={classes.selectButton}>
          <i className="fa-solid fa-hand-pointer" />
        </NeonButton>
        <NeonButton className={classes.removeButton}>
          <i className="fa-solid fa-trash" />
        </NeonButton>
        <NeonButton className={classes.driveButton}>D</NeonButton>
        <NeonButton className={classes.parkButton}>P</NeonButton>
        <div />
      </div>

      {/* <CarModel color={car?.color} width={100} height={50} /> */}
      <SedanCar color={car?.color} />
      <RaceTrack className={classes.carTrack}>BMW</RaceTrack>
    </div>
  );
};

export default CarItem;
