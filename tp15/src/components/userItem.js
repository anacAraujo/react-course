
import React, { Component } from 'react';
import './styles.css';
class UserItem extends Component {

	constructor(props) {
		super(props);
		this.nome = props.nome;
		this.username = props.username;
		this.gn = props.gn;
		this.tlf = props.tlf;
	}

	render() {
		return (
			<li className="list-group-item">
				<div className='card'>
					<h4><b>{this.nome}</b></h4>
					<p>Username: {this.username}</p>
					<p>Gender: {this.gn}</p>
					<p>Phone: {this.tlf}</p>
				</div>
			</li>
		);
	}
}

export default UserItem;
