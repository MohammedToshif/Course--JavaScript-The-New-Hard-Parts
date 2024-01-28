//             //----- (01) - (Introducing Asynchronicity)

// // Solutions 1

// function display(data) {
//     console.log(data)
// }

// const datafromAPI = fetchAndWait('https://twitter.com/will/tweets/1')

// //... user can do NOTHING here
// //... could be 300ms, could be half a second
// // they're just clicking and getting nothing

// display(datafromAPI)

// console.log("Me later!");


            //----- (02) - (Asynchronous Web Browser APIs)

// // Solution 2 - Introducing Web Browser APIs/Node background threads

// function printHello() {
//     console.log("Hello");
// }

// setTimeout(printHello,1000);

// console.log("Me first!");


            //----- (03) - (Calling the Outside World)

// // We're interacting with a world outside of JavaScript now - so we need rules

// function printHello() {
//     console.log("Hello");
// }

// function blockFor1Sec() {
//     //blocks in the javascript threads for 1 second 
// }

// setTimeout(printHello,0);

// blockFor1Sec()

// console.log("Me first!");