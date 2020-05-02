const homeReducer = (state = null, action) => {
  switch (action.type) {
    case "ADD_HOME":
      return action.list;

    default:
      return state;
  }
};
export default homeReducer;
