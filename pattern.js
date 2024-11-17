// // // // // // for(let i=1; i<=10;i++){
// // // // // //          let row='';
// // // // // //          for(let j=1; j<=10;j++){
// // // // // //              row+='*';
// // // // // //          }
// // // // // //          console.log(row);
// // // // // //      }

// // // // // // Trianlge

// // // // // //  for(let i=1; i<=10;i++){
// // // // // //     let row='';
// // // // // //     for(let j=1; j<=i;j++){
// // // // // //         row+='*';
// // // // // //     }
// // // // // //     console.log(row);
// // // // // // }


// // // // // // let num =5;
// // // // // // let pattern ='';
// // // // // // if(num>1){
// // // // // //     for(let i=1;i<=num;i++){
// // // // // //         for(let j=1;j<=i;j++){
// // // // // //             pattern+="*";
// // // // // //         }
// // // // // //         pattern +='\n';
// // // // // //     }
// // // // // //     console.log(pattern)
// // // // // // }else{
// // // // // //     console.log("Not possible ");
// // // // // // }

// // // // // // Holo Pattern
// // // // // //     let num=5;
// // // // // // if(num>1){
// // // // // //     for(let i=1;i<=num;i++){
// // // // // //         for(let j=1;j<=i;j++){
// // // // // //             if(j==1 || j==i){
// // // // // //                 pattern=+"*";
// // // // // //             }
// // // // // //             else{
// // // // // //                 pattern+=" ";
// // // // // //             }
// // // // // //         }
// // // // // //     }
// // // // // // }

// // // // // //    let Pattern =''
// // // // // // for(let i=1;i>=5;i--){
// // // // // //     for(let j=1;j<=i;j++){
// // // // // //         pattern+="*"
// // // // // //     }
// // // // // //     pattern +='\n'
// // // // // // }
// // // // // // console.log(pattern);

// // // // // //Array

// // // // // // const array = [1,2,3,4,5];
// // // // // // let c = array.find(num=> num%2===0);
// // // // // // console.log(c);

// // // // // // // push() and concat()

// // // // // // //Push it is used to add value into the last  sequance of value. 
// // // // // // let array1 = [1,2];
// // // // // // array1.push(3,4);
// // // // // // console.log(array1);


// // // // // //     let marks = [97,82,75,65,73];
// // // // // //     console.log(marks);
// // // // // //     console.log(marks.length);

// // // // // //     let heros = ["ironman","hulk","spiderman","saktiman"];
// // // // // //     console.log(heros);

// // // // // //     console.log(heros.length);


// // // // // //     function test(){
// // // // // //         for(let i=1; i<=10;i++){
// // // // // //             console.log(i);

// // // // // //         }
// // // // // //     }
// // // // // //     test();


// // // // // //     const array2=["vishal","kumar","Chaubey","vicky","Chaubey","Adarsh","kumar","Chaubey"];
// // // // // //     console.log(array2);
// // // // // //     test();
// // // // // //     console.log(array2.indexOf("Chaubey"));


// // // // // //     let marks_students =[{
// // // // // //         std1:95,
// // // // // //         std2 :95,
// // // // // //         std3: 85,
// // // // // //         std4: 85,
// // // // // //     }]
// // // // // //     console.log(marks_students);
// // // // // //     console.log(marks_students.length,"fffkdkllfn");

                        let student_score =[{
                            std1 : 95,
                            std2 : 92,
                            std3 : 93
                        }];
                        console.log(student_score);
                        student_score.push('vishal' ,63)
                        
                        console.log(student_score);
                        
                        
// // // // // //     // Reverse  values by using reverse() method
// // // // // //     console.log(marks.reverse());

// // // // // //     console.log(marks,marks_students);

// // // // // //     var merge = [marks,marks_students];
// // // // // //     console.log(merge);


// // // // // //     function calculatorCart(...num){
// // // // // //         return num;
// // // // // //     }
// // // // // //     console.log(calculatorCart(200,300,400));


// // // // // // for loop
// // // // // let num = 5;
// // // // // for (let i = 2; i < 5; i++) {
// // // // //     if (num % i === 0) {
// // // // //         console.log("Not Prime");
// // // // //         break

// // // // //     } else {
// // // // //         console.log("Prime");
// // // // //         break

