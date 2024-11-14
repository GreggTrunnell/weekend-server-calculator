console.log("I'm the client. Listen!!");


let operator;//global state to hold variable

function onReady(){

    getHistory()
}
onReady()
//when operator is clicked will assign "operator"

function setOperator(event, op){
    event.preventDefault();
    console.log('set operator() has been called with', op)
    operator = op
    console.log("updated operator is now" , operator)
}
//will perform get request to retrieve history from server
//axios GET request
//sent to /calculations
//render history to dom and render recentResult

function getHistory(){
    axios({
        method: 'GET',
        url: "/calculations"
        })
        .then((response)=>{
            console.log("success get worked")
            if (response.data.length >  0)
            render(response.data)
        })
        .catch((error)=>{
            console.log("error on GET /calculations")
     })
}

function handleSubmit(event){
    event.preventDefault()
    const firstNumInput=document.getElementById("firstNumInput").value
    const secondNumInput=document.getElementById("secondNumInput").value
}

    console.log("handle submit")
    //will send "newCalc" to server
    let newCalc={
        firstNum: Number(firstNumInput),
        secondNum: Number(secondNumInput),
        Operator: operator
    }
    
    axios({
        method: 'POST',
        url: "/calculations",
        data: newCalc,
    })
    .then((response)=> {
    console.log("success with post to /calculations")
    //will retrieve the latest history, which includes redering to the dom
    getHistory();
   })
    .catch((error)=>{
console.error("error on post calculations", error)
    })
    
    
//Axios post request, newCalc will be data
//send to /calculation
//retrieve all history from server
//update dom to replace what it currently shows
//clear form


function handleClear(event)
{
    event.preventDefault()
    console.log("handle clear")

// Selector for the 2 inputs
//assign them to "
//set operator to 'undefined'
document.getElementById("firstNumInput").value = "";
document.getElementById("secondNumInput").value ="";
operator= undefined
}

function render(history){
    let historyList= document.getElementById("historyList")
    let recentResult= document.getElementById("recendResult")
    console.log("historylist", historyList)
    console.log("recent result:", recentResult)
    console.log("recent result number is:", history[history.length - 1].result)
    //replace result on dom
    
    recentResult.innerText=history[history.length -1].result
    for (let item of history){
        console.log("current history",item)
        historyList.innerHTML+=`
          <li>
        ${item.firstNum} ${item.operator} ${item.secondNum}=${item.result}
            </li>`
    }
}




//!---------code above is live solve code
// //getCalculations function should grab calculations array
// //?I tried referencing lecture notes to get the calculations array to go to dom
// //? but couldn't get to work
// function onReady(){
//     getCalculations();
// }
// console.log("On Ready was called",onReady())

// //function should get calculations from server
// function getCalculations(){
// axios({
//     method: 'GET',
//     url: '/calculations',})
//     .then((response) => {
//        console.log("response data", response.data);
//         //should append calculations to dom
//         renderToDom(response.data);
//     })
//     .catch((error) => {
//         alert('request failed');
//         console.error(error);
//     })
// }
// //need a function to actually to the rendering
// function renderToDom(calculations){
//     //select the output element
//     let calculationData=document.getElementById('resultHistory');
//     //empty the output element  //?not sure how this works, following notes
//     calculationData.innerHTML= '';
    
//     //will need a loop to go through calculations and post them
//     for (let calcsToAdd of calculations){
//         output.innerHTML +=`<li>${calcsToAdd.numOneInput}${calcsToAdd.operator}${calcsToAdd.numberTwoInput}=${calcsToAdd.result}</li>`
//         }
// }

// function onButton(event,operator){
//     event.preventDefault();

// //? without "Number" it will treat inputs as string
// let numOneInput=Number(document.getElementById("firstNumber").value);
// let numTwoInput=Number(document.getElementById("secondNumber").value);

// // //?need a variable to store input data
// let inputs={
//         numOneInput,
//         numTwoInput,
//         operator, 
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













