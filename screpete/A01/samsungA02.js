/*trabalhando com métodos de console

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Qual é o seu nome? ' , (nome) => {
    console.log(`Olá, ${nome}`)
    rl.close();
})*/

/*usando o let -> respeita o escopo do bloco 
if (true){
    let nome = "Vitor"
    console.log(nome)
}
console.log(nome)*/

/*usando var -. não respeita o escopo do bloco
if (true){
    var nome = "javaScript"
    console.log(nome);
}
console.log(nome)*/

/*exemplo 3 -> dentro de um for
for (let i = 0; i< 3; i++){
    console.log("dentro do for; ", i)
}
console.log("fora do for:", i)*/

/*IF ELSE 
let idade = 10

if (idade <12) {
   console.log("Criança") 
} else if (idade <18){
    console.log("Adolescente")
} else {
    console.log("Adulto")
}*/
/*Exercicio 1

//importando o módulo readline para receber a entrada dos dados
const readline = require("readline")

//configurar o módulo pra capturar as entradas
/*Exercicio 1

//importando o módulo readline para receber a entrada dos dados
const readline = require("readline")

//configurar o módulo pra capturar as entradas
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let P1, P2, P3, P4, chTotal, chFaltas
//perguntando pro usuario as quatro notas
rl.question("Digite a nota P1: ", function (P1) {
    rl.question("Digite a nota P2: ", function (P2) {
        rl.question("Digite a nota P3: ", function (P3) {
            rl.question("Digite a nota P4: ", function (P4) {
                rl.question("Digite a carga horaria (em horas):", function (chTotal) {
                    rl.question("Digite a quantidade de faltas: ", function (chFaltas) {
                        P1 = Number(P1)
                        P2 = Number(P2)
                        P3 = Number(P3)
                        P4 = Number(P4)
                        chTotal = Number(chTotal)
                        chFaltas = Number(chFaltas)
                       
                        //calculo da media
                        let media = (P1 + P2 + P3 + P4) / 4

                        //calculo porcentagem faltas
                        let faltas = (chFaltas / chTotal) * 100

                        //verificação da situação do aluno (nota e falta)
                        if (faltas >= 25){
                            console.log("Reprovado por falta")
                        } else if (media >= 6) {
                            console.log("APROVADO", media)
                        } else {
                            console.log("REPROVADO", media)
                        }

                        rl.close(); //encerra o programa

                    })
                })
            })
        })
    })
})


let id = "admin"
let senha = "admin69"

let idUsuario = "admin"
let senhaUsuario = "admin69"

if (id == idUsuario && senha == senhaUsuario){
    console.log("Usuário logado com sucesso")
} else{
    console.log("Usuário ou senha incorretos")
}

let codigo = 105;
switch (codigo) {
    case 690: 
    console.log("Nintendo")
        break;
    case 670: 
    console.log("SteamDeck")
    break;
    case 105:
        console.log("Audi S8")
        break;
        default: console.log("Item não encontrado")
        break;    
}

const readline = require("readline")

//configurar o módulo pra capturar as entradas
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite um Número ", function (numeroOne) {
    rl.question("Digite um Número adicional ", function (numeroTwo) {
        console.log("1. Adição")
        console.log("2. Subtração")
        console.log("3. Multiplicação")
        console.log("4. Divisão")

        rl.question("Escolha uma operação ", function (operacao) {


            numeroOne = Number(numeroOne)
            numeroTwo = Number(numeroTwo)
            operacao = Number(operacao)

            switch (operacao) {
                case 1:
                    let resultadoSoma = numeroOne + numeroTwo
                    console.log("Resultado da Adição", + resultadoSoma)
                    break;
                case 2:
                    let resultadoSub = numeroOne - numeroTwo
                    console.log("Resultado da Adição", + resultadoSub)
                    break;
                case 3:
                    let resultadoMul = numeroOne * numeroTwo
                    console.log("Resultado da Adição", + resultadoMul)
                    break;
                case 4:
                    let resultadoDiv = numeroOne / numeroTwo
                    console.log("Resultado da Adição", + resultadoDiv)
                    break;

                default:
                    console.log("Operação inválida")
                    break;
            } rl.close()
        })
    })
})

for(let i= 0; i <=10; i++){
    console.log("Contador: ", i)*/
/*for(let i= 0; i <=20; i++){
        if( i % 2 ==0)
        console.log("Contador: " + i)
    }
    for(let i= 0; i <=10; i++){
        if( i= % 2 !=0)
        console.log("Contadando: " + i)}

    for(let i= 0; i <=20; i--){
        if( i % 2 ==0)
        console.log("Contador: " + i)
    }
    for(let i= 0; i <=10; i--){
        if( i= % 2 !=0)
        console.log("Contadando: " + i)}


    const readline = require("readline")

    //configurar o módulo pra capturar as entradas
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    rl.question("Digite um Número: ", function(numeroOne){
        i = Number(numeroOne)
        for(let i=numeroOne; i >=0; i--){
            console.log("Contagem regressiva: " + i)
        }rl.close()

    })

//cria uma função chamada delay que conta o tempo em milisegundos
function delay (ms){
    //cria uma rotina que fica "resolvendo" algo, nesse caso, 
    //fica esperando milisegundos definidos pelo usúario e 
    //exibe o conteúdo no console
    return new Promise(resolve => setTimeout(resolve, ms))
}
let i = 1
while (i <= 5) {
    console.log(i);//escrever o numero na tela
    i++//incremnetar o número
    await delay(1000)
}*/

