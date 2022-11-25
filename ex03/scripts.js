document.write("EXERCÍCIO 03" + "<br/>" + "<br/>");
let num = prompt ("Informe um numero")
let resto = new Array()

while (num %2 == 0) {
    resto.push (num)
}
document.write (resto)