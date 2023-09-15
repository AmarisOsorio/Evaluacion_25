let nombre = prompt("Ingrese su nombre: ");
let cantidadRetiro = parseFloat(prompt("Ingrese cantidad a retirar: "));

let billetes100 = Math.floor(cantidadRetiro / 100);
cantidadRetiro = cantidadRetiro % 100;

let billetes50 = Math.floor(cantidadRetiro / 50);
cantidadRetiro = cantidadRetiro % 50;

let billetes20 = Math.floor(cantidadRetiro / 20);
cantidadRetiro = cantidadRetiro % 20;

let billetes10 = Math.floor(cantidadRetiro / 10);
cantidadRetiro = cantidadRetiro % 10;

let billetes5 = Math.floor(cantidadRetiro / 5);
cantidadRetiro = cantidadRetiro % 5;

let billetes1 = Math.floor(cantidadRetiro / 1);

console.log(`Cantidad de billetes de 100: ${billetes100}`);
console.log(`Cantidad de billetes de 50: ${billetes50}`);
console.log(`Cantidad de billetes de 20: ${billetes20}`);
console.log(`Cantidad de billetes de 10: ${billetes10}`);
console.log(`Cantidad de billetes de 5: ${billetes5}`);
console.log(`Cantidad de billetes de 1: ${billetes1}`);