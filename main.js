// Promises

function main(){

let promise = new Promise((resolve, reject) => {

    let n = 99;

    if(n < 100) {
        resolve("Versprechen gehalten")
    } else {
        reject("versprechen nicht gehalten")
    }
})

    promise.then((res) => {
        console.log(res)
    }).catch((e) => {
        console.log("Error: "+ e)
    })
}
