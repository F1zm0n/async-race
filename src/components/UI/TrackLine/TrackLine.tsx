import { FC, HTMLAttributes, ReactNode } from 'react';
import classes from './TrackLine.module.css';

interface TrackLineProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const TrackLine: FC<TrackLineProps> = ({ children, className, ...props }) => {
  return (
    <div className={[classes.trackLine, className].join(' ')} {...props}>
      <span className={classes.lineText}>{children}</span>
    </div>
  );
};

export default TrackLine;
