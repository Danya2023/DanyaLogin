function checkLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "admin" && password === "12345") {
    window.location.href = "admin.html";
  } else if (username === "user" && password === "0000") {
    window.location.href = "user.html";
  } else {
    alert("Incorrect username or password");
  }
}
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
});
