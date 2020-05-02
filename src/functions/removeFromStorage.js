export default function removeFromStorage(ref) {
  ref.delete().catch((error) => {
    alert(error.name);
    window.location.href = "/";
  });
}
