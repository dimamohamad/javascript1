 
// function totalelements()  
// {  
// var allgenders=document.getElementsByName("gender");  
// alert("Total Genders:"+allgenders.length);  
// }  
// // element.addEventListener(event, function, useCapture);  




var header=document.getElementsByTagName("h1")[0];

header.addEventListener("mouseover",function()
{
    header.innerHTML="Can I help you?";
})
header.addEventListener("mouseout",function(){
    header.innerHTML="Hello World!";
})

var IsRed=false
var colorchange=document.getElementById("changecolor")
function changecolortored(){
    if(IsRed){
    colorchange.style.backgroundColor="blue";
} else{
    colorchange.style.backgroundColor="red";

}
IsRed = !IsRed;
}
colorchange.addEventListener("click",changecolortored,false);



const image = document.querySelector(".img1")
  function changeimage(value) {
  image.src=value;
  }


  
  const text = document.querySelector(".box2")
  function changefontfam(value) {
    text.style.fontFamily=value;
  }

  const textsize= document.querySelector(".box2")
  function changefontsize(value) {
    textsize.style.fontSize=value;
  }
  const fontstyle= document.querySelector(".box2")
  function changefontstyle(value) {
   console.log(value);

    if (value) {fontstyle.style.fontStyle="italic"
      
    }
    else{
      fontstyle.style.fontStyle="";
    }
  }
  const fontweight= document.querySelector(".box2")
  function changefontweight(value) {
   console.log(value);

    if (value) {fontweight.style.fontWeight="Bold"
      
    }
    else{
      fontweight.style.fontWeight="";
    }
  }
  const textdecoration= document.querySelector(".box2")
  function changetext(value) {
   console.log(value);

    if (value) {textdecoration.style.textDecoration="Underline"
      
    }
    else{
      textdecoration.style.textDecoration="";
    }
  }
  document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const submitButton = document.getElementById('submitButton');

    // Function to check if passwords match and meet length requirement
    function validatePassword() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long.';
        } else {
            passwordError.textContent = '';
        }

        if (confirmPassword !== password) {
            confirmPasswordError.textContent = 'Passwords do not match.';
        } else {
            confirmPasswordError.textContent = '';
        }

        // Show submit button if there are no errors
        if (password.length >= 6 && confirmPassword === password) {
            submitButton.style.display = 'block';
        } else {
            submitButton.style.display = 'none';
        }
    }

    // Event listeners to validate passwords
    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validatePassword);

    // Prevent form submission on enter key press
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
    });
});