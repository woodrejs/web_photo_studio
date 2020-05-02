import React, { useMemo, useEffect } from "react";
import { connect } from "react-redux";
import Slider from "../components/Slider";
import TileImage from "../components/TileImage";
import Load from "../components/Load";
import "../styles/Session.scss";
import changeView from "../actions/session.action";

const Session = ({ sessionsList, info, view, changeView }) => {
  //get session photos
  const photos = useMemo(() => {
    if (sessionsList) {
      const sessions = [...sessionsList];
      const session = sessions.filter(
        (session) => session.name === info.match.params.name
      );
      const photosList = Object.values(session[0].photos);
      return photosList;
    } else return null;
  }, [sessionsList, info]);
  //return tiles
  const tiles = useMemo(() => {
    if (sessionsList) {
      let delay = 0;
      const tileList = photos.map(({ id, url }) => {
        delay++;
        return <TileImage key={id} url={url} delay={delay} />;
      });
      return tileList;
    } else
      return (
        <div className="sessionPage__load">
          <Load />
        </div>
      );
  }, [sessionsList, info]);
  //show tiles view
  useEffect(() => {
    changeView(true);
  }, []);

  return (
    <div className="sessionPage">
      {view ? tiles : <Slider photos={photos} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sessionsList: state.sessions,
  view: state.session.view,
});
const mapDispatchToProps = (dispatch) => ({
  changeView: (view) => dispatch(changeView(view)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Session);
