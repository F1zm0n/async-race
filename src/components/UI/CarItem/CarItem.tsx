import { FC } from 'react';
import classes from './CarItem.module.css';
import NeonButton from '../NeonButton/NeonButton';
import TrackLine from '../TrackLine/TrackLine';

// interface CarItemProps {
//   car?: ICar;
// }

const CarItem: FC = () => {
  return (
    <div className={classes.carItem}>
      <div className={classes.carButtons}>
        <div className={classes.firstRow}>
          <NeonButton className={classes.selectButton}>Select</NeonButton>
          <NeonButton className={classes.removeButton}>Remove</NeonButton>
        </div>
        <div className={classes.StartLine}>
          <TrackLine className={classes.trackLine}>start</TrackLine>
        </div>
        <div className={classes.secondRow}>
          <NeonButton className={classes.driveButton}>D</NeonButton>
          <NeonButton className={classes.parkButton}>P</NeonButton>
        </div>
      </div>
      <div className={classes.FinishLine} />
      <div className={classes.carTrack} />
    </div>
  );
};

export default CarItem;
