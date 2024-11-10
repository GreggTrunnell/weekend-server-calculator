console.log("I'm the client. Listen!!");
// //*onReady function can be used to call for anything at least
// //*once when page load
axios({
    method: "GET",
    url: "/calculations",
  
  })
    .then((response) => {
      console.log("Data From Server", response.data);
      //renderToDom(response.data); // Will only be called after we get a response.
    })
    .catch((error) => {
      console.log("Oops, no candy", error);
    });

//!---------------
// function equals(event){
//     event.preventDefault();

// //? without "Number" it will treat inputs as string
// let numOneInput=Number(document.getElementById("firstNumber").value);
// let numTwoInput=Number(document.getElementById("secondNumber").value);

// // //?need a variable to store input data
// let inputs={
//         numberOne: numOneInput,
//         numberTwo: numTwoInput,
// };

// // //?------moved to server 
// console.log('my two numbers added together', inputs)

// axios({
//     method:"POST",
//     url: "/calculations",
//     data: inputs
//    })
// //.then and .catch functions goes here
// .then((response) => {
// console.log("Post to /test worked!!", response.data)
// // * will retrieve latests quotes and then render them on DOM


// }).catch((error) => {
// console.log("Oops, POST to /test broke: ", error)
// })}
//!I get the flash error when hitting event


// !-----------------
// //?functions are called from onClick "operators"
// //*Adding Function
// function addition(event){
//     event.preventDefault();

// //? without "Number" it will treat inputs as string
// let numOneInput=Number(document.getElementById("firstNumber").value);
// let numberTwoInput=Number(document.getElementById("secondNumber").value);
// let result=numOneInput+numberTwoInput;

// let historyResult=document.getElementById("resultHistory")
// historyResult.innerHTML+=`
// <li>${numOneInput}+${numberTwoInput}=${result}</li>`

// console.log('my two numbers added together', result)
// }

// //*Subtraction
// function subtraction(event){
//     event.preventDefault();


// let numOneInput=Number(document.getElementById("firstNumber").value);
// let numberTwoInput=Number(document.getElementById("secondNumber").value);
// let result=numOneInput-numberTwoInput;

// let historyResult=document.getElementById("resultHistory")
// historyResult.innerHTML+=`
// <li>${numOneInput}-${numberTwoInput}=${result}</li>`

// console.log('my two numbers subtracted', result)
// }

// //*Multiplication
// function multiplication(event){
//     event.preventDefault();


// let numOneInput=Number(document.getElementById("firstNumber").value);
// let numberTwoInput=Number(document.getElementById("secondNumber").value);
// let result=numOneInput*numberTwoInput;

// let historyResult=document.getElementById("resultHistory")
// historyResult.innerHTML+=`
// <li>${numOneInput}*${numberTwoInput}=${result}</li>`

// console.log('my two numbers multiplied', result)
// }

// //*Division
// function division(event){
//     event.preventDefault();


// let numOneInput=Number(document.getElementById("firstNumber").value);
// let numberTwoInput=Number(document.getElementById("secondNumber").value);
// let result=numOneInput/numberTwoInput;

// let historyResult=document.getElementById("resultHistory")
// historyResult.innerHTML+=`
// <li>${numOneInput}/${numberTwoInput}=${result}</li>`

// console.log('my two numbers divided', result)
//}
// !----------------
// axios({
//         method:"POST",
//         url: "/calculations",
//         data:{calculationInput}
// })
// //.then and .catch functions goes here
// .then((response) => {
//     console.log("Post to /test worked!!")
//     // * will retrieve latests quotes and then render them on DOM


//   }).catch((error) => {
//     console.log("Oops, POST to /test broke: ", error)
//   })




//!----------------------













