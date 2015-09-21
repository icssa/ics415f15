var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';

function getClasses(elem) {
  var classList = document.getElementById(elem).className.split(/\s+/);

  //append to element with TEST id for testing
  document.getElementById("TEST").innerHTML = "";
  for (var i = 0; i < classList.length; i++) {
    document.getElementById("TEST").innerHTML += classList[i] + " ";
  }

  console.log(classList);

  return classList;
}

function addClass(elem, className) {
  document.getElementById(elem).className += " " + className;
  //innerHTML to test
  document.getElementById(elem).innerHTML = className;

}

function validateForm() {
  var x = document.forms["myForm"].elements;
  var username = x[0].value;
  var email = x[1].value;
  var password = x[2].value;
  var confirm = x[3].value;
  console.log(username);
  console.log(email);
  console.log(password);
  console.log(confirm);

  //document.getElementById("TEST").innerHTML = username;
  if (username == null || username == "") {

    document.getElementById("errormsg").innerHTML = "Name must be filled out";

    event.preventDefault();
    document.getElementById("username").style.backgroundColor = "red";
    return false;
  }
  document.getElementById("username").style.backgroundColor = "white";
  if (email == null || email == "") {
    document.getElementById("errormsg").innerHTML = "Email must be filled out";
    event.preventDefault();
    document.getElementById("email").style.backgroundColor = "red";
    return false;
  }
  document.getElementById("email").style.backgroundColor = "white";
  if (password == null || password == "") {
    document.getElementById("errormsg").innerHTML = "Password must be filled out";
    event.preventDefault();
    document.getElementById("password").style.backgroundColor = "red";
    return false;
  }
  document.getElementById("password").style.backgroundColor = "white";
  if (confirm == null || confirm == "") {
    document.getElementById("errormsg").innerHTML = "Confirm password must be filled out";
    event.preventDefault();
    document.getElementById("confirm").style.backgroundColor = "red";
    return false;
  }
  document.getElementById("confirm").style.backgroundColor = "white";
  if (password != confirm) {
    document.getElementById("errormsg").innerHTML = "Password and password confirm must match.";
    event.preventDefault();
    document.getElementById("password").style.backgroundColor = "red";
    document.getElementById("confirm").style.backgroundColor = "red";
    return false;
  }
  document.getElementById("password").style.backgroundColor = "white";
  document.getElementById("confirm").style.backgroundColor = "white";

  return true;

}
