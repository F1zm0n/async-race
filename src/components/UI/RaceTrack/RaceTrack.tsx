import { FC, forwardRef, HTMLAttributes, ReactNode } from 'react';
import classes from './RaceTrack.module.css';

interface RaceTrackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const RaceTrack: FC<RaceTrackProps> = forwardRef<
  HTMLDivElement,
  RaceTrackProps
>(({ children, className }, ref) => {
  return (
    <div ref={ref} className={[classes.raceContent, className].join(' ')}>
      <div className={classes.horLine}>{children}</div>
    </div>
  );
});

export default RaceTrack;
