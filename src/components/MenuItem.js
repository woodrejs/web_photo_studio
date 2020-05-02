import React, { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import SubMenu from "./SubMenu";
import "../styles/MenuItem.scss";

const MenuItem = ({ items, name, path }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = useCallback(() => {
    setClicked(!clicked);
  }, [clicked]);

  return (
    <li className="menuItem" key={name}>
      <NavLink className="menuItem__link" to={path} onClick={handleClick}>
        {name}
      </NavLink>
      <SubMenu items={items} clicked={clicked} />
    </li>
  );
};

export default MenuItem;
