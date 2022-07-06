infos = document.querySelector('.infos');
title = document.querySelector('.title');
content = document.querySelector('.content');

change = () => infos.style.display = 'block';

function skill1() {
    change();
    title.innerHTML = "Comunicação";
    content.innerHTML = "Tenho facilidade em me comunicar de forma clara com as pessoas da minha equipe e sempre interajo como o time para que a troca de informações aconceça da melhor forma e nada de importante fique de fora.";
};

function skill2() {
    change();
    title.innerHTML = "Criatividade";
    content.innerHTML = "Sou alguém que sempre pensa em diferentes possibilidades para resolver o mesmo problema e que gosta de colocar mão na massa em projetos que sejam necessário criar coisas não tão comuns.";
};

function skill3() {
    change();
    title.innerHTML = "Trabalho em equipe";
    content.innerHTML = "Possuo grande facilidade em liderar equipe e tomar descisões importantes, sei me colocar no lugar certo, fazer o necessário para garantir o sucesso do projeto em questão e motivar um membro qunado ele está para baixo.";
};

document.addEventListener("mouseup", function(event) {
    if (!infos.contains(event.target)) {
        infos.style.display = 'none';
    }
});
