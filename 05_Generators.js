
            //----- (01) - (Generators)


// // Once we start thinking of our data as flows
// // (where we can pick of an element one-by-one)
// // we can rethink how we produce those flows -
// // JavaScript now lets us produce the flows using
// // a function !

// function *createFlow(){
//     yield 4
//     yield 5
//     yield 6
// }

// const returnNextElement = createFlow()
// const element1 = returnNextElement.next()
// const element2 = returnNextElement.next()

// // What do we hope returnNextElement.next() will
// // return? But how?            


                    // (02)

// // JavaScript’s built in iterators are actually
// // objects with a next method that when called
// // returns the next element from the ‘stream’/
// // flow - so let’s restructure slightly

// function createFlow(array){
//     let i = 0
//     const inner = {next :
//         function(){
//             const element = array[i]
//             i++
//             return element
//         }
//      }
//  return inner
// }

// const returnNextElement = createFlow([4,5,6])
// const element1 = returnNextElement.next()
// const element2 = returnNextElement.next()


// // And the built in iterators actually produce the next element in the format:
// // {value: 4} !                    


            //----- (02) - (Generator Functions with Dynamic Data)

// // This allows us to dynamically set what data
// // flows to us (when we run
// // returnNextElement’s function)

// function *createFlow(){
//     const num = 10
//     const newNum = yield num
//     yield 5 + newNum
//     yield 6
// }

// const returnNextElement = createFlow()
// const element1 = returnNextElement.next() // 10
// const element2 = returnNextElement.next(2) // 7       


            //----- (03) - (Generators Q&A)

// // Async/await simplifies all this and finally fixes
// // the inversion of control problem of callbacks

// async function createFlow(){
//      console.log("Me first")
//      const data = await fetch('https://twitter.com/will/tweets/1')
//      console.log(data)
// }

// const futureData = createFlow()

// console.log("Me second")

// // No need for a triggered function on the promise
// // resolution, instead we auto trigger the resumption
// // of the createFlow execution (this functionality
// // is still added to the microtask queue though)            


            //----- (04) - (Async Generators)

// // We can use the ability to pause createFlow’s
// // running and then restart it only when our data
// // returns

// function doWhenDataReceived (value){
//     returnNextElement.next(value)
// }
// function* createFlow(){
//     const data = yield fetch('http://twitter.com/will/tweets/1')
//     console.log(data)
// }
// const returnNextElement = createFlow()
// const futureData = returnNextElement.next()

// futureData.value.then(doWhenDataReceived)

// // We get to control when we return back to createFlow and continue
// // executing - by setting up the trigger to do so
// // (returnNextElement.next()) to be run by our function that
// // was triggered by the promise resolution (when the value returned
// // from twitter)            