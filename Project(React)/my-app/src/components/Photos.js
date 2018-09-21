import React, {Component} from 'react';
import Pagination from './Pagination';
import PhotosList from './PhotosList';

export default class Photos extends Component {
		constructor(props) {
		super(props);
		this.state = {
			photos: [],
			limit: 6,
			page: 3,
			length: 100
		}
	}
	componentDidMount(){
	fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${this.state.limit}&_page=${this.state.page}`)
	.then(response => response.json())
	.then(data => 
		this.setState({
			photos: data,
			page: 1
		})
		)
	}
	changePagination(page){
	fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${this.state.limit}&_page=${this.state.page}`)
	.then(response => response.json())
	.then(data => 
		this.setState({
			photos: data,
			page
		})
		)
}

handleLimit({target}) {
	console.log(target.value);
		fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${target.value}&_page=${this.state.page}`)
	.then(response => response.json())
	.then(data => 
		this.setState({
			photos: data,
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
							<h2>Photos</h2>
							<select onChange={this.handleLimit.bind(this)}>
							<option value="3">3</option>
							<option selected value="6">6</option>
							<option value="9">9</option>
							</select>
							<Pagination change={this.changePagination.bind(this)} limit={this.state.limit} page={this.state.page} length={this.state.length}/>
							<PhotosList posts={this.state.photos}/>
							<Pagination change={this.changePagination.bind(this)} limit={this.state.limit} page={this.state.page} length={this.state.length}/>
						</div>
					</div>
				</main>
			</div>
		)
	}
}