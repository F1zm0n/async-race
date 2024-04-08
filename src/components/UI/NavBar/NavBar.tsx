import { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';

const NavBar: FC = () => {
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
