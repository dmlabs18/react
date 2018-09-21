import React, { Component } from 'react';
import { sha256 } from 'js-sha256';
import {connect} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import ChatField from './chatField.js';

let addLoginReducer = function(state, action) {
	if (state === undefined) return ({})
		if (action.type === 'addLogin') return ({nick:action.nick})
			if (action.type === 'loginSent') return ({})
				return state;
		}

		const reducers = combineReducers({
			newLogin: addLoginReducer
		})

		let store = createStore(reducers);

		export default class LogIn extends Component {
			constructor(props) {
				super(props)
				this.state = {
					users: []
				}
				this.logInUser = this.logInUser.bind(this)
			}
			componentWillMount(){
				fetch('db.json')
				.then(response => response.json())
				.then(data => 
					this.setState({
						users: data.users
					})
					)
			}
			logInUser (event) {
				event.preventDefault();
				let login = document.getElementById('loginIn').value;
				let pass = sha256( document.getElementById('passIn').value );
				for (var obj of this.state.users) {
					if(obj.username.toLowerCase() === login.toLowerCase() && obj.pass === pass) {
						store.dispatch({
							type: 'addLogin',
							nick: login
						})

						window.usernick = login;
						document.querySelector('.formLogIn').style.display = "none";
						document.querySelector('.wrapper').style.filter = "none";
						document.querySelector('.App-title').innerHTML = `Welcome to our small chat room, <span style='color: #B22222'>${obj.name}</span>!`;
						document.getElementById("chatText").scrollIntoView(true);
						return
					}
					else {
						document.querySelector('.App-title').innerHTML = `<span style='color: #B22222'>Please enter a correct username or Sign in!</span>`;
						document.getElementById('passIn').style.backgroundColor = "#ffc0cb";
					}
				}
			}

			registerForm (event) {
				event.preventDefault();
				document.querySelector('.formLogIn').style.display = "none";
				document.querySelector('.formRegBlock').style.display = "flex";
				document.querySelector('.App-title').innerHTML = `A couple of lines and you are with us! :)`;
			}

			render(){
				return (
					<div>
					<div className = "formLogIn formReg">
					<div className = "formLocation">
					<form action="#">
					<div className = "formGroup">
					<label htmlFor="inputLastName">Enter your login:</label>
					<input type="text" id="loginIn" placeholder="username" name="login" pattern="[A-Za-z0-9]{3,10}" required/>
					<div className="requirements">Must be at least 6 characters as letters as numbers.</div>
					</div>
					<div className = "formGroup">
					<label htmlFor="inputPass">Enter your password:</label>
					<input type="password" id="passIn" placeholder="password" name="pass" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" required />
					<div className="requirements">Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.
					</div>
					</div>
					<button type="submit" name="submitForms" className="button" id="submitEmail" onClick={this.logInUser}>Sign In</button>
					<button type="submit" name="submitForms" className="regBtn button" id="submitRegister" onClick={this.registerForm}>Register</button>
					</form>
					</div>
					</div>
					</div>
					)
			}
		}

		const mapStateToProps = function(store) {
			return {
				newLogin: store.newLogin
			};
		}

		LogIn = connect(mapStateToProps)(ChatField)