console.log("1-------------------------------------------")
//Crie uma função que possa ser utilizada para ordenar este array (ou outro com objetos similares) segundo as notas dos candidatos. 
//Considere a utilização do método sort do array. Caso as notas sejam iguais, o candidato mais novo será colocado em 1 lugar. 
//Utilize o conceito de arrow functions.
var aprovados = [
    { candidato: "Maira Soares", nota: 16, idade: 17 },
    { candidato: "Manuel Marques", nota: 14, idade: 20 },
    { candidato: "Nuno Gomes", nota: 15, idade: 19 },
    { candidato: "Patrícia Oliveira", nota: 14, idade: 21 },
    { candidato: "Adriana Pedrosa", nota: 17, idade: 22 }
];

function sortByGradesAndAge(array) {
    array.sort((a, b) => {
        // Primeiro, compare as notas
        if (a.nota !== b.nota) {
            return b.nota - a.nota; // Ordena por notas decrescentes
        } else {
            // Se as notas forem iguais, compare as idades
            return a.idade - b.idade; // Ordena por idade crescente
        }
    });
}

sortByGradesAndAge(aprovados);
console.log(aprovados);

console.log("2-------------------------------------------")
//Crie um array que contenha uma lista de livros (introduza a lista diretamente no código). 
//Cada objeto livro deve ter Titulo, Autores, e se já o leu. Liste os livros(utilizando console.log) com base na característica se foi ou não lido.
//Utilize Arrow functions.
const books = [
    { title: "1984", authors: "George Orwell", isRead: false },
    { title: "To Kill a Mockingbird", authors: "Harper Lee", isRead: true },
    { title: "Pride and Prejudice", authors: "Jane Austen", isRead: false },
    { title: "The Great Gatsby", authors: "Scott Fitzgerald", isRead: false },
    { title: "The Catcher in the Rye", authors: "J.D. Salinger", isRead: false },
    { title: "The Lord of the Rings", authors: "J.R.R. Tolkien", isRead: false },
    { title: "Harry Potter and the Sorcerer's Stone", authors: "J.K. Rowling", isRead: true }
]

const readBooks = books.filter(book => book.isRead)
const unreadBooks = books.filter(book => !book.isRead)

console.log("-- Read Books --");
readBooks.forEach(book => {
    console.log(`${book.title} by ${book.authors}`);
});
console.log("-- Unread Books --");
unreadBooks.forEach(book => {
    console.log(`${book.title} by ${book.authors}`);
});

console.log("3-------------------------------------------")
//Crie um array que contenha uma lista de filmes (lista de objetos Filme) (introduza a lista diretamente no código). 
//Cada objeto filme deve ter Titulo, Ano, e Elencoprincipal. Faça uma função que, para receba um Objeto do tipo Filme e mostre todos
//os seus detalhes. Teste a função com o array de filmes que criou. Utilize Arrow functions.
const filmes = [
    { titulo: "Pulp Fiction", ano: 1994, elencoPrincipal: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"] },
    { titulo: "Titanic", ano: 1997, elencoPrincipal: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"] },
    { titulo: "A Origem", ano: 2010, elencoPrincipal: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"] },
    { titulo: "Forrest Gump", ano: 1994, elencoPrincipal: ["Tom Hanks", "Robin Wright", "Gary Sinise"] }
];

const showFilmDetails = (film) => {
    console.log(`${film.titulo} from ${film.ano} with ${film.elencoPrincipal}`);
}

showFilmDetails(filmes[0])

console.log("4-------------------------------------------")
//Crie uma função que receba 6 números e faça a sua multiplicação. Utilize o conceito de spread operator.
const multiply = (...nums) => {
    if (nums.length != 6) {
        return;
    }
    let result = 1;
    for (const num of nums) {
        result *= num;
    }
    return result;
}
multiply(1234567);
console.log(multiply(7, 6, 5, 4, 3, 2));

console.log("5-------------------------------------------")
//Crie uma função que receba vários números e faça a sua multiplicação. Utilize o conceito de rest operator.

console.log("6-------------------------------------------")
//Crie 2 arrays. Crie um terceiro, a junção dos 2, utilizando spread operators.

console.log("7-------------------------------------------")
//Construa um array de valores. Utilize o Math.min em conjugação com spread operator para obter o valor mínimo do array

console.log("8-------------------------------------------")
//Copie 2 arrays (ou seja crie um array à custa do primeiro) utilizando rest operators e Array Destructuring. 


console.log("9-------------------------------------------")
//Explique o conceito de “Destructured Objects”. Desenvolva uma função que utilize este conceito na sua lista de parâmetros. 
//Teste a sua utilização. Defina valores por omissão para os parâmetros e teste a utilização da função sem todos os valores dos
//parâmetros definidos.Exemplo:
function mostrasumario({ nome, notas: { matematica = 0, geografia = 0, ciencias
    = 0 } }) {
    i.console.log('Olá, ' + nome);
    ii.console.log('Nota de matemática ' + matematica);
    iii.console.log(' Nota de geografia ' + geografia);
    iv.console.log(' Nota de ciencias ' + ciencias);
}

