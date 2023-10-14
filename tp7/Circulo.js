class Circulo {
    constructor(raio) {
        this.raio = raio;
    }

    // Método para calcular a área do círculo
    calcularArea() {
        return Math.PI * Math.pow(this.raio, 2);
    }

    // Método para calcular o perímetro do círculo
    calcularPerimetro() {
        return 2 * Math.PI * this.raio;
    }
}

module.exports = Circulo;