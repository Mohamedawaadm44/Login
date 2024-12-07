var SignInLink = document.querySelector("#SignInLink");
var SignUpFormUserName = document.querySelector("#SignInFormUserName");
var SignUpFormMail = document.querySelector("#SignUpFormMail");
var SignUpFormPass = document.querySelector("#SignUpFormPass");
var SignUpFormBtn = document.querySelector("#SignUpFormBtn");
var SignUpFormError = document.querySelector("#SignUpFormError");

var StorageArr = [];
if (JSON.parse(localStorage.getItem("signedIn")) != null) {
  StorageArr = JSON.parse(localStorage.getItem("signedIn"));
}


var userNameRegex = /^[a-z0-9_-]{3,15}$/;
var userMailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
var userPassRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

SignInLink.addEventListener("click", function () {
  window.location.href = "index.html";
});

SignUpFormBtn.addEventListener("click", function () {
  if (
    userNameRegex.test(SignUpFormUserName.value) &&
    userMailRegex.test(SignUpFormMail.value) &&
    userPassRegex.test(SignUpFormPass.value)
  ) {
    var SignUpFormObj = {
      username: SignUpFormUserName.value,
      usermail: SignUpFormMail.value,
      userpass: SignUpFormPass.value,
    };
    StorageArr.push(SignUpFormObj);
    localStorage.setItem("signedIn", JSON.stringify(StorageArr));
    SignUpFormError.innerHTML = "Success";
    SignUpFormError.classList.replace("text-danger", "text-success");
    window.location.href = "index.html";
  } 
  else if(SignUpFormUserName.value=="" || SignUpFormMail.value=="" || SignUpFormPass.value=="" ){
    SignUpFormError.innerHTML = "All inputs is required";
    SignUpFormError.classList.replace("text-success", "text-danger");
    SignUpFormError.classList.remove("d-none");
  }
  else {
    SignUpFormError.innerHTML = "All inputs are not true";
    SignUpFormError.classList.replace("text-success", "text-danger");
    SignUpFormError.classList.remove("d-none");
  }
});
