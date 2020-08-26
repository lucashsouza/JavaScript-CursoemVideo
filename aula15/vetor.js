let valores = [8, 1, 7, 4, 2, 9];
valores.sort();

for (let posicao = 0; posicao < valores.length; posicao++){
    console.log(`${posicao}: valores${posicao}`);
}

for (let posicao in valores){
    console.log(`${posicao}: valores${posicao}`);
}
