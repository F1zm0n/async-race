import { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';

interface NavBarProps {
  totalWinners: number | undefined;
  totalCars: number | undefined;
}

const NavBar: FC<NavBarProps> = ({ totalWinners, totalCars }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={classes.nav}>
      <Link to="/" className={classes.title}>
        Async-Race
      </Link>
      <div className={classes.menu} onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </div>
      <ul className={menuOpen ? classes.open : ''}>
        {totalWinners && (
          <li>
            <div> winners: {totalWinners}</div>
          </li>
        )}
        {totalCars && (
          <li>
            <div>cars: {totalCars}</div>
          </li>
        )}
        <li>
          <NavLink to="/garage">Garage</NavLink>
        </li>
        <li>
          <NavLink to="/winners">Winners</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
