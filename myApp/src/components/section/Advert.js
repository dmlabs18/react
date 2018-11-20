import React, { Component } from 'react';
import Crumbs from '../Crumbs';

export default class Contacts extends Component {

	render() {
		return (
			<section className="advert-sect container">
			<Crumbs sect="Размещение рекламы" />
				<h1>Контактная информация</h1>
				<div>
					По вопросам, связанным с партнерством и размещением рекламы на сайте пишите на solobenegusto@gmail.com
				</div>
			</section>
		)
	}
}