const Aluno = require("./Aluno");

const alunoA = new Aluno("aaaa", 3, "sss", 1, 1, 1, 1, 1);
const alunoB = new Aluno("bbbb", 3, "sss", 1, 1, 1, 1, 1);

try {
    alunoA.setNome("aa");
} catch (error) {
    console.error(error.message);
}
console.log(alunoA);
console.log(alunoB);