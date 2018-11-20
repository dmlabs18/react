import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<Navbar expand className="footer-nav">
					<Nav navbar>
						<NavItem>
							<NavLink href="/about">О проекте</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/advertising">Рекламодателям</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/contacts">Контакты</NavLink>
						</NavItem>
					</Nav>
				</Navbar>
				<Navbar expand className="footer-social">
					<Nav navbar>
						<NavItem>
							<NavLink className="footer-social__link" href="https://www.facebook.com/pages/category/Community/Bene-Gusto-1651761111702088/" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i>&nbsp;Facebook</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="footer-social__link" href="https://www.instagram.com/i_benegusto/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i>&nbsp;Instagram</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="footer-social__link" href="https://www.youtube.com/channel/UCsROP4FV5QZfTpxpzes0LFQ" target="_blank"><i className="fa fa-youtube-play" aria-hidden="true"></i>&nbsp;YouTube</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="footer-social__link" href="https://twitter.com/solobenegusto" target="_blank"><i className="fa fa-twitter-square" aria-hidden="true"></i>&nbsp;Twitter</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="footer-social__link" href="https://ru.tsn.ua/authors/dmitriy-sammitov" target="_blank"><i className="fa fa-video-camera" aria-hidden="true"></i>&nbsp;ТСН</NavLink>
						</NavItem>
					</Nav>
				</Navbar>
				<div className="container">
					<div className="footer__row">
						<NavbarBrand href="/"><img src="/logo.png" alt="bene gusto" /></NavbarBrand>
						<div className="footer__description">
							Канал для любителей натуральной и вкусной пищи. Кроме видеорецептов, в описании вы найдете пошаговую инструкцию с советами и комментариями к рецепту. Я поделюсь с вами способами приготовления всеми любимых блюд, и, возможно, открою что-то новое.
					</div>
					</div>
					<div className="footer__footer-bottom">
						<div className="footer__copyright">&copy; 2015–2018 <Link to="#">Bene Gusto</Link>. Все права защищены.</div>
						<div className="footer__dew">Сделано c&nbsp;<Link to="#" target="_blank">Bene Production.</Link></div>
					</div>
				</div>
			</div>
		);
	}
}