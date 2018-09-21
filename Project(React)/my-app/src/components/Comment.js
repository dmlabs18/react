import React from 'react';

export default function Comment({post}) {
	return (
		<div className="uk-card uk-card-default uk-margin-medium-bottom">
				<div className="uk-card-header">
						<h3 className="uk-card-title uk-margin-remove-bottom">{post.name}</h3>
				</div>
				<div className="uk-card-body">
						<p>{post.body}</p>
				</div>
				<div className="uk-card-footer">
						<a href="" className="uk-button uk-button-text">Read more</a>
				</div>
		</div>
	)
}