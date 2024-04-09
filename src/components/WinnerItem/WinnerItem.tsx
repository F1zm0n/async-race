import { FC, HTMLAttributes } from 'react';
import CarApi from '../../api/CarApi';
import classes from './WinnerItem.module.css';
import SedanCar from '../UI/SedanCar/SedanCar';
import { IWinner } from '../../models/api/Winners';

interface WinnersItemProps extends HTMLAttributes<HTMLDivElement> {
  winner: IWinner;
}

const WinnerItem: FC<WinnersItemProps> = ({ winner, className }) => {
  const { data } = CarApi.useGetOneCarQuery(winner.id);
  return (
    <div
      style={{ border: `3px solid ${data?.color}` }}
      className={[classes.wrapper, className].join(' ')}>
      <div className={classes.item}>{data?.id}</div>
      <SedanCar color={data?.color as string} />
      <div className={classes.item}>{data?.name}</div>
      <div className={classes.item}>{winner.wins}</div>
      <div className={classes.item}>{winner.time.toFixed(2)}</div>
    </div>
  );
};

export default WinnerItem;
