import React, { Component } from 'react';

class Termometro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperatura: 0,
    };
  }

  aumentarTemperatura = () => {
    this.setState((prevState) => ({
      temperatura: prevState.temperatura + 1,
    }));
  };

  diminuirTemperatura = () => {
    this.setState((prevState) => ({
      temperatura: prevState.temperatura - 1,
    }));
  };

  render() {
    const { temperatura } = this.state;

    let estilo = { color: 'green' };
    if (temperatura > 0) {
      estilo = { color: 'red' };
    } else if (temperatura < 0) {
      estilo = { color: 'blue' };
    } else {
      estilo = { color: 'green' };
    }

    return (
      <div>
        <h3>Termômetro</h3>
        <p style={estilo}>Temperatura: {temperatura}°C</p>
        <button onClick={this.aumentarTemperatura}>Aumentar</button>
        <button onClick={this.diminuirTemperatura}>Diminuir</button>
      </div>
    );
  }
}

export { Termometro };
