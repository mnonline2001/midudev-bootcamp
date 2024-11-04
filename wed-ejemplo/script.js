console.log("Hola mundo");

let nombre = "Juan";
const numero = 10;
var apellido = "Perez";

console.log(nombre);
nombre = "Pedro";
console.log(nombre);


const firstName = "Juan";
firstName.toUpperCase();
const firstNameWithUpperCase = firstName.toUpperCase();
console.log(firstNameWithUpperCase);

const list = [];
list.push(157);
console.log(list[0]);


const list2 =[];
list2.concat(200);
const anotherList = list2.concat(200);
console.log(anotherList);

const person = {
    name: 'Miguel',
    twitter: '@midudev',
    age: 18,
    isStudent: true,
    links: ['https://midu.live', 'https://midu.tube']
}

const field = 'twitter';

console.log(person.name);
console.log(person['name']);
console.log(person.links[0]);

console.log(person[field]);

// funciones

const sumar = (operador1, operador2) => {
    console.log(operador1)
    console.log(operador2)
    return operador1 + operador2;
}

const resultad = sumar(1, 2);
console.log(resultad);
console.log(sumar(1, 2));


const op1 = 8;
const op2 = 2;
const sumar2 = (op1 + op2)
console.log(sumar(op1, op2));

restar(6 - 2)
function restar (operador1, operador2) {
    return operador1 - operador2
}
console.log(restar(6, 2))

//REACT