const MyError = require("./MyError");

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