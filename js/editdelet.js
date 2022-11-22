// let elProList = document.querySelector(".todo__list");
// Modal
let elModal = document.querySelector(".new__modal");
let elModalBtn = document.querySelector(".sub__modal");


// console.log(bntId);

// edit 
function editProduct(id , data){
  
  fetch("http://localhost:5000/product/" + id, {
  method: "PUT",
  headers:{
    Authorization:getTokenLogin
  },
  body:data
  
})
.then(req => req.json())
.then(data => console.log(data))
};

var btnId;
elProList.addEventListener("click",function(evt){
  if (evt.target.matches(".edit__btn")) {
    btnId = evt.target.dataset.id;
  }
  
});





elModal.addEventListener("click", function(evt){
  if (evt.target.matches(".sub__modal")) {
    let s = evt.target;
    let formModalData = new FormData();
    formModalData.append("product_name", elModalName.value.trim());
    formModalData.append("product_desc", elModalDesc.value.trim());
    formModalData.append("product_img", elModalImg.files[0]);
    formModalData.append("product_price", elModalPrice.value.trim());
    s.dataset.id = btnId;
    // console.log(btnId);
    editProduct(btnId , formModalData);
    getProductAdmin()
    //  window.location.reload();
  }
})



// delet element
function deletProduct(id){
  fetch("http://localhost:5000/product/" + id, {
  method: "DELETE",
  headers:{
    Authorization:getTokenLogin
  }
})
.then(req => req.json())
.then(data => console.log(data))
}

elProList.addEventListener("click",function(evt){
  if (evt.target.matches(".delet__btn")) {
    let id = evt.target.dataset.id;
    deletProduct(id);
    window.location.reload();
  }
  
});