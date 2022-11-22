let elForm = document.querySelector(".form");
let elUserName = document.querySelector(".form__user");
let elUserEmail = document.querySelector(".form__email");
let elUserPhone = document.querySelector(".form__phone");
let elUserPassword = document.querySelector(".form__password");
let elBtn = document.querySelector(".form__password");

async function register() {
  try {
    const response = await fetch("http://localhost:5000/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: elUserName.value.trim(),
        email: elUserEmail.value.trim(),
        phone: elUserPhone.value.trim(),
        password: elUserPassword.value.trim(),
      }),
    });
    let data = await response.json();
    console.log(data);
    if (data.token) {
      window.localStorage.setItem("token-registr", data.token);
      window.location.pathname = "index.html";
    }
  } catch (error) {
    console.log("Error");
  }
}

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  register();
});
