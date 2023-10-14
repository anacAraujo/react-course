console.log("1-------------------------------------------")
//Crie uma função que receba 2 Sets como parâmetros e devolva um que é a união dos 2 primeiros.
let someColors = new Set(['Green', 'Red', 'Orange', 'Yellow', 'Red']);
let cores = new Set(['Violet', 'Indigo', 'Blue', 'Cyan', 'Green']);
function unifySets(set1, set2) {
    return new Set(...set1, ...set2)
}
console.log(unifySets(someColors, cores))

console.log("2-------------------------------------------")
//Crie uma função que receba 2 Sets como parâmetros e devolva um que é a interceção dos 2 primeiros. 
function findComonElement(set1, set2) {
    let comonElements = new Set;
    for (const element of set1) {
        if (set2.has(element)) {
            comonElements.add(element);
        }
    }
    console.log(...comonElements);
}
findComonElement(someColors, cores);

console.log("3-------------------------------------------")
//Desenvolva uma função que receba como parâmetro um array e que elimine os seus elementos duplicados e devolva o resultado sobre a forma de um Set
let nums = new Array(1, 2, 2, 4, 5, 6, 7, 8, 2, 5, 6, 8, 9);
function deleteDuplicatedElements(...array) {
    let result = new Set(...array);
    return result;
}
console.log(deleteDuplicatedElements(nums));

console.log("4-------------------------------------------")
//Crie um Set com que tenha a lista de carros que pertence a uma família. Cada objeto carro deve ter Marca, Matricula, Cor, Número de quilómetros, média de consumo.
//Crie uma função que receba como parâmetros dois Sets do tipo acima descrito e que devolva um Set com todos os carros de duas famílias.

class Car {
    constructor(marca, matricula, cor, km, consumo) {
        this.marca = marca;
        this.matricula = matricula;
        this.cor = cor;
        this.km = km;
        this.consumo = consumo;
    }
}

let familia1 = new Set();
let familia2 = new Set();

const car1 = new Car("aaa", "aaaaaa", "aaaa", 123, 123);
const car2 = new Car("bbb", "bbbbbb", "bbbb", 546, 987);
const car3 = new Car("ccc", "cccccc", "cccc", 564, 173);

familia1.add(car1);
familia1.add(car2);
familia2.add(car3);

function allCars(set1, set2) {
    let result = new Set([...set1, ...set2]);
    return result;
}

console.log(allCars(familia1, familia2));

console.log("5-------------------------------------------")
//Crie um Map com que tenha a lista de 5 alunos da turma. Cada objeto aluno deve ter nome, número, morada, UCs a frequentar, média. 
//Crie uma função que receba como parâmetro um Map com a lista dos alunos e mostre aquele que tem melhor média.
class Aluno {
    constructor(nome, num, morada, ucs, media) {
        this.nome = nome;
        this.num = num;
        this.morada = morada;
        this.ucs = ucs;
        this.media = media;
    }
}

let turma = new Map();
turma.set(1, new Aluno("João", 111, "Algarve", "aaaaaaa", 13));
turma.set(2, new Aluno("Paula", 222, "Aveiro", "aaaaaaa", 16));
turma.set(3, new Aluno("Marta", 333, "Porto", "aaaaaaa", 18));
turma.set(4, new Aluno("Marisa", 444, "Leiria", "aaaaaaa", 14));
turma.set(5, new Aluno("Diogo", 555, "Porto", "aaaaaaa", 11));

function ShowBestStudent(classStudents) {
    let bestGrade = 0;
    let bestStudent;
    for (const student of classStudents) {
        if (student.media > bestGrade) {
            bestGrade = student.media;
            bestStudent = student;
        }
    }
    return bestStudent;
}

console.log(ShowBestStudent(turma.values()));


console.log("6-------------------------------------------")
//Crie uma classe Livro
//a. Esta classe deve ter os atributos: nome e ano do mesmo.
//b. Crie um método que mostre o nome do livro.
//c. Crie um método que mostre quantos anos passaram desde que o livro foi editado.
//a. Instancie um objeto da classe livro com os seguintes dados: “Leviathan”, 1989.
//b. Mostre o nome do Livro.
//c. Mostre quantos anos passaram desde a edição do Livro.

class Book {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }

    mostraNome() {
        console.log(this.nome);
    }

    mostraIdade() {
        const currentYear = new Date().getFullYear();
        console.log(currentYear - this.ano);
    }
}

let book = new Book("Leviathan", 1989);
book.mostraNome();
book.mostraIdade();

console.log("7-------------------------------------------")
//7. Repita o exercício do livro anterior, mas agora crie três classes que têm como propriedades as informações necessárias à gestão dos livros da Biblioteca.
//a. Crie uma classe Livro com os seguintes atributos: titulo, autor, copyright, isbn, paginas, leituras, eliminado
//b. Crie mais duas outras classes, Manual e Novela, que herdam da classe Livro.
//c. Na classe Livro, crie um método para devolver o livro.
//d. Nas classes Manual e Novela, crie um método que permita eliminar o livro da biblioteca ou atualizar o número de vezes que o livro foi lido
//i. DICA: se for um manual, este deve ser eliminado 5 anos após a data atual. Se for uma novela deve ser eliminada após 100 leituras.
//e. Instancie um novo manual com os seguintes dados: Leviathan ', 'Redacted', 2013, '0000000000000', 1147, 1, 'No'
//d. Instancie um novo livro que tenha sido lido 5 vezes.
//Let goodRead = New Livro(“....”)
//e. Elimine esse livro 

class Livro {
    constructor(titulo, autor, copyright, isbn, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.copyright = copyright;
        this.isbn = isbn;
        this.paginas = paginas;
        this.leituras = 0;
        this.eliminado = false;
        this.alugado = false;
    }

    alugarLivro() {
        if (this.alugado === true) { // não pode alugar se não estiver disponivel
            console.log("Não está disponivel.")
            return;
        }
        console.log(`${this.titulo} - Aluguer efetuado com sucesso.`)
        this.alugado = true;
    }

    devolverLivro() {
        if (this.alugado === false) { //não pode devolver algo que não tenha sido alugado
            return;
        }
        console.log(`${this.titulo} - Devolução efetuda com sucesso.`)
        this.alugado = false;
    }
}

class Manual extends Livro {
    constructor(titulo, autor, copyright, isbn, paginas) {
        super(titulo, autor, copyright, isbn, paginas);
    }

    eliminarManual() {
        if (this.eliminado) { //não pode eliminar algo que já foi eliminado
            return;
        }
        console.log(`${this.titulo} foi eliminado`);
        this.eliminado = true;
    }
}

class Novela extends Livro {
    constructor(titulo, autor, copyright, isbn, paginas) {
        super(titulo, autor, copyright, isbn, paginas);
    }

    eliminarNovela() {
        if (this.eliminado) { //não pode eliminar algo que já foi eliminado
            return;
        }
        console.log(`${this.titulo} foi eliminado`);
        this.eliminado = true;
    }
}