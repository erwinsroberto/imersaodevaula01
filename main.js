var nome = "Erwins"

var NotaDoPrimeiroSemestre = 9.883
var NotaDoSegundoSemestre = 7.188
var NotaDoTerceiroSemestre = 5.945
var NotaDoQuartoSemestre = 6.132

var NotaFinal = (NotaDoPrimeiroSemestre + NotaDoSegundoSemestre + NotaDoTerceiroSemestre + NotaDoQuartoSemestre) / 4

var NotaFixada = NotaFinal.toFixed(1)

console.log("Bem vindo " + nome)
console.log("Sua nota final é: " + NotaFinal)
console.log("Nota Fixada " + NotaFixada)