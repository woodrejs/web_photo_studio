import * as firebase from "firebase";

export default function addImage(e, images, path) {
  const file = e.target.files[0];
  const name = file.name;
  const id = parseInt(Math.random() * 100000 * (Math.random() * 100000));
  const storage = firebase.storage();
  const database = firebase.database();
  const storageRef = storage.ref(`${path}/${name}`);
  const databaseRef = database.ref(`${path}/photos/${id}`);

  let order;
  if (images) {
    const imagesCol = Object.values(images);
    order = imagesCol.length;
  } else {
    order = 0;
  }

  storageRef.put(file).then(() => {
    storageRef
      .getDownloadURL()
      .then((url) => databaseRef.set({ name, id, order, url }))
      .catch((error) => {
        alert(error.name);
        window.location.href = "/";
      });
  });
}
