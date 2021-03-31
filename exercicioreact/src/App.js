  
import React from 'react';
import './App.css';
import PolaroidList from './components/PolaroidList';

function App() {

  //aqui está o resultado da função que é executada ao clicar no objeto
  function moveMove() {
    console.log("I like to move it, move it!");
    console.log("⊂(▀¯▀⊂)⊂(▀¯▀⊂)");
  }

  //uma lista de objetos que pode conter texto, links, receber funções...
  let polaroidList = [
    {
      url: "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/05/hey-ya.jpg",
      text: "Imagem Polaroid",
      shakeIt: moveMove,
    },
    {
      url: "https://ichef.bbci.co.uk/news/800/cpsprodpb/64DB/production/_110891852_pia23645_hires.jpg",
      text: "Um pálido ponto azul no vasto infinito",
    },
    {
      url: "https://i.pinimg.com/564x/b0/01/df/b001df0e67c68bb6474c6ee402a3dace.jpg",
      text: "Não é a mamãe!",
      shakeIt: moveMove,
    },
  ];

//tudo ok? então nesse momento vai preparar toda a informação que foi passada.
  return (
    <div className="App">
      <header className="App-header">
        <PolaroidList list={polaroidList} />
      </header>
    </div>
  );
}

//então será possível enviar.
export default App;