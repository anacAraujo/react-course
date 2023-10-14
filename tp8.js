class Pessoa {
    constructor(nome, idade, cidade, bi) {
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.bi = bi;
    }
}

class Aluno extends Pessoa {
    constructor(nome, idade, cidade, bi, curso, notaExame, notaTrabalho, notaApresentacao) {
        super(nome, idade, cidade, bi);
        this.curso = curso;
        this.notaExame = notaExame;
        this.notaTrabalho = notaTrabalho;
        this.notaApresentacao = notaApresentacao;
    }

    getNome() {
        return this.nome;
    }

    getIdade() {
        return this.idade;
    }

    getBi() {
        return this.bi;
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

    setNome(newNome) {
        if (newNome.length >= 4) {
            this.nome = newNome;
        }
    }


}

class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyError";
    }
}

function dividir(numerador, denominador) {
    try {
        if (denominador === 0) {
            throw new MyError("Não pode dividir por zero.");
        }

        let result = numerador / denominador;
        return result;

    } catch (error) {
        console.error(error.name + ": " + error.message);
    }

}

try {
    const result = dividir(10, 0);
    console.log("Result:", result);



} catch (error) {
    console.error("Error occurred:", error);
}


