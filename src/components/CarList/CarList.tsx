import { FC } from 'react';
import CarItem from '../CarItem/CarItem';
import { ResType } from '../../api/CarApi';
import classes from './CarList.module.css';

interface CarListProps {
  data: ResType;
}

const CarList: FC<CarListProps> = ({ data }) => {
  return (
    <div className={classes.wrapper}>
      {data?.apiResponse.map((car) => {
        return <CarItem key={car.id} car={car} />;
      })}
    </div>
  );
};

export default CarList;
