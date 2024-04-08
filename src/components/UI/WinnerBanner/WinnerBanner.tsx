import { FC } from 'react';
import { IWinner } from '../../../models/api/Winners';
import CarApi from '../../../api/CarApi';
import classes from './WinnerBanner.module.css';

interface WinnerBannerProps {
  winner: IWinner;
}

const WinnerBanner: FC<WinnerBannerProps> = ({ winner }) => {
  const { data } = CarApi.useGetOneCarQuery(winner.id);
  return (
    <ul style={{ background: data?.color }} className={classes.list}>
      <li className={classes.item}>
        <div>{data?.name}</div>
      </li>
      <li className={classes.item}>
        <div>{data?.color}</div>
      </li>
      <li className={classes.item}>
        <div>{winner.time}</div>
      </li>
    </ul>
  );
};

export default WinnerBanner;
