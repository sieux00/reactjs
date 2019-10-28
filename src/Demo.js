import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products.js';
import './asserts/css/style.css';

class Demo extends Component {
	render () {
		return (
			<div className='container'> 
				<h3 className='text'>Flower Store</h3>
				<div>
					<Products></Products>
				</div>
			</div>
		);
	};
}

export default Demo;
