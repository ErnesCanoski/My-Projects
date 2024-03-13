console.log("connected")
let input = prompt('Enter an year');
let num = parseInt(input);
let zod = (num - 4) % 12;
console.log(num);


if(!Number.isNaN(zod)) {

if(zod % 12 === 0) {
    alert("Rat");
}else if (zod % 12 === 1) {
    alert("Ox");
}else if (zod % 12 === 2) {
    alert("Tiger");
}else if (zod % 12 === 3) {
    alert("Rabbit");
}else if (zod % 12 === 4) {
    alert("Dragon");
}else if (zod % 12 === 5) {
    alert("Snake");
}else if (zod % 12 === 6) {
    alert("Horse");
}else if (zod % 12 === 7) {
    alert("Goat");
}else if (zod % 12 === 8) {
    alert("Monkey");
}else if (zod % 12 === 9) {
    alert("Rooster");
}else if (zod % 12 === 10) {
    alert("Dog");
}else if (zod % 12 === 11) {
    alert("Pig");
}else {
    alert("not a valid input");
}
}
console.log(zod);