import React, {useState, useEffect} from "react";
import "./Polaroid.css";
/**
 * @param {string} url - Polaroid img url.
 * @param {string} text - Polaroid legend and alt text.
 * @param {function} shakeIt - Polaroid event.
 * 
 */

//essa função é a construção do conteúdo.
function Polaroid(props) {
  const [turnLeft, setTurnleft] = useState(true);
  const [classNames, setClassNames] = useState(turnLeft ? "left" : "right");

  useEffect(() => setClassNames(turnLeft ? "left" : "right"), [turnLeft]);

  let inner;

    //hora de decidir algumas coisas
  if (props.children) {
    inner = props.children;
  } else {
    inner = <h3>{props.text}</h3>;
  }

    
    function handleClick() {
        setTurnleft(!turnLeft);
        if(props.shakeIt && props.shakeIt.call) {
            props.shakeIt();
        }
    }
    
    //*Duvida: porque essa className precisa ter esse espaço antes de fechar aspas?
    return (
        <div className={"polaroid " + classNames} onClick={handleClick} data-testid="polaroid">       
            <img src={props.url} alt={props.text}></img>
            {inner}
        </div>
    );

}

export default Polaroid;