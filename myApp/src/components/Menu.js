import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


export default class Menu extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		};
	}

	render() {
		return (
			<Navbar expand>
				<NavbarBrand href="/"><img src="/logo.png" alt="bene gusto"/></NavbarBrand>
				<Nav navbar>
					<NavItem>
						<NavLink href="/soups-and-broths">Супы и бульоны</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/main-dishes">Основные блюда</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/salads-and-snacks">Салаты и закуски</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/sauces-and-dressings">Соусы и заправки</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/bake">Выпечка и десерты</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/drinkables">Напитки</NavLink>
					</NavItem>
				</Nav>
			</Navbar>
		);
	}
}