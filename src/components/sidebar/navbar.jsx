import React from "react";
import classes from './navbar.module.css';

const Navbar = () => {

  return (
    <div className={classes.container}>
      <div className={classes.navItems}>
        <div className={classes.navItem}>
          <img src="/assets/gena-create-icon.png" alt="icon" />
          <p>create</p>
        </div>
        <div className={classes.navItem}>
          <img src="/assets/gena-mint-icon.png" alt="icon" />
          <p>mint</p>
        </div>
        <div className={classes.navItem}>
          <img src="/assets/gena-search-icon.png" alt="icon" />
          <p>explore</p>
        </div>

      </div>
    </div>
  )
}

export default Navbar