/*this is 1st task  */
// function sign ( a ,b , c){
//     let array_1 = [3, -7, 2 ];
//     for( i of array_1){
//         if(i>0){
//             alert(" the sign is +");
//         }
//         else{
//             alert(" the sign is -");
//         }
//     }
// }
// let q2 = sign();
// console.log(q2);




/*this is 2nd task  */
// function larger ( a ,b ){
//     if(a>b){
//         return a ;
//     }else {
//         return b
//     }
// }
// let q1 = larger(3,5);
// console.log(q1);




/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */


/******* Start Your Code *********/
  
// function sorting (a , b , c ){
//     let sorted = [] ; 
//     if (a > b && a > c ){
//        if (b>c){
//            sorted = [a , b ,c];
//            alert(sorted);
//        }else{
//            sorted = [a , c , b];
//            alert(sorted);
//        }
//     }else if (b > a && b > c  ){
//        if (a>c){
//            sorted = [b , a , c];
//            alert(sorted);
//        }else{
//            sorted = [b , c , a];
//            alert(sorted);
//        }

//     }else if(c > b && c > a ) {
//        if (a>b){
//            sorted = [c , a , b];
//            alert(sorted);
//        }else{
//            sorted = [c , b , a];
//            alert(sorted);
//        }
//     }  
// }


// let q3 = sorting(0, -1, 4);



/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
  

// function largest(a, b ,c ,d ,f ){

    
//     if (a>b && a>c && a>d && a>f){
//         alert(a);
//     } else if (b>a && b > c && b > d && b > f) {
//         alert(b);
//     } else if (c > a && c > b && c > d && c > f) {
//         alert(c);
//     } else if (d > a && d > c && d > b && d > f) {
//         alert(d);
//     } else {
//         alert(f);
//     } 

// }
 
// largest(-5, -2, -6, 0, -1);







/*
this is 5th task
*/
// let x=4;
// let y=5;
// if (x>y){
//     alert("Hello World");
// }
// else{
//     alert("Goodbye");
// }





// // * 1. Write a JavaScript program that returns rate as text
// // less than 50 return ==> Fail
// // equal or between 50 and 59 ===> E
// // equal or between 60 and 69 ===> D
// // equal or between 70 and 79 ===> C
// // equal or between 80 and 89 ===> B





/*
this is 6th task
*/
// function rate(x){
//     if(x<50){
//         return "Fail";
//     }
//     else if (x>=50 && x<=59){
//         return "E";
//             }
//     else if (x>=60&&x<=69){
//      return "D";
//       }
//      else if (x>=70&&x<=89){
//         return "C";
//             }
//    else { 
//     return "B"
//    }
// }
// var grade=rate(60);
// console.log(grade);



// this is 7th task

// function loop(e){
//     for(var i=0;i<10;i++){
//     console.log(e[i]);
//     }
//     }
//     let arr8=[1,2,3,4,5,6,7,8,9,10];
//     loop(arr8);


/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/




// this is 8th task
// function loop(e){
//     for(var i=0;i<8;i++){
//         if(e[i]%2==0)
//     console.log(e[i]);
//     }
//     }
//     let arr8=[13,23,12,45,22,48,66,100];
//     loop(arr8);








// Write a JS code to print a pattern using for loop

// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 
// 1 2 3 4 5 6 
// 1 2 3 4 5 6 7 
// 1 2 3 4 5 6 7 8 

// // */


// this is 9th task
// function pyrmidarr(x){
// for(var i=0;i<=8;i++){
//     var string =" ";
//     for(var j=1;j<=i;j++){
//     string=string+j+" ";
//     }
//     console.log(string);
// }
// }
// pyrmidarr(8);


// this is 10th task
/* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"

*/
// this is 10th task
// let x = "don’t know why";
// let thereIsNoY=true;
// for (let i = 0; i < x.length; i++) {
//     if (x[i] == "y") {
//         thereIsNoY=false;
//         console.log("yes");
//         break;
//     }
  
// }
// if (thereIsNoY)
// {
//     console.log("no");
// }



/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

// function tellFortune(x,y,z,d){
//     console.log("You will be a " +x+ "in " + y +"and married to" +z+ "with"+ d +"kids.")

// }

// var x="fullstack trainee ";
// var y=" orange academy ";
// var z=" alice ";
// var d=" 3 ";
// tellFortune(x,y,z,d);

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/


// this is 11th task

// function calculateDogAge(humenage){
//     let dogsage=humenage*7;
//    console.log(`Your doggie is ${dogsage} years old in dog years!`)
// }
// calculateDogAge(1);


/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

// this is 12th task


// function calculateSupply(age,amountperday){
// let teacups=(100-30)*365*3;
// console.log (`You will need ${teacups} cups of tea to last you until the ripe old age of 100`);

// }

// calculateSupply(30*3);

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
// this is 12th task

// function greet(name){
//     return "Hello "+name;
// }

// console.log(greet("Adam"));




// 5
// what is the error:
// function double(cat) {
//   return 2 * x;
// } 
// the parameter name is not the same 



// function double(7) {
//     return 2 * 7;
//   we can't declare parameter as number should be a variable

  
// function double('7') {
//     return 2 * 'x';
//   }
//   we can't product namber with string and the parameter should be a variable
  





// fix these functions:
// func double1(x {
//   return 2 * x ;
// }


// function double1(x) {
//     return 2 * x ;
//   }



// functiondouble2 x)
// return 2 * x;
// }

// function double2 (x){
// return 2 * x;
// }

// function (x) double3 {
//     return 2 * x;
  
 
  
//  function double3(x){
//     return 2 * x;
//  }
    



/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/


// function cube(x){
//     console.log(`the cube of 5 is ${Math.pow(x,3)}`);
// }
// cube (5);

      
// Write a function called multiply that:
// accept 2 parameters and calculate the multiply of these 2 numbers

// Ex: multiply(3,4)
// => 12
// Ex: multiply(5,4)
// => 20

// function multiply(x,y){
//     console.log(`the multiply of these 2 numbers is ${x*y}`)
// }

// multiply(5,4);



  


