class Pessoa {
    constructor(nome, idade, cidade, bi) {
        this.setNome(nome);
        this.idade = idade;
        this.cidade = cidade;
        this.bi = bi;
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


    setNome(newNome) {
        if (newNome.length < 4) {
            throw new Error("Nome invalido. Minimo 4 caracteres.")
        }
        this.nome = newNome;
    }
}

module.exports = Pessoa;