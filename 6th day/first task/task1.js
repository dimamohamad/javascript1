const url = "https://66681676f53957909ff67af8.mockapi.io/users/Animals";
var animal=document.getElementById("animal");



async function changeimage(){
    const data = await fetch(url);
    console.log("data", data);
    const data1 = await data.json();
    console.log("data1", data1)
    let select = document.getElementById("animal");
    console.log(select)
    for (let i=0;i<data1.length;i++){
      let option=document.createElement("option");
        
        option.innerText=data1[i].name;
        option.value=data1[i].image;
        console.log(option)
        select.appendChild(option);

    }
    let image=document.getElementById("img1");
    image.src=data1[0].image;
    select.addEventListener("change",()=>{image.src=select.value})
    }



changeimage();