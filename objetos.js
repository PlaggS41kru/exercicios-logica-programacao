/* const pessoa = {
    nome: "Luxerions",
    idade: 17,
    profissao: "N"
}

console.log(pessoa) */

const produtos = [
    {id: "1", nome: "bola", preco: 29.50},
    {id: "2", nome: "tesoura", preco: 117.50},
    {id: "3", nome: "cone", preco: 12.50},
]

console.log(produtos)

let maior = 0
for (let i= 0 ; i<=2; i++){
    if(produtos[i].preco > maior){
        maior = produtos[i].preco
    }
}
console.log("O maior valor é " + maior)


const compras = [
    {produto: "Bolo", quantidade: 3, preco: 80},
    {produto: "Pólvora", quantidade: 5, preco: 143.40},
    {produto: "Queijo", quantidade: 10, preco: 23.8}
]

let i = 0 ; i<=2; i++
const precos = compras[i].preco
const quantia = compras[i].quantidade

const total = precos * quantia

console.log("O valor final é: " + total + "R$")

/*const frase = ["O valor final precisa ter a soma de todos os valores.", "Soma"]
let i = a ; i<=1; i++
const vogais = frase[i]*/
