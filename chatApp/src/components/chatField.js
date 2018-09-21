import React, { Component } from 'react';
import jsonPost from './jsonPost.js';
import ContactList from './contactsList.js';
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers} from 'redux';

let addMessageReducer = function(state, action) {
	if (state === undefined) return {}
	if (action.type === 'addMessage') return ({nick:action.nick, message: action.message, status: 'READY'})
	if (action.type === 'messageSent') return ({})
	return state;
}

let getMessagesReducer = function(state, action){
	if (state === undefined) return ({ messageId: 0, messages: [], status: 'LOADING' })
	if (action.type === 'getMessages'){
		return {
			messageId: action.data.nextMessageId,
			messages: [...state.messages,...action.data.data],
			status: 'READY'
		}
	}
	return state;
}

			const reducers = combineReducers({
				newMessage: addMessageReducer,
				messages: getMessagesReducer
			})

			let store = createStore(reducers);

			store.subscribe(function(){
				let state = store.getState().newMessage;
				if (state.nick){
					jsonPost("http://students.a-level.com.ua:10012", {func: "addMessage", nick: state.nick, message: state.message})
					.then(() => store.dispatch({type: 'messageSent'}))
				}
			})

			setInterval(function(){
				let messageId = store.getState().messages.messageId;
				jsonPost("http://students.a-level.com.ua:10012", {func: "getMessages", messageId}) 
				.then((data) => store.dispatch({type: 'getMessages', data: data}))
			},2000)

			function MessageUser(props){

				let time = new Date(+(new Date()) - Math.floor(Math.random()*10000000)).toLocaleString ().replace(',', '')
				let nick = props.nick.toLowerCase().split(' ')[0]
				let photo = props.photo 
				if(nick === 'daenerys' || nick === 'tyrion' || nick ==='arya' || nick === 'snow' || nick === 'sansa' || nick === 'grey' ) {
					photo = `img/${nick}.jpg`
				}

				return (
					<div className="block_message">
					<div className="block_message_author">
					<img src={photo} title={props.nick} alt={props.nick} />
					<span>{props.nick}</span>
					</div>
					<p>{props.message}</p>
					<span className="message_date">{time}</span>
					</div>
					)
				}

				MessageUser.defaultProps = {nick:"Varys",photo: 'img/varys.jpg'};

				class MessageUsers extends Component {
					render(){
						let visible = this.props.messages.status; 
						let arr = [];
						for (let obj of this.props.messages.messages) {
							if(obj.nick === 'Daenerys Targaryen' || obj.nick === 'Tyrion Lannister' || obj.nick === 'Arya Stark' || obj.nick === 'Jon Snow' || obj.nick === 'Sansa Stark' || obj.nick === 'Grey Worm' || obj.nick === 'snow' ||obj.nick === 'nick') 
								arr.push(obj)
						}

						return (
							<div id="blockMessages">
							<div className="loader-wrapper" id={'invisible' + (visible === 'LOADING' ? 'none': '')}>
							<div className="loader"></div>
							</div>
							{arr.map((item, i) => item === undefined ? <MessageUser nick={item.nick+''} message={item.message+''} key={i}/>:<MessageUser nick={item.nick} message={item.message} key={i}/>)}
							</div>
							);
					}
				}

				export default class ChatField extends Component {
					constructor(props) {
						super(props);
						this.handleClick = this.handleClick.bind(this);
						this.sendComment = this.sendComment.bind(this);
					}

					sendComment(event){
						if (event.keyCode === 13 && !event.shiftKey) {
							event.preventDefault();
							this.handleClick(event);
							this.message.value = "";
							document.querySelector('.formMessage').blur();
						};
					};

					handleClick (event) {
						if(this.message.value === undefined || this.message.value === '') {
							event.preventDefault();
						} else {
							store.dispatch({
								type: 'addMessage',
								nick: window.usernick,
								message: this.message.value
							})
							this.message.value = "";
							document.querySelector('.formMessage').blur();
						}
					}

					render(){
						let visible = this.props.status; 
						return (
							<main className="wrapper">
							<ContactList />
							<div className="chatField">
							<div className="loader-wrapper" id={'invisible' + (visible === 'LOADING' ? 'none': '')}>
							<div className="loader"></div>
							</div>
							<Provider store={store}>
							<MessageUsers />
							</Provider>
							<form action="#" className="formMessage">
							<textarea className="bodyMessage" id="chatText" placeholder="To send a message, press the enter &#8629;" name="message" onKeyDown={this.sendComment} ref={(c) => this.message = c} />
							<button type="button" className="sendMessage" onClick={this.handleClick}><img src="img/icon-send.svg" title="send message" alt="send message" /></button>
							</form>
							</div>
							</main>
							)
					}
				}

				const mapStateToProps = function(store) {
					return {
						newMessage: store.newMessage,
						messages: store.messages
					};
				}

				ChatField = connect(mapStateToProps)(ChatField)
				MessageUsers = connect(mapStateToProps)(MessageUsers)