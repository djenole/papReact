import React, { Component } from 'react';
export class Title extends Component {
    render() {
        const titulo = this.props.info ?? "olá, mundo";
        return <h1>{titulo}</h1>;
    }
}

export default Title;