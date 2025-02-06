let carts = JSON.parse(localStorage.getItem("carts")) || [];
let BASE_URL = "https://676a9fb7863eaa5ac0df14f1.mockapi.io/asaxiy";
const loader = document.getElementById("load");

const cards = document.querySelector(".cards");
const getDataFuncForFetch = async () => {
  loadingbegin();
  const request = await fetch(BASE_URL);
  const response = await request.json();
  loadingstop();

  return response;
};

getDataFuncForFetch().then((data) => {
  getdatauseui(data);
  type(data);
  searchdata(data);
});
let toast = document.querySelector(".toast");

function getdatauseui(data) {
  data.forEach((value) => {
    addUIdata(value);
  });
  let newarrforshop = [];
  let kupitbtn = document.querySelectorAll(".kupitbtn");

  kupitbtn.forEach((value, idx) => {
    value.addEventListener("click", () => {
      if (!newarrforshop.includes(idx) || newarrforshop == []) {
        newarrforshop.push(idx);
        toast.textContent = "Added To 🛒";

        toast.classList.remove("left-[-100%]");
        toast.classList.add("left-[20px]");

        toast.classList.remove("bg-blue-600");
        toast.classList.add("bg-green-400");

        toast.style.transition = "0.5s";
        setTimeout(() => {
          addshop(data[idx]);
          window.location.href = "./info.html";
        }, 1000);
      }
    });
  });
  let likebtn = document.querySelectorAll(".likebtn");
  likebtn.forEach((value, idx) => {
    value.addEventListener("click", () => {
      if (!newarrforshop.includes(idx) || newarrforshop == []) {
        newarrforshop.push(idx);
        toast.textContent = "Added To ♥️ ";

        toast.classList.remove("left-[-100%]");
        toast.classList.add("left-[20px]");

        toast.classList.remove("bg-blue-600");
        toast.classList.add("bg-green-400");

        toast.style.transition = "0.5s";
        setTimeout(() => {
          likeshop(data[idx]);

          window.location.href = "./info.html";
        }, 1000);
      }
    });
  });
}

function addUIdata(value) {
  function data_i(params) {
    const i = `<i class="fa-solid gold fa-star"></i>`;
    const i2 = `<i class="fa-solid gray fa-star"></i>`;
    return i.repeat(params) + i2.repeat(5 - params);
  }

  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div>
      <img class="imgofcard mx-auto" src="${
        value?.img || "default-image.jpg"
      }" alt="" />
    </div>
    <div class="txtarea p-[15px]">
      <h1 class="text-[14px] multi-line font-medium">${
        value?.name || "No Title"
      }</h1>
      <div class="stars flex items-center justify-between my-[8px]">
        <p class="text-[6px] flex items-center gap-1">${data_i(5)}</p>
        <p>${value?.have || 0} отзывов</p>
      </div>
      <div class="prices">
        <p class="text-[12px] font-normal text-[#94a3b8]">
          <s>${value?.old_price} сум</s>
        </p>
        <p class="text-[18px] font-bold text-[#006bff] my-[4px]">${
          value?.price || 0
        } сум</p>
        <button class="text-[#fe7300] border rounded-md border-[#fe7300] p-[6px] w-[100%] text-left text-[14px] font-medium hover:bg-[#fe7300] hover:text-white transition-all active:scale-95">
          ${value?.month_payment} сум x ${value?.month} мес
        </button>
      </div>
      <div class="btns flex items-center gap-1 mt-[15px]">
        <button id="${
          value?.id
        }" class="flex kupitbtn items-center gap-2 w-[100%] text-center text-white text-[13px] bg-[#006bff] px-4 py-2 rounded-[10px] hover:text-[#006bff] border border-[#006bff] hover:bg-white transition-all active:scale-95">
          Купить
        </button>
        <button  id="${
          value?.id
        }"  class="flex likebtn  items-center gap-2  text-center text-white text-[13px] bg-[#006bff] px-4 py-2 rounded-[10px] hover:text-[#006bff] border border-[#006bff] hover:bg-white transition-all active:scale-95">
          <i class="fa-regular fa-heart"></i>
        </button>
      </div>
    </div>`;

  cards.append(card);
}

function addshop(data) {
  carts.push(data);

  localStorage.setItem("carts", JSON.stringify(carts));
  datacount();
}
datacount();

function datacount() {
  let countershop = carts.length || 0;
  const toptxt = document.querySelector(".toptxt");
  toptxt.innerHTML = countershop;
}
let likes = JSON.parse(localStorage.getItem("likes")) || [];

function likeshop(data) {
  likes.push(data);

  localStorage.setItem("likes", JSON.stringify(likes));
  datacountlike();
}
datacountlike();

function datacountlike() {
  let countershop = likes.length || 0;
  const toptxtlike = document.querySelector(".toptxtlike");
  toptxtlike.innerHTML = countershop;
}
let btns = document.querySelector(".btns");
function type(data) {
  btns.addEventListener("click", (e) => {
    if (e.target.id !== "" && e.target.id !== "all") {
      const categorydata = data.filter((value) => value.type === e.target.id);
      console.log(categorydata);

      cards.innerHTML = "";
      getdatauseui(categorydata);
    } else if (e.target.id === "all") {
      cards.innerHTML = "";
      getdatauseui(data);
    }
  });
}
function loadingstop() {
  loader.style.display = "none";
}
function loadingbegin() {
  loader.style.display = "flex";
}
function addsmth() {
  if (!localStorage.getItem("access_token")) {
    window.location.href = "./index.html";
  }
}
addsmth();
const signout = document.querySelector(".signout");
const user = document.querySelector(".user");

signout.addEventListener("click", (e) => {
  const data = confirm("maulotlar ochib ketadi ");
  if (data) {
    localStorage.clear();
    window.location.href = "./index.html";
  }
});
if (localStorage.getItem("access_token")) {
  user.innerHTML = `<img src="./src/assets/svg/user.svg" alt="" />${JSON.parse(
    localStorage.getItem("access_token")
  )}`;
}

let loadeingcards = document.querySelector(".cards1");
loadeingcards.style.display = "none";
const form = document.querySelector("#form");
const input = document.querySelector("#input");
function searchdata(data) {
  form.addEventListener("click", (e) => {
    e.preventDefault();
    const search = input.value;
    const searchdata = data.filter((value) => {
      let kichckina = value.name.toLowerCase().trim();
      return kichckina.includes(search.toLowerCase().trim());
    });
    cards.innerHTML = "";
    if (searchdata.length !== 0) {
      getdatauseui(searchdata);
      loadeingcards.style.display = "none";
    } else {
      loadeingcards.style.display = "flex";
      loadeingcards.style.alignItems = "center";
      loadeingcards.style.justifyContent = "center";
      loadeingcards.innerHTML = `<h1 class="notfound">Item Not found <i class="fa-solid fa-link-slash"></i></h1>`;
    }
  });
}
