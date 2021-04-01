# 1. Primeiros Passos

O objetivo é a demonstração do uso do hooks para a criação de componentes.

### State & useState

state é a forma de controlar as varáveis em nossos componentes, podemos usar através da classe base component, ou através de hooks com o useState. Podendo fazer o bind destas variáveis com os elementos HTML.

E também podemos usar os eventos do DOM, usando o seguinte formato :

<!--ts--> 
   * [onNomeDoEventoEmCamCase](#EventosDom)
      * [onClick](#EventoDom)
      * [onChange](#EventoDom)
      * [onMouseOver](#EventoDom)
     
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

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Polaroid
Agora a ideia é criar um componente Polaroid, mostrando algumas possibilidades do React, como o uso de CSS, e apresentando uma sugestão de formato para organização dos arquivos de um componente.

### Passo a Passo 1
1. Dentro da pasta src/components, crie uma pasta Polaroid
2. Dentro da pasta src/components/Polaroid
    * Crie o arquivo Polaroid.jsx
    * Crie o arquivo index.js
3. Edite o arquivo App.js

### Passo a passo 2
1. Dentro da pasta src/components/Polaroid
    * Crie o arquivo Polaroid.css.
    * Edite Polaroid.jsx para adicionar o cdd e começar a usar as props.
2. Edite o arquivo App.js

## UseEffect
useEffect é o hook usado para executar ações quando acontece alguma alteração no componente, seja na sua criação, quando alguma state ou prop for alterada, ou quando o componente for destruído.

podemos também limitar quando o effect vai executar, através de um conjunto de states, ou somente uma vez, passando um array vazio.

### Passo a Passo 3 com useEffect
1. Dentro da pasta src/components/Polaroid
    * Edite Polaroid.css.
    * Edit Polaroid.jsx, para adicionar um evento de click na imagem.

### Passo a Passo 4
Através das props também é possível passa funções, permitindo assim criar "callbacks" dos seus componentes. Também é possível colocar componentes filhos dentro do seu componente, através da props especial children.
1. Dentro da pasta src/components/Polaroid, edite Polaroid.jsx, para adicionar outras props.
2. Edite o arquivo App.js

### Passo a Passo 5
Também podemos renderizar múltiplos componentes, com base em um array.
1. Dentro da pasta src/components, crie a pasta PolaroidList.
2. Dentro da pasta src/components/polaroidList.
    * Crie o arquivo PolaroidList.jsx
    * Crie o arquivo index.js
3. Edite o arquivo App.js para usar o novo componente.

