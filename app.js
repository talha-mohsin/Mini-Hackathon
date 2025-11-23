function profile() {
  let userDetails = JSON.parse(localStorage.getItem("signupUsers")) || [];
  let loggedinUser = JSON.parse(localStorage.getItem("loggedinUser")) || [];

  if (!loggedinUser) {
    return (window.location = "login.html");
  }
}
profile();