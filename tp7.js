// Classe Ponto2D
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

// Classe Circulo
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

// Classe Retangulo
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

// Classe Poligono
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

// Função para criar 10 Pontos2D com coordenadas Y a distarem 5 valores
function criarPontos() {
    const pontos = [];
    for (let i = 0; i < 10; i++) {
        const x = i * 5; // Coordenada X
        const y = i * 5; // Coordenada Y
        pontos.push(new Ponto2D(x, y));
    }
    return pontos;
}

// Função para calcular o somatório das distâncias entre os pontos
function calcularSomatorioDistancias(pontos) {
    let somatorio = 0;
    for (let i = 0; i < pontos.length - 1; i++) {
        const pontoAtual = pontos[i];
        const proximoPonto = pontos[i + 1];
        const distancia = Math.sqrt(
            Math.pow(proximoPonto.x - pontoAtual.x, 2) +
            Math.pow(proximoPonto.y - pontoAtual.y, 2)
        );
        somatorio += distancia;
    }
    return somatorio;
}

// Criar 10 pontos
const pontos = criarPontos();

// Calcular e mostrar o somatório das distâncias
const somatorioDistancias = calcularSomatorioDistancias(pontos);
console.log("Somatório das distâncias entre os pontos:", somatorioDistancias);

// Testar a classe Circulo
const circulo = new Circulo(5);
console.log("Área do círculo:", circulo.calcularArea());
console.log("Perímetro do círculo:", circulo.calcularPerimetro());

// Testar a classe Retangulo
const retangulo = new Retangulo(4, 6);
console.log("Área do retângulo:", retangulo.calcularArea());
console.log("Perímetro do retângulo:", retangulo.calcularPerimetro());

// Testar a classe Poligono
const poligonoPontos = [
    new Ponto2D(0, 0),
    new Ponto2D(0, 4),
    new Ponto2D(3, 4),
    new Ponto2D(3, 0)
];
const poligono = new Poligono(poligonoPontos);
console.log("Perímetro do polígono:", poligono.calcularPerimetro());
