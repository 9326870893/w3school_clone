console.log("Hello Word");
var x = 10;
console.log(x);
var m = 20;
var n = 30;
y = m + n;
console.log("Total is :-" + y);



console.log("Age");
console.log("9326870893");

function printMassage() {
    console.log("Age");
    console.log("9326870893");

}
//function call here
printMassage()
printMassage()

function addition(var1, var2) {

    console.log("Addition is :-", 10 + 20);

}
addition("Addition is :-", 10 + 20)

function sub(var1, var2) {

    console.log("Addition is :-", 30 - 20);

}
sub("substraction is :-", 10 - 20)


function multiplication(value1, value2) {
    console.log("Multiplication is :-", 25 * 25);
}
multiplication(25 * 25)

function Division(val1, val2) {

    console.log("Devision is :-", 625 / 25);

}
Division(625 / 25)

function modulus(values4, values7) {
    console.log("Modulus :-", 100 % 20);

}
modulus(100 % 20)



for (let i = 1; i < 100; i++) {
    console.log(i);
}

function loop(rows) {
    for (let i = 1; i < rows; i++) {
        let stars = '';
        for (let j = 1; j < i; j++) {
            stars += '*';


        }
        console.log(stars);

    }
}
loop(7)


function loops(column) {
    for (let i = 1; i < column; i++) {
        let num = '';
        for (let j = 1; j < i; j++) {
            num == '*'
        }
        console.log(num)
    }
}
loops(7)



let num = 10;
let num1 = 10;
let total = num + num1;
console.log("Total sum ", total + 25);



var number1 = 25;
var number2 = 35;
var sum = number1 + number2 + 470;
console.log("Total is :-", sum);


let box = 500
let box1 = 500
console.log(box == box1);
console.log(box === box1);
console.log(box >= box1);
console.log(box <= box1);
console.log(typeof (box));


let age = 18
if (age => 18) {
    console.log("2 whwwlers Drive ");
}
else if (ge >= 25) {
    console.log("You are allowed to drive bike and car");

}
else {
    console.log("Not Allowed");

}







// Percentage Program

let per = 50;

if (per >= 90) {
    console.log("Excelent");

}
else if (per >= 70) {
    console.log("good");

} else if (per >= 66) {
    console.log("avrage");

}

else {
    console.log("Failed");

}

// Aerthmetic Opration

// +plus
// -
// *
// /
// % Module

let mode = 55
console.log(mode % 2);


let numm = 13
if (numm % 2 == 0) {
    console.log("This is even");
}
else {
    console.log("This is odd");

}
let temp = 50;
if (temp < 50 && temp >= 40) {
    console.log("Very Hot");  // 40-49
}
else if (temp < 40 && temp >= 25) {
    console.log("this is normal"); // 39-25

} else if (temp < 25 && temp >= 15) {
    console.log("Cold"); // 25-15

} else {
    console.log("Very Cold");

}



//method 1

let salary = 50000
let craditScrore = 720
let isEmp = true;
if (salary >= 50000 && craditScrore >= 720 && isEmp) {
    console.log("You are eligible for loan");

} else {
    console.log("not eligible for loan");

}


let score = 550
if(score>=500){
    console.log("score is good");
    
}
else if(score>= 550){
    console.log("thik hai");
    
}else {
    console.log("score is low");
    
 }
 //else{
//     console.log("not eligible to go inside");
    
// }



let Age = 25
let explavel= "intermediate"
let isReg = true;
if(Age>=25){
if(explavel ==="intermediate"){
    if(isReg){
        console.log("You are aligible to percipate in");
        
    }else{
        console.log("First reg and come");
        
    }

}else{
    console.log("first gain experiance");
    
}
}else{
    console.log("Age is not perfect for this ");
    
}
for(let i=1; i<=10;i++){
    let row='';
    for(let j=1; j<=10;j++){
        row+='*';
    }
    console.log(row);
}

console.log("Break");


let xy = 5;
console.log(xy %2 ===0 ? 'even' :'odd');

let stringName = 'vishal chaubey';
console.log(stringName.charAt(7));
