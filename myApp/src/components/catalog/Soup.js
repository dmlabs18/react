import React, { Component } from 'react';
import PostCard from '../PostCard';
import Crumbs from '../Crumbs';
import { connect } from 'react-redux';

class Soup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			soups: this.props.recipes.data.soup,
		}
	}
	// componentWillMount() {
	// 	this._mounted = true;
	// 	fetch('db.json')
	// 		.then(response => response.json())
	// 		.then(data =>
	// 			this.setState({
	// 				soups: data.soup
	// 			})
	// 		)
	// }

	// componentWillUnmount() {
	// 	this._mounted = false;
	// }

	render() {
		return (
			<div className="blockPosts">
			<Crumbs sect="Супы и бульоны" />
				{this.state.soups.map((soup, i) => <PostCard url="soups-and-broths" sect="Супы и бульоны" post={soup} key={i} />)}
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

Soup = connect(mapStateToProps)(Soup)

export default Soup;
