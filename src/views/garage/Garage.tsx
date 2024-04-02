import { FC } from 'react';
import '../App.css';
import NeonButton from '../components/UI/NeonButton/NeonButton';
import TrackLine from '../components/UI/TrackLine/TrackLine';

const Garage: FC = () => {
  return (
    <div>
      <NeonButton>Btn</NeonButton>
      <TrackLine />
    </div>
  );
};

export default Garage;
