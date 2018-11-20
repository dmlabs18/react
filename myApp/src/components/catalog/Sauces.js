import React, { Component } from 'react';
import PostCard from '../PostCard';
import Crumbs from '../Crumbs';
import { connect } from 'react-redux';

class Sauces extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sauces: this.props.recipes.data.sauces,
		}
	}
	// componentWillMount() {
	// 	this._mounted = true;
	// 	fetch('db.json')
	// 		.then(response => response.json())
	// 		.then(data =>
	// 			this.setState({
	// 				sauces: data.sauces
	// 			})
	// 		)
	// }
	// componentWillUnmount() {
	// 	this._mounted = false;
	// }

	render() {
		return (
			<div className="blockPosts">
			<Crumbs sect="Соусы и заправки" />
				{this.state.sauces.map((sauce, i) => <PostCard url="sauces-and-dressings" sect="Соусы и заправки" post={sauce} key={i} />)}
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

Sauces = connect(mapStateToProps)(Sauces)

export default Sauces;
