class Calc {
    constructor() {
            this.resultado = 0;
            this.corrente = "";
            this.operacao = "";
            this.fator = "";
        }
        /* set */
    set setCorrente(i) {
            this.corrente += i;
        }
        /* get */
    get info() {
        console.log(this);
    }

    set backspace(i) {
        var i = x.substring(0, this.corrente.length - 1);
        console.log("backspace");
        this.corrente = i;
        this.showResultado;
    }
    showResultado() {
        console.log("showResultado");
        document.getElementById("resultado").innerHTML = this.resultado;
    }
}

let calculadora = new Calc();
calculadora.info;

var teclas = document.querySelectorAll(".tecla");
teclas.forEach((tecla) => {
    tecla.addEventListener("click", function() {
        var keyPressed = tecla.id;

        if (keyPressed == "igual") {
            /*  */
        }

        if (keyPressed == "mais") {
            /*  */
        }

        if (keyPressed == "clear") {
            limparTudo();
        }

        if (
            keyPressed == "1" ||
            keyPressed == "2" ||
            keyPressed == "3" ||
            keyPressed == "4" ||
            keyPressed == "5" ||
            keyPressed == "6" ||
            keyPressed == "7" ||
            keyPressed == "8" ||
            keyPressed == "9"
        ) {
            /* calculadora.setCorrente = tecla.id;
                              calculadora.showResultado; */
        }

        if (keyPressed == "backspace") {
            /* calculadora.backspace; */
        }

        if (keyPressed == "0") {
            /*  */
        }

        if (keyPressed == "ponto") {
            /*  */
        }

        /* debug */
        showVars();
    });
});

function showVars() {
    calculadora.info;
}