let elForm = document.querySelector(".form_login");
let elUserEmail = document.querySelector(".form__email_login");
let elUserPassword = document.querySelector(".form__password_login");

elForm.addEventListener("submit",(evt)=>{
  evt.preventDefault();
  // console.log(elUserName.value,elUserEmail.value,elUserPhone.value,elUserPassword.value);

  fetch("http://localhost:5000/user/login",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(
      {
        email:elUserEmail.value,
        password:elUserPassword.value
      }
    )
  })
  .then(res => res.json())
  .then(data => {
    window.localStorage.setItem("token-login", data.token)
   window.location.replace("index.html")
    console.log(data.token);
  })
  .catch(err => console.log("Error"))
})