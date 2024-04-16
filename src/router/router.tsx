import { createBrowserRouter } from 'react-router-dom';
import Winners from '../views/winners/Winners';
import { BaseRoutes } from '../models/types/config';
import Garage from '../views/garage/Garage';
import RootLayout from '../components/RootLayout/RootLayout';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: BaseRoutes.GarageRoute,
        element: <Garage />,
      },
      {
        path: BaseRoutes.WinnersRoute,
        element: <Winners />,
      },
    ],
  },
]);

export default router;
