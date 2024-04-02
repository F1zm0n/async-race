import { FC } from 'react';
import '../../App.css';
import NeonButton from '../../components/UI/NeonButton/NeonButton';
import CarItem from '../../components/UI/CarItem/CarItem';

const Garage: FC = () => {
  return (
    <div>
      <NeonButton>Btn</NeonButton>
      <CarItem />
    </div>
  );
};

export default Garage;
