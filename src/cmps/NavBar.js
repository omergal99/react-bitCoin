import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({currUserName}) => (
  <nav className="Nav_menu">
    <ul>
      {!currUserName &&
        <div className="link">
          <NavLink className="Nav_link" to="/"
            activeClassName="activeRoute">Sign Up</NavLink>
        </div>
      }
      {currUserName &&
        <div className="link flex space-between align-center">
          <NavLink exact className="Nav_link" to="/"
            activeClassName="activeRoute">Home</NavLink>
          <NavLink className="Nav_link" to="/contact"
            activeClassName="activeRoute">Contacts</NavLink>
          <NavLink className="Nav_link" to="/statistic"
            activeClassName="activeRoute">Statistic</NavLink>
          <NavLink className="Nav_link" to="/signup"
            activeClassName="activeRoute">Sign Up</NavLink>
          <NavLink className="Nav_link" to="/user"
            activeClassName="activeRoute">{currUserName}</NavLink>
        </div>
      }
    </ul>
  </nav>
)

export default NavBar;