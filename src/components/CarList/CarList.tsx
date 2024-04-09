import { FC } from 'react';
import CarItem from '../CarItem/CarItem';
import CarApi, { ResType } from '../../api/CarApi';
import classes from './CarList.module.css';
import { ICar } from '../../models/api/Car';
import { useAppDispatch } from '../../hooks/redux';
import { DataSlice } from '../../store/reducers/DataSlice';

interface CarListProps {
  data: ResType;
}

const CarList: FC<CarListProps> = ({ data }) => {
  const [deleteCar] = CarApi.useDeleteCarMutation();

  const dispatch = useAppDispatch();
  const { setSelectedCarID } = DataSlice.actions;
  const deleteMyCar = (myCar: ICar) => {
    deleteCar(myCar);
  };
  const selectCar = (id: number) => {
    dispatch(setSelectedCarID(id));
  };

  return (
    <div className={classes.wrapper}>
      {data?.apiResponse.map((car) => {
        return (
          <CarItem
            key={car.id}
            deleteCar={deleteMyCar}
            selectCar={selectCar}
            car={car}
          />
        );
      })}
    </div>
  );
};

export default CarList;
