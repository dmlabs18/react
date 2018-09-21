import React from 'react';
import { Link } from "react-router-dom";

export default function User({post}) {
	return (
		<div className="uk-card uk-card-default uk-margin-medium-bottom">
				<div className="uk-card-header">
						<h3 className="uk-card-title uk-margin-remove-bottom">{post.name}</h3>
				</div>
				<div className="uk-card-body">
					<ul>
						<li>id: {post.id}</li>
						<li>username: {post.username}</li>
						<li>email: {post.email}</li>
						<li>phone: {post.phone}</li>
						<li>website: {post.website}</li>
					</ul>
				</div>
				<div className="uk-card-footer">
						<Link className="uk-button uk-button-text">Read more</Link>
				</div>
		</div>
	)
}

