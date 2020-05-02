import React, { useCallback } from "react";
import { NavLink } from "react-router-dom";
import "../styles/SubMenu.scss";
import { connect } from "react-redux";
import changeView from "../actions/session.action";

const SubMenu = ({ items, clicked, changeView }) => {
  //set tiles view in session page
  const handleClick = useCallback(() => {
    changeView(true);
  }, [clicked]);

  if (items) {
    let subMenuItems = [...items];
    subMenuItems = subMenuItems.map(({ id, name }) => (
      <li className="subMenu__item" key={id} onClick={handleClick}>
        <NavLink className="subMenu__link" to={`/sessions/${name}`}>
          {name}
        </NavLink>
      </li>
    ));
    if (clicked)
      return <ul className="subMenu subMenu--active">{subMenuItems}</ul>;
    else return <ul className="subMenu">{subMenuItems}</ul>;
  } else return null;
};

const mapDispatchToProps = (dispatch) => ({
  changeView: (view) => dispatch(changeView(view)),
});

export default connect(null, mapDispatchToProps)(SubMenu);
