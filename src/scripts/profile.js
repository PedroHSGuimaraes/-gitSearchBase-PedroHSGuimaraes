import {renderRepos, renderUser } from "./render.js";

export function showUserInfo() {
  const user = JSON.parse(localStorage.getItem("usuario"));

  renderUser(user);
 
}

function returnUser() {
  const buttonReturn = document.querySelector(".profile__button-return");
  buttonReturn.addEventListener("click", () => {
    localStorage.clear();
    location.replace("../../index.html");
  });
}


renderRepos();
showUserInfo();
returnUser();
