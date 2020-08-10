    function replace() {
        var a = parseInt(document.myForm.varA.value);
        var b = parseInt(document.myForm.varB.value);
        a += b;
        b = a - b;
        a -= b;
        var res = document.getElementById("result");
        res.innerHTML = "<br>Теперь:<br> Переменная a = " +a +"<br>Переменная b = " +b;
     }
    var myForm = document.myForm;
    myForm.onsubmit = function(event) {
        event.preventDefault();
    };
    var replaceButton = document.getElementById("repl");
    replaceButton.addEventListener("click", replace);
