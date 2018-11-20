import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 
import Menu from './Menu';
import Soup from './catalog/Soup';
import Sauces from './catalog/Sauces';
import Drinkables from './catalog/Drinkables';
import MainDishes from './catalog/MainDishes';
import Snacks from './catalog/Snacks';
import Bake from './catalog/Bake';
import Home from './section/Home';
import Toggle from './l-Sidebar';
import About from './section/About';
import Advert from './section/Advert';
import Contacts from './section/Contacts';
import Footer from './Footer';
import ProductCard from './ProductCard';
import { Router, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

class App extends Component {
	render() {
		return (
			<Router history={createHistory()}>
				<div className="App container-fluid">
					<Menu />
					<Route exact path="/" component={Home} />
					<section className="wrapper">
						<aside className="left_abar"><Toggle /></aside>
						<section className="main">
							<Route exact path="/soups-and-broths" component={Soup} />
							<Route exact path="/sauces-and-dressings" component={Sauces} />
							<Route exact path="/main-dishes" component={MainDishes} />
							<Route exact path="/salads-and-snacks" component={Snacks} />
							<Route exact path="/drinkables" component={Drinkables} />
							<Route exact path="/bake" component={Bake} />
							<Route path="/about" component={About} />
							<Route path="/advertising" component={Advert} />
							<Route path="/contacts" component={Contacts} />

							<Route path={"/soups-and-broths/:id"} component={ProductCard} />
							<Route path={"/sauces-and-dressings/:id"} component={ProductCard} />
							<Route path={"/main-dishes/:id"} component={ProductCard} />
							<Route path={"/salads-and-snacks/:id"} component={ProductCard} />
							<Route path={"/drinkables/:id"} component={ProductCard} />
							<Route path={"/bake/:id"} component={ProductCard} />
							{/* <Route path={"/productcard/:id"} component={ProductCard} /> */}
						</section>
						<aside className="right_abar">
							<div className="card__ad">
								<picture className="card__picture">
									<p>Реклама</p>
									<source srcSet="advertsiting-logo.svg" type="image/svg+xml" />
									<img src="advertsiting-logo.png" alt="Тип баннера: 240х400" />
								</picture>
							</div>
							<div className="card__ad">
								<picture className="card__picture">
									<p>Реклама</p>
									<source srcSet="advertsiting-logo.svg" type="image/svg+xml" />
									<img src="advertsiting-logo.png" alt="Тип баннера: 240х400" />
								</picture>
							</div>
						</aside>
					</section>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
