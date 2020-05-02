import React from "react";
import { connect } from "react-redux";
import changeView from "../actions/session.action";
import "../styles/SliderNav.scss";

const SliderNav = ({ click, changeView, view, disabled }) => {
  return (
    <div className="sliderNav">
      <button
        name="prev"
        className="sliderNav__btn sliderNav__btn--left"
        onClick={click}
        disabled={disabled}
      ></button>

      <div
        className="sliderNav__btn sliderNav__btn--view"
        onClick={() => changeView(!view)}
      >
        <div className="sliderNav__cube sliderNav__cube--a"></div>
        <div className="sliderNav__cube sliderNav__cube--b"></div>
        <div className="sliderNav__cube sliderNav__cube--c"></div>
        <div className="sliderNav__cube sliderNav__cube--d"></div>
      </div>
      <button
        name="next"
        className="sliderNav__btn sliderNav__btn--right "
        onClick={click}
        disabled={disabled}
      ></button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeView: (view) => dispatch(changeView(view)),
});
const mapStateToProps = (state) => ({
  view: state.session.view,
});

export default connect(mapStateToProps, mapDispatchToProps)(SliderNav);
