const test = [10,34,54,32,322,45,34];
for (let x = 0; x < test.length; x++){
    console.log(test[x]);
}

const number = [23,34,54,34,67,3,56],
text = ""
for (let x in number){
    console.log(number[x]);
}
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
function myFunction(value) {
  txt += value + "<br>"; 
}
const car = ["asfkreklrelk4rk"];
let string = "An example of scribbles is";
for (let x of car){
  console.log (string += x + "<br>");
  
}
let word = "get laid ";
let i = 0;
do{
  console.log(word + i + " times"); i++;
}
while (i < 20);

for (let x = 0; x < 10; x++){
  if (x===4){break}
  console.log("The number is " + x)
}