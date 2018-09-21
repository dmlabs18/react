import React from 'react';
import { Link } from "react-router-dom";

export default function Todo({post}) {
	return (
		<div className="uk-card uk-card-default uk-margin-medium-bottom">
				<div className="uk-card-header">
						<h3 className="uk-card-title uk-margin-remove-bottom">userId: {post.userId}</h3>
				</div>
				<div className="uk-card-body">
						<p>{post.title}</p>
				</div>
				<div className="uk-card-footer">
						<Link className="uk-button uk-button-text">Read more</Link>
				</div>
		</div>
	)
}