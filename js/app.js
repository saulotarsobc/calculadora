/* 22:57:08 - 28/11/21 */

var result = "";
var numeroCorrente = "";
var operacao = "";

var teclas = document.querySelectorAll('.tecla');
teclas.forEach(tecla => {

    tecla.addEventListener('click', function() {

        var keyPressed = this.id;

        /* console.log(keyPressed); */

        if (keyPressed == 'igual') {
            if (operacao != "") {
                if (operacao == 'mais') {
                    /*  */
                }
            }

        }

        if (keyPressed == 'mais') {
            /*  */
        }

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
            if (numeroCorrente == "") {
                numeroCorrente += "0.";
                showResult(numeroCorrente);
            } else {
                numeroCorrente += this.id;
                showResult(numeroCorrente);
            }
        }

        if (keyPressed == 'ponto') {
            if (numeroCorrente.includes(".") == false) {
                numeroCorrente += "0.";
                showResult(numeroCorrente);
            }
        }

    })

});

/* showResult */
function showResult(result) {
    document.getElementById('result').innerHTML = result;
}

/* limparDisplay */
function limparDisplay() {
    document.getElementById('result').innerHTML = "";
}

/* limparTudo */
function limparTudo() {
    result = "";
    result = "";
    numeroCorrente = "";
    limparDisplay();
}

/* backspace */
function backspace() {
    numeroCorrente = numeroCorrente.substring(0, numeroCorrente.length - 1);
    showResult(numeroCorrente)
}