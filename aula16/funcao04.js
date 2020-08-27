// Fatorial, 5! = 5x4x3x2x1

function fatorial(numero){
    let fat = 1;
    for (let contador = numero; contador > 1; contador--){
        fatorial *= contador;
    }
    return fatorial;
}

console.log(fatorial(5));