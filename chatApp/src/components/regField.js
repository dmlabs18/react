import React, { Component } from 'react';
import { sha256 } from 'js-sha256';

export default class RegField extends Component {
	constructor(props){
		super(props)
		this.state = {
			users: []
		}
		this.registerUser = this.registerUser.bind(this)
	}

	registerUser (event) {
		event.preventDefault();
		let fullName = document.getElementById('fullName').value;
		let login = document.getElementById('login').value;
		let pass = sha256( document.getElementById('pass').value);
		let mail = document.getElementById('mail').value;
		let photoWeb = document.getElementById('photoWeb').value;

		fetch ( 'http://localhost:3000/users', {
			method: 'POST',
			body: JSON.stringify ({
				"name": fullName,
				"nick": login,
				"pass": sha256( pass ),
				"email": mail,
				"photoWeb": photoWeb
			}),
			headers: {
				"Content-type": "application/json"
			}
		})

		document.querySelector('.formRegBlock').style.display = "none";
		document.querySelector('.App-title').innerHTML = `Welcome to our small chat room, <span style='color: #B22222'>${fullName}</span>!`;
		let activateBlock = document.createElement('div');
		activateBlock.className = "activateBlock";
		activateBlock.innerHTML = 'Please Activate Your Account. Before you can login, you must active your account with the code sent to your email address. If you did not receive this email, please check your junk/spam folder. If you entered an incorrect email address, you will need to re-register with the correct email address.';
		document.querySelector('.formLocation').appendChild(activateBlock);
		document.querySelector('.formLogIn').style.display = "flex";
		document.getElementById('formRegUser').reset();
	}

	render(){
		return (
			<div className = "formReg formRegBlock">
			<div className = "formLocation">
			<form action="#" id = "formRegUser" onSubmit={this.registerUser}>
			<div className = "formGroup">
			<label htmlFor="inputName">Enter your full name:</label>
			<input type="text" id="fullName" placeholder="full name" name="fullName" pattern="[A-Za-z\sA-Za-z]+" required />
			</div>
			<div className = "formGroup">
			<label htmlFor="inputLastName">Enter your username:</label>
			<input type="text" id="login" placeholder="username" name="login" pattern="[A-Za-z0-9]{3,10}" required />
			<div className = "requirements">Must be at least 6 characters as letters as numbers.</div>
			</div>
			<div className = "formGroup">
			<label htmlFor="inputPass">Enter your password:</label>
			<input type="password" id="pass" placeholder="password" name="pass" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" required />
			<div className = "requirements">Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.</div>
			</div>
			<div className = "formGroup">
			<label htmlFor="inputEmail">Enter your email:</label>
			<input type="email" id="mail" placeholder="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required />
			<div className = "requirements">Must be a valid email address.</div>
			</div>
			<div className = "formGroup">
			<label htmlFor="inputPhoto">Enter your photo in the network:</label>
			<input type="text" id="photoWeb" placeholder="photo in the network" name="photo" pattern="https?://.*" />
			</div>
			<button type="submit" name="submitForms" className = "button" id="submitRegUser">Send</button>
			</form>
			</div>
			</div>
			)
		}
	}