let numero = document.querySelector("input#formNumero");
let lista = document.querySelector("select#formLista");
let resultado = document.querySelector("div#resultado");
let valores = [];

function adicionar(){
    if (isNumero(numero.value) && !inLista(numero.value, valores)){
        valores.push(Number(numero.value));
        let item = document.createElement('option');
        item.text = `Valor ${numero.value} adicionado.`
        lista.appendChild(item);
    } else {
        window.alert("Valor inválido ou já encontrado na lista.");
    }
    numero.value = '';
    numero.focus();

}

// param: n=numero
function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true;
    } else {
        return false;
    }
}

// param: n=numero, l=lista
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true;
    } else {
        return false;
    }
}
