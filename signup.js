// SIGNUP
function signup() {
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;

      if(password.length < 8){
        alert("Password should be atleast 8 digits long!");
      }
      
      if (!name || !email || !password) {
        alert("Please fill all the fields!");
      } else {
        alert("Signup successful!");
        window.location = "login.html";
      }
    }