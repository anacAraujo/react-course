// int + undifind = NN
//push() só dá para fazer de um elemento de cada vez
console.log("1-------------------------------------------")
//Crie uma função que retorna a string “Olá, ” concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação “!” no final.
const function1 = function (word) {
    return word + "!"
}

console.log(function1("Olá"))

console.log("2-------------------------------------------")
//Crie uma função que, tendo dois valores (passados como parâmetros), permita mostrar a soma, subtração, multiplicação e divisão desses valores. 
let numA = 3
let numB = 7
const function2 = function (a, b) {
    let soma = a + b
    let subtracao = a - b
    let multiplicacao = a * b
    let divisao = a / b
    console.log(a + " + " + b + " = " + soma)
    console.log(a + " - " + b + " = " + subtracao)
    console.log(a + " x " + b + " = " + multiplicacao)
    console.log(a + " / " + b + " = " + divisao)
}
function2(numA, numB)

console.log("3-------------------------------------------")
//Crie um script para imprimir os números ímpares menores que 100.
let oddNumbers = new Array();
for (let num = 0; num < 100; num++) {
    if (num % 2 !== 0) {
        oddNumbers.push(num);
    }
}
console.log(oddNumbers.join(", "))

console.log("4-------------------------------------------")
//Crie um script que permita juntar todos os elementos de um array numa string.
let fruits = new Array("aple", "lime", "pinaple");
console.log(fruits.join(", "))

console.log("5-------------------------------------------")
//Crie uma função que devolva a soma dos valores de um array
function sumOddArray(array) {
    let currentNum = 0;
    array.forEach(num => {
        currentNum = currentNum + num
    });
    console.log(currentNum)
    return currentNum;
}
sumOddArray(oddNumbers)

console.log("6-------------------------------------------")
//Crie uma função que permita calcular a média dos valores de um array.
function mediaOddNum(array) {
    let media = sumOddArray(oddNumbers) / array.length
    console.log(media)
}
mediaOddNum(oddNumbers)

console.log("7-------------------------------------------")
//Crie uma função que permita clonar um array.
function cloneArray(array) {
    const cloneArray = [...array]
    return cloneArray;
}

const originalArray = [-7, -3, 1, 2, 3, 4, 5]
const clonedArray = cloneArray(originalArray);
console.log(clonedArray)

console.log("8-------------------------------------------")
//Crie uma função que receba como parâmetro um array de números e devolva um array contendo só os números positivos.
const positiveNums = new Array();
function onlyPositiveNum(array) {
    array.forEach(num => {
        if (num > 0) {
            positiveNums.push(num)
        }
    });
}
onlyPositiveNum(originalArray)
console.log(positiveNums)

console.log("9-------------------------------------------")
//Crie uma função que permita juntar dois arrays e devolva o resultado como um novo 
let array1 = new Array(1, 2, 7);
let array2 = new Array(3, 4, 5);
let arrayFinal = array1.concat(array2);
console.log(arrayFinal);

console.log("10-------------------------------------------")
//Crie uma função que permita inverter um array
function reverse(array) {
    console.log(array.reverse());
}
reverse(oddNumbers)

console.log("11-------------------------------------------")
//Crie uma função que permita localizar o maior valor dentro de um array de valores numéricos
function findMaxNum(array) {
    console.log(Math.max(...array));
}
findMaxNum(oddNumbers)

console.log("12-------------------------------------------")
// Crie uma função que permita devolver a maior string dentro de um array
const longStrings = [
    'first item',
    'second item is longer than the third one',
    'third longish item'
];

let lgth = 0;
let longestString;

for (var i = 0; i < longStrings.length; i++) {
    if (longStrings[i].length > lgth) {
        lgth = longStrings[i].length;
        longestString = longStrings[i];
    }
}
console.log(longestString);

console.log("13-------------------------------------------")
//Crie uma função que permita inverter um array
var estudantes = new Array();
estudantes[0] = new Array("12345", "Zé", "ze@ua.pt");
estudantes[1] = new Array("54321", "Maria", "maria@ua.pt");
estudantes[2] = new Array("11111", "Manel", "manel@ua.pt");
console.log(estudantes)

console.log("Como atualizar o email ze@ua.pt para zeca@ua.pt?")
estudantes[0][2] = "zeca@ua.pt"
console.log(estudantes)

console.log("Como adicionar um novo registo no final da lista de estudantes?")
estudantes.push(new Array("100", "Rita", "rita@ua.pt"))
console.log(estudantes)

console.log("Como adicionar um novo registo depois do registo da Maria?")
estudantes.splice(2, 0, new Array("100", "Rui", "rui@ua.pt"))
console.log(estudantes)

console.log("Como eliminar o registo da Maria?")
estudantes.splice(1, 1)
console.log(estudantes)