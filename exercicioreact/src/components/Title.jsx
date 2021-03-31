import React, { Component } from 'react';

export class Title extends Component {
   
    //a sua construção irá seguir com determinado padrão.
    constructor(props) {
        super(props);
        this.state = {
            title: props.info ?? "eae, mundinho.",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    //quer uma mãozinha pra acontecer um evento, mudar alguma coisa?    
    handleChange(event) {
        this.setState({title: event.target.value});
    }
    
    
    //Toda vez que ocorre um evento é hora de renderizar essa mudança.
    //O que vamos renderizar? o resultado do estado atual, e se mudar o algum valor?
    //vai renderizar o novo resultado.
    render() {
        return(
            <div>
                <input type="text" name="name" value={this.state.title} on change={this.handleChange} />
                <h1>{this.state.title}</h1>
            </div>
        );
    }
}


export default Title;