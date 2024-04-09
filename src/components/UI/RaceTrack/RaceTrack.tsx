import { FC, forwardRef, HTMLAttributes, ReactNode } from 'react';
import classes from './RaceTrack.module.css';
import { ICar } from '../../../models/api/Car';

interface RaceTrackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  car: ICar;
}

const RaceTrack: FC<RaceTrackProps> = forwardRef<
  HTMLDivElement,
  RaceTrackProps
>(({ children, className, car }, ref) => {
  return (
    <div ref={ref} className={[classes.raceContent, className].join(' ')}>
      <div className={classes.horLine}>{children}</div>
      <div className={classes.carName}>{car.name}</div>
    </div>
  );
});

export default RaceTrack;
