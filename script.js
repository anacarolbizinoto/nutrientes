/*cho*/

var carboidrato = document.querySelector(".carboidratos"); 
    carboidrato.addEventListener('mouseenter', entrar);
    carboidrato.addEventListener('mouseout', sair);

function entrar() {
    carboidrato.innerText = "ARROZ; AVEIA; BATATA, MACARRÃO; MANDIOCA;";
    carboidrato.style.background = 'antiquewhite';
    carboidrato.style.color = 'black';
}

function sair() {
    carboidrato.innerText = "CARBOIDRATOS";
    carboidrato.style.background = 'black';
    carboidrato.style.color ='antiquewhite';
}


/*ptn-animal*/

var ptnAnimal = document.querySelector(".proteina-animal"); 
    ptnAnimal.addEventListener('mouseenter', entrar);
    ptnAnimal.addEventListener('mouseout', sair);

function entrar() {
    ptnAnimal.innerText = "QUEIJOS; LEITE; IOGURTE; CARNES; PEIXES";
    ptnAnimal.style.background = 'antiquewhite';
    ptnAnimal.style.color = 'black';
}

function sair() {
    ptnAnimal.innerText = "PROTEÍNA ANIMAL";
    ptnAnimal.style.background = 'black';
    ptnAnimal.style.color ='antiquewhite';
}

/* ptn-vegetal */

var ptnVegetal = document.querySelector(".proteina-vegetal"); 
    ptnVegetal.addEventListener('mouseenter', entrar);
    ptnVegetal.addEventListener('mouseout', sair);

function entrar() {
    ptnVegetal.innerText = "FEIJÃO; LENTILHA; GRÃO DE BICO; ERVILHA; SOJA";
    ptnVegetal.style.background = 'antiquewhite';
    ptnVegetal.style.color = 'black';
}

function sair() {
    ptnVegetal.innerText = "PROTEÍNA VEGETAL";
    ptnVegetal.style.background = 'black';
    ptnVegetal.style.color ='antiquewhite';
}