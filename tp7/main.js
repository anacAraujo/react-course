const Ponto2D = require("./Ponto2D");
const Circulo = require("./Circulo");
const Retangulo = require("./Retangulo");
const Poligono = require("./Poligono");

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
