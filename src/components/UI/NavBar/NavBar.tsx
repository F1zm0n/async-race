import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';
import { BaseRoutes } from '../../../models/types/config';

const NavBar: FC = () => {
  const [isActive, setIsActive] = useState(false);
  // add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  // clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <nav className={classes.navbar}>
      {/* logo */}
      <NavLink to={BaseRoutes.GarageRoute} className={classes.logo}>
        Async-Race
      </NavLink>
      <ul
        className={[classes.navMenu, isActive ? classes.active : ''].join(' ')}>
        <li onClick={removeActive}>
          <NavLink to={BaseRoutes.GarageRoute} className={classes.navLink}>
            Garage
          </NavLink>
        </li>
        <li onClick={removeActive}>
          <NavLink to={BaseRoutes.WinnersRoute} className={classes.navLink}>
            Winners
          </NavLink>
        </li>
      </ul>
      <div
        className={[classes.hamburger, isActive ? classes.active : ''].join(
          ' ',
        )}
        onClick={toggleActiveClass}>
        <span className={classes.bar} />
        <span className={classes.bar} />
        <span className={classes.bar} />
      </div>
    </nav>
  );
};

export default NavBar;
