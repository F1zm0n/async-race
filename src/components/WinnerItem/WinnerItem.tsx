import { FC } from 'react';
import CarApi from '../../api/CarApi';
import classes from './WinnerItem.module.css';
import SedanCar from '../UI/SedanCar/SedanCar';
import { IWinner } from '../../models/api/Winners';

interface WinnersItemProps {
  winner: IWinner;
}

const WinnerItem: FC<WinnersItemProps> = ({ winner }) => {
  const { data } = CarApi.useGetOneCarQuery(winner.id);
  return (
    <div
      style={{ border: `1px solid ${data?.color}` }}
      className={classes.wrapper}>
      <div className={classes.item}>{data?.id}</div>
      <SedanCar color={data?.color as string} />
      <div className={classes.item}>{data?.name}</div>
      <div className={classes.item}>{winner.wins}</div>
      <div className={classes.item}>{winner.time.toFixed(2)}</div>
    </div>
  );
};

export default WinnerItem;
