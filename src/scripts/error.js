function handleNavegation() {
  const buttonReturn = document.querySelector("#backbutton");
  buttonReturn.addEventListener("click", () => {
    localStorage.clear();
    location.replace("../../");
  });
}

handleNavegation();