// // // // //     }
// // // // // }

// // // for (let i = 1; i <= 10; i++) {
// // //     console.log("Outer loop", i);
// // //     for (let j = 1; j <= 3; j++) {
// // //         console.log("Inner loop", j);

// // //     }
// // // }

// // let patterns = '';
// // for (let i = 1; i <= 4; i++) {
// //     for (let j = 1; j <= 4; j++) {
// //         patterns += '* ';
// //     }
// //     patterns += '\n'
// // }
// // console.log(patterns);


// // let patternss = '';
// // for (let i = 1; i <= 4; i++) {
// //     for (let j = 1; j <= 4; j++) {
// //         patternss += `${j}`;
// //     }
// //     patternss += '\n'
// // }
// // console.log(patternss);



// // let patternsss = '';
// // for (let i = 1; i <= 4; i++) {
// //     for (let j = 1; j <= 4; j++) {
// //         patternsss += `${i}`;
// //     }
// //     patternsss += '\n'
// // }
// // console.log(patternsss);


// // let number = ''
// // for (let i = 1; i <= 5; i++) {
// //     for (let j = 1; j <= i; j++) {
// //         number += '* ';
// //     }
// //     number += '\n'
// // }
// // console.log(number);


// // let numbers = ''
// // for (let i = 1; i <= 5; i++) {
// //     for (let j = 1; j <= i; j++) {
// //         numbers += `${i}`;
// //     }
// //     numbers += '\n'
// // }
// // console.log(numbers);


// // let numberss = ''
// // for (let i = 1; i <= 5; i++) {
// //     for (let j = 1; j <= i; j++) {
// //         numberss += `${j}`;
// //     }
// //     numberss += '\n'
// // }
// // console.log(numberss);



// // let petr = ''
// // for (let i = 5; i >= 1; i--) {
// //     for (let j = 1; j <= i; j++) {
// //         petr += `${i} `
// //     }
// //     petr += '\n'
// // }
// // console.log(petr);

// // let petrr = ''
// // for (let i = 5; i >= 1; i--) {
// //     for (let j = 1; j <= i; j++) {
// //         petrr += `${j} `
// //     }
// //     petrr += '\n'
// // }
// // console.log(petrr);

// // // // // // Pyramid

// // function pyramid() {
// //     let n = 5;
// //     let patt = '';
// //     for (let i = 1; i <= n; i++) {
// //         for (let j = 1; j <= n - i; j++) {
// //             patt += " ";
// //         }
// //         for (let k = 0; k < 2 * i - 1; k++) {
// //             patt += '*'
// //         }
// //         patt+='\n'

// //     }
// //     console.log(patt);
// // }
// // pyramid();



// // function pyramids() {
// //     let n = 5;
// //     let pattt = '';
// //     for (let i = 1; i <= n; i++) {
// //         for (let j = 1; j <= n - i; j++) {
// //             pattt += " ";
// //         }
// //         for (let k = 0; k < 2 * i - 1; k++) {
// //             pattt += `${i}`
// //         }
// //         pattt+='\n'

// //     }
// //     console.log(pattt);
// // }
// // pyramids();


// // // // // function pyramidd() {
// // // // //     let n = 5;
// // // // //     let patt = '';
// // // // //     for (let i = 1; i <= n; i++) {
// // // // //         for (let j = 1; j <= n - i; j++) {
// // // // //             patt += " ";
// // // // //         }
// // // // //         for (let k = 0; k < 2 * i - 1; k++) {
// // // // //             patt += `${k}`
// // // // //         }
// // // // //         patt+='\n'

// // // // //     }
// // // // //     console.log(patt);
// // // // // }
// // // // // pyramidd();

// // // // // function pyramidds() {
// // // // //     let n = 5;
// // // // //     let patt = '';
// // // // //     for (let i = 1; i <= n; i++) {
// // // // //         for (let j = 1; j <= n - i; j++) {
// // // // //             patt += " ";
// // // // //         }
// // // // //         for (let k = 0; k < 2 * i - 1; k++) {
// // // // //             patt += `${k+1}`
// // // // //         }
// // // // //         patt+='\n'

// // // // //     }
// // // // //     console.log(patt);
// // // // // }
// // // // // pyramidds();



// // // function test1(){

