function parOuImpar(numero){
    if (numero % 2 == 0){
        return "Par!";
    } else {
        return "Ímpar!";
    }
}

let resultado = parOuImpar(4);
console.log(resultado);