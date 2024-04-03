import { Outlet } from 'react-router-dom';
import classes from './RootLayout.module.css';
import NavBar from '../UI/NavBar/NavBar';

const RootLayout = () => {
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <NavBar />
        <div className={classes.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
