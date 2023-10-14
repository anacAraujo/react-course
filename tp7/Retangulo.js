class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    // Método para calcular a área do retângulo
    calcularArea() {
        return this.largura * this.altura;
    }

    // Método para calcular o perímetro do retângulo
    calcularPerimetro() {
        return 2 * (this.largura + this.altura);
    }
}

module.exports = Retangulo;