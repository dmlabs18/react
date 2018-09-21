import React from 'react';
import { Link } from "react-router-dom";

export default function Photo({post}) {
	return (
		<div className="uk-card uk-card-default uk-margin-medium-bottom">
				<div className="uk-card-header">
						<h3 className="uk-card-title uk-margin-remove-bottom">{post.title}</h3>
				</div>
				<div className="uk-card-body">
						<p>{post.url}</p>
				</div>
				<div className="uk-card-footer">
						<Link className="uk-button uk-button-text">Read more</Link>
				</div>
		</div>
	)
}