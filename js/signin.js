// let signin = document.querySelector("signin");
// signin.addEventListener("click", () => {
//   localStorage.setItem("access_token", "somethign");
//   window.location.href = "./signin.html";
// });
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
      console.log(data), (window.location.href = "./index.html");
    });
});
// const form = document.getElementById("form");

// const loginPage = async () => {
//   const request = await fetch({ Base_url, method: "POST" });
//   const response = await request.json();

//   return response;
// };

// form.addEventListener("submit", (e) => {
//   const emailValue = document.getElementById("email").value;
//   const passwordValue = document.getElementById("password").value;
//   e.preventDefault();
//   loginPage().then((data) => {
//     findpassWord(data);
//   });
//   function findpassWord(data) {
//     let user = data.find((u) => {
//       u.email === emailValue && u.password === passwordValue;
//       if (u.email === emailValue && u.password === passwordValue) {
//         window.location.href = "info.html";
//         localStorage.setItem("access_token", JSON.stringify(u.name));
//       } else {
//         const notfound = document.querySelector(".notfound");
//         console.log(notfound);

//         notfound.style.color = "red";
//         notfound.innerHTML = "error data not found";
//       }
//     });
//   }
// }); //   fetch(Base_url, {
//     method: "POST",
//     body: JSON.stringify({
//       email: emailValue,
//       password: passwordValue,
//     }),
//     headers: { "Content-Type": "application/json" },
//   })
//     .then((data) => {
//       console.log(data);
//       go(data);
//     })
//     .catch((err) => {
//       console.log(err.statusText);
//     });
// john@mail.com
// changeme
// function go(data) {
//   if (data.status !== 401) {
//     window.location.href = "info.html";
//     localStorage.setItem(
//       "access_token",
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjc0NDk0MDI4fQ.kCak9sLJr74frSRVQp0_27BY4iBCgQSmoT3vQVWKzJg"
//     );
//     localStorage.setItem(
//       "refresh_token",
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjcyODAyMDI4fQ.P1_rB3hJ5afwiG4TWXLq6jOAcVJkvQZ2Z-ZZOnQ1dZw"
//     );
//   }
// }
