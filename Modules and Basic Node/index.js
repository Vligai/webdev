//Vladislav Ligai
//CS546 lab 2 

const printShape = require("./printShape");

console.log("Printing Triangles of sizes 1 to 10:");
printShape.triangle(1);
printShape.triangle(2);
printShape.triangle(3);
printShape.triangle(5);
printShape.triangle(6);
printShape.triangle(7);
printShape.triangle(8);
printShape.triangle(9);
printShape.triangle(10);

console.log("Printing Squares of sizes 2 to 11:");
printShape.square(2);
printShape.square(3);
printShape.square(4);
printShape.square(5);
printShape.square(6);
printShape.square(7);
printShape.square(8);
printShape.square(9);
printShape.square(10);
printShape.square(11);

console.log("Printing Rhombuses of sizes 2 to 20 (evens only):");
printShape.rhombus(2);
printShape.rhombus(4);
printShape.rhombus(6);
printShape.rhombus(8);
printShape.rhombus(10);
printShape.rhombus(12);
printShape.rhombus(14);
printShape.rhombus(16);
printShape.rhombus(18);
printShape.rhombus(20);