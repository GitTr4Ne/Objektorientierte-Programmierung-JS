// array fulter() & map()

function main(){

    // filter
let numbers = [1,5,3,29,83,10,8,4]

let smallNumbers = numbers.filter(n =>{
    return n < 10
});

console.log(smallNumbers)

// map()
let doubledNumbers = numbers.map(n => n* 2);
console.log(doubledNumbers)
}
