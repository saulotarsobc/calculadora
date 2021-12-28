let calc = new Calculator();
calc.info();
var teclas = document.querySelectorAll(".tecla");
teclas.forEach((tecla) => {
    tecla.addEventListener("click", function() {
        var keyPressed = tecla.id;

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
            calc.current = keyPressed;
        }

        if (
            keyPressed == "+" ||
            keyPressed == "-" ||
            keyPressed == "*" ||
            keyPressed == "/"
        ) {
            calc.operator = keyPressed;
        }

        if (keyPressed == "clear") {
            calc.clear();
        }

        /* debug */
        showVars();
    });
});

function showVars() {
    calc.info();
}