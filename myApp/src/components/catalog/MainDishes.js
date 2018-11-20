import React, { Component } from 'react';
import PostCard from '../PostCard';
import Crumbs from '../Crumbs';
import { connect } from 'react-redux';

class MainDishes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dishes: this.props.recipes.data.mainDishes,
		}
	}
	// componentWillMount() {
	// 	this._mounted = true;
	// 	fetch('db.json')
	// 		.then(response => response.json())
	// 		.then(data =>
	// 			this.setState({
	// 				dishes: data.mainDishes
	// 			})
	// 		)
	// }

	// componentWillUnmount() {
	// 	this._mounted = false;
	// }

	render() {
		return (
			<div className="blockPosts">
			<Crumbs sect="Основные блюда" />
				{this.state.dishes.map((dishe, i) => <PostCard url="main-dishes" sect="Основные блюда" post={dishe} key={i} />)}
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

MainDishes = connect(mapStateToProps)(MainDishes)

export default MainDishes;
