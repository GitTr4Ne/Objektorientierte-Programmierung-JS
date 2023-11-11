// Try Catch

function main(){

try {

    var n = 600;

    if (n > 0 && n < 1000){
        console.log("Die nummer ist zwischen 0 und 1000")
    } else {
        throw new RangeError("die Nummer ist zu groß oder zu klein")
    }
    console.log(age)
} catch(e){
    console.log("Error abgefangen: " + e)

    if(e instanceof ReferenceError)
    console.log("Referenz fehler")

}finally
{
    //wird in jedem fall ausgeführt
    console.log("Ich mag kuchen")
}
    console.log(10/0)
    console.log("Hello World")

}
