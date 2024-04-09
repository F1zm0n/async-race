import { FC } from 'react';
import '../../App.css';
import CarList from '../../components/CarList/CarList';
import WinnerBanner from '../../components/UI/WinnerBanner/WinnerBanner';
import MyPagination from '../../components/MyPagination/MyPagination';
import { PAGINATION_LIMIT } from '../../models/types/config';
import WinnersApi from '../../api/WinnersApi';
import CarApi from '../../api/CarApi';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import CarForms from '../../components/CarForms/CarForms';
import classes from './Garage.module.css';
import { DataSlice } from '../../store/reducers/DataSlice';
import { ICar } from '../../models/api/Car';
import { carsSlice } from '../../store/reducers/CarsSlice';

const Garage: FC = () => {
  // rtk
  const dispatch = useAppDispatch();
  const carsState = useAppSelector((state) => state.CarsReducer);
  const dataState = useAppSelector((state) => state.DataReducer);
  const { setPage } = carsSlice.actions;
  const { setSelectedCarID, setCarCreate, setAllCarsStarted } =
    DataSlice.actions;
  // queries
  const { data } = CarApi.useGetAllCarsQuery(carsState.page);
  const { data: winners, isSuccess } = WinnersApi.useGetAllCarsQuery({
    _limit: 7,
    _order: 'ASC',
    _sort: 'time',
  });
  const [createCar] = CarApi.useCreateCarMutation();
  const [updateCar] = CarApi.useUpdateCarMutation();
  // functions
  const dispatchPage = (page: number) => {
    dispatch(setPage(page));
  };
  const updateFormCar = (car: ICar) => {
    car.id = dataState.selectedCarID;
    updateCar(car);
    dispatch(setSelectedCarID(0));
  };
  const createFormCar = () => {
    createCar(dataState.carCreate);
    dispatch(setCarCreate({ name: '', color: '' }));
  };
  const stopAllCars = () => {
    dispatch(setAllCarsStarted(false));
  };
  const startAllCars = () => {
    dispatch(setAllCarsStarted(true));
  };
  return (
    <div className={classes.wrapper}>
      <CarForms
        updateFormCar={updateFormCar}
        createFormCar={createFormCar}
        stopAllCars={stopAllCars}
        startAllCars={startAllCars}
        btnText={['create', 'update']}
      />
      {data && <CarList data={data} />}
      <div className={classes.footer}>
        {isSuccess && <WinnerBanner winner={winners.apiResponse[0]} />}
        <MyPagination
          page={carsState.page}
          setPage={dispatchPage}
          maxPage={Math.ceil((data?.totalCount as number) / PAGINATION_LIMIT)}
        />
      </div>
    </div>
  );
};

export default Garage;
