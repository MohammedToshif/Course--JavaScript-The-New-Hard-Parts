
            //----- (01) - (Promises)

// // Solutions 3 - Using two-pronged 'fecade' functions that both initiate background web browser work and return a placeholder object (promise) immediately in javascript

// function display(data) {
//     console.log(data)
// }

// const futureData = fetch('https://twitter.com/will/tweets/1')

// futureData.then(display);   // Attaches display functionallity

// console.log("Me first!");


            //----- (02) - (Promises & Microtask Queue)

// // But we need to know how our promise- deffered functionallity gets back into javascript to be run

// function display(data){console.log(data)}
// function printHello(){console.log("Hello");}
// function blockFor300ms(){/* block js threads for 300ms with long for loop */}

// setTimeout(printHello, 0);

// const futureData = fetch('https://twitter.com/will/tweets/1')
// futureData.then(display)

// blockFor300ms()

// // which will run first?

// console.log("Me first!");