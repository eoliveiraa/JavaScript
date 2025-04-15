//Crie um array de objetos com produtos e preços. Exiba no console o nome e o preço com R$ formatado.

let Objetos = [
    {Produto:"Vaso", preço: 10.90},
    {Produto:"Escova", preço: 20.00},
    {Produto:"Prato", preço: 5.90},
    {Produto:"Copo", preço: 6.90}
];

let objetoNomes = Objetos.map(objeto => objeto.Produto);
let objetoPrecos = Objetos.map(objeto => objeto.preço);

Objetos.map(Objetos => {
    console.log(`${Objetos.Produto} : R$ ${Objetos.preço}`);
  });
    
