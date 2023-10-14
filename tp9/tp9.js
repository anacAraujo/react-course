console.log("1.--------------------------------------------")
function* range(inicio, fim) {
    for (let i = inicio; i <= fim; i++) {
        yield i;
    }
}

let numeros = range(0, 45)
for (const numero of numeros) {
    console.log(numero);
}


console.log("2.--------------------------------------------")
//Crie um Generator que pare 3 vezes a sua execução. Teste a sua utilização.
function* pauses() {
    yield 1;
    yield 2;
    yield 3;
}

let pause = pauses();
console.log(pause.next().value);
console.log(pause.next().value);
console.log(pause.next().value);

console.log("3.--------------------------------------------")
function* countdown(a, b) {
    while (a >= b) {
        yield a--;
    }
}
console.log([...countdown(10, 1)]);

console.log("4.--------------------------------------------")

window.onload = function () {
    console.log("Teste")

    document.getElementById("listUsers").addEventListener("submit", async function (event) {
        event.preventDefault();

        console.log(document.getElementById("num").value);
        let numValue = document.getElementById("num").value;
        console.log(numValue)

        if (numValue <= 0 || numValue > 5) {
            document.body.innerHTML += `<p>Numero inválido.</p>`;
            return;
        }

        let url = `https://randomuser.me/api/?results=${numValue}`;

        const users = await request(url);
        showResult(users);
    });

    function request(url) {
        return new Promise(function (resolve, reject) {
            let xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", url, true);
            xmlhttp.onload = function () {
                if (this.status === 200) {
                    let result = JSON.parse(this.responseText);
                    resolve(result);
                } else {
                    reject(this.status);
                }
            };
            xmlhttp.send();
        });
    }

    function showResult(results) {
        console.log(results);
        let resultsContainer = document.getElementById("results");
        resultsContainer.innerHTML = ""; // Limpa o conteúdo anterior

        for (let index = 0; index < results.results.length; index++) {
            resultsContainer.innerHTML += `<div class="card">
        <img src="${results.results[index].picture.thumbnail}" alt="Avatar" style="width:100%">
        <div class="container">
          <h4><b>${results.results[index].name.first} ${results.results[index].name.last}</b></h4>
          <p>${results.results[index].gender}</p>
        </div>
      </div>`;
        }
    }
}
