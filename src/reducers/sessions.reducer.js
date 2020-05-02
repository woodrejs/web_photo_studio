const sessionsReducer = (state = null, action) => {
  switch (action.type) {
    case "ADD_SESSIONS":
      return action.list;
    default:
      return state;
  }
};
export default sessionsReducer;
