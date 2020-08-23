function carregar() {
    var mensagem = window.document.getElementById('mensagem');
    var imagem = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();

    mensagem.innerHTML = `Agora são ${hora} horas.`


    if (hora >= 0 && hora < 12) {
        // Bom dia!
        imagem.src = 'manha.png'
        document.body.style.background = '#fb9528';

    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde!
        imagem.src = 'tarde.png'
        document.body.style.background = '#998606';

    } else {
        // Boa noite!   
        imagem.src = 'noite.png'
        document.body.style.background = '#3d3e40';
    }

}