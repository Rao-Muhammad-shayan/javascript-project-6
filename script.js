// q1
// let a=prompt("Enter first name")
// let b=prompt("Enter last name")
// let fullName;
// alert(fullName=a+" " +b)
// // q2
// let mobile=prompt(`enter mobile name with model`)
// console.log(mobile.length)
// q3
// let str=`pakistani`;
// str=str.split("")
// console.log(str)
// console.log(str.indexOf("n"))
// q4
// let str="hello world"
// console.log(str.lastIndexOf('l'))

// q5
// let str="Pakistani";
// console.log(`char at 3d index in string "${str.charAt(3)} "`)
// q6
// let input1=prompt("Enter first name");
// let input2=prompt("Enter 2nd name");
// let contOfVariablesData=input1.concat(input2);
// console.log(contOfVariablesData);
// q7

// let str = "Hyderabad";
// let str2 = "islam";
// let temporary =str2.slice(0,5)+str.slice(5,str.length)
// console.log(temporary)

// q8

// var message = `Ali, Sami are best friends. They play cricket and 
// football together.`; 

// var a=`&`

// let temporary="";
// for(i=0;i<message.length;i++){
    
//     if(message[i]=="a" && message[i+1]=="n" && message[i+2]=="d"){

// for(j=0;j<i;j++){
//     temporary+=message[j];

// }
// temporary=temporary+a;
// for(c=i+3;c<message.length;c++){
//     temporary+=message[c];
// }

// console.log(temporary)
//     }

// }
// q9
// var str="123"
// console(typeof str);
// // var str=123;
// // console(typeof str);
// q10

// let input = document.getElementById("input")
// input.addEventListener("keypress", function(event) {
//     if (event.key == "Enter") {
     
//       let inputVal = input.value;
      
    
//       if (isNaN(inputVal)) {
//         inputVal = inputVal.toUpperCase()
//         console.log(inputVal)
//       }
//     }
//   })
// q11
// var a=35.36;
// a=a.toString()
//  console.log(a);
// a=a.split("")

// console.log(a)
// a=a.join("")
// console.log(a)
// a=a.replace(".","")
// console.log(a)
//  q12
// let userName=prompt("Enter user name user name  not include any special char.....")
// let temporary;
// for (let i = 0; i < userName.length; i++) {
    
//     if(userName[i].charCodeAt()==64 || userName[i].charCodeAt()==33 ||userName[i].charCodeAt()==35||userName[i].charCodeAt()==36 ||userName[i].charCodeAt()==37 ||userName[i].charCodeAt()==94 ||userName[i].charCodeAt()==38 ||userName[i].charCodeAt()==40||userName[i].charCodeAt()==42   ){
//        alert(` Enter valid name`)
//     }else{
//         temporary=userName[i]
//     }
    
// }
// console.log(temporary)
// q13

// q14
// var array = ["cake", "pine-apple", "cookies", "biscuits", "cookies", "sweets"];
// let input = document.getElementById("input");

// if (input) {
//   input.addEventListener("keypress", function(event) {
//     if (event.key == "Enter") {
//       let inputVal = input.value.trim().toLowerCase();
      
//       let found = false;
//       for (let i = 0; i < array.length; i++) {
//         if (array[i].toLowerCase() == inputVal) {
//           console.log(`${inputVal} is available at index ${i} in our bakery item list`);
//           found = true;
//           break;
//         }
//       }
      
//       if (!found) {
//         console.log(`${inputVal} is not available in our bakery item list`);
//       }
//     }
//   });
// } else {
//   console.log("Input element not found");
// }
//  q15

// let str="abcdefghijklmnopqrstuvwxyz"
// for (let i = 0; i < str.length; i++) {
//    console.log(str[i].charCodeAt())
    
// }
// let passcodeInput = document.getElementById("input");

// passcodeInput.addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//         let passcode = passcodeInput.value.trim().toLowerCase();

//         if (passcode.length >= 6) {
          
//             if (passcode.charCodeAt(0) >= 48 && passcode.charCodeAt(0) <= 57) {
//                 console.log(`Passcode: ${passcode}`);
//                 console.log("Passcode is not valid because it starts with a numeric value.");
//             } else {
                
//                 let hasNumber = false;
//                 for (let i = 0; i < passcode.length; i++) {
//                     if (passcode.charCodeAt(i) >= 48 && passcode.charCodeAt(i) <= 57) {
//                         hasNumber = true;
//                         break;
//                     }
//                 }

//                 console.log(`Passcode: ${passcode}`);
//                 if (!hasNumber) {
//                     console.log("Passcode should contain at least one numeric digit.");
//                 } else {
//                     console.log("Passcode is valid!");
//                 }
//             }
//         } else {
//             console.log("Passcode should be at least 6 characters long.");
//         }
//     }
// });
// q16
// let str="shayan";

// localStorage.setItem("name",str)

// let localStr=localStorage.getItem("name");
// localStr=localStr.split("")
// console.log(localStr)
// for(i=0 ;i<localStr.length;i++){
//     console.log(localStr[i])
// }
// q17
// let str = "shayan";
// console.log(str);
// console.log(str.charAt(str.length-1));
// q18
// let str = "The quick brown fox jumps over the lazy dog";
// let obj = {};

// function occurrences(occurWord) {
//     let words = str.toLowerCase().split(" "); // Convert to lowercase and split into words
//     occurWord = occurWord.toLowerCase(); // Convert the target word to lowercase

//     let count = 0;
//     for (let word of words) {
//         if (word === occurWord) count++;
     
//     }

// ({ occurWord: obj[occurWord] = count } = obj);

//     return count; 
// }

// let number = occurrences("the");
// console.log(obj);
