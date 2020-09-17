const changeUserToName = () => {
  const name = document.getElementById("name-input").value;
  const nameSlot = document.getElementById("name");
  nameSlot.innerText = name;
}