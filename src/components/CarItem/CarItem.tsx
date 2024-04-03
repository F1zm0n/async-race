import { FC } from 'react';
import classes from './CarItem.module.css';
import NeonButton from '../UI/NeonButton/NeonButton';
import RaceTrack from '../UI/RaceTrack/RaceTrack';

// interface CarItemProps {
//   car?: ICar;
// }

const CarItem: FC = () => {
  return (
    <div className={classes.carItem}>
      <div className={classes.carButtons}>
        <div className={classes.firstRow}>
          <NeonButton className={classes.selectButton}>select</NeonButton>
          <NeonButton className={classes.removeButton}>delete</NeonButton>
        </div>
        <div className={classes.secondRow}>
          <NeonButton className={classes.driveButton}>D</NeonButton>
          <NeonButton className={classes.parkButton}>P</NeonButton>
        </div>
      </div>
      <RaceTrack className={classes.carTrack}>BMW</RaceTrack>
    </div>
  );
};

export default CarItem;
