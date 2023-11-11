// Timeout & Interval

function main(){

console.log(1)

setTimeout(() => {
console.log("Zeige nach 3 Sekunden")
}, 3000);

console.log(2)


var ticker = 0;

setInterval(() => {
    ticker++;
    console.log(ticker)
}, 1000)
}
