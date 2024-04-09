import { FC, useEffect, useRef, useState } from 'react';
import classes from './CarItem.module.css';
import NeonButton from '../UI/NeonButton/NeonButton';
import RaceTrack from '../UI/RaceTrack/RaceTrack';
import { ICar } from '../../models/api/Car';
import SedanCar from '../UI/SedanCar/SedanCar';
import { useAppSelector } from '../../hooks/redux';
import WinnersApi from '../../api/WinnersApi';
import useOffsetWidth from '../../hooks/useOffsetWidth';
import { IWinner } from '../../models/api/Winners';

interface CarItemProps {
  car: ICar;
  deleteCar: (myCar: ICar) => void;
  selectCar: (id: number) => void;
  startEngine: (
    car: ICar,
    setDuration: (duration: number) => void,
    setIsStarted: (isStarted: boolean) => void,
    isWinnerExists: boolean,
    winnerData: IWinner,
  ) => void;
  stopEngine: (
    car: ICar,
    setDuration: (duration: number) => void,
    setIsStarted: (isStarted: boolean) => void,
  ) => void;
}

const CarItem: FC<CarItemProps> = ({
  car,
  selectCar,
  deleteCar,
  stopEngine,
  startEngine,
}) => {
  const { data: winnerData, isSuccess: isWinnerExists } =
    WinnersApi.useGetOneCarQuery(car.id!);
  const dataState = useAppSelector((state) => state.DataReducer);
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

  useEffect(() => {
    if (dataState.allCarsStarted) {
      startEngine(car, setDuration, setIsStarted, isWinnerExists, winnerData!);
    } else {
      stopEngine(car, setDuration, setIsStarted);
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
        <NeonButton
          onClick={() =>
            startEngine(
              car,
              setDuration,
              setIsStarted,
              isWinnerExists,
              winnerData!,
            )
          }>
          D
        </NeonButton>
        <NeonButton onClick={() => stopEngine(car, setDuration, setIsStarted)}>
          P
        </NeonButton>
        <div />
      </div>
      {/* <CSSTransition in={isStarted} timeout={10000} classNames="car"> */}
      <SedanCar
        style={isStarted ? carStyles.carTurned : carStyles.carOff}
        color={car?.color}
      />
      {/* @ts-ignore */}
      <RaceTrack ref={raceTrackRef} className={classes.carTrack}>
        BMW
      </RaceTrack>
    </div>
  );
};

export default CarItem;
