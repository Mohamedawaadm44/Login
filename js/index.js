var SignUpLink = document.querySelector("#SignUpLink");
var SignInFormMail = document.querySelector("#SignInFormMail");
var SignInFormPass = document.querySelector("#SignInFormPass");
var SignInFormBtn = document.querySelector("#SignInFormBtn");
var SignInFormError = document.querySelector("#SignInFormError");

var localStorageArr = [];

var userNameRegex = /^[a-z0-9_-]{3,15}$/;
var userMailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
var userPassRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

SignUpLink.addEventListener("click", function () {
  window.location.href = "signup.html";
});

SignInFormBtn.addEventListener("click", function () {
  getLoginData();
});

function getLoginData() {
  SignInFormError.classList.add("d-none");
  if (
    userMailRegex.test(SignInFormMail.value) &&
    userPassRegex.test(SignInFormPass.value)
  ) {
    var SignInFormObj = {
      usermail: SignInFormMail.value,
      userpass: SignInFormPass.value,
    };

    checkLoginData(SignInFormObj);
  } else if (SignInFormMail.value === "" || SignInFormPass.value === "") {
    SignInFormError.innerHTML = "All inputs is required";
    SignInFormError.classList.remove("d-none");
  } else {
    SignInFormError.classList.remove("d-none");
    SignInFormError.innerHTML = "All inputs are not true";
  }
}

function checkLoginData(SignInFormObj) {
  localStorageArr = JSON.parse(localStorage.getItem("signedIn"));
  if (localStorageArr != null) {
    for (var i = 0; i < localStorageArr.length; i++) {
      if (
        SignInFormObj.usermail.toLowerCase() ==
          localStorageArr[i].usermail.toLowerCase() &&
        SignInFormObj.userpass.toLowerCase() ==
          localStorageArr[i].userpass.toLowerCase()
      ) {
        localStorage.setItem("member", JSON.stringify(localStorageArr[i]));
        window.location.href = "home.html";
        return;
      }
    }
  }

  window.location.href = "signup.html";
}
