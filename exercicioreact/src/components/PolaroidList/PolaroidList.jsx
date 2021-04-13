import React from "react";
import Polaroid from "../Polaroid";
//import "./PolaroidList.css";

/**
 * @param {[]} List - Polaroid Array of {url: string, text: string, shakeIt: function}
 * 
 */

//função e suas propriedade tendem a retornar algo, e nesse caso é o JSX mostrando
//que ali tem uma div, e nessa div é possível trabalhar com objetos, funções, classes, muita coisa...
function PolaroidList(props) {
    return (
        <div className="polaroid_list">
            {props.list.map((item, i) => (
                <Polaroid key={i} url={item.url} text={item.text} shakeIt={item.shakeIt} />
        ))}
        </div>
    );
}

export default PolaroidList;