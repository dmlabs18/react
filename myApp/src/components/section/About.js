import React, { Component } from 'react';
import Crumbs from '../Crumbs';

export default class About extends Component {

	render() {
		return (
			<section className="about-sect container">
			<Crumbs sect="О нас" />
					<h1>О нас</h1>
					<div>
						Канал для любителей натуральной и вкусной пищи. Кроме видеорецептов, в описании вы найдете пошаговую инструкцию с советами и комментариями к рецепту. Я поделюсь с вами способами приготовления всеми любимых блюд, и, возможно, открою что-то новое.
					</div>
			</section>
				)
		}
}