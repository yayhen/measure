import React from 'react';
import ReactDOM from 'react-dom';
import {Styles} from './../styles/style.js'

class Device extends React.Component {
	constructor(props) {
		super(props);
		this.clickOnOption = this.clickOnOption.bind(this);
		this.returnToPlan = this.returnToPlan.bind(this);
	}

	state = {
		fullScreen: false,
	}


	clickOnOption() {
		this.setState({
			fullScreen: true
		});
	}

	returnToPlan() {
		this.setState({
			fullScreen: false
		});
	}

	render() {
		if (this.state.fullScreen == false) {
			return (
				<div onClick={this.clickOnOption} style={Styles.optSt}>
					<svg>  
						<line x1="0.3vw" y1="0.4vw" x2="2.7vw" y2="0.4vw" stroke-width="3" stroke="rgb(0,0,0)"/>  
						<line x1="0.3vw" y1="1.4vw" x2="2.7vw" y2="1.4vw" stroke-width="3" stroke="rgb(0,0,0)"/>  
						<line x1="0.3vw" y1="2.4vw" x2="2.7vw" y2="2.4vw" stroke-width="3" stroke="rgb(0,0,0)"/>  
					</svg> 
				</div>);
		} else {
			return (
				<div  style={Styles.optStFull}>
					Введите изделия для пустых ячеек<br />
					<input type='text' placeholder={this.props.listOfDevice.CustomMass1} /><br />
					<input type='text' placeholder={this.props.listOfDevice.CustomMass2} /><br />
					<input type='text' placeholder={this.props.listOfDevice.CustomMass3} /><br /><br />
					<input type='text' placeholder={this.props.listOfDevice.CustomMed1} /><br />
					<input type='text' placeholder={this.props.listOfDevice.CustomMed2} /><br />
					<input type='text' placeholder={this.props.listOfDevice.CustomMed3} /><br /><br />
					<input type='text' placeholder={this.props.listOfDevice.CustomOth1} /><br />
					<input type='text' placeholder={this.props.listOfDevice.CustomOth2} /><br />
					<input type='text' placeholder={this.props.listOfDevice.CustomOth3} /><br />
					<button onClick={this.returnToPlan}>Назад</button>
				</div>);
		}
				
	}
}

export default Device;