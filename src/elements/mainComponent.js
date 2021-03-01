import React from 'react';
import ReactDOM from 'react-dom';
import Car from './car.js'
import GenPlan from './genPlan/genPlan.js'

class MainComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div style={{height: '100vh', width: '100vw', backgroundColor: '#202020'}}>
				<GenPlan />
			</div>
		);
	}

}

export default MainComponent;