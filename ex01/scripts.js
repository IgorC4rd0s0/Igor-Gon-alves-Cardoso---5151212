let nome = prompt("Digite seu nome","Nome aqui")
let resposta = confirm (nome+" Voce é de Uberaba")
if (resposta == true) {
    document.write (nome+ " É morador de Uberaba")
} else {
    document.write (nome+ " É morador de outra cidade")
}