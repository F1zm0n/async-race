import { FC } from 'react';
import '../../App.css';
import CarItem from '../../components/CarItem/CarItem';
import CarApi from '../../api/CarApi';

const Garage: FC = () => {
  const { data: cars } = CarApi.useGetAllCarsQuery(1);

  return (
    <div>
      <CarItem car={cars?.apiResponse[2]} />
    </div>
  );
};

export default Garage;