// // //     for(let i=n-1;i>=1;i++){
// // //         for(let j=1;j<=n-i;j++){
// // //             patts+=" "
// // //         }
// // //         for(let k=0;k<2*i-1;k++){
// // //             pattrs+=`${i}`;
// // //         }
// // //         patts+="\n"
// // //     }
// // //     console.log(patts);

// // // }
// // // test1()




// // let loops ='';
// // for(let i=5;i>=1;i--){
// //     for(let j=1;j<=i;j++){
// //         loops+='* ';
// //     }
// //     loops+='\n';
// // }
// // console.log(loops);




// // // for(let i=1;i<=100;i++){
// // //     console.log(i);

// // // }
// // // for(let i=100;i>=1;i--){
// // //     console.log(i);

// // // }




// // function pyramids() {
// //     let n = 5;
// //     let patt = '';
// //     for (let i = 1; i <= n; i++) {
// //         for (let j = 1; j <= n - i; j++) {
// //             patt += " ";
// //         }
// //         for (let k = 0; k < 2 * i - 1; k++) {
// //             patt += '*'
// //         }
// //         patt+='\n'

// //     }
// //     console.log(patt);
// // }
// // pyramids();



// // // // // let petrr = ''
// // // // // for (let i = 5; i >= 1; i--) {
// // // // //     for (let j = 1; j <= i; j++) {
// // // // //         petrr += '* '
// // // // //     }
// // // // //     petrr += '\n'
// // // // // }
// // // // // console.log(petrr);

// // // // // let vivek = ''
// // // // // for (let i = 1; i<=10; i++) {
// // // // //     for (let j=1; j<= i; j++){
// // // // //         vivek+="i love you"
// // // // //     }
// // // // //     vivek+="\n"
// // // // //     }
// // // // //     console.log(vivek);


// // // // // let sum = 0;
// // // // // for(let i=1; i<=10; i++){
// // // // //     sum+=i;

// // // // // }
// // // // // console.log("Sum nomber of i to 10 is :",sum);

// // // // // let arr = [1,2,3,4,5,1,5];
// // // // // let duplicate=[];
// // // // // let seen ={};

// // // // // for(let i=0;i<arr.length;i++){
// // // // //     if(seen[arr[i]]) {
// // // // //         duplicate.push(arr[i]);
// // // // //     }
// // // // //     else {
// // // // //         seen[arr[i]] = true;
// // // // //     }
// // // // // }
// // // // // console.log("Duplicate :",duplicate);



// // // // // Array

// // // // // let a = [4,5,6,7,8,9];
// // // // // console.log(a[3]);

// // // // // console.log(a);


// // // // // let arr = [2,3,4,5,6,7,8,9];
// // // // // for(let i=0;i<arr.length;i++){
// // // // //     console.log(arr[i]);

// // // // // }
// // // // let sum = 0
// // // // let arrs = [1, 2, 3, 4];
// // // // for (let i = 0; i < arrs.length; i++) {
// // // //     sum += arrs[i]


// // // // }
// // // // console.log("Total sum of : ", sum);



// // // // let sums = 0;
// // // // let arrays = [34, 5, 4, 5, 6, 4, 5, 45]
// // // // for (let i = 0; i < arrays.length; i++) {
// // // //     sums += arrays[i]
// // // // }
// // // // console.log(sums);



// // // // // Swapping


// // // // let a = 10;
// // // // let b = 20;
// // // // let c = 0;
// // // // c = a;
// // // // a = b;
// // // // b = c
// // // // console.log("After Swapping ", { a, b, c });

// // // // // Second Program 


// // // // let p = 10;
// // // // let q = 20;
// // // // [p, q] = [q, p]
// // // // console.log("After Swapping :- ", { p, q });





// // // // // Find Max value 

// // // // function fixMax(aar) {
// // // //     let max = -200;
// // // //     for (let i = 0; i < Array.length; i++) {
// // // //         if (Array[i] > max) {
// // // //             max = Array[i];
// // // //         }
// // // //     }
// // // //     return max
// // // // }
// // // // let Array = [2, 4, 5, 6, 42, 400];
// // // // console.log(fixMax(Array));



