import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Navbar() {
	return (
			<nav className="uk-navbar-container uk-margin uk-navbar">
					<div className="uk-navbar-left">
							<Link className="uk-navbar-item uk-logo" to="/">Logo</Link>
							<ul className="uk-navbar-nav">
									<li><Link to="/posts">Posts</Link></li>
									<li><Link to="/users">Users</Link></li>
									<li><Link to="/photos">Photos</Link></li>
									<li><Link to="/albums">Albums</Link></li>
									<li><Link to="/todos">Todos</Link></li>
									<li><Link to="/comments">Comments</Link></li>
							</ul>
					</div>
			</nav>
	)
}