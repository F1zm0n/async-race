import { Outlet } from 'react-router-dom';
import classes from './RootLayout.module.css';
import NavBar from '../UI/NavBar/NavBar';
import WinnersApi from '../../api/WinnersApi';
import CarApi from '../../api/CarApi';

const RootLayout = () => {
  const { data: WinnersData } = WinnersApi.useGetAllCarsQuery({ _limit: 1 });
  const { data: CarsData } = CarApi.useGetAllCarsQuery(1);
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <NavBar
          totalWinners={WinnersData?.totalCount}
          totalCars={CarsData?.totalCount}
        />
        <div className={classes.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
