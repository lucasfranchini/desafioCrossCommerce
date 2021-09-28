Caso deseje testar a API um Servidor rodando a API pode ser encontrado pelo link:

https://cross-commerce-challenge.herokuapp.com/

o Servidor possue apenas uma rota:
https://cross-commerce-challenge.herokuapp.com/orderAll 
Essa rota demora algum tempo para ser carregada pois faz varios pedidos a um terceira API, 
então é normal ter que esperar um pouco para ela carregar com todos os dados

## Como Rodar o servidor
1. Clone este repositorio
2. crie uma Database do postgres com o nome funcional
3. crie uma .env com as variaveis do .env.example
4. inicie o servidor com:
```
npm run dev
```

## Como Rodar os testes

1. Rode os testes com:
```
npm run test
```
opcionalmente, para ver a porcentagem de linhas que os testes estao cobrindo rode:
```
npm run test -- --coverage
```
