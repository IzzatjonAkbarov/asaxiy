function addsmth() {
  if (!localStorage.getItem("access_token")) {
    window.location.href = "./index.html";
  }
}
addsmth();
const signout = document.querySelector(".signout");
signout.addEventListener("click", (e) => {
  const data = confirm("maulotlar ochib ketadi ");
  if (data) {
    window.location.href = "./index.html";

    localStorage.removeItem("likes");
  }
});
let likes = JSON.parse(localStorage.getItem("likes"));
let products = document.querySelector(".products");
let imgnotfound = document.querySelector(".notfound");

function renderui(likes) {
  if (likes) {
    imgnotfound.style.display = "none";
    likes.forEach((element) => {
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
                <p class="font-normal text-base leading-7 text-gray-500 mb-6">
               ${element.name}
                <a href="javascript:;" class="text-indigo-600">More....</a>
              </p>
                <button id=${element.id}
                  class="rounded-full deleteelement group flex items-center justify-center focus-within:outline-red-500">
                  delete
                </button>
              </div>
              
              <div class="flex justify-between items-center">
                
                <h6
                  class="text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right">
                ${element.price.toLocaleString()} so'm
                </h6>
              </div>
            </div>
          </div>`;
      products.append(product);
    });
  }
  if (likes == "") {
    imgnotfound.style.display = "block";
  }
}
renderui(likes);
let toast = document.querySelector(".toast");

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

      renderui(likes);

      window.location.href = "./llike.html";
    }, 1000);
  }
});
function deleteUi(id) {
  likes = likes.filter((value) => value.id !== id);
  localStorage.setItem("likes", JSON.stringify(likes));
}
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
