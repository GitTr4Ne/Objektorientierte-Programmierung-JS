/* var divEle = document.createElement("div")
divEle.innerText = "Hello World 2";
document.body.appendChild(divEle);

var link = document.createElement("a");
link.innerText = "Click here";
link.href = "https://www.google.de"
document.body.appendChild(link); */

var table = document.getElementById("table");
var row = table.insertRow(1);
row.insertCell(0).innerText = "Gracjan";
row.insertCell(1).innerText = "Kilanczyk";

var row = table.insertRow(2);
row.insertCell(0).innerText = "Adolf";
row.insertCell(1).innerText = "Hitler";

var btn = document.getElementById("test");
btn.addEventListener("click", function(){
    var row = table.insertRow(1);
    row.insertCell(0).innerText = "Froni";
    row.insertCell(1).innerText = "Ziegltrum";
});

function main(){

table.classList.add("dieTabelle");

}

function remove(){

    table.classList.remove("dieTabelle");
    
}    

function toggle(){

    table.classList.toggle("dieTabelle");
    
};

table.addEventListener("mouseover", function(){
    table.classList.add("highlight");
});

table.addEventListener("mouseout", function(){
    table.classList.remove("highlight");
});