// // // // // Find Min Number  
// // // // function fixMin(arr) {
// // // //     let min = Number.MAX_SAFE_INTEGER;
// // // //     for (let i = 0; i < arr.length; i++) {
// // // //         if (arr[i] < min) {
// // // //             min = arr[i];
// // // //         }
// // // //     }
// // // //     return min;
// // // // }

// // // // let arr = [2, 4, 5, 6, 42, 400];
// // // // console.log(fixMin(arr));



// // // // // Find odd Even 

// // // // function findOddEvenInArray(arr) {
// // // //     let OddArr = [];
// // // //     let EvenArra = [];
// // // //     for (let i = 0; i < arr.length; i++) {
// // // //         if (arr[i] % 2 == 0) {
// // // //             EvenArra.push(arr[i]);
// // // //         } else {
// // // //             OddArr.push(arr[i]);
// // // //         }
// // // //     }
// // // //     console.log(`this is odd arr ${OddArr}, this is even arr ${EvenArra}`);

// // // // }
// // // // findOddEvenInArray(arr);




// // // // //  Reeverse Array 


// // // // function reverseArray(arr){
// // // //     let newArray=[];
// // // //     for(i=arr.length-1;i>=0;i--){
// // // //         newArray.push(arr[i]);
// // // //     }
// // // //     return(newArray)
// // // // }

// // // // let vishal = reverseArray(arr);
// // // // console.log(vishal);





// // // let arr = [2, 3, 4, 45, 100, 103, 60];
// // // function findTarget(arr, target) {
// // //     for (let i = 0; i < arr.length; i++) {
// // //         for (let j = i + 1; j < arr.length; j++) {
// // //             if (arr[i] + arr[j] === target) {
// // //                 return true
// // //             }
// // //             else {
// // //                 return false
// // //             }
// // //         }
// // //     }
// // // }
// // // console.log(findTarget(arr, 5));



// // // // Assending values
// // // let assending = [10, 7, 12, 15, 20, 2, 8];

// // // function shortArray(assending) {
// // //     for (let i = 0; i < assending.length; i++) {
// // //         for (let j = 0; j; assending.length; j++) {
// // //             if (assending[j] > assending[j + 1]) {
// // //                 let temp = arr[j]
// // //                 assending[j]
// // //             }
// // //         }
// // //     }
// // // }



// // // Array Methods

// // // let Arr = []
// // // Arr.push(10);
// // // Arr.push(20);
// // // Arr.push(30);
// // // Arr.push(40);
// // // // Remove Values

// // // Arr.pop()

// // // // Remove the first element in the Array
// // // Arr.shift();

// // // // Add value in to the first Array

// // // Arr.unshift(10);
// // // console.log(Arr);


// // // function bubbleSort(Arr) {
// // //     for (let i = 0; i < Arr.length; i++) {
// // //         for (let j = 0; j < Arr.length; j++) {
// // //             if (Arr[j] > Arr[j + 1]) {
// // //                 [Arr[j], Arr[j + 1]] = [Arr[j + 1], Arr[j]];
// // //             }
// // //         }
// // //         console.log("First itration", i, Arr);

// // //     }
// // //     return Arr
// // // }
// // // console.log(bubbleSort([10, 2, 5, 3, 9, 7, 6, 12, 16, 19, 18, 16, 1]));





// // // let arr = [8, 7, 6, 5, 4, 3, 2, 1];
// // // function selectionSort(arr) {
// // //     for (let i = 0; i < arr.length; i++) {
// // //         let min_idx = i;
// // //         for (let j = i + 1; j < arr.length; j++) {
// // //             if (arr[j] < arr[min_idx]) {
// // //                 min_idx = j;
// // //             }
// // //         }
// // //         let temp = arr[i]
// // //         arr[i] = arr[min_idx];
// // //         arr[min_idx] = temp
// // //     }
// // //     return arr;
// // // }
// // // console.log(selectionSort(arr));
// // console.log('my');

// // let x=''
// // // for(let i=1;i<=5;i++){
// // //     for(let j=1;j<=i;j++){
// // //         x+='*'
// // //     }
// // //     x+='\n'  
// // // }

// // for(let i=5;i>=1;i--){
// //     for(let j=i;j>=1;j--){
// //         x+='*'
// //     }

// //     x+='\n'  
// // }
// // console.log(x);


