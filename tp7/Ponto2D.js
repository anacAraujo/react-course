class Ponto2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // Método para calcular o ponto intermédio entre dois pontos
    pontoIntermedio(outroPonto) {
        const midX = (this.x + outroPonto.x) / 2;
        const midY = (this.y + outroPonto.y) / 2;
        return new Ponto2D(midX, midY);
    }
}

module.exports = Ponto2D;