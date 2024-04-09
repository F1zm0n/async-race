import { FC } from 'react';
import axios from 'axios';
import CarItem from '../CarItem/CarItem';
import CarApi, { ResType } from '../../api/CarApi';
import classes from './CarList.module.css';
import { ICar } from '../../models/api/Car';
import { useAppDispatch } from '../../hooks/redux';
import { DataSlice } from '../../store/reducers/DataSlice';
import WinnersApi from '../../api/WinnersApi';
import { IWinner } from '../../models/api/Winners';

interface CarListProps {
  data: ResType;
}

const CarList: FC<CarListProps> = ({ data }) => {
  const [deleteCar] = CarApi.useDeleteCarMutation();
  const [createWinner] = WinnersApi.useCreateCarMutation();
  const [updateWinner] = WinnersApi.useUpdateCarMutation();

  const dispatch = useAppDispatch();
  const { setSelectedCarID } = DataSlice.actions;
  const deleteMyCar = (myCar: ICar) => {
    deleteCar(myCar);
  };
  const selectCar = (id: number) => {
    dispatch(setSelectedCarID(id));
  };
  const startEngine = async (
    car: ICar,
    setDuration: (duration: number) => void,
    setIsStarted: (isStarted: boolean) => void,
    isWinnerExists: boolean,
    winnerData: IWinner,
  ) => {
    try {
      const { data: startDat } = await axios.patch(
        `http://localhost:3000/engine?id=${car.id}&status=started`,
      );
      const time = startDat.distance / startDat.velocity / 1000;
      setDuration(time);
      setIsStarted(true);
      const winner = isWinnerExists
        ? { wins: winnerData.wins + 1, time, id: car.id! }
        : { id: car.id!, time, wins: 1 };
      if (isWinnerExists) {
        updateWinner(winner);
      } else {
        createWinner(winner);
      }
    } catch (error) {
      setDuration(0);
      setIsStarted(false);
    }
  };

  const stopEngine = async (
    car: ICar,
    setDuration: (duration: number) => void,
    setIsStarted: (isStarted: boolean) => void,
  ) => {
    try {
      await axios.patch(
        `http://localhost:3000/engine?id=${car.id}&status=stopped`,
      );
      setDuration(0);
      setIsStarted(false);
    } catch (error) {
      setDuration(0);
      setIsStarted(false);
    }
  };
  return (
    <div className={classes.wrapper}>
      {data?.apiResponse.map((car) => {
        return (
          <CarItem
            startEngine={startEngine}
            stopEngine={stopEngine}
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
