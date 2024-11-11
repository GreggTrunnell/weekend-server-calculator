const express = require("express");
const app = express();
let PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.static("server/public"));
//do not modify above

let calculation=[{
  firstNum: 10,
  secondNum: 10,
  operator: '+',
  result:  20,
}]

//GET calculations
//respond with calculations
// app.get('/calculations', (req, res)=>
// res.send(calculations())
// POST calculations
// req.body == incoming calculation
// call function to get result - getResult(incCalculation)
// will return a result number
// add result number to incCalc object as a 'result' key
// push incCalc to calculations
// respond with status code 201

// app.post('/calculations', (req,res)=>{
// console.log("post", req.body);
// res.sendStatus(200);
// const newCalculation=req.body
// const result = getResult(newCalculation)
// newCalculation.push= result;
// }))

app.post('/calculations', (req, res)=>{
  console.log("post", req.body);
  res.sendStatus(200);
  const newCalculation=req.body
  const result = getResult(newCalculation)
  newCalculation.result= result;
})

function getResult(calc){
  //switch statement to compare operator
  //ex. if '+' 
  //return calc.firstNum + calc.secondNum
switch (calc.operator){
  case '+':
    return calc.firstNum + calc.secondNum
  case '-':
    return calc.firstNum - calc.secondNum
  case '*':
    return calc.firstNum * calc.secondNum
  case '/':
    return calc.firstNum / calc.secondNum
  
  default:
    return NaN
}
}







//!------code above is live solve
// //need a bodyParser to send an empty array
// const bodyParser=require('body-parser')
// app.use(bodyParser.urlencoded({extended:true}))

// // Global variable that will contain all of the
// // calculation objects:

// let calculations = [];


// //? in browser app.get uses express to call the function
// app.get('/calculations',(req, res)=>{
//   console.log("A request for calculations",calculations);
//   //?send back the list of calculations
//   res.send(calculations)
//  })
// //localhost:5001/calculations in postman outputs empty array as expected


// //!-----------------------
// //?-----shows created in postman--------
//  app.post('/calculations', (req,res) => {
//   // The (body) sent from the client is saved for us
//   console.log("get a POST request", req.body)
//   //will need a variable to aquire post data in the proper format
//   const {numOneInput,numTwoInput,operator} = req.body;
// let result; 

// switch(operator){
//   case '+':
//     result=numOneInput+numTwoInput;
//     console.log("the adding result is", result);
//     break;
//     case '-':
//       result=numOneInput-numTwoInput;
//       console.log("the subtraction is", result);
//       break;
//     case '*':
//       result=numOneInput*numTwoInput;
//       console.log("multiplication is", result);
//       break;
//       case '/':
//         result=numOneInput/numTwoInput;
//         console.log("division is", result);
// }

//  //will need a variable to push data in proper format to calculations array
// let calculation = {
//   numOneInput,
//   numTwoInput,
//   operator,
//   result
// }
//   calculations.push(calculation)
//   console.log("new calculation", calculation)
//   res.sendStatus(201);
// })







// PLEASE DO NOT MODIFY ANY CODE BELOW THESE BEARS:
// 🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸

// Makes it so you don't have to kill the server
// on 5000 in order to run the tests:
if (process.env.NODE_ENV === "test") {
  PORT = 5002;
}

// This starts the server...but also stores it in a variable.
// This is weird. We have to do it for testing reasons. There
// is absolutely no need for you to reason about this.
const server = app.listen(PORT, () => {
  console.log("server running on: ", PORT);
});

// server.setTimeout(500)

// This is more weird "for testing reasons" code. There is
// absolutely no need for you to reason about this.
app.closeServer = () => {
  server.close();
};

app.setCalculations = (calculationsToSet) => {
  calculations = calculationsToSet;
};

module.exports = app;