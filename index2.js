//----------------------------------------------DAY=>1----------
//  1.ways to print in js
// console.log("let's start....")
// alert("hellooo")
// document.write("hii this is document.write")
//  2.javascript console api-application programming interface -->
console.log("this is log")
// console.warn("this is warn)
//  3. what is js variables?
// containers to store data values
var num1=34
var num2=56
// console.log(num1+num2)
//operends---jis bhi jo number ko add krte h to vo do no. operends hota h 
// aur +,-,/,* ye sb operators hota h


//  4.datatypes in js
//numbers
var nub1=123


//string
var name="my name"


//object:-key value pair
var person={
 rahul:13,
 sheetal:15,
 gopi:17
}
var arr=[2,43,5,54,43]
// console.log(arr)


/*  there are two type of datatypes in js they are
1.primitive data typeof----null,undefined,boolean,Symbol,String
2.non-primitive or reference data type----Array,Object,*/


//  5.operators in js
//arithmatic operators
var a=100
var b=10
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)

//assignment operators
c=b
// console.log(c)

//comparision operators
var x = 34
var y = 56
// console.log(x==y)
// console.log(x>y)

//logical operators && operators is used when both the cases 
// is true if either of them gets false then it wont work
// console.log(true && true)
// console.log(false && true)
// console.log(false && false)


//  || or operators is used when it get any one as true then it show the output
// console.log(true || true)
// console.log(false || true)
// console.log(false || false)
// console.log(true || false)

// ! operators is used for making opposite value of original value
console.log(!false)
console.log(!true)

//function is a DRY means do not repeat yourself
function avg(a,b){
    return (a+b)/2
}
let res=avg(5,8)
let res2=avg(14,16)
console.log("the avg of 5,8 is",res,"and avg of 14,16 is",res2)

// conditional is js
//single if statemnet
/*let age=34
if(age<15){
    console.log("not upto the age of voting")
}
// //else--if statement
if(age>=18){
    console.log("can vote")
}else{
    console.log("can't vote")
}
//else-if ladder
if(age>33){
    console.log("you can voting")
}else if(age>18){
    console.log("reached at the age of voting")
}else{
    console.log("not suitable for voting")
}*/
//loops in js
let ar1=[1,3,5,7,9]
// for(let i=0;i<ar1.length;i++){
//     console.log(ar1[i])
// }
ar1.forEach(function(element){
    console.log(element)
})