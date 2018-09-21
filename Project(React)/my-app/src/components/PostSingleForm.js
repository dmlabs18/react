import React, {Component} from 'react';

export default class PostSingleForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			body: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.getComment(this.state)
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	render() {
		return (
			<div>
				<form action="#" onSubmit={this.handleSubmit} className="uk-comment-form uk-margin-medium-top">
						<fieldset className="uk-fieldset">
								<legend className="uk-legend">Add Comment</legend>
								<div className="uk-margin">
										<textarea name="body" className="uk-textarea" rows="5" placeholder="Comment" onChange={this.handleInputChange} required></textarea>
								</div>
								<div className="uk-margin">
										<input name="name" className="uk-input" type="text" placeholder="Name" onChange={this.handleInputChange} required />
								</div>
								<div className="uk-margin">
										<input name="email" className="uk-input" type="email" placeholder="Email" onChange={this.handleInputChange} required />
								</div>
								<div className="uk-margin">
										<button className="uk-button uk-button-primary" type="submit">Post Comment</button>
								</div>
						</fieldset>
				</form>
			</div>
		)
	}
}

