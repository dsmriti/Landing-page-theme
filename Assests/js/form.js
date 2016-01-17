


function validateForm()
 {
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) 
    {
        alert("Not a valid e-mail address");
        return false;
    }
}

function checkPassword()
{
 var password = document.getElementById("password");
 var confirm_password = document.getElementById("confirm_password");


  if(password.value != confirm_password.value) 
  {
    confirm_password.setCustomValidity("Passwords Doesn't Match..!");

  } 
  else 
  {
    confirm_password.setCustomValidity('');
  }
}

