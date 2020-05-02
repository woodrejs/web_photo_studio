const removeFromDataBase = (ref) => {
  ref.remove().catch((error) => {
    alert(error.name);
    window.location.href = "/";
  });
};

export default removeFromDataBase;
