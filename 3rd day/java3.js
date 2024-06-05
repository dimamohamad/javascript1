
let x=document.getElementById("box-1");
x.addEventListener("mouseover", function() {
    
 x.innerHTML="Hello World!"
});
x.addEventListener("mouseout", function() {
    
    x.innerHTML="Can I help you?"
   });
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
      fontstyle.fontStyle="";
    }
  }
  const fontweight= document.querySelector(".box2")
  function changefontweight(value) {
   console.log(value);

    if (value) {fontweight.style.fontWeight="Bold"
      
    }
    else{
      fontstyle.fontStyle="";
    }
  }
  const textdecoration= document.querySelector(".box2")
  function changetext(value) {
   console.log(value);

    if (value) {textdecoration.style.textDecoration="Underline"
      
    }
    else{
      fontstyle.fontStyle="";
    }
  }
  