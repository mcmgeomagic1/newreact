import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {robots} from '../components/robots';
import './App.css';
import Scroll from '../components/Scroll.js';
import error from '../components/Error.js';


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [], 
	        searchfield: ''
		}
	}

componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(users => this.setState({robots: users}));
	
}
	onSearchChange = (event) => {
       this.setState({searchfield: event.target.value})
       
	}
	render () {
		const {robots , searchfield} = this.state;
		 const filteredRobots = robots.filter(robot => {
        	       return robot.name.toLowerCase().includes(searchfield.toLowerCase());
               })
		return !robots.length ?
			<h1 className='tc'>CARREGANDO...</h1>:
	    (
		    <div className='tc code pa0'>
		        <h1 className='f1'>Robofriend</h1>
		        <SearchBox searchChange={this.onSearchChange}/>
		        <Scroll>
		            <error>
		                 <CardList robots={filteredRobots}/>
		            </error>
		        </Scroll>
		    </div>
	    );
	  }
	
	
}

export default App;