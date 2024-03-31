import { createBrowserRouter } from 'react-router-dom';
import Garage from '../views/Garage';
import Winners from '../views/Winners';

export enum BaseRoutes {
  GarageRoute = '/garage',
  WinnersRoute = '/winners',
}

export const router = createBrowserRouter([
  {
    path: BaseRoutes.GarageRoute,
    index: true,
    element: <Garage />,
  },
  {
    path: BaseRoutes.WinnersRoute,
    element: <Winners />,
  },
]);
