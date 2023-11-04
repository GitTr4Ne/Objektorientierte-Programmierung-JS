//importierte Klassen 

import { Car } from "./car.js";
import {Student} from "./student.js";

var student = new Student("Gracjan", 1, 1.5);
var student2 = new Student("Max", 2, 2);
var student3 = new Student("Peter", 3, 2.5);

var car = new Car("VW", 1994, 132);
var car2 = new Car("Porsche", 2020, 231);


function main()
{
    car.drive();
car.honk();

car2.drive();
car2.honk();

console.log(student,student2,student3)


}

main();