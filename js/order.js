
// async function postOrder(id) {
//   const formData = new FormData();
//   formData.append("product_id", Number(id));
  
//   try {
//     const response = await fetch("http://localhost:5000/order", {
//     method: "POST",
//     headers: {
//       Authorization: getTokenLogin,
//     }, 
    
//     body:JSON.stringify(
//       {
//         product_id: Number(id)
//       }
//       )
//     });
    
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// }


// elProList.addEventListener("click",function(evt){
//   if (evt.target.matches(".order__btn")) {
//     let id = evt.target.dataset.id;
//     createOrder(id)
//     // console.log(id);
//     // window.location.reload();
//   }
// });


