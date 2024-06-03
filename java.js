console .log ("hello world")
var x=250;
x=250*0.025;
console.log(x);
/*[1,7 9 45 ,] */ /*put comma between item and remove comma from the end of array  */
const arr1=[1,7,9,45];
console.log(arr1);
/*["Str" "alex","moh" */ /*put comma between item and put closing braket braces */
const  arr2=["Str","alex","moh"];
console.log(arr2);
/*'the','fox' 'over' lazy, 'dog',  ] */ /*put opening bracket braces aand add comma between item  */
const arr3=['the','fox','over','lazy','dog'];
console.log(arr3);
var fruits=["Tomato","Banana","Watermelon"]
console.log(fruits.indexOf("Tomato"));
console.log(fruits.indexOf("Banana"));

/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/
var arr4=[["mansaf","chicken burger"],["walking","tennis","basketball"],["pride and prejudice","little women","Sense and Sensibility"]];
console.log(arr4);

/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
const arr5=["amal","alia","malik",12,15,36,"assal"];
var x=arr5[0];
console.log(x);

/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
var z= arr5[arr5.length-1];
console.log(z);

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
const arr6=[0,5,7,9]
arr6.push(10);
arr6.shift();
arr6.shift();
arr6.shift();
arr6.unshift(1,3,4,6,8);
console.log(arr6);


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [5,9,-7,3.5];
var m=array2.shift();
var n=array2.unshift();
var b =array2.pop();
var d=array2.push();
console.log(m,b,d);

/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
var arr7 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
const sorted = arr7.sort();
console.log(sorted);
