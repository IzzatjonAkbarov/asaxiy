const Base_url = `https://676a9fb7863eaa5ac0df14f1.mockapi.io/izzatillo`;
let form = document.querySelector("#form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let name = document.querySelector("#name");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = {
    email: email.value,
    password: password.value,
    name: name.value,
  };
  fetch(Base_url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json" },
  })
    .then((data) => data.json())
    .then((data) => {
      setTimeout(() => {
        window.location.href = "./index.html";
      }, 2000);
      console.log(data);
    });
  let toast = document.querySelector(".toast");
  toast.textContent = "Signed in successfully ☑️";

  toast.classList.remove("right-[-100%]");
  toast.classList.add("right-[20px]");

  toast.style.transition = "1s";
});
