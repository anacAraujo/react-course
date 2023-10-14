class Poligono {
    constructor(pontos) {
        this.pontos = pontos;
    }

    // Método para calcular o perímetro do polígono
    calcularPerimetro() {
        let perimetro = 0;
        for (let i = 0; i < this.pontos.length - 1; i++) {
            const pontoAtual = this.pontos[i];
            const proximoPonto = this.pontos[i + 1];
            const distancia = Math.sqrt(
                Math.pow(proximoPonto.x - pontoAtual.x, 2) +
                Math.pow(proximoPonto.y - pontoAtual.y, 2)
            );
            perimetro += distancia;
        }

        // Adicionar a distância do último ponto ao primeiro ponto (polígono fechado)
        const primeiraPonto = this.pontos[0];
        const ultimoPonto = this.pontos[this.pontos.length - 1];
        const distanciaFinal = Math.sqrt(
            Math.pow(ultimoPonto.x - primeiraPonto.x, 2) +
            Math.pow(ultimoPonto.y - primeiraPonto.y, 2)
        );
        perimetro += distanciaFinal;

        return perimetro;
    }
}

module.exports = Poligono;