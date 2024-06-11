const url="https://66681676f53957909ff67af8.mockapi.io/users/Students"
async function getdata(){
 const data= await fetch(url) ;
 console.log ("data",data);
 const data1 =await data.json();
 console.log ("data1",data1);
 var x=data1[4].name;
 console.log(x);

 var y=data1[4].id;
 console.log(y);

document.getElementById("exampleInputEmail1").value=x;
document.getElementById("exampleInputPassword1").value=y;


}
getdata();
