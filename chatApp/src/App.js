import React, { Component } from 'react';
import Header from './components/header.js';
import ChatField from './components/chatField.js';
import LogIn from './components/logIn.js';
import RegField from './components/regField.js';
import About from './components/about.js';
import Contacts from './components/contacts.js';
import './index.css';
import './App.css';

import { Router, Route, Link } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

class App extends Component {
	render() {
		return (
			<div className="App">
			<Header />
			<Router history={createHistory()}>
			<div>
			<ul className = "menu">
			<li>
			<Link to="/">Home</Link>
			</li>
			<li>
			<Link to="/about">About</Link>
			</li>
			<li>
			<Link to="/contacts">Contacts</Link>
			</li>
			</ul>
			<Route exact path="/" component={ChatField} />
			<Route path="/about" component={About} />
			<Route path="/contacts" component={Contacts} />
			</div>
			</Router>
			<LogIn />
			<RegField />
			</div>
			);
	}
}

export default App;