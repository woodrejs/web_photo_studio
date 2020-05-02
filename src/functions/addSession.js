import * as firebase from "firebase";

const addSession = (name, path, order) => {
  const id = parseInt(Math.random() * 100000 * (Math.random() * 100000));
  const database = firebase.database();
  if (order === null) {
    database
      .ref(`${path}/`)
      .set(name)
      .catch((error) => {
        alert(error.name);
        window.location.href = "/";
      });
  } else {
    database
      .ref(`${path}/${name}`)
      .set({ name, id, order, photos: "" })
      .catch((error) => {
        alert(error.name);
        window.location.href = "/";
      });
  }
};
export default addSession;
