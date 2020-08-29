let numero = document.querySelector("input#formNumero");
let lista = document.querySelector("select#formLista");
let resultado = document.querySelector("div#resultado");
let valores = [];

function adicionar() {
    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value));
        let item = document.createElement('option');
        item.text = `Valor ${numero.value} adicionado.`
        lista.appendChild(item);
        resultado.innerHTML = "";
    } else {
        window.alert("Valor inválido ou já encontrado na lista.");
    }
    numero.value = '';
    numero.focus();
}

function finalizar() {

    if (valores.length == 0) {
        window.alert("Acione valores antes de finalizar!");
    } else {
        let numeroElementos = valores.length;
        let maiorValor = valores[0];
        let menorValor = valores[0];
        let somaValores = 0;
        let mediaValores = 0;

        for (let posicao in valores) {
            // Calcula o maior valor na lista
            if (valores[posicao] > maiorValor) {
                maiorValor = valores[posicao];
            }

            // Calcula o menor valor na lista
            if (valores[posicao] < menorValor) {
                menorValor = valores[posicao];
            }

            // Calcula soma dos valores informados na lista
            somaValores += valores[posicao];
        }
        // Calcula média
        mediaValores = somaValores / numeroElementos;

        resultado.innerHTML = "";
        resultado.innerHTML += `<p> Números cadastrados: ${numeroElementos} </p>`;
        resultado.innerHTML += `<p> Maior valor informado: ${maiorValor} </p>`;
        resultado.innerHTML += `<p> Menor valor informado: ${menorValor} </p>`;
        resultado.innerHTML += `<p> Soma dos valores informados: ${somaValores} </p>`;
        resultado.innerHTML += `<p> Média dos valores informados: ${mediaValores} </p>`;
    }
}

// param: n=numero
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

// param: n=numero, l=lista
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}