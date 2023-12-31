const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toEqual('function');
    expect(productDetails('pão integral', 'biscoito recheado')).toEqual([{"details": {"productId": "pão integral123"}, "name": "pão integral"}, {"details": {"productId": "biscoito recheado123"}, "name": "biscoito recheado"}]);
    expect(productDetails('sabonete', 'creme dental')).toEqual([{"details": {"productId": "sabonete123"}, "name": "sabonete"}, {"details": {"productId": "creme dental123"}, "name": "creme dental"}]);
    expect(productDetails('shampoo', 'condicionador')).toEqual([{"details": {"productId": "shampoo123"}, "name": "shampoo"}, {"details": {"productId": "condicionador123"}, "name": "condicionador"}]);
  });

    //fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    // Teste se o retorno da função é um array.
    // Teste se o array retornado pela função contém dois itens dentro.
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.
});
