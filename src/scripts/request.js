export async function requestUser(userName) {
  const user = await fetch(`https://api.github.com/users/${userName}`, {
    method: "GET",
  }).then(async (response) => {
    if (response.ok) {
      const responseJson = await response.json();

      localStorage.setItem("usuario", JSON.stringify(responseJson));
      location.replace("./src/pages/profile.html");
    } else {
      location.replace("./src/pages/error.html");
    }
  });
  return user;
}
