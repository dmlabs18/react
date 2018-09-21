import React, {Component} from 'react';
import Post from './Post';
import Posts from './Posts';
import Breadcrumbs from './Breadcrumbs';
import Article from './Article';
import PostSingleBlockComments from './PostSingleBlockComments';
import PostSingleForm from './PostSingleForm';
import PostSingleBlockContent from './PostSingleBlockContent';


export default class PostSingle extends Component {
	constructor(props) {
		super(props);

		this.state = {
			post: {},
			comment: {}
		}

		this.addNewComment = this.addNewComment.bind(this);
	}

	addNewComment(comment) {
		this.setState({comment})
	}

	componentDidMount() {
		fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}?_embed=comments&_expand=user`)
		.then((response) => response.json())
		.then(post => {
			this.setState({
				post
			})
		})

	}

	render() {
		const post = this.state.post;
		return (
			<div>
				<main className="uk-main">
					<div className="uk-section">
						<div className="uk-container">
							<Breadcrumbs/>
							<Article post={post}/>
							<PostSingleBlockComments comment={this.state.comment} comments={post.comments}/>
							<PostSingleForm getComment={this.addNewComment}/>
						</div>
				</div>
				</main>
			</div>
		)
	}
}
