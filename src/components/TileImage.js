import React, { useCallback, useRef } from "react";
import { connect } from "react-redux";
import "../styles/TileImage.scss";
import changeView from "../actions/session.action";
import { setUrl } from "../actions/session.action";

const TileImage = ({ url, view, changeView, setUrl, delay }) => {
  const img = useRef();

  const handleClick = useCallback(() => {
    const src = img.current.src;
    setUrl(src);
    changeView(!view);
  }, [view]);

  return (
    <div
      className="tileImg"
      style={{ animation: `showUp 0.8s ${delay / 10}s forwards` }}
    >
      <div className="tileImg__mask" onClick={handleClick}></div>
      <img className="tileImg__img" src={url} alt="tile_img" ref={img} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  view: state.session.view,
});
const mapDispatchToProps = (dispatch) => ({
  changeView: (view) => dispatch(changeView(view)),
  setUrl: (url) => dispatch(setUrl(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TileImage);
