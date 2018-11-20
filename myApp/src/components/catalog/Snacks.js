import React, { Component } from 'react';
import PostCard from '../PostCard';
import Crumbs from '../Crumbs';
import { connect } from 'react-redux';

class Snacks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			snacks: this.props.recipes.data.snacks,
		}
	}
	// componentWillMount() {
	// 	this._mounted = true;
	// 	fetch('db.json')
	// 		.then(response => response.json())
	// 		.then(data =>
	// 			this.setState({
	// 				snacks: data.snacks
	// 			})
	// 		)
	// }
	// componentWillUnmount() {
	// 	this._mounted = false;
	// }

	render() {
		return (
			<div className="blockPosts">
			    <Crumbs sect="Салаты и закуски" />
				{this.state.snacks.map((snack, i) => <PostCard url="salads-and-snacks" sect="Салаты и закуски" post={snack} key={i} />)}
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

Snacks = connect(mapStateToProps)(Snacks)

export default Snacks;
