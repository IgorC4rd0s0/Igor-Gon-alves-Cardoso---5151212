document.write("EXERCÍCIO 03" + "<br/>" + "<br/>");
let soma, contPar
let num = prompt ("Informe um numero")
while (num == 0 )
{
    window.alert ("Informe o numero novamente")

    if (num %2 == 0)
    contPar = contPar + 1
}
document.write("Quantidade de números Pares digitados: " + contPar + "<br/>" + "<br/>")
document.write("Soma dos números digitados: " + soma + "<br/>" + "<br/>")