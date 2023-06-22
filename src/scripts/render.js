export function renderUser(usuario) {
  const divProfile = document.querySelector(".profile_div");

  const imgProfile = document.createElement("img");
  const nameProfile = document.createElement("p");

  imgProfile.classList.add("profile__img");
  imgProfile.src = usuario.avatar_url;
  imgProfile.alt = usuario.name;

  nameProfile.innerHTML = usuario.name;
  nameProfile.classList.add("profile__name");

  divProfile.append(imgProfile, nameProfile);
}

export  async function renderRepos() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const ul = document.querySelector(".profile__ul");
  await fetch (`https://api.github.com/users/${usuario.login}/repos`, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((item) => {
      item.forEach((repositorio) => {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        const p = document.createElement("p");
        const a = document.createElement("a");

        h4.innerHTML = repositorio.name;
        a.innerHTML = "Repositórios";
        a.href = repositorio.html_url;
        a.target = "_blank";
        repositorio.description === null
          ? (p.innerHTML = "Repositório sem descrição")
          : (p.innerHTML = repositorio.description);

        li.append(h4, p, a);
        ul.append(li);
      });
    });
}
