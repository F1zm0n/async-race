import { FC } from 'react';
import WinnerItem from '../WinnerItem/WinnerItem';
import classes from './WinnerList.module.css';
import { IWinner } from '../../models/api/Winners';

interface WinnerListProps {
  data: IWinner[] | undefined;
}

const WinnerList: FC<WinnerListProps> = ({ data }) => {
  return (
    <div>
      <div className={classes.things}>
        <div>ID</div>
        <div className={classes.carName}>Car</div>
        <div>Name</div>
        <div>Wins</div>
        <div>Time(S)</div>
      </div>
      {data && data.map((w) => <WinnerItem key={w.id} winner={w} />)}
    </div>
  );
};

export default WinnerList;
