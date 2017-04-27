window.onload = function() {
  var audio = document.getElementById("audio").volume = 0.15;
  var password = document.getElementById("password")
    , confirm_password = document.getElementById("confirm_password");

  function validatePassword(){
    if(password.value != confirmPass.value) {
      confirmPass.setCustomValidity("Passwords Don't Match");
    } else {
      confirmPass.setCustomValidity('');
    }
  }

  password.onchange = validatePassword;
  confirmPass.onkeyup = validatePassword;
};
