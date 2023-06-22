import { requestUser } from "./request.js";

function findUser() {
  const button = document.querySelector(".index__button");
  const input = document.querySelector(".index__input");
  const spinner = document.querySelector("#spinner");
  button.addEventListener("click", () => {
   spinner.classList.add("spinner--active");
    const userName = input.value;

    localStorage.setItem("userName", userName);

    requestUser(userName);

  });
}

findUser();
