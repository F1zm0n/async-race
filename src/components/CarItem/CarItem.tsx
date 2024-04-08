import { createRef, FC, useEffect, useState } from 'react';
import classes from './CarItem.module.css';
import NeonButton from '../UI/NeonButton/NeonButton';
import RaceTrack from '../UI/RaceTrack/RaceTrack';
import { ICar } from '../../models/api/Car';
import SedanCar from '../UI/SedanCar/SedanCar';
import CarApi from '../../api/CarApi';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { DataSlice } from '../../store/reducers/DataSlice';
import { IEngine } from '../../models/api/Engine';
import WinnersApi from '../../api/WinnersApi';

interface CarItemProps {
  car: ICar;
}

const CarItem: FC<CarItemProps> = ({ car }) => {
  const [deleteCar] = CarApi.useDeleteCarMutation();
  const [createWinner] = WinnersApi.useCreateCarMutation();
  const [updateWinner] = WinnersApi.useUpdateCarMutation();
  const { data: winnerData, isSuccess: isWinnerExists } =
    WinnersApi.useGetOneCarQuery(car.id as number);
  const dispatch = useAppDispatch();
  const dataState = useAppSelector((state) => state.DataReducer);
  const { setSelectedCarID } = DataSlice.actions;
  const raceTrackRef = createRef<HTMLDivElement>();
  const [isStarted, setIsStarted] = useState(false);
  const [duration, setDuration] = useState(3);
  const [offsetWidth, setOffsetWidth] = useState(0);
  const deleteMyCar = (myCar: ICar) => {
    deleteCar(myCar);
  };
  const selectCar = (id: number) => {
    dispatch(setSelectedCarID(id));
  };
  useEffect(() => {
    if (raceTrackRef.current) {
      setOffsetWidth(raceTrackRef.current?.offsetWidth);
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          // Update the width when the size changes
          setOffsetWidth(entry.contentRect.width + 30);
        }
      });

      // Observe the target element
      if (raceTrackRef.current) {
        resizeObserver.observe(raceTrackRef.current);
        // Set initial width
        setOffsetWidth(raceTrackRef.current.clientWidth + 30);
      }
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  const startEngine = () => {
    fetch(`http://localhost:3000/engine?id=${car.id}&status=started`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((startDat: IEngine) => {
        setDuration(startDat.distance / startDat.velocity / 1000);
        setIsStarted(true);
        if (isWinnerExists) {
          updateWinner({
            wins: winnerData.wins + 1,
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
      })
      .catch(() => {
        setDuration(0);
        setIsStarted(false);
      });
  };
  const stopEngine = () => {
    fetch(`http://localhost:3000/engine?id=${car.id}&status=stopped`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then(() => {
        setDuration(0);
        setIsStarted(false);
      })
      .catch(() => {
        setDuration(0);
        setIsStarted(false);
      });
  };
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
        <NeonButton onClick={() => deleteMyCar(car)}>
          <i className="fa-solid fa-trash" />
        </NeonButton>
        <NeonButton onClick={() => startEngine()}>D</NeonButton>
        <NeonButton onClick={() => stopEngine()}>P</NeonButton>
        <div />
      </div>
      {/* <CSSTransition in={isStarted} timeout={10000} classNames="car"> */}
      <SedanCar
        style={isStarted ? carStyles.carTurned : carStyles.carOff}
        color={car?.color}
      />
      <RaceTrack ref={raceTrackRef} className={classes.carTrack}>
        BMW
      </RaceTrack>
    </div>
  );
};

export default CarItem;
