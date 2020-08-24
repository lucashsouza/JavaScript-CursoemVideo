function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var formAno = window.document.getElementById('txtAno');
    var resultado = window.document.querySelector('div#resultado');
    var imagem = document.createElement('img');
    imagem.setAttribute('id', 'foto');
    if (formAno.value.length == 0 || formAno.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente");

    } else {
        var formSexo = document.getElementsByName('radSexo');
        var idade = ano - Number(formAno.value);
        var genero = '';

        if (formSexo[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                // Criança
                imagem.setAttribute('src', 'foto-bebe-m.png');

            } else if (idade < 21) {
                // Jovem
                imagem.setAttribute('src', 'foto-jovem-m.png');

            } else if (idade < 50) {
                // Adulto
                imagem.setAttribute('src', 'foto-adulto-m.png');

            } else {
                // Idoso
                imagem.setAttribute('src', 'foto-idoso-m.png');
            }

        } else if (formSexo[1].checked) {
            genero = 'Mulher';

            if (idade >= 0 && idade < 10) {
                // Criança
                imagem.setAttribute('src', 'foto-bebe-f.png');

            } else if (idade < 21) {
                // Jovem
                imagem.setAttribute('src', 'foto-jovem-f.png');

            } else if (idade < 50) {
                // Adulto
                imagem.setAttribute('src', 'foto-adulto-f.png');

            } else {
                // Idoso
                imagem.setAttribute('src', 'foto-idoso-f.png');
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        resultado.appendChild(imagem);
    }

}