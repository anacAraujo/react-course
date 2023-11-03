
import React, { Component } from 'react';
import './styles.css';
class ReceitaItem extends Component {

    constructor(props) {
        super(props);
        this.nome = props.nome;
        this.ingredientes = props.ingredientes;
        this.passos = props.passos;
    }

    static displayIngredientes() {
            return this.ingredientes.map((ingrediente) => (
                <li>{ingrediente}</li>
            ));
    }

    static displayPassos() {
        return this.passos.map((passo, index) => (
            <li>{index + 1}. {passo}</li>
        ));
}

    render() {
        return (
            <li className="list-group-item">
                <div className='card'>
                    <h3><b>{this.nome}</b></h3>
                    <ul>
                        <h4>Ingredientes:</h4>
                        {this.displayIngredientes}
                    </ul>
                    <ul>
                        <h4>Passos:</h4>
                        {this.displayPassos}
                    </ul>
                   
                </div>
            </li>
        );
    }
}
export default ReceitaItem;






