console.log("I'm the client. Listen!!");
// //*onReady function can be used to call for anything at least
// //*once when page load




// //this function will go and get all calculations and can be reused
// //to get all calculations
// function onReady() {
//     console.log("onReady() has been called!");
//     // When the page first loads, will get calculations
//     calculations();
//     }    
//     onReady();
// //?Use axious to GET data from server.  Needs at least a method and a url
// //go to server and retrieve all calculations
// function calculations(){
//     console.log("getting calculations");

//     //use axios to get calculations from server
// axios({
//     method: "GET",
//     url: "/calculations"
// })
// .then((response)=>{
//     console.log("data from server", response);
//     renderToDom(response.data);//will only be called after we get a response
// })

// .catch((error)=>{
//     console.log("oops, GET calculations error", error);
// });
//}




//*POST practice------------
//with this function axios will send a body (data) to the server
// function addCalculation(){
//     console.log("addCalculation here")
    
//     const numberOneInput= document.getElementById("firstNumber").number;
//     const numberTwoInput= document.getElementById("secondNumber").number;

//     const newCalculation= 
// }