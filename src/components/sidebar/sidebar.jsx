import React from "react";
import { Link } from 'react-router-dom';
import classes from './sidebar.module.css';

const Navbar = () => {

  return (
    <div className={classes.container}>
      <div className={classes.navItems}>
        <Link to="/create">
          <div className={classes.navItem}>
            <img src="/assets/gena-create-icon.png" alt="icon" />
            <p>create</p>
          </div>
        </Link>

        <Link to="/mint">
          <div className={classes.navItem}>
            <img src="/assets/gena-mint-icon.png" alt="icon" />
            <p>mint</p>
          </div>
        </Link>

        <Link to="/explore">
          <div className={classes.navItem}>
            <img src="/assets/gena-search-icon.png" alt="icon" />
            <p>explore</p>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default Navbar