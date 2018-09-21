import React, {Component} from 'react';
import Pagination from './Pagination';
import UsersList from './UsersList';


export default class Users extends Component {
		constructor(props) {
		super(props);
		this.state = {
			users: [],
			limit: 5,
			page: 1,
			length: 10
		}
	}
	componentDidMount(){
	fetch(`https://jsonplaceholder.typicode.com/users?_limit=${this.state.limit}&_page=${this.state.page}`)
	.then(response => response.json())
	.then(data => 
		this.setState({
			users: data,
			page: 1
		})
		)
	}
	changePagination(page){
	fetch(`https://jsonplaceholder.typicode.com/users?_limit=${this.state.limit}&_page=${this.state.page}`)
	.then(response => response.json())
	.then(data => 
		this.setState({
			users: data,
			page
		})
		)
}

handleLimit({target}) {
	console.log(target.value);
		fetch(`https://jsonplaceholder.typicode.com/users?_limit=${target.value}&_page=${this.state.page}`)
	.then(response => response.json())
	.then(data => 
		this.setState({
			users: data,
			limit: target.value
		})
		)
}
	render () {
		return (
		<div>
			<main className="uk-main">
				<div className="uk-section">
					<div className="uk-container">
						<h2>Users</h2>
						<select onChange={this.handleLimit.bind(this)}>
						<option value="3">3</option>
						<option selected value="5">5</option>
						<option value="10">10</option>
						</select>
						<Pagination change={this.changePagination.bind(this)} limit={this.state.limit} page={this.state.page} length={this.state.length}/>
						<UsersList posts={this.state.users}/>
						<Pagination change={this.changePagination.bind(this)} limit={this.state.limit} page={this.state.page} length={this.state.length}/>
					</div>
				</div>
			</main>
		</div>
	)
	}
}