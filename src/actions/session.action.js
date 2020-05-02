const changeView = (view) => ({
  type: "SET_SESSION_VIEW",
  view,
});
export default changeView;

export const setUrl = (url) => ({
  type: "SET_SESSION_URL",
  url,
});
