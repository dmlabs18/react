import React, { Component } from 'react';

class ContactUser extends Component {

	render(){
		return (
			<li>
			<img src={this.props.photo} title={this.props.name} alt={this.props.name} />
			<span className="contactUser" onClick={this.privateMsg}>{this.props.name}</span>
			</li>
			)
	}
}

class ContactUsers extends Component {
	constructor(props){
		super(props);
		this.state = {
			names: []
		}
	}
	componentWillMount(){
		fetch('db.json')
		.then(response => response.json())
		.then(data => 
			this.setState({
				names: data.users
			})
			)
	}

	render(){
		return (
			<ul className="contactsList">
			{this.state.names.map((item,i) => <ContactUser name={item.name} photo={item.photo} key={item.id} />)}
			</ul>
			);
	}
	static get defaultProps(){
		return {names: [{name: "John Do", photo:"img/grey.jpg"}]};
	}
}

export default class ContactList extends Component {

	render(){
		return (
			<div>
			<ContactUsers />
			</div>
			)
		}
	}