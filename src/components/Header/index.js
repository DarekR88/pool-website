import React from "react";
import Hamburger from '../Hamburger'

function Header() {
  return (
    <div className="Header">
      <Hamburger />
      <ul className='navList'>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Services</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