// // let array = "";
// // for(let i=1;i<=5;i++){
// //     for(let j=1;j<=i;j++){
// //         array+="*"

// //     }
// //     array+="\n"
// // }
// // console.log(array);

// // let array = "";

// // for (let i = 5; i >= 1; i--) {
// //     for (let j = 0; j <= 5 - i; j++) {
// //         array += " "
// //     }
// //     for (k = 1; k <= i; k++) {
// //         array += "*"
// //     }
// //     array += "\n"
// // }
// // console.log(array);

// // let store = ""

// // for (let i = 5; i >= 1; i--) {
// //     for (let j = 1; j <= 5 - i; j++) {
// //         store += " "
// //     }
// //     for (let k = 0; k <= i; k++) {
// //         store += "*"
// //     }
// //     store += "\n"
// // }
// // console.log("This is my code ");

// // console.log(store);

// // let v = "";

// // for (let i = 1; i <= 5; i++) {

// //     for (let k = 1; k <= 5 - i; k++) {
// //         v += " ";
// //     }

// //     for (let j = 1; j <= (2 * i - 1); j++) {
// //         v += "*";
// //     }
// //     v += "\n";
// // }

// // console.log(v);





// // let a = "";
// // const rows = 5; // Total number of rows

// // for (let i = rows; i >= 1; i--) {
// //     // Add leading spaces
// //     for (let k = 1; k <= rows - i; k++) {
// //         a += " "; // Add spaces
// //     }

// //     // Add asterisks
// //     for (let j = 1; j <= (2 * i - 1); j++) {
// //         a += "*"; // Print asterisks
// //     }
// //     a += "\n"; // Move to the next line after each row
// // }

// // console.log(a);


// let diamond = "";
// const rows = 5;


// for (let i = 1; i <= rows; i++) {

//     for (let k = 1; k <= rows - i; k++) {
//         diamond += " ";
//     }

//     for (let j = 1; j <= (2 * i - 1); j++) {
//         diamond += "*";
//     }
//     diamond += "\n";
// }


// for (let i = rows - 1; i >= 1; i--) {

//     for (let k = 1; k <= rows - i; k++) {
//         diamond += " ";
//     }

//     for (let j = 1; j <= (2 * i - 1); j++) {
//         diamond += "*";
//     }
//     diamond += "\n";
// }

// console.log(diamond);





// let squre = ""

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (i === 1 || i === 5 || j === 1 || j === 5) {
//             squre += "*"
//         }
//         else {
//             squre += " "
//         }
//     }
//     squre += "\n"
// }
// console.log(squre);



// // Create a program that doubles each number in an array.
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let result = number.map((value) => value * 2);
// // console.log(result);

// // Create a program that filters out even numbers from an array.

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let oddNum = num.filter((value) => value % 2 !== 0);
// // console.log("This is Odd", oddNum);

// /* Find Intersection*/

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [2, 3, 4];

// let Intersection = arr1.filter((value) => arr2.includes(value));
// // console.log(Intersection);

// // Create a program that calculates the sum of all numbers in an array
// let numm = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = numm.reduce((acc, val) => acc + val, 0);
// // console.log("Total sum of ", sum);

// // Create a program that logs each element of an array to the console.

// let fruits = ['apple', 'banana', 'cherry'];
// fruits.forEach((fruits) => {
//     // console.log(" Fruits ", fruits);

// })


// //Create a program that finds the first number greater than 5 in an array. 

// let findGreatherNumber = [1, 2, 3, 4, 5, 6, 7];

// let res = findGreatherNumber.find((value) => value > 5)
// console.log(res);

// // Create a program that checks if there are any negative numbers in an array.
// let checkNumer = [0, 1, 2, 3, 4, 5, 6, 7, -2];

// let x = checkNumer.some((val) => val < 0);
// console.log(x);

// // Create a program that checks if all numbers in an array are positive.
// let pos = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let poss = pos.every((val) => val > 0);
// console.log(poss);

// // Create a program that sorts an array of numbers in ascending order.

// let ass = [4, 3, 6, 4, 8, 5, 1, 2, 9, 3];
// let assendingOrder = ass.sort((num, value) => num - value);
// console.log("Assending Order :- ", assendingOrder);



// // Reverse Array 

// function reverseArray(arr) {
//     return arr.reverse();
// }
// console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));


// // Remove Duplicate 
// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }
// console.log("Remover Duplicate :- ", removeDuplicates([1, 2, 3, 4, 3, 5, 6, 5, 7, 7, 8, 7, 9, 1]));

function removeDup(d) {
    return [...new Set(d)];
}
console.log(removeDup([1,2,3,4,5,6,7,2,3]));


// Bubble Sort 
let arr = [12, 15, 1, 9, 10, 3, 1, 7, 3, 1, 11, 17, 12];
function bubboleArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}
console.log(bubboleArray(arr));

