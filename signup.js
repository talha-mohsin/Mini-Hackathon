// SIGNUP
function signup() {
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;

      if (!name || !email || !password) {
        alert("Please fill all the fields!");
      } else {
        alert("Signup successful (UI only)");
      }
    }