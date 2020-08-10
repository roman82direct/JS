
// function replace(a, b) {
//     var a, b;
//     a += b;
//     b = a - b;
//     a -= b;
//     document.write("<br>Теперь:<br> Переменная a = " +a +"<br>Переменная b = " +b);
//     }
// replace(a, b);

function replace() {
    var a = parseInt(document.myForm.varA.value);
    var b = parseInt(document.myForm.varB.value);
    a += b;
    b = a - b;
    a -= b;
    // var res = document.getElementById("result");
    // res.innerHTML = "<br>Теперь:<br> Переменная a = " +a +"<br>Переменная b = " +b;
    alert("Теперь:\nПеременная a = " +a +"\nПеременная b = " +b);
    }
    var replaceButton = document.getElementById("repl");
    replaceButton.addEventListener("click", replace);
