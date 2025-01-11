let carts = JSON.parse(localStorage.getItem("carts"));
let products = document.querySelector(".products");
let imgnotfound = document.querySelector(".notfound");
const signout = document.querySelector(".signout");
const user = document.querySelector(".user");

signout.addEventListener("click", (e) => {
  const data = confirm("maulotlar ochib ketadi ");
  if (data) {
    window.location.href = "./index.html";

    localStorage.clear();
  }
});
if (localStorage.getItem("access_token")) {
  user.innerHTML = `<img src="./src/assets/svg/user.svg" alt="" />${JSON.parse(
    localStorage.getItem("access_token")
  )}`;
}

function renderui(carts) {
  products.innerHTML = ``;
  if (carts) {
    imgnotfound.style.display = "none";
    carts.forEach((element) => {
      let product = document.createElement("div");
      product.innerHTML = `
    <div
            class="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4">
            <div class="col-span-12 lg:col-span-2 img box">
              <img
                src=${element.img}
                alt="speaker image"
                class="max-lg:w-full lg:w-[180px] rounded-lg object-cover" />
            </div>
            <div class="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
              <div class="flex items-center justify-between w-full mb-4">
                <h5
                  class="font-manrope font-bold text-2xl leading-9 text-gray-900">
                  ${element.name}
                </h5>
                <button id=${element.id}

                  class="rounded-full deleteelement group flex items-center justify-center focus-within:outline-red-500">
                 delete
                </button>
              </div>
              <p class="font-normal text-base leading-7 text-gray-500 mb-6">
               ${element.name}
                <a href="javascript:;" class="text-indigo-600">More....</a>
              </p>
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-4">
                  <button  id=${element.id}
                    class="group decrement rounded-[50px] text-2xl border border-gray-200 shadow-sm shadow-transparent px-2 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                   -
                  </button>
                 <span class="countOfTheElement">${element.count}</span>
                  <button id=${element.id}
                    class="group  increment deletebtn text-2xl rounded-[50px] border border-gray-200 shadow-sm shadow-transparent px-2 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                    +
                  </button>
                </div>
                <h6 
                  class="text-indigo-600  font-manrope font-bold text-2xl leading-9 text-right">
                ${element.price} so'm
                </h6>
              </div>
            </div>
          </div>`;
      products.append(product);
    });
  }
  if (carts == "") {
    imgnotfound.style.display = "block";
  }
}
renderui(carts);
let toast = document.querySelector(".toast");

const deleteelement = document.querySelector(".deleteelement");
products.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteelement")) {
    toast.textContent = "Product Deleted";

    toast.classList.remove("left-[-100%]");
    toast.classList.add("left-[20px]");

    toast.classList.remove("bg-blue-600");
    toast.classList.add("bg-red-400");

    toast.style.transition = "0.5s";
    setTimeout(() => {
      deleteUi(e.target.id);

      window.location.href = "./shop.html";
    }, 1000);
  }
  if (e.target.classList.contains("increment")) {
    carts.map((value) => {
      console.log(value.active_price);

      if (value.id == e.target.id) {
        return {
          ...value,
          count: (value.count += 1),
          price: value.count * value.active_price,
        };
      }
    });
  }
  if (e.target.classList.contains("decrement")) {
    carts.map((value) => {
      if (value.id == e.target.id) {
        if (value.count == 1) {
          deleteUi(e.target.id);
        } else {
          return {
            ...value,
            count: (value.count -= 1),
            price: value.count * value.price,
          };
          console.log(e.target.id);
        }
        renderui(carts);
      }
    });
  }
  renderui(carts);
});
function deleteUi(id) {
  carts = carts.filter((value) => value.id !== id);
  localStorage.setItem("carts", JSON.stringify(carts));
}
renderui(carts);
function addsmth() {
  if (!localStorage.getItem("access_token")) {
    window.location.href = "./index.html";
  }
}
addsmth();
