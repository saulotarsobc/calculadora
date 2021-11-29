/* 22:57:08 - 28/11/21 */

var result = "";
var resultAtual = "";
var numeroCorrente = "";

var teclas = document.querySelectorAll('.tecla');
teclas.forEach(tecla => {

    tecla.addEventListener('click', function() {

        var keyPressed = this.id;

        console.log(keyPressed);

        /* CLEAR */
        if (keyPressed == 'clear') {
            result = "";
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
            numeroCorrente += this.id;
            showResult(numeroCorrente);
        }

        if (keyPressed == 'backspace') {
            backspace();
        }

        if (keyPressed == '0') {
            if (numeroCorrente != "") {
                numeroCorrente += this.id;
                showResult(numeroCorrente);
            }
        }

        if (keyPressed == 'ponto') {
            if (numeroCorrente != "") {
                numeroCorrente += ".";
                showResult(numeroCorrente);
            }
        }

    })

});

/* showresult */
function showResult(result) {
    document.getElementById('result').innerHTML = result;
}

/* limparDisplay */
function limparDisplay() {
    showResult("");
}

/* limparTudo */
function limparTudo() {
    result = "";
    resultAtual = "";
    numeroCorrente = "";
    limparDisplay("");
}

/* backspace */
function backspace() {
    numeroCorrente = numeroCorrente.substring(0, numeroCorrente.length - 1);
    console.log(typeof(numeroCorrente));
    showResult(numeroCorrente)
}