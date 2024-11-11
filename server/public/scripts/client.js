console.log("I'm the client. Listen!!");
// //*onReady function can be used to call for anything at least
// //*once when page load

//getCalculations function should grab calculations array
//?I tried referencing lecture notes to get the calculations array to go to dom
//? but couldn't get to work
function onReady(){
    getCalculations();
}
console.log("On Ready was called",onReady())

//function should get calculations from server
function getCalculations(){
axios({
    method: 'GET',
    url: '/calculations',})
    .then((response) => {
       console.log("response data", response.data);
        //should append calculations to dom
        renderToDom(response.data);
    })
    .catch((error) => {
        alert('request failed');
        console.error(error);
    })
}
//need a function to actually to the rendering
function renderToDom(calculations){
    //select the output element
    let calculationData=document.getElementById('resultHistory');
    //empty the output element  //?not sure how this works, following notes
    calculationData.innerHTML= '';
    
    //will need a loop to go through calculations and post them
    for (let calcsToAdd of calculations){
        output.innerHTML +=`<li>${calcsToAdd.numOneInput}${calcsToAdd.operator}${calcsToAdd.numberTwoInput}=${calcsToAdd.result}</li>`
        }
}

function onButton(event,operator){
    event.preventDefault();

//? without "Number" it will treat inputs as string
let numOneInput=Number(document.getElementById("firstNumber").value);
let numTwoInput=Number(document.getElementById("secondNumber").value);

// //?need a variable to store input data
let inputs={
        numOneInput,
        numTwoInput,
        operator, 
};

console.log('my two numbers added together', inputs)


axios({
    method:"POST",
    url: "/calculations",
    data: inputs
   })
//.then and .catch functions goes here
.then((response) => {
console.log("Post to /test worked!!", response.data)
// * will retrieve latests quotes and then render them on DOM


}).catch((error) => {
console.log("Oops, POST to /test broke: ", error)
})}



// !-----Some other proccesses are below but didn't function the way I wanted
//! I used them for reference
// //?functions are called from onClick "operators"
// //*Adding Function
// function equals(){
//     preventDefault();

// //? without "Number" it will treat inputs as string
// let numOneInput=Number(document.getElementById("firstNumber").value);
// let numberTwoInput=Number(document.getElementById("secondNumber").value);
// let result=numOneInput+numberTwoInput;

// let historyResult=document.getElementById("resultHistory")
// historyResult.innerHTML+=`
// <li>${numOneInput}+${numberTwoInput}=${result}</li>`

// console.log('my two numbers added together', result)
// }
// axios({
//     method:"POST",
//     url: "/calculations",
//   })
// //.then and .catch functions goes here
// .then((response) => {
// console.log("Post to /test worked!!", response.data)
// // * will retrieve latests quotes and then render them on DOM


// }).catch((error) => {
// console.log("Oops, POST to /test broke: ", error)
// })
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
// function equals(){
//     //event.preventDefault();

// //? without "Number" it will treat inputs as string
// let numOneInput=Number(document.getElementById("firstNumber").value);
// let numTwoInput=Number(document.getElementById("secondNumber").value);

// // //?need a variable to store input data
// let inputs={
//         numberOne: numOneInput,
//         numberTwo: numTwoInput,
// };

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
// //!I get the flash error when hitting event












