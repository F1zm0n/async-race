import WinnersApi from '../../api/WinnersApi';
import WinnerItem from '../WinnerItem/WinnerItem';
import classes from './WinnerList.module.css';

const WinnerList = () => {
  const { data, isSuccess } = WinnersApi.useGetAllCarsQuery({});
  return (
    <div>
      <div className={classes.things}>
        <div>ID</div>
        <div className={classes.carName}>Car</div>
        <div>Name</div>
        <div>Wins</div>
        <div>Time(S)</div>
      </div>
      {isSuccess && data?.apiResponse?.map((w) => <WinnerItem winner={w} />)}
    </div>
  );
};

export default WinnerList;