/// selection sort 


function selectionSort(arr) {
    let n = arr.length;
    for(let i=0;i<n;i++) {
        let minId=i;
        for(let j=i+1;j<n;j++) {
            if(arr[j]<arr[minId]) {
                minId=j;
            }
        }
        if(minId !== i) {
            [arr[i],arr[minId]] = [arr[minId], arr[i]]
        }
    }
    return arr;
}
console.log(selectionSort(arr))

console.log("---------==========------------");

let age = 25;
const idStudent = true;

if(age >= 18){
    console.log('you are adult');
    
}else{
    console.log('you are a miner');
    
}

// Turnery Operator.


let Status  = age >= 18 ? "Adult" : " Miner";
console.log(Status);
let AgeData = 18;
console.log(AgeData <= 17 ? 'not driving ' : 'driving yet !');
let n = 25;
console.log(n%2===0 ? 'even': 'odd');

let day = 7;
switch(day) {
    case 1: 
    console.log('Sunday');
    break;
    case 2:
        console.log(
        "Monday"
        );
        break;
        case 3:
            console.log('Tuesday');
            break;
            case 4:
                console.log('Wednesday');
                break;
                case5:
                console.log('Thrusday');
                break;
                case 6 :
                    console.log('Friday');
                    break;
                    case 7:
                        console.log('Saturday');
                        break;
                       default:
                            console.log('Invalid Day');
   
}

console.log('-----For Loop-----------');

for(let i=1;i<=11; i++){
    console.log("Loop Itration :",i);
    
}

console.log('-----While Loop-----------');
let counter = 0;
while (counter < 5) {
    console.log('Counter value', counter);
    counter++;
    
}


console.log('-----Do while Loop-----------');

let nn = 0;
do{
    console.log('Number is :', nn);
    nn++
    
}while(nn<=7);


console.log('-----Function-----------');

function greet (name) {
    console.log("Hello ",name);
    
}
greet('Vishal')

console.log('-----Functions can also return values-----');

function adding(a,b){
    return a+b;


}
let result = adding(5,10);
console.log(result);


console.log('------object and array-------');

let f = ['apple','banana','mango','orange'];
console.log(f);
console.log(f[0]);
f.push('date')
console.log(f);

console.log('---------OBJECTS----------');




let person = {
    name: 'Vishal',
    age : 23,
    
    add: function(){
        console.log("Hello my name is :", this.name);   
        console.log(`i am ${this.age} year old `);
        
        
    }
};
person.add();

let costumers = {
    id : 1,
    name: 'customer1',
    age : 25,
    address : 'Mumbai ',
    email : 'customer123@gmail.com',
    contact : 1234567890,

    customer : function(){
        console.log(`this is my email ${this.email}`);
        
    }

}

console.log('----------Try Catch ---------');

try {
    let result = riskyFunction();
  } catch (error) {
    console.error("An error occurred: " + error.message);
  }
  console.log('------Call-Back Function-------');
  console.log("  ");
  

  function fetchData(callback) {
    setTimeout(() => {
      callback("Data fetched!");
    }, 1000);
  } 
  fetchData((m)=>{
    console.log(m);
    
  });

let fetchDataPromiss = new Promise((resolve , reject)=>{
    setTimeout(()=> {
        resolve('Data Fecthed');
        
    },2000);
});

fetchDataPromiss.then((m)=> {
    console.log(m);
    
}).catch((e)=>{
    console.log(e);
    
});


console.log('-------------- Async / Await Function --------------');
async function getData () {
    try{
        let response  = await fetch('https://api.exmple.com/data');
        let data =  await response.json();
        console.log(data);
        
    }
    catch(e) {
        console.log("Error Fetching Data : " , e);  
        
    }
}