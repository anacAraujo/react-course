console.log("1.1-------------------------------------------")
//somar todos os elementos de um array.
let numbers = [1, 2, 3, 5, 6, 7, 9, 11, 12, 13, 15, 17, 18, 19, 21, 22, 23, 25, 26, 27, 29, 30]

function sumOddArray(array) {
    let currentNum = 0;
    array.forEach(num => {
        currentNum = currentNum + num
    });
    console.log(currentNum)
    return currentNum;
}
sumOddArray(numbers)

console.log("1.2-------------------------------------------")
//Dado um array, retorna um array com todos os elementos ao quadrado
function powerOfTwo(array) {
    const powerArray = new Array();
    array.forEach(element => {
        powerArray.push(Math.pow(element, 2))
    });
    console.log(...powerArray)
}

powerOfTwo(numbers);

console.log("1.3-------------------------------------------")
//Dado um array de números, retorna um array com apenas os números pares desse array.
function onlyOddNumbers(array) {
    const oddNumbers = new Array();
    for (const num of array) {
        if (num % 2 !== 0) {
            oddNumbers.push(num);
        }
    }
    return oddNumbers;
}
console.log(onlyOddNumbers(numbers));

console.log("2-------------------------------------------")
//Desenvolva uma função que calcula o somatório de qualquer número N. Exemplo: somatório de n é: 1 + 2 + 3 + ... + (n-1) + n
function sumN(n) {
    let sum = 0;

    for (let index = 0; index <= n; index++) {
        sum = sum + index;
    }

    return sum;
}
console.log(sumN(12))

console.log("3-------------------------------------------")
//Crie uma const e verifique não pode alterar o seu conteúdo.
const constant = 23;
//constant = 98;
//console.log(constant);

console.log("4-------------------------------------------")
//Crie uma variável utilizando a palavra reservada let e teste a sua utilização com uma variável global 
//e uma variável local (de uma função) com o mesmo nome. Valide utilizando, por exemplo, console.log(..);
let variable = 0;
console.log(variable)
function name() {
    console.log(variable)
}

console.log("5-------------------------------------------")
//Considere que pretende escrever uma mensagem composta por strings que variam.
//Utilize o conceito de template strings para o fazer. No exemplo seguinte altere a forma de fazer o console.log:
console.log("5.a-------------------------------------------")
//Experimente com os seguintes dados:
var nome = "teste";
console.log(`o meu nome é ${nome}`)

console.log("5.b-------------------------------------------")
//Experimente agora com o objeto:
const dados = {
    nome: "aluno",
    morada: 'aveiro',
    idade: 25
}
console.log(`o meu nome é ${dados.nome}, moro em ${dados.morada} e tenho ${dados.idade} anos`)

console.log("6-------------------------------------------")
//Crie uma função que utilize “default parameters”. 
function defaultP(a = 23) {
    console.log(a);
}
defaultP();

console.log("7-------------------------------------------")
//Crie a mesma função utilizando o conceito de Arrow function.
const defaultP2 = (a = 23) => console.log(a);
defaultP2();

console.log("8-------------------------------------------")
//Crie dois objetos com dados de um aluno. Através de Spread Operator junte os dois objetos e mostre o resultado final
const aluno1 = {
    nome: "Paulo",
    idade: 23,
    morada: "Porto"
}

const aluno2 = {
    nome: "Rita",
    idade: 20,
    morada: "Leiria"
}

const alunos = { ...aluno1, ...aluno2 }
console.log(alunos)

console.log("9-------------------------------------------")
//Crie uma função que junte num objeto dados que estão guardados em dois objetos, através de Spread Operators.
function joinObjects(ob1, ob2) {
    const result = { ...ob1, ...ob2 }
    return result;
}

const ob1 = {
    name: "name"
}

const ob2 = {
    name: "ob2"
}

console.log(joinObjects(ob1, ob2))

console.log("10-------------------------------------------")
//Crie uma função que receba vários números e faça a sua multiplicação. Utilize o conceito de Rest Operator.
function multiplication(...nums) {
    if (nums.length === 0) {
        return;
    }

    let result = nums[0];
    for (let index = 1; index < nums.length; index++) {
        result *= nums[index];
    }
    return result;
}
console.log(multiplication(2, 5))

console.log("11-------------------------------------------")
//Crie um objeto que permita guardar nome, número e nota de um aluno. Crie um array de objetos deste tipo, com por exemplo o 
//registo de 10 alunos. Experimente utilizar os ciclos for of e for in para listar os objetos. Crie uma função que receba
//uma lista de objetos deste tipo e que mostre o aluno que tem a maior nota. Mostre uma página HTML a listagem dos alunos.

const studentA = { name: "aaa", number: 1, grade: 1 }
const studentB = { name: "bbb", number: 2, grade: 2 }
const studentC = { name: "ccc", number: 3, grade: 3 }
const studentD = { name: "ddd", number: 4, grade: 4 }
const studentE = { name: "eee", number: 5, grade: 5 }
const studentF = { name: "fff", number: 6, grade: 6 }
const studentG = { name: "ggg", number: 7, grade: 7 }
const studentH = { name: "hhh", number: 8, grade: 8 }
const studentI = { name: "iii", number: 9, grade: 9 }
const studentJ = { name: "jjj", number: 10, grade: 10 }

const students = [studentA, studentB, studentC, studentD, studentE, studentF, studentG, studentH, studentI, studentJ];

function createStudentsList(students) {
    document.getElementById("studentsList").innerHTML += `<ul>Name Nº Grade</ul>`
    for (const key in students) {
        document.getElementById("studentsList").innerHTML += `<ul> ${students[key].name}     ${students[key].number}     ${students[key].grade} </ul>  `
    }
}

function getBestStudent(students) {
    let bestGrade = -99999;
    let nameBestStudent = "";
    for (const key in students) {
        if (students[key].grade > bestGrade) {
            bestGrade = students[key].grade;
            nameBestStudent = students[key].name;
        }
    }
    document.getElementById("bestStudent").innerHTML = `Best Grade: ${bestGrade} (student: ${nameBestStudent})`;
}

createStudentsList(students);
getBestStudent(students)


