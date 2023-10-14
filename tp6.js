console.log("1-------------------------------------------")
//Criar a classe Ponto2D com 2 atributos: a coordenada x e a coordenada y. Adicione um método que permita adicionar valores 
//(passados como parâmetros) às suas coordenadas x e y; adicione um método que permita calcular a distância do ponto à origem 
//das coordenadas.
class Ponto2D {
    constructor(x, y) {
        this.cordX = x;
        this.cordY = y;
    }

    adicionaValores(ad_x, ad_y) {
        this.cordX += ad_x;
        this.cordY += ad_y;
    }

    distanciaCentro() {
        return (Math.sqrt(this.cordX * this.cordX + this.cordY * this.cordY))
    }

    static compararPontos(p1, p2) {
        if ((p1.cordX === p2.cordX && p1.cordY === p2.cordY) || (p1.cordX === p2.cordY && p2.cordX === p1.cordY)) {
            console.log("Os pontos são iguais!")
        } else {
            console.log("Os pontos não são iguais.")
        }
    }
}

let pa = new Ponto2D(3, 4);
let po = new Ponto2D(4, 3);
console.log("x: " + pa.cordX + ", y: " + pa.cordY);
console.log("distancia a origem: " + pa.distanciaCentro());
Ponto2D.compararPontos(pa, po);
pa.adicionaValores(4, 7);
console.log("x: " + pa.cordX + ", y: " + pa.cordY);
console.log("distancia a origem: " + pa.distanciaCentro());

console.log("2-------------------------------------------")
//Atualize a classe Ponto2D para que tenha um método estático que permita a comparação entre dois pontos 
//(verificar se têm as mesmas coordenadas). Teste o código desenvolvido.
Ponto2D.compararPontos(pa, po);

console.log("3-------------------------------------------")
//Desenvolva a classe segmento_reta que deve ter dois pontos (ponto2D) como propriedades. Esta classe deve ter um método que permita 
//saber o tamanho do segmento de reta. O segmento de reta deve ter também um atributo com o seu tamanho. 
class SegmentoReta {
    constructor(p1, p2) {
        this.pontoA = p1;
        this.pontoB = p2;
        this.tamanho = null;
    }

    calcularTamanho() {
        this.tamanho = (Math.sqrt(this.pontoA.cordX * this.pontoB.cordX + this.pontoA.cordY * this.pontoB.cordY));
        return this.tamanho;
    }
}

let reta = new SegmentoReta(pa, po);
console.log(reta.tamanho);
console.log(reta.calcularTamanho());

console.log("4-------------------------------------------")
//Desenvolva a classe Ponto3D com os atributos que achar necessários para a caraterizar. 
//Re-utilize o trabalho realizado para os pontos anteriores. A classe deve permitir calcular a distância entre dois pontos, 
//a distância ao centro das coordenadas, somar um determinado valor à coordenada X, à Y e à Z.

class Ponto3D extends Ponto2D {
    constructor(x, y, z) {
        super(x, y);
        this.cordZ = z;
    }

    adicionaValores3D(ad_x, ad_y, ad_z) {
        this.adicionaValores(ad_x, ad_y);
        this.cordZ += ad_z;
    }

    distanciaCentro() {
        return (Math.sqrt(this.cordX * this.cordX + this.cordY * this.cordY + this.cordZ * this.cordZ))
    }

    distanciaEntrePontos(ponto) {
        const dx = this.cordX - ponto.cordX;
        const dy = this.cordY - ponto.cordY;
        const dz = this.cordZ - ponto.cordZ;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
}

const pontoA = new Ponto3D(1, 2, 3);
const pontoB = new Ponto3D(4, 5, 6);
console.log("Distância entre os pontos: " + pontoA.distanciaEntrePontos(pontoB));

console.log("5-------------------------------------------")
//Altere o código para ter setters e getters.
class Teste {
    constructor(nome, verbo) {
        this._nome = nome; // Usamos uma convenção com prefixo '_' para indicar que esta é uma propriedade "privada"
        this._verbo = verbo || "says";
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get verbo() {
        return this._verbo;
    }

    set verbo(novoVerbo) {
        this._verbo = novoVerbo;
    }

    falar(texto) {
        console.log(this.nome + " " + this.verbo + " '" + texto + "'");
    }
}

class Shouter extends Teste {
    constructor(nome) {
        super(nome, "shouts");
    }

    falar(texto) {
        super.falar(texto.toUpperCase());
    }
}

const pessoa = new Shouter("Doutor");
pessoa.nome = "Médico"; // Usando o setter para definir um novo nome
pessoa.verbo = "yells"; // Usando o setter para definir um novo verbo
pessoa.falar("Aqui"); // Chama o método falar
console.log("Nome: " + pessoa.nome); // Usando o getter para obter o nome
console.log("Verbo: " + pessoa.verbo); // Usando o getter para obter o verbo
