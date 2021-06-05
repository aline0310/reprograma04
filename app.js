const biblioteca = require('./database')


const bibliotecas = biblioteca.sort((a,b) => {
     return a.numeroDePaginas - b.numeroDePaginas
})

const pegarEntrada = require('readline-sync')

const verLivrosPorLocal = pegarEntrada.question('Deseja buscar livros por categoria? (S/N)')


if(verLivrosPorLocal.toLocaleUpperCase() === 'S'){
    console.log('Essas sao as opcoes disponiveis: ')
    console.log("Literatura Estrangeira", "Literatura Juvenil", "Romance", "Administracao e matematica Financeiras", "Autoajuda", 
    "Administracao", "Desenvolvimento pessoal")

const categorias = pegarEntrada.question('Qual livro voce escolhe?')

const tipoCategorias = biblioteca.filter(biblioteca => biblioteca.categoria === categorias)

console.table(tipoCategorias)
}else {
    console.log('Essas são todas as opções:')
    console.table(biblioteca)
    }
    
const recomendacao = pegarEntrada.question('Voce deseja que te apresente as minhas recomendacoes? (S/N)')

if(recomendacao.toLocaleUpperCase() === 'S'){
    console.log('Essas sao as minhas recomendacoes disponiveis: ')
    
const recomenda = biblioteca.filter(biblioteca => biblioteca.recomenda === true)
    
    console.table(recomenda)
}else {
        
        }
const desejo = pegarEntrada.question('Voce gostaria de ver minha listinha de desejos? (S/N)')

if(desejo.toLocaleUpperCase() === 'S'){
    console.log('Essas sao as minhas recomendacoes disponiveis: ')
        
const listaDesejo = biblioteca.filter(biblioteca => biblioteca.jaLeu === false)
        
    console.table(listaDesejo)
 }else {
            
            }
      