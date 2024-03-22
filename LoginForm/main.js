function togglePassword() {
    let passwordInput = document.getElementById("password");
    let showPass = document.querySelector('.show_pass');
    let hidePass = document.querySelector('.hide_pass');
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      if (showPass) showPass.style.display = "none";
      if (hidePass) hidePass.style.display = "inline-block";
    } else {
      passwordInput.type = "password";
      if (showPass) showPass.style.display = "inline-block";
      if (hidePass) hidePass.style.display = "none";
    }
  }

// hide and show password

  function validate(){
    let input = document.getElementById('username')
    let isValid = input.checkValidity();
    let error_user = document.getElementById('username-error')
    let ValidPass = document.getElementById('password')
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;'?\/><.,])(?=.*[a-zA-Z0-9]).{8,}$/;
    let error_pass = document.getElementById('password-error')
    if (!isValid){
      error_user.style.display = 'block';
    }
    else {
      error_user.style.display = 'none';
    }
    if (!passwordRegex.test(ValidPass.value)){
      error_pass.style.display = 'block';
    }
    else {
      error_pass.style.display = 'none';
    }
    if(isValid && passwordRegex.test(ValidPass.value)){
      window.location.href = "https://bnhan2710.github.io/S-GroupLearn/contact-crud/";
    }
  }
 
// valid username Check

