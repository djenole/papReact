import React, {useState} from "react";


function CoolTitle(props) {
    //Uma coisa é certa, esse título nunca ai estar vazio
    //sempre que for atribuído um valor novo à ele,
    // ele recebe um estado com o novo valor.
    const titulo = props.info ?? "alguém dormiu?";
    const [title, setTitle] = useState(titulo);

    //a função é criar eventos.
    function handleChange(event) {
        setTitle(event.target.value);
    }

    //tudo pronto? hora de preparar pra enviar.
    return (
        <div>
            <input type="text" name="name" value={title} onChange={handleChange} />
            <h1>{title}</h1>
        </div>
    );
}

export default CoolTitle;