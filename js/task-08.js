const submitBtn = document.querySelector('[type="submit"]');
const loginForm = document.querySelector(".login-form");

submitBtn.addEventListener("click", (ev) => {
  ev.preventDefault();

  let userData = {};
  const emailValue = loginForm.email.value
  const passwordValue = loginForm.password.value

  if (emailValue.trim().length === 0 || passwordValue.trim().length === 0) {
    alert("Усі поля повинні бути заповнені!");
  } else {
    userData[loginForm.email.name] = emailValue;
    userData[loginForm.password.name] = passwordValue;
    console.log(userData);
    loginForm.reset();
  }
});
