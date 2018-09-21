import React from 'react';
import Todo from './Todo';

export default function PostList(props) {
	const posts = props.posts
	return (
		<div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
			{posts.map(post => {
				return <div><Todo post={post}/></div>
			})}
		</div>
	)
}