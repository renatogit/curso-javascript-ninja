(function(){
  /*
  Envolva todo o conteúdo desse arquivo em uma IIFE.
  */

  /*
  Crie um objeto chamado `person`, com as propriedades:
      `name`: String
      `lastname`: String
      `age`: Number
  Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
  de valor para cada propriedade.
  */
  var person = {
    name: 'Maria',
    lastname: 'Silva',
    age: 20
  }
  console.log( 'Propriedades de "person":' );

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  console.log(Object.keys(person))

  /*
  Crie um array vazio chamado `books`.
  */
  var books = []

  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */
  var book1 = {
    name:'Java Script Ninja',
    pages: 100
  }
  var book2 = {
    name:'Css do básico ao avançado',
    pages: 150
  }
  var book3 = {
    name:'HTML5 Iniciante',
    pages: 300
  }

  books.push(book1)
  books.push(book2)
  books.push(book3)
  console.log( '\nLista de livros:' );

  /*
  Mostre no console todos os livros.
  */
  console.log(books)

  console.log( '\nLivro que está sendo removido:' );
  /*
  Remova o último livro, e mostre-o no console.
  */
  console.log(books.pop())

  console.log( '\nAgora sobraram somente os livros:' );
  /*
  Mostre no console os livros restantes.
  */
  console.log(books)

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  books = JSON.stringif(books)
  console.log( '\nLivros em formato string:' );

  /*
  Mostre os livros nesse formato no console:
  */
  console.log(books)

  /*
  Converta os livros novamente para objeto.
  */
  books = JSON.parse(books)
  console.log( '\nAgora os livros são objetos novamente:' );

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  for (let i = 0; i < books.length; i++) {
    const element = books[i];
    for (const key in element) {
      console.log(key, ': ', element[key])
    }
  }

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  var myName = ['R', 'e', 'n', 'a', 't', 'o']
  console.log( '\nMeu nome é:' );

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  console.log(myName.join(''))

  console.log( '\nMeu nome invertido é:' );

  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  console.log(myName.reverse())

  console.log( '\nAgora em ordem alfabética:' );
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log(myName.sort())
})()
