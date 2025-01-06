let carts = JSON.parse(localStorage.getItem("carts")) || [];

const cards = document.querySelector(".cards");
const getDataFuncForFetch = async () => {
  const request = await fetch("https://fakestoreapi.com/products");
  const response = await request.json();
  return response;
};

getDataFuncForFetch().then((data) => {
  getdatauseui(data);
});

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

        addshop(data[idx]);
      }
    });
  });
  let likebtn = document.querySelectorAll(".likebtn");
  likebtn.forEach((value, idx) => {
    value.addEventListener("click", () => {
      if (!newarrforshop.includes(idx) || newarrforshop == []) {
        newarrforshop.push(idx);

        likeshop(data[idx]);
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
        value.image || "default-image.jpg"
      }" alt="" />
    </div>
    <div class="txtarea p-[15px]">
      <h1 class="text-[14px] multi-line font-medium">${
        value.title || "No Title"
      }</h1>
      <div class="stars flex items-center justify-between my-[8px]">
        <p class="text-[6px] flex items-center gap-1">${data_i(
          Math.round(value.rating?.rate || 0)
        )}</p>
        <p>${value.rating?.count || 0} отзывов</p>
      </div>
      <div class="prices">
        <p class="text-[12px] font-normal text-[#94a3b8]">
          <s>${Math.round(value.price + (value.price % 2)) || 0} сум</s>
        </p>
        <p class="text-[18px] font-bold text-[#006bff] my-[4px]">${
          value.price || 0
        } сум</p>
        <button class="text-[#fe7300] border rounded-md border-[#fe7300] p-[6px] w-[100%] text-left text-[14px] font-medium hover:bg-[#fe7300] hover:text-white transition-all active:scale-95">
          ${Math.ceil((value.price || 0) / 12) + 10} сум x 12 мес
        </button>
      </div>
      <div class="btns flex items-center gap-1 mt-[15px]">
        <button id="${
          value.id
        }" class="flex kupitbtn items-center gap-2 w-[100%] text-center text-white text-[13px] bg-[#006bff] px-4 py-2 rounded-[10px] hover:text-[#006bff] border border-[#006bff] hover:bg-white transition-all active:scale-95">
          Купить в один клик
        </button>
        <button  id="${
          value.id
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
function datacountlike() {
  let countershop = likes.length || 0;
  const toptxtlike = document.querySelector(".toptxtlike");
  toptxtlike.innerHTML = countershop;
}
