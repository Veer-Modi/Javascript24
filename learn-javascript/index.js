// function isArmstrongNumber(num) {
//     const numStr = num.toString();
//     const numDigits = numStr.length;

//     const sum = numStr.split('').reduce((acc, digit) => {
//         return acc + Math.pow(Number(digit), numDigits);
//     }, 0);

//     return sum === num;
// }

// const numbersToTest = [153, 370, 371, 9474, 123];
// numbersToTest.forEach(num => {
//     console.log(`${num} is an Armstrong number: ${isArmstrongNumber(num)}`);

// });

// var number=9474 ;
// let value=number.toString();
// var power=value.length
// var tempt=number;
//  var sum=0;
// while(tempt>0){
//     var digit=tempt%10;

//     sum+=digit**power;

//     tempt = parseInt( tempt/10)

// }
// if(sum==number){
//     console.log(number+"is a armstrong number")
// }else{
//     console.log(number+" is not an armstrong number")

// }


// console.log("Hello Computer")


// var Name = "Veer"
// var Address = "Jahangirabad"
// var City = "Surat"

// console.log(Name)
// console.log(Address)
// console.log(City)



// var pi = 22 / 7
// var r = 4
// console.log("Area =", pi * r)



// var x = 9
// var y = 3
// console.log(x + y)
// console.log(x * y)
// console.log(x / y)
// console.log(x - y)



// var a = 12
// var b = 13
// var c = 14

// if (a >= b && a >= c) {
//     console.log("a is maximum")
// } else {
//     console.log("b is maximum")
// }

// if (a <= b) {
//     console.log("a is minimum")
// } else {
//     console.log("b is minimum")
// }

// if (a <= b && a >= c) {
//     console.log("a is maximum")
// } else if (b >= a && b >= c) {
//     console.log("b is maximum")
// } else if (c >= a && c >= b) {
//     console.log("c is maximum")
// }

// if (a <= b && a <= c) {
//     console.log("a is minimum")
// } else if (b <= a && b <= c) {
//     console.log("b is minimum")
// } else if (c <= a && c <= b) {
//     console.log("c is minimum")
// }


// function tables() {
//     for (i = 1; i <= 12; i++) {
//         for (j = 1; j <= 10; j++) {
//             console.log(i, "*", j, "=", i * j)
//         }
//     }
// }
// console.log('')
// tables()


// var f = 45
// var g = 65
// var sum = 0

// for (t = f; t <= g; t++) {
//     var d = t
//     sum += t
// }
// console.log(sum)

// var month = new Date().getMonth() + 1;;
// var monthname;
// switch (month) {
//     case 1:monthname="january"
//         break;
//     case 2: monthname="february"
//         break;
//     case 3: monthname="march"
//         break;
//     case 5: monthname="april"
//         break;
//     case 5: monthname="may"
//         break;
//     case 6: monthname="june"
//         break;
//     case 7: monthname="july"
//         break;
//     case 8: monthname="august"
//         break;
//     case 9: monthname="september"
//         break;
//     case 10:monthname="october"
//         break;
//     case 11: monthname="november"
//         break;
//     case 12: monthname="december"
//         break;
// default :
// monthname="invalid name"
// }
// console.log(monthname)


// var h = 3
// var e = 4

// // h = h + e
// // e = h - e
// // h = h - e
// [h,e]=[e,h]

// console.log("h,e",h,e)


// var number=9474
// var sum=0
// var pow = number.toString().length
// while(number>0){
//     var rem=number%10
//     sum=sum+(rem**pow)
//     number = (number-rem)/10
// }
// console.log(sum)



// var number=9474;
// a=0;
// let b=number.toString().split('')
// for(i=0;number[i]!=undefined;i++){
//     a+=(number[i]**number.length)
// }

// if(a==number){
//     console.log("yes")
// }else{
//     console.log("no")
// }

// let number='9474'; 
// // console.log(number[3]) 
// let a=0; 
// for(i=0;number[i]!=undefined;i++) 
// { 
// a=((number[i]**number.length)+a) 
// } 

// if(a==number){ 
// console.log("Yes, Armstrong Number") 
// } 
// else {console.log("Not an Armstrong Number")} 

// var factorial=7; 
// a=1; 
// for (i=1;i<=factorial;i++) 
// { 
// a=i*a; 
// } 
// console.log(a) 


// var steps=8; 
// var a=0; 
// var b=1; 
// // var c;
// console.log(a) 
// console.log(b) 
// for (i=0;i<steps;i++){ 
// c=a+b; 
// console.log(c) 
// a=b 
// b=c 
// } 


// star='*' 
// for(i=1;i<10;i++){ 
// star='*'+star 
// } 
// console.log(star);

// var numbe=125
// var str = numbe.toString(); // Convert number to string 
// var numb_arr = str.split(''); // Split string into an array of characters 

// let y = 0; 
// for (var i = 0; i < numb_arr.length; i++) { 
// y += Number(numb_arr[i]); // Convert each character to a number and add to the sum 
// } 

// console.log(y); 


// var number123=123; 
// let pow=number123.toString.length; 
// var sum=0; 
// while(number123>0){ 
// var rem = number123%10; 
// sum=sum+rem**pow; 
// number123=Math.floor(number123/10) 
// //number123=(number123-rem)/10 
// } 
// console.log(sum)


// var name="Veer" 
// var age=30
// console.log("my name is "+ name+" and my age "+age)
// console.log("my name is", name,"and my age",age)
// console.log(`my name is ${name} and my age ${age}`)

// var new_arr=[1,2,3,4,5]
// let [one,two,three]=[1,2,3]
// console.log(two)

// let new_obj=[{ name:"veer",age:18 }]
// let {name, age}= { name:"veer",age:18 }
// console.log(age)

/* const fruits = ["apple", "banana", "cherry", "date"]
const =*/

const uniquenumber=new Set()
uniquenumber.add(1)
uniquenumber.add({key:"value"})
uniquenumber.add({key:"diff_value"})
console.log("Set:Unique Number-", Array.from(uniquenumber).join(" , "))


