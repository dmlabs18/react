import React, { Component } from 'react';
import PostCard from '../PostCard';
import Crumbs from '../Crumbs';
import { connect } from 'react-redux';

class Drinkables extends Component {
	constructor(props) {
		super(props);
		this.state = {
			drinkables: this.props.recipes.data.drinkables,
		}
	}
	// componentWillMount() {
	// 	this._mounted = true;
	// 	fetch('db.json')
	// 		.then(response => response.json())
	// 		.then(data =>
	// 			this.setState({
	// 				drinkables: data.drinkables
	// 			})
	// 		)
	// }

	// componentWillUnmount() {
	// 	this._mounted = false;
	// }

	render() {
		return (
			<div className="blockPosts">
			<Crumbs sect="Напитки" />
				{this.state.drinkables.map((drink, i) => <PostCard url="drinkables" sect="Напитки" post={drink} key={i} />)}
			</div>
		);
	}
}

const mapStateToProps = function (store) {
	return {
		newCard: store.newCard,
		recipes: store.recipes
	};
}

Drinkables = connect(mapStateToProps)(Drinkables)

export default Drinkables;
