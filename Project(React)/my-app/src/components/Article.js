import React, {Component} from 'react'

export default class Article extends Component {

	constructor({post}) {
		super(post);

		this.state = {
			post
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ post: nextProps.post });
	}

	render() {
		const post = this.state.post;
		console.log(post);
		return (
			<div>
				<h1 className="uk-heading-bullet uk-margin-medium-bottom">
					<span>{post.title}</span>
					{/* <a className="uk-text-small" href="">{post.user.name}</a> */}
				</h1>
				<div className="uk-article uk-dropcap uk-margin-large-bottom">
					{post.body}
				</div>
			</div>
		)
	}
}
