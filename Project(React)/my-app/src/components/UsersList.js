import React from 'react';
import User from './User';

export default function PostList(props) {
	const posts = props.posts
	return (
		<div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
			{posts.map(post => {
				return <div><User post={post}/></div>
			})}
		</div>
	)
}