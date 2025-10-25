/*como criar variaveis em JavaScript
-> variavel é um espaço na memória
->toda variavel precisa debugger: nome e tipo
-> sintaxe: let <nome-variavel>
*/
/*variavel idade criada, mas nenhum valor ou tipo foi passado pra variavel*/
/*let numero =15 /*Variavel chamada numero com o valor 15 associado -> tipo inteiro (ou imt, interger)*/
/*let preco = 9.99 /*variavel do tipo double (decimal) chamada preco com o valor 9.99*/
/*let nome = "JavaScript" /*variavel do tipo String (texto) chamada nome com o valor "JavaScript*/

/*escrevendo textos no console*/

console.log("Hello World UwU")

/*Escreva no console, seu nome, idade e localização utilizando variaveis*/

let age = 16
let name = "Vitor" 
let localizacao = "São Bernardo Do Campo"

console.log ("nome:" + name)
console.log ("idade:" + age)
console.log ("localização:" + localizacao)

/*If else
  -> Estrutura condicional: tomar decisões
  */
let idade = 16

if (idade >= 18) {
    console.log("É maior de idade.")
} else {
    console.log("É menor de idade.")
} 

/*Exercicio: desenvolva um codigo que compare uma nota armazenada na variavel chamada 
"nota" , se for maior ou igual a 5, o aluno esta aprovado, se for menor que 5, esta reprovado*/
/*MODO PERFUMARIA ATIVADO
vamos permitir que a entrada do usuario seja capturada*/
/*importando um modulo que pertmite ler a entrada do ususario*/
const readline = require("readline")

/*configuração para ler os dados do teclado*/
const rl = readline.createInterface ({
input: process.stdin,
output:process.stdout
})
/*perguntando a nota*/
rl.question("digite a nota do aluno: ", function(nota){

    /* convertendo entrada para numero*/
nota = Number(nota)

if (nota >=5) {
    console.log("aprovado")
} else {
    console.log("reprovado")
}

rl.close()
})
