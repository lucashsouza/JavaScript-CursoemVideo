var idade = 22;
console.log(`Você tem ${idade} anos.`)

if (idade < 16){
    console.log("Não vota");
} else if (idade >= 16 && idade < 18){
     console.log("Voto Opcional");
} else {
    console.log("Voto Obrigatório");
}