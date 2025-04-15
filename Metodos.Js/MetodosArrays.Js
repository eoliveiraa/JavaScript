// lenght() => tamanho

// let frutas = ["banana","kiwi","morango","manga","abacate","acerola","abacaxi","jaca"];
// console.log(frutas.length);

//---------------------------------------------//

// .reverse() -> inverte a sequencia 

// let  numeros = [70, 100, 120, 1000];
// numeros.reverse();
// console.log(numeros);

//--------------------------------------------------//
// .push -> adiciona no final
// let nomes = ["ana","julia","pedro","claudio","lari"];

// console.push("otavio");
// console.log(nomes);

// // .unshift -> adiciona no inicio 
// nomes.unshift("Amaral")

// // .pop -> remove o final
// nomes.pop();
// console.log(nomes);

// // remove e retorna o valor que foi removido
// console.log(nomes.pop());

// //.splice -> Adiciona ou remove os elementos do array

// // console.log(nomes.splice(0,2));

// // .shift -> remove do inicio
// nomes.shift();

//----------------------------------------------------//

// let nomesAnimais = ["julie","lulu","lola","duke"];

// // .includes() => se existe no array, se existir ele retorna true 
// console.log(nomesAnimais.includes("julie"));

//----------------------------------------------------//

// let valores = [10, 4, 7, 89, 20,3];

// //valores maiores que 50
// let maiores = valores.filter(num => num >50);

// console.log(maiores);

//----------------------------------------------------//

// .map() => metodo usado em arrays para transformar os valores 
// originais em outros valores criando um novo array sem modificar o original

// 1) lista de nomes de alunos e suas notas

// let alunos = [
//     { Nome: "Anna", nota: 10 },
//     { Nome: "Rafa", nota: 9 },
//     { Nome: "Lua", nota: 8.5 },
// ];

// //lista de nomes
// let alunoNomes = alunos.map(aluno => aluno.Nome);

// //funçao: 

// let alunoNomesdois = alunos.map(function(alunos){
//     return alunos.Nome;
// })

// let alunosNota = alunos.map(alunos => alunos.nota);

// console.log(alunoNomes);

// 2) Criar um array com mensagens personalizadas

// let nomes = ["lari","dani", "lucas","lili"];
// let mensagens = nomes.map(itemDoArray => "ola, " + itemDoArray);
// // let mensagens = nomes.map(itemDoArray => 'ola, ${itemDoArray}');

// console.log(mensagens)

//log => console log
// 3)
// let nomes = ["emilly", "Fefe", "gui", "enaldo"];
// let inicialNomes = nomes.map(itemNomes => itemNomes[0]); 
// //no lugar de itemNomes pode chamar Element
// console.log(inicialNomes);

// 4) emails, .split = trabalha dividindo strings dentro da arrays
let emails = ["emilly@gmail.com","jubs@hotmail.com","blibli@outlook.com"];

let dominios = emails.map(element => element.split("@")[1]);
console.log(dominios);

