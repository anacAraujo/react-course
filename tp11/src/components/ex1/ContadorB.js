import React from 'react';

class ContadorB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    alterar = () => {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return (
            <div className="Contador">
                <h2>{this.state.count}</h2>
                <button onClick={this.alterar}>Clique me</button>
            </div>
        );
    }
}
export { ContadorB };