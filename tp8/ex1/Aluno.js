const Pessoa = require("./Pessoa");

class Aluno extends Pessoa {
    constructor(nome, idade, cidade, bi, curso, notaExame, notaTrabalho, notaApresentacao) {
        super(nome, idade, cidade, bi);
        this.curso = curso;
        this.notaExame = notaExame;
        this.notaTrabalho = notaTrabalho;
        this.notaApresentacao = notaApresentacao;
    }

    getCurso() {
        return this.curso;
    }

    getNotaExame() {
        return this.notaExame;
    }

    getNotaTrabalho() {
        return this.notaTrabalho;
    }

    getNotaApresentacao() {
        return this.notaApresentacao;
    }

    getMediaUC() {
        let media = (this.notaExame + this.notaTrabalho + this.notaApresentacao) / 3;
        return media;
    }
}

module.exports = Aluno;