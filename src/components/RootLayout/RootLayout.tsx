import { Outlet } from 'react-router-dom';
import classes from './RootLayout.module.css';
import NavBar from '../UI/NavBar/NavBar.tsx';

const RootLayout = () => {
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
