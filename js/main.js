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
  function data_i(params) {
    const i = `<i class="fa-solid gold fa-star"></i>`;
    const i2 = `<i class="fa-solid gray fa-star"></i>`;
    console.log(params);

    return i.repeat(params) + i2.repeat(5 - params);
  }
  data.forEach((value) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div>
              <img class="imgofcard mx-auto" src=${value.image} alt="" />
            </div>
            <div class="txtarea p-[15px]">
              <h1 class="text-[14px] font-medium">
              ${value.title}
              </h1>
              <div class="stars flex items-center justify-between my-[8px]">
                <p class="text-[6px] flex items-center gap-1" >
                ${data_i(Math.round(value.rating.rate))} 
                </p>
                <p>${value.rating.count} отзывов</p>
              </div>
              <div class="prices">
                <p class="text-[12px] font-normal text-[#94a3b8]">
                  <s>${Math.round(value.price + (value.price % 2))} сум</s>
                </p>
                <p class="text-[18px] font-bold text-[#006bff] my-[4px]">
                  ${value.price} сум
                </p>
                <button
                  class="text-[#fe7300] border rounded-md border-[#fe7300] p-[6px] w-[100%] text-left text-[14px] font-medium hover:bg-[#fe7300] hover:text-white transition-all active:scale-95">
                 ${Math.ceil(value.price / 12) + 10} сум x 12 мес
                </button>
              </div>
              <div class="btns flex items-center gap-1 mt-[15px]">
                <button
                  class="flex items-center gap-2 w-[100%] text-center text-white text-[13px] bg-[#006bff] px-4 py-2 rounded-[10px] hover:text-[#006bff] border border-[#006bff] hover:bg-white transition-all active:scale-95">
                  Купить в один клик
                </button>
                <button
                  class="flex items-center gap-2 text-white bg-[#00bfaf] px-4 py-2 rounded-[10px] hover:text-[#00bfaf] border border-[#00bfaf] hover:bg-white transition-all active:scale-95">
                  <i class="fa-regular fa-heart"></i>
                </button>
              </div>
            </div>`;
    cards.append(card);
  });
}
