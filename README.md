`...::: Projeto criado por ®WW(Wagner Ricardo Wagner) | wagnerricardonet@gmail.com :::..`

# Exemplos de Formulários

Exemplo utilizando FORMIK original e FORMIK personalizando os inputs
Exemplo utilizando um componente stateFull padrão do react com ciclo de + API

yarn

yarn global add json-server

json-server db/db.json -p 3001 -d -w

yarn start

**http://localhost:3000**

## `REACT FORM`
  Exemplo de como fazer um formulário comunicando com a API do IBGE utilizando apenas os recursos do React, ou seja, sem bibliotecas de terceiros e utilizando statefull component.

## `FORMIK`
Exemplo de utilização de diversos recursos do Formik. Biblioteca criada por Jared Palmer(**https://jaredpalmer.com/formik/docs/overview**).
#### `<Formik />`

#### `withFormik()`
Funciona de forma HOC(higher-order-Component), ou seja, seu componente é emglobado pelo Formik.
Gosto de utilizar este recurso, pois o componente não fica tão verboso e deixa as coisas mais centralizadas. Os objetos são passados via props.

Eu particularmente NÃO utilizo este recurso, quando o formulário exige uma edição. Por que?
Como tudo é passado via props, ou seja, de um componente de listagem por exemplo, para o componente de formulário, a chamada para a api ficaria no componente de listagem e repassado via props. Se caso, este formulário for chamado por outro componente, teria que replicar a chamada a api neste novo componente e aí as coisas começam a ficar descentralizadas. Claro, tem formas de resolver isso também. Mas para inserção de dados, acredito que é um método mais rápido de se implementar.

## `REDUX FORM`
