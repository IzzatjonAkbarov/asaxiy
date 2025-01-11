const Base_url = `https://676a9fb7863eaa5ac0df14f1.mockapi.io/izzatillo`;

const form = document.getElementById("form");

const loginPage = async () => {
  const request = await fetch(Base_url);
  const response = await request.json();

  return response;
};

form.addEventListener("submit", (e) => {
  const emailValue = document.getElementById("email").value;
  const passwordValue = document.getElementById("password").value;
  e.preventDefault();
  loginPage().then((data) => {
    findpassWord(data);
  });
  function findpassWord(data) {
    let user = data.find((u) => {
      u.email === emailValue && u.password === passwordValue;
      if (u.email === emailValue && u.password === passwordValue) {
        localStorage.setItem("access_token", JSON.stringify(u.name));
        let toast = document.querySelector(".toast");
        toast.textContent = "Loged in successfully ☑️";

        toast.classList.remove("right-[-100%]");

        toast.classList.remove("bg-blue-600");
        toast.classList.add("bg-green-600");

        toast.style.transition = "1s";
        toast.classList.add("right-[20px]");
        setTimeout(() => {
          window.location.href = "info.html";
        }, 2000);
      } else {
        // const notfound = document.querySelector(".notfound");
        // notfound.style.color = "red";
        // notfound.innerHTML = "error data not found";
      }
    });
  }
});
