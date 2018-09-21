import React, {Component} from 'react';
export default class Pagination extends Component {
		constructor(props) {
		super(props);
		this.state = {
			limit: props.limit,
			page: props.page,
			length: props.length,
			pages: 16
		}
	}

handlePagination(e) {
	e.preventDefault();
	console.log(e.target.innerHTML);
	this.props.change(e.target.innerHTML);

}

		render () {
			return (
			<div>
				<ul className="uk-pagination uk-flex-center">
					<li><a href="" onClick={this.handlePagination.bind(this)}><span uk-pagination-previous><svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" ratio="1"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"></polyline></svg></span></a></li>
					<li><a href="" onClick={this.handlePagination.bind(this)}>1</a></li>
					<li><a href="" onClick={this.handlePagination.bind(this)}>2</a></li>
					<li><a href="" onClick={this.handlePagination.bind(this)}>3</a></li>
					<li><a href="" onClick={this.handlePagination.bind(this)}>4</a></li>
					<li><a href="" onClick={this.handlePagination.bind(this)}>5</a></li>
					<li><a href="" onClick={this.handlePagination.bind(this)}><span uk-pagination-next><svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" ratio="1"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"></polyline></svg></span></a></li>
				</ul>
			</div>
	)
}
}