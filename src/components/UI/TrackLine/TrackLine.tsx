import { FC, HTMLAttributes } from 'react';
import classes from './TrackLine.module.css';

interface TrackLineProps extends HTMLAttributes<HTMLDivElement> {}

const TrackLine: FC<TrackLineProps> = ({ className, ...props }) => {
  return (
    <div className={[classes.startLine, className].join(' ')} {...props} />
  );
};

export default TrackLine;
