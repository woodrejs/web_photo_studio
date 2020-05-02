import { combineReducers } from "redux";
import sessionsReducer from "./sessions.reducer";
import sessionReducer from "./session.reducer";
import homeReducer from "./home.reducer";

const rootReducer = combineReducers({
  sessions: sessionsReducer,
  session: sessionReducer,
  home: homeReducer,
});

export default rootReducer;
