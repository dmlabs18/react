import React, { Component } from 'react';
import PostCard from '../PostCard';
import Crumbs from '../Crumbs';
import { connect } from 'react-redux';

class Bake extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bakery: this.props.recipes.data.bake
		}
	}
	// componentWillMount() {
	// 	this._mounted = true;
	// 	fetch('db.json')
	// 		.then(response => response.json())
	// 		.then(data =>
	// 			this.setState({
	// 				bakery: data.bake
	// 			})
	// 		)
	// }

	// componentWillUnmount() {
	// 	this._mounted = false;
	// }

	render() {
		return (
			<div className="blockPosts">
				<Crumbs sect="Выпечка и десерты" />
				{this.state.bakery.map((recipe, i) => <PostCard url="bake" sect="Выпечка и десерты" post={recipe} key={i} />)}
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

Bake = connect(mapStateToProps)(Bake)

export default Bake;
