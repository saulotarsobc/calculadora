/* 10:20:37 - 29/11/21 */
var data = {
    'resultado': '',
    'corrente': '',
    'operacao': '',
    'fator': '',
};

var teclas = document.querySelectorAll('.tecla');
teclas.forEach(tecla => {

    tecla.addEventListener('click', function() {

        var keyPressed = tecla.id;

        if (keyPressed == 'igual') {
            /*  */
        }

        if (keyPressed == 'mais') {
            /*  */
        }

        if (keyPressed == 'clear') {
            limparTudo();
        }

        if (keyPressed == '1' ||
            keyPressed == '2' ||
            keyPressed == '3' ||
            keyPressed == '4' ||
            keyPressed == '5' ||
            keyPressed == '6' ||
            keyPressed == '7' ||
            keyPressed == '8' ||
            keyPressed == '9') {
            data['corrente'] += tecla.id;
            showResulto(data['corrente']);
        }

        if (keyPressed == 'backspace') {
            backspace();
        }

        if (keyPressed == '0') {
            /*  */
        }

        if (keyPressed == 'ponto') {
            /*  */
        }

        /* debug */
        showVars();

    })

});

/* showResulto */
function showResulto(resulto) {
    document.getElementById('resulto').innerHTML = resulto;
}

/* limparDisplay */
function limparDisplay() {
    document.getElementById('resulto').innerHTML = "";
}

/* limparTudo */
function limparTudo() {
    data = {
        'resultado': '',
        'corrente': '',
        'operacao': '',
        'fator': '',
    };
    limparDisplay();
}

/* backspace */
function backspace() {
    var x = data['corrente'];
    var i = x.substring(0, x.length - 1);
    data['corrente'] = i;
    showResulto(data['corrente']);
    /*  */
}

/* showVars */
function showVars() {
    console.log(data);
}