//Fui desafiado a criar um componente que recebesse como parâmetro uma url de imagem.
import React, { Component } from 'react';
import photo from '../img/photo.jpeg';

export default class Header extends Component {

    //Não sei se fiz certo mas renderizei direto a imagem.
    //Um portal apareceu quando coloquei o caminho do .jpeg  o.o"
    render() {
        const url = "https://i.pinimg.com/564x/97/86/ec/9786ec883756c755df35a331ff902f3b.jpg"
    return (
        <div>
            <img src={photo} width="400" height="600" /> 
            <img src={url} width="400" height="600"/>
            
        </div>
        
    );
  }
} 