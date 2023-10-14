console.log("1-------------------------------------------")
//Crie uma função com uma sequência de carateres, permita colocar por ordem crescente os valores, mostrando ao utilizador a sequência original e a ordenada
function ordenarSequencia() {
    const sequenciaOriginal = "qwrtyukop";

    const caracteres = sequenciaOriginal.split("");

    const caracteresOrdenados = caracteres.slice().sort().join("");

    console.log("Sequência Original: " + sequenciaOriginal);
    console.log("Sequência Ordenada: " + caracteresOrdenados);
}

ordenarSequencia();

console.log("2-------------------------------------------")
//Escreva uma função (primeiro) que permita devolver o primeiro elemento de um array.
//Se por passado um parâmetro X, a função deverá devolver os primeiros X elementos desse array
function showFirstElements(x = 1) {
    const animals = ["cat", "dog", "pig"]
    for (let index = 0; index < x; index++) {
        console.log(animals[index])
    }
}
showFirstElements(2);

console.log("3-------------------------------------------")
//Escreva uma função (Last) que receba um array como argumento e devolva o último elemento desse array. Faça a função de 3 formas diferentes. 
const animals = ["cat", "dog", "pig"]
//1:
function last1(array) {
    console.log(array[array.length - 1])
}
last1(animals);

//2:
function last2(array) {
    console.log(array.slice(-1))
}
last2(animals);

//3:
function last3(array) {
    console.log(array.pop())
}
//last3(animals);

console.log("4-------------------------------------------")
//Escreva a função Rest que retorna todos os elementos do array, exceto o primeiro. 
function rest(array) {
    for (let index = 1; index < array.length; index++) {
        console.log(array[index])
    }
}
rest(animals);

console.log("5-------------------------------------------")
//Escreva a função ExceptoUltimo que retorna todos os elementos do array, exceto o último.
function exceptoUltimo(array) {
    console.log(array.slice(0, array.length - 1))
}
exceptoUltimo(animals);

console.log("6-------------------------------------------")
//Escreva a função Ins que receba como parâmetros um elemento e um array e insira o elemento no início do array
function ins(element, array) {
    array.splice(0, 0, element)
    console.log(...array)
}
ins("corcodile", animals);

console.log("7-------------------------------------------")
//Escreva uma função RetPrimeiroUltimo que retire o primeiro e o último elemento de um array
function retPrimeiroUltimo(array) {
    array.splice(0, 1);
    array.pop()
    console.log(...array)
}
retPrimeiroUltimo(animals);

console.log("8-------------------------------------------")
//Crie uma função que aceite um número como parâmetro de entrada, e acrescente o
//símbolo | entre cada dois números pares. Por exemplo, se a entrada for 25468, o
//output deverá ser 254|68|
function addSymbol(num) {
    const numString = num.toString();
    let result = numString[0];
    let evenNum = 0;
    for (let index = 1; index < numString.length; index++) {
        if (parseInt(numString[index - 1]) % 2 === 0) {
            evenNum++;
        }
        if (evenNum === 2) {
            result += "|";
            evenNum = 0;
        }
        result += numString[index]
    }
    console.log(result);
}
addSymbol(25468);

console.log("9-------------------------------------------")
//Crie uma função que ordene um array de números por ordem crescente. 
function sortNums() {
    const nums = [3, 67, 89, 2, 20, 51]
    console.log(nums.sort((a, b) => a - b));
}
sortNums();

console.log("10-------------------------------------------")
//Escreva uma função que devolva um array construído à custa de: um valor e o número de posições que o valor será repetido no array.
const result = new Array();
function arrayConstructor(element, num) {
    if (num <= 0) {
        return;
    }
    for (let index = 0; index < num; index++) {
        result.push(element);
    }
    console.log(...result)
}
arrayConstructor(3, 5);

console.log("11-------------------------------------------")
//Escreva uma função que recebe um array e um valor como parâmetros e devolve o número de vezes que o valor se repete no array. 
function numRep(array, element) {
    let numRepeticions = 0;
    array.forEach(valor => {
        if (valor === element) {
            numRepeticions++;
        }
    });
    console.log(numRepeticions)
}
numRep(result, 3)

console.log("12-------------------------------------------")
//Ecreva uma função que devolva um array de números inteiros entre 2 valores passados como parâmetro. 
function showNumsBetween(start, end) {
    const result = new Array();
    for (let index = start; index <= end; index++) {
        result.push(index);
    }
    console.log(...result);
}
showNumsBetween(2, 6);

console.log("13-------------------------------------------")
//Escreva uma função RemoveDuplicados que remova elementos duplicados de um array.
const houseObjets = ["Sofa", "Chair", "Dresser", "Bed", "Bed", "Wardrobe", "Dresser", "Bed", "Nightstand", "Wardrobe", "Bookshelf"];
function removeDuplicados(array) {
    // let currentPosition = 0;
    let a_apagar = []
    array.forEach((currentElement, index) => {
        if (index === array.length) {
            return;
        }
        for (let i = index; i < array.length; i++) {
            if (currentElement === array[i] && index !== i) {
                if (!a_apagar.includes(i)) {
                    a_apagar.push(i)
                }
                //array.splice(array[i], 1);
                console.log(...a_apagar)
            }
        }
        //currentPosition++;
    });
    for (let index = 0; index < a_apagar.length; index++) {
        array.splice(a_apagar[index] - index, 1)
    }

    console.log(...array)
}
removeDuplicados(houseObjets);