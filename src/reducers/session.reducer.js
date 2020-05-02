const sessionReducer = (state = { view: true, url: null }, action) => {
  switch (action.type) {
    case "SET_SESSION_VIEW":
      return { ...state, view: action.view };
    case "SET_SESSION_URL":
      return { ...state, url: action.url };

    default:
      return state;
  }
};
export default sessionReducer;
