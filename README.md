# 1. Primeiros Passos

O objetivo é a demonstração do uso do hooks para a criação de componentes.

### State & useState

state é a forma de controlar as varáveis em nossos componentes, podemos usar através da classe base component, ou através de hooks com o useState. Podendo fazer o bind destas variáveis com os elementos HTML.

E também podemos usar os eventos do DOM, usando o seguinte formato :

<!--ts--> 
   * [onNomeDoEventoEmCamCase](#como-usar)
      * [onClick](#pre-requisitos)
      * [onChange](#local-files)
      * [onMouseOver](#remote-files)
     
<!--te-->


Para saber mais sobre DOM events veja a documentação da Mozilla.

## 2. Componente Simples
### Criação do primeiro componente
A estenção do arquivo deve ser .jsx
*Nota:* JSX é uma sintaxe que permite misturar HTML e JavaScript em um arquivo.
exemplo: 
	```const element = <h1>Hello, world!</h1>;```

* No JSX class é uma palavra reservada devido ao ES6, para usarmos o atributo class do HTML, devemos usar className.
* Use sempre camelCase para atributos do HTML(tabIndex).

*Nota2:* Sempre coloquem o exports default <nome do componente>, no final do arquivo para simplificar a importação. também é possível fazer direto na declaração.

# Passo a Passo
1. Dentro da pasta src, crie uma pasta chamada components.
2. Crie um arquivo chamado Ttile.jsx
3. Altere o arquivo App.js:
 	* Importe o componente que você acabou de criar: import title from './Components/Title.jsx
	* Utilize o elemento dentro do arquivo <Title/>


## 03 - Class e Function
No ReactJS existem duas formas diferentes de criar um componente, através de Classes ou de funções.

Através de uma Classe estendendo a Classe Component, usando as padrões para controlar o staet, as props, e o ciclo de vida de componente
Ou através de funções que retornam diretamente o elemento. Neste caso as props são o primeiro parâmetro da função, o state e o ciclo de vida do componente é controlado através dos hooks.

Ainda sobre funções, é possível declarar uma função através de arros functions, assim temos formas diferentes de criar o mesmo componente.

# Passo a passo
1. Dentro da pasta src/components, crie um arquivo chamado CoolTitle.jsx.
2. Altere o arquivo Title.jsx.
3. Altere o arquivo App.js para usar os 2 componentes.

# Desafio
Crie um componente Photo que receba como parâmetro a url da img
### Resolução do desafio
1. render() retorna a url da imagem.
2. render() retorna o arquivo de caminho ./src/img.
