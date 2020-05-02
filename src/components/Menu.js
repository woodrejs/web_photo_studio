import React from "react";
import { connect } from "react-redux";
import MenuItem from "./MenuItem";
import "../styles/Menu.scss";

const menuItems = [
  { id: 0, name: "strona główna", path: "/", items: null },
  { id: 1, name: "sesje", path: "/sessions", items: null },
  { id: 2, name: "o mnie", path: "/about", items: null },
  { id: 3, name: "kontakt", path: "/contact", items: null },
  //{ id: 4, name: "admin", path: "/admin", items: null },
];

const Menu = ({ sessionsList }) => {
  const index = menuItems.findIndex((item) => item.path === "/sessions");

  if (sessionsList) menuItems[index].items = sessionsList;
  else menuItems[index].items = null;

  const items = menuItems.map(({ id, name, items, path }) => (
    <MenuItem key={id} id={id} name={name} items={items} path={path} />
  ));

  return (
    <nav className="menu">
      <ul className="menu__list">{items}</ul>
    </nav>
  );
};
const mapStateToProps = (state) => ({
  sessionsList: state.sessions,
});

export default connect(mapStateToProps)(Menu);
