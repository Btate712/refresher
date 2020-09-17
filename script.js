const changeUserToName = () => {
  const name = document.getElementById("name-input").value;
  const nameSlot = document.getElementById("name");
  nameSlot.innerText = name;
}

const align = direction => {
  const h1 = document.querySelector("h1");
  h1.className = direction;
}