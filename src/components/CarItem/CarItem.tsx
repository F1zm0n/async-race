import { FC, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import classes from './CarItem.module.css';
import NeonButton from '../UI/NeonButton/NeonButton';
import RaceTrack from '../UI/RaceTrack/RaceTrack';
import { ICar } from '../../models/api/Car';
import SedanCar from '../UI/SedanCar/SedanCar';
import { useAppSelector } from '../../hooks/redux';
import WinnersApi from '../../api/WinnersApi';
import useOffsetWidth from '../../hooks/useOffsetWidth';

interface CarItemProps {
  car: ICar;
  deleteCar: (myCar: ICar) => void;
  selectCar: (id: number) => void;
}

const CarItem: FC<CarItemProps> = ({ car, selectCar, deleteCar }) => {
  // queries
  const { data: winnerData, isSuccess: isWinnerExists } =
    WinnersApi.useGetOneCarQuery(car.id!);
  const [createWinner] = WinnersApi.useCreateCarMutation();
  const [updateWinner] = WinnersApi.useUpdateCarMutation();
  // rtk
  const dataState = useAppSelector((state) => state.DataReducer);
  // state
  const raceTrackRef = useRef<HTMLDivElement>();
  const [isStarted, setIsStarted] = useState(false);
  const [duration, setDuration] = useState(3);
  const offsetWidth = useOffsetWidth(raceTrackRef);

  const carStyles = {
    carTurned: {
      transition: `transform ${duration}s ease-in`,
      transform: `translateX(${offsetWidth}px)`,
    },
    carOff: {
      transition: `transform 200ms ease`,
      transform: `translateX(0px)`,
    },
  };
  // i had to do some shitcode
  const startEngine = async () => {
    try {
      const res = await axios.patch(
        `http://localhost:3000/engine?id=${car.id}&status=started`,
      );
      const startDat = res.data;
      setDuration(startDat.distance / startDat.velocity / 1000);
      setIsStarted(true);
      if (isWinnerExists) {
        updateWinner({
          wins: winnerData.apiResponse.wins! + 1,
          time: startDat.distance / startDat.velocity / 1000,
          id: car.id as number,
        });
      } else {
        createWinner({
          id: car.id as number,
          time: startDat.distance / startDat.velocity / 1000,
          wins: 1,
        });
      }
    } catch (error) {
      setDuration(0);
      setIsStarted(false);
    }
  };
  // here also
  const stopEngine = async () => {
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

  useEffect(() => {
    if (dataState.allCarsStarted) {
      startEngine();
    } else {
      stopEngine();
    }
  }, [dataState.allCarsStarted]);

  return (
    <div className={classes.carItem}>
      <div className={classes.carButtons}>
        <NeonButton
          style={{
            background: dataState.selectedCarID === car.id ? 'teal' : '',
          }}
          onClick={() => selectCar(car.id as number)}>
          <i className="fa-solid fa-hand-pointer" />
        </NeonButton>
        <NeonButton onClick={() => deleteCar(car)}>
          <i className="fa-solid fa-trash" />
        </NeonButton>
        <NeonButton disabled={isStarted} onClick={() => startEngine()}>
          D
        </NeonButton>
        <NeonButton disabled={!isStarted} onClick={() => stopEngine()}>
          P
        </NeonButton>
        <div />
      </div>
      {/* <CSSTransition in={isStarted} timeout={10000} classNames="car"> */}
      <SedanCar
        style={isStarted ? carStyles.carTurned : carStyles.carOff}
        color={car?.color}
        className={classes.animationItem}
      />
      {/* @ts-ignore */}
      <RaceTrack car={car} ref={raceTrackRef} className={classes.carTrack}>
        BMW
      </RaceTrack>
    </div>
  );
};

export default CarItem;
