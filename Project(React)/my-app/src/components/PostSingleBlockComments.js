import React, {Component} from 'react'

export default class PostSingleBlockComments extends Component {
	constructor({comments}) {
		super(comments);

		this.state = {
			comments: [],
			comment: {}
		}
	}

	componentWillReceiveProps(nextProps) {
		nextProps.comments.push(nextProps.comment); // ???
		this.setState({ comments: nextProps.comments, comment: nextProps.comment });
	}
	render() {
		return (
			<div>
				<hr/>
				<h3 className="uk-margin-remove-top">Comments:</h3>
				<div className="uk-comments">
					{this.state.comments.map(comment => {
						return (
							<div>
								<article className="uk-comment">
									<header className="uk-comment-header uk-grid uk-grid-medium uk-flex-middle">
										<div className="uk-width-expand">
											<h4 className="uk-comment-title uk-margin-remove">{comment.name}</h4>
											<ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
												<li><a href="#">{comment.email}</a></li>
											</ul>
										</div>
									</header>
									<div className="uk-comment-body">
										{comment.body}
									</div>
								</article>
								<hr/>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}