import React from 'react';
import PolaroidList from '../components/PolaroidList';

function PolaroidPage() {
    function moveMove() {
        console.log("I like to move it, move it!");
        console.log("⊂(▀¯▀⊂)⊂(▀¯▀⊂)");
    }
    
    
    let polaroidList = [
        {
            url:"https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/05/hey-ya.jpg",
            text:"Hey ya!",
            shakeIt: moveMove,
        },
        {
            url:"https://miro.medium.com/max/894/1*sMDSAhvge74frIJOyLw8Ww.jpeg",
            text:"Um pálido ponto azul"
        },
        {
            url:"https://get.pxhere.com/photo/track-railway-rail-train-transport-lane-railroad-track-rail-transport-railroad-tracks-nonbuilding-structure-552588.jpg",
            text:"não foi quadro de monet",
            shakeIt: moveMove,
        },
    ];
    
    return <PolaroidList list={polaroidList} />
}

export default PolaroidPage;