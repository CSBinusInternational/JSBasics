
// #1
// Async Await - Handles responses of asynchronous code in an elegant way
async function delayedMessage() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('This is the delayed message!');
        }, 3000);
    });
}

async function printMessage() {
    const msg = await delayedMessage();
    console.log(`Delayed message is: ${msg}`)
}

printMessage();

// Promises
const promise = new Promise((resolve, reject) => {
    const num = 10
    if (num > 5) {
        resolve('Number is greater than 5')
    } else {
        reject('Number is not greater than 5')
    }
})

// 'then' runs after resolve is succesful,
promise.then((msg) => {
    console.log(`Our promise is successful and we ran code after`)
}).catch((msg) => console.log('Our promise failed because the number is not greater than 5 and our catch ran '))



// #2
// Get reference to img in DOM.
const myImage = document.getElementById('image')

// Fetch API handles HTTP requests and responses and is promise based. Can use async/await or .then. Uses random cat API
fetch('https://api.thecatapi.com/v1/images/search')
.then(response => response.json())
.then(data => {
    const imgUrl = data[0]['url']
    console.log(`Url of cat image returned by fetch request ${imgUrl}`)
    
    myImage.src = imgUrl
})

// #3
// Sample array
const arr = [1,2,3,4,5,6,7,8,9,10]

// Map - Creates a new array from iterating over elements with a function
const mapArr = arr.map(item => item*2);
console.log(`Map function that multiplies each element by two and returns a new array: ${mapArr}`)

// Filter - Filters something from an array with conditions
const arrOverFive = arr.filter(item => item>5)
console.log(`Numbers over five using filter: ${arrOverFive}`)

// Reduce
const arrSum = arr.reduce((total, age) => total + age, 0)
console.log(`Sum of all elements in array: ${arrSum}`)