let getTokenLogin = window.localStorage.getItem("token-login");
// console.log(getTokenLogin);
let elProList = document.querySelector(".todo__list");
let elFormUser = document.querySelector(".form__pro");
let elInputName = document.querySelector(".pro__name");
let elInputDesc = document.querySelector(".pro__desc");
let elInputImg = document.querySelector(".pro__img");
let elInputPrice = document.querySelector(".pro__price");


// console.log(elFormUser,elFormUserInput);

// edit Modal

let elModalName = document.querySelector(".modal__name");
let elModalDesc = document.querySelector(".modal__desc");
let elModalImg = document.querySelector(".modal__img");
let elModalPrice = document.querySelector(".modal__price");

//  Home btn
let elHomeBtn = document.querySelector(".home__btn");
let elOrderBtn = document.querySelector(".btn__order");
let elAdminBtn = document.querySelector(".btn__admin");

// product
let elAddProduct = document.querySelector(".add__product");
let elShopIcon = document.querySelector(".war__order");




if (!getTokenLogin) {
  window.location.reload();
  window.location.pathname = "login.html"
}

// setTimeout(()=>{
//   window.localStorage.removeItem("token-login");
//   window.location.reload();
// },10000);

function createProduct(){
    let formData = new FormData();
    formData.append("product_name", elInputName.value.trim());
    formData.append("product_desc", elInputDesc.value.trim());
    formData.append("product_img", elInputImg.files[0]);
    formData.append("product_price", elInputPrice.value.trim());

  fetch("http://localhost:5000/product",{
    method: "POST",
    headers:{
      Authorization: getTokenLogin
    },

    body: formData
    
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
};

// get fetch
function getProductAdmin(){
  fetch("http://localhost:5000/product",{
  headers:{
    Authorization: getTokenLogin
  }
})
.then(req => req.json())
.then(data => {
  // console.log(data);
  elProList.innerHTML = ""
  let listFragment = new DocumentFragment();
  if (data.length > 0) {
     data.forEach(item => {
      let newItem = document.createElement("li");
      newItem.setAttribute("class","mb-3")
      let info =
      `
      <div class="card">
      <img src="http:////localhost:5000/${item.product_img}" class="card-img-top img-thumbnail" alt="...">
      <div class="card-body">
        <h5 class="card-title fw-bold">${item.product_name}</h5>
        <p class="card-text">( ${item.product_desc} )</p>
        <span class="price fw-bold">Prise: <span class=" text-success">${item.product_price}</span> $</span>
        <button class="edit__btn btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id=${item.id}>Edit</button>
        <button class="delet__btn btn btn-danger" data-id=${item.id} >Delet</button>
      </div>
    </div>
      `
      newItem.innerHTML = info;
      listFragment.appendChild(newItem);
      elProList.appendChild(listFragment);
     })
  }
})
}

// home product



function getProductHome(){
  fetch("http://localhost:5000/product",{
  headers:{
    Authorization: getTokenLogin
  }
})
.then(req => req.json())
.then(data => {
  // console.log(data);
  elProList.innerHTML = ""
  let listFragment = new DocumentFragment();
  if (data.length > 0) {
     data.forEach(item => {
      let newItem = document.createElement("li");
      newItem.setAttribute("class","mb-4")
      let info =
      `
      <div class="card__home">
      <div class="p-1">
      <img src="http:////localhost:5000/${item.product_img}" class="card-img-top card__img img-thumbnail" alt="...">
    </div>
      
      <div class="card-body">
        <h5 class="card-title fw-bold h4">${item.product_name}</h5>
        <p class="card-text">${item.product_desc}</p>
        <span class="price fw-bold">Prise: <span class=" text-success">${item.product_price}</span> $</span>
        <button class="order__btn btn " data-id=${item.id} ></button>
      </div>
    </div>
      `
      newItem.innerHTML = info;
      listFragment.appendChild(newItem);
      elProList.appendChild(listFragment);
     })
  }
})
}

getProductAdmin()

elFormUser.addEventListener("submit", function(evt){
  evt.preventDefault();
  getProductAdmin()
  createProduct()
  window.location.reload();
});





// btn section
elHomeBtn.addEventListener("click", function(){
  getProductHome();
  elAddProduct.classList.add("show-off");
  elShopIcon.classList.remove("show-off");
})

elAdminBtn.addEventListener("click", function(){
  getProductAdmin();
  elAddProduct.classList.remove("show-off");
  elAddProduct.classList.add("show-on");
  elShopIcon.classList.add("show-off");
})





