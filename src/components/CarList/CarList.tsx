import { useEffect } from 'react';
import CarItem from '../CarItem/CarItem';
import CarApi from '../../api/CarApi';

const CarList = () => {
  // const [createCar] = CarApi.useCreateCarMutation();
  useEffect(() => {
    // GenerateCars(10, createCar);
  }, []);
  // const carsState = useAppSelector((state) => state.CarsReducer);
  // const dispatch = useAppDispatch();
  // const { setCars } = carsSlice.actions;
  const { data } = CarApi.useGetAllCarsQuery(1);
  return (
    <div>
      {data?.apiResponse.map((car) => <CarItem car={car} key={car.id} />)}
    </div>
  );
};

export default CarList;
