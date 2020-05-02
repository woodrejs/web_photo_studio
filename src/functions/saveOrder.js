import * as firebase from "firebase";

export default function saveOrder(inputs, path) {
  //save those values in obj and add to array
  const inputsArray = [];
  for (const input of inputs) {
    inputsArray.push({
      id: input.id,
      order: input.value,
    });
  }
  //conect with db and update order for each panel
  const db = firebase.database();
  const ref = db.ref(path);
  inputsArray.forEach(({ id, order }) => {
    ref
      .child(id)
      .update({ order })
      .catch((error) => {
        alert(error.name);
        window.location.href = "/";
      });
  });
}
