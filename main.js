//klassen
class Student{

    constructor(name,id,nc){
            this.name = name;
            this.id = id;
            this.nc = nc;
    }
    
    }
    
    var student = new Student("Gracjan",1,1.5)
    var student2 = new Student("Max",2,2)
    var student3 = new Student("Peter",3,2.5)
    
    //Methoden
    
    class Car{
    
        constructor(marke, baujahr, ps){
            this.marke = marke;
            this.baujahr = baujahr;
            this.ps = ps;
        }
    
        drive(){
            console.log("Fährt: " + this.marke + " " + this.baujahr + " " + this.ps);
        }
    
        honk(){
            console.log("Hupt: " + JSON.stringify(this));
        }
    }
    
    var car = new Car("VW",1994,132);
    
    var car2 = new Car("Porsche",2020,231);


function main(){

console.log(student,student2,student3);
car.drive();
car2.drive();
car.honk();
car2.honk();
}

// jetzt eine änderung