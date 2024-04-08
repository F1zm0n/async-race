import { FC, useState } from 'react';
import CarItem from '../CarItem/CarItem';
import CarApi from '../../api/CarApi';
import { ICar } from '../../models/api/Car';
import CarForm from '../CarForm/CarForm';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { DataSlice } from '../../store/reducers/DataSlice';
import classes from './CarList.module.css';
import NeonButton from '../UI/NeonButton/NeonButton';
import GenerateCars from '../../utils/GenerateCars';
import MyPagination from '../MyPagination/MyPagination';
import { PAGINATION_LIMIT } from '../../models/types/config';
import WinnersApi from '../../api/WinnersApi';
import WinnerBanner from '../UI/WinnerBanner/WinnerBanner.tsx';

const CarList: FC = () => {
  const [createCar] = CarApi.useCreateCarMutation();
  const [updateCar] = CarApi.useUpdateCarMutation();
  const { data: winners, isSuccess } = WinnersApi.useGetAllCarsQuery({
    _limit: 7,
    _order: 'ASC',
    _sort: 'time',
  });
  const dispatch = useAppDispatch();
  const dataState = useAppSelector((state) => state.DataReducer);
  const carsState = useAppSelector((state) => state.CarsReducer);
  const { setSelectedCarID, setCarCreate, setAllCarsStarted } =
    DataSlice.actions;
  const { data } = CarApi.useGetAllCarsQuery(carsState.page);
  const [showWinner, setShowWinner] = useState(true);

  const updateFormCar = (car: ICar) => {
    car.id = dataState.selectedCarID;
    updateCar(car);
    dispatch(setSelectedCarID(0));
  };

  const createFormCar = () => {
    createCar(dataState.carCreate);
    dispatch(setCarCreate({ name: '', color: '' }));
  };
  const startAllCars = () => {
    dispatch(setAllCarsStarted(false));
    setTimeout(() => {
      setShowWinner(true);
    }, 5000);
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.formsBox}>
        <CarForm
          buttonText="create"
          storageKey="create"
          createCar={createFormCar}
        />
        <CarForm
          buttonText="update"
          storageKey="update"
          createCar={updateFormCar}
        />
        <NeonButton
          onClick={() => GenerateCars(100, createCar)}
          className={classes.randomBtn}>
          100
        </NeonButton>
        <NeonButton
          className={classes.randomBtn}
          onClick={() => dispatch(setAllCarsStarted(true))}>
          All
        </NeonButton>
        <NeonButton
          className={classes.randomBtn}
          onClick={() => startAllCars()}>
          Stop
        </NeonButton>
      </div>
      {data?.apiResponse.map((car) => {
        return <CarItem key={car.id} car={car} />;
      })}
      <div className={classes.footer}>
        {isSuccess && <WinnerBanner winner={winners[0]} />}
        <MyPagination
          maxPage={Math.ceil((data?.totalCount as number) / PAGINATION_LIMIT)}
        />
      </div>
    </div>
  );
};

export default CarList;
