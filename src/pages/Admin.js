import React, { useState } from "react";
import { connect } from "react-redux";
import "../styles/Admin.scss";
import PanelAddSessions from "../components/PanelAddSessions";
import PanelHome from "../components/PanelHome";
import PanelLog from "../components/PanelLog";

const Admin = ({ sessions, home }) => {
  const [view, setView] = useState(false);

  if (view) {
    return (
      <section className="admin">
        <PanelAddSessions sessions={sessions} />
        <PanelHome images={home} />
      </section>
    );
  } else return <PanelLog click={() => setView(!view)} />;
};

const mapStateToProps = (state) => ({
  sessions: state.sessions,
  home: state.home,
});
export default connect(mapStateToProps)(Admin);
