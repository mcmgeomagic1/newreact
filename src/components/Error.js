import React, {Component} from 'react';

class ErrorBonudry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}


    componentDidCatch(error, info) {
        this.setState({hasError: true});
  
    }
    render() {
    	if (this.state.hasError) {
    		return <h1>Ups thata is not good</h1>
    	}
    	return this.props.children
    }
}

export default Error;

