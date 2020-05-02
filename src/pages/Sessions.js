import React, { useMemo } from "react";
import { connect } from "react-redux";
import TileSession from "../components/TileSession";
import Load from "../components/Load";
import "../styles/Sessions.scss";

const Sessions = ({ sessionsList }) => {
  const content = useMemo(() => {
    if (sessionsList) {
      let tiles = [...sessionsList];
      let delay = 0;
      tiles = tiles.sort((a, b) => a.order - b.order);
      tiles = tiles.map((tile) => {
        delay++;
        return (
          <TileSession
            key={tile.id}
            name={tile.name}
            photos={tile.photos}
            delay={delay}
          />
        );
      });
      return tiles;
    } else
      return (
        <div className="sessionsPage__load">
          <Load />
        </div>
      );
  }, [sessionsList]);

  return <div className="sessionsPage">{content}</div>;
};

const mapStateToProps = (state) => ({
  sessionsList: state.sessions,
});

export default connect(mapStateToProps)(Sessions);
