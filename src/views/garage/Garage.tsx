import { FC } from 'react';
import '../../App.css';
import NeonButton from '../../components/UI/NeonButton/NeonButton';
import CarItem from '../../components/CarItem/CarItem';
import CarModel from '../../components/UI/CarModel/CarModel';

const Garage: FC = () => {
  return (
    <div>
      <NeonButton>Btn</NeonButton>
      <CarItem />
      <CarModel width={100} height={50} color="#653f74" />
    </div>
  );
};

export default Garage;
