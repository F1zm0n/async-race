import { FC, HTMLAttributes, ReactNode } from 'react';
import classes from './RaceTrack.module.css';

interface RaceTrackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const RaceTrack: FC<RaceTrackProps> = ({ children, className }) => {
  return (
    <div className={[classes.raceContent, className].join(' ')}>
      <div className={classes.horLine}>{children}</div>
    </div>
  );
};

export default RaceTrack;
