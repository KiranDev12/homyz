import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
function Header() {
  const [menuOpened, setmenuOpened] = useState(false);
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />
        <div className="flexCenter h-menu">
          <a href="">Recidencies</a>
          <a href="">Our Values</a>
          <a href="">Contact us</a>
          <a href="">Get started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
        <div
          className="menu-icon"
          onClick={() => setmenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
}

export default Header;
