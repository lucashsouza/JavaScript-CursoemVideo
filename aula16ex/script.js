let numero = document.querySelector("input#formNumero");
let lista = document.querySelector("select#formLista");
let resultado = document.querySelector("div#resultado");
let valores = [];

function adicionar(){
    if (isNumero(numero.value) && !inLista(numero.value, valores)){
        window.alert("Tudo ok");
    } else {
        window.alert("Valor inválido ou já encontrado na lista.");
    }
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
