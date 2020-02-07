import React from "react";

function Hamburger() {
  return (
    <button className="burgerButton">
      {/* <div className="burgerTitle">Menu</div> */}
      <div className="menu-lines">
        <div className="buttonLine" />
        <div className="buttonLine" />
        <div className="buttonLine" />
      </div>
    </button>
  );
}

export default Hamburger;
