import React from 'react';
import ReactDOM from 'react-dom';
//import Device from './device.js';
import {Styles} from './../styles/style.js'

class Car extends React.Component {
	constructor(props) {
		super(props);
		this.clickOnCar = this.clickOnCar.bind(this);
		this.returnToPlan = this.returnToPlan.bind(this);
		this.changeDevice = this.changeDevice.bind(this);
		this.changeNote = this.changeNote.bind(this);
		this.changeNWrk = this.changeNWrk.bind(this);
		this.changeWrk = this.changeWrk.bind(this);
	}

	state = {
		fullScreen: false,
		ColorGroup: {
			AM431: 'RGB(125, 139, 250)',
			LB431: 'RGB(250, 221, 122)',
			LK431: 'RGB(5, 255, 231)',
			LT431: 'RGB(5, 251, 112)',
			BT7596A: 'RGBA(5, 227, 179, 89)',
			LK2432: 'RGB(5, 227, 127)',
			WAR: 'RGB(250, 76, 84)',
			Other: 'RGB(7, 250, 169)'
		},
	}

	clickOnCar() {
		this.setState({
			fullScreen: true
		});
	}

	changeDevice() {
		let newDevice = document.getElementById('select1').value;
		this.props.changeStateDevice(this.props.carN, newDevice);
	}

	returnToPlan() {
		this.setState({
			fullScreen: false
		});
	}

	changeNote() {
		let tmp = document.getElementById('note1').value;
		this.props.changeNotes(this.props.carN, tmp);
	}

	changeWrk() {
		this.props.changeWorked(this.props.carN, 'worked');
	}

	changeNWrk() {
		this.props.changeWorked(this.props.carN, 'broken')
	}

	render() {
		if (this.state.fullScreen == false) {
			let angleStyle;
			let borderStyle = '5px solid white';
			let deviceStyle;
			if (this.props.angle == 'rotate(180deg)') {
				angleStyle = 'rotate(180deg)'}
				 else angleStyle = 'rotate(0deg)'

			if (this.props.zond === 'button') borderStyle = '5px solid mediumBlue';
			if (this.props.zond === 'em-6010') borderStyle = '5px solid steelBlue';
			let opacSt;
			if (this.props.condition == 'broken') {
				opacSt = '0.1'
			}
			if (this.props.condition == 'worked') {
				opacSt = '1'
			}
			let cutStyle = '';
			if (this.props.device==this.props.checkedDevice) borderStyle = '10px solid red'
			switch (this.props.device) {
				case 'AM431':
					cutStyle = this.state.ColorGroup.AM431
					break;
				case 'LB431':
					cutStyle = this.state.ColorGroup.LB431
					break;
				case 'LK431':
					cutStyle = this.state.ColorGroup.LK431
					break;
				case 'BT7596A':
					cutStyle = this.state.ColorGroup.BT7596A
					break;
				case 'LK2432':
					cutStyle = this.state.ColorGroup.LK2432
					break;
				case 'LT431':
					cutStyle = this.state.ColorGroup.LT431
					break;
				case 'CustomOth1':
					cutStyle = this.state.ColorGroup.WAR
					break;
				default:
					cutStyle = this.state.ColorGroup.Other
			}
			let zondNote = '';
			switch (this.props.carN) {
				case '21':
					zondNote = 'Иней'
					break;
				case '1':
					zondNote = 'INTL-ДШ'
					break;
				case '70':
					zondNote = 'Икомат'
					break;
				case '99':
					zondNote = 'Виадук'
					break;
				case '66':
					zondNote = 'Декада'
					break;
				case '54':
					zondNote = 'Прогр.'
					break;
				case '55':
					zondNote = 'Викинг'
					break;
				case '20':
					zondNote = 'Иней'
					break;
				case '22':
					zondNote = 'Меандр'
					break;
				case '49':
					zondNote = 'Меандр'
					break;
				case '53':
					zondNote = 'Меандр'
					break;
				default:
					zondNote = this.props.listOfDevice.[this.props.device];
			}
			return (
				<div title={this.props.notes.[this.props.carN]} onClick={this.clickOnCar} style={Object.assign({}, Styles.CarStyle, 
						{top: this.props.posY, left: this.props.posX,
						 	transform: this.props.angle, border: borderStyle, 
						 		//backgroundColor: this.props.colorMap.[this.props.device], 
						 		backgroundColor: cutStyle,
						 			opacity: opacSt})}>
					<div style={{transform: angleStyle, lineHeight: '0.6', paddingTop: '1px', paddingBottom: '4px'}}><strong><small>{this.props.carN}</small></strong><br /><small><small><small><small>{zondNote}</small></small></small></small></div>
				</div>
			);	
		} else {
			let text = '';
			if (this.props.notes.[this.props.carN]===undefined) {
				text = 'введите заметки'
			} else {
				text = this.props.notes.[this.props.carN];
			}
			let workLabel;
			if (this.props.condition == 'worked') {
				workLabel = 'находится в рабочем состоянии';
			} else {
				workLabel = 'не функционирует';
			}

			return (
					<div style={Styles.carFullInfo}>
						<h1>Зондовая установка № {this.props.carN}</h1>
						<h2>На данный момент зондовая установка <br /> {workLabel}</h2>
						<button onClick={this.changeWrk} style={{backgroundColor: 'RGB(7, 250, 169)', fontSize: '4vh'}}>Пометить как рабочую</button>
						<button onClick={this.changeNWrk} style={{backgroundColor: 'RGB(250, 76, 84)', fontSize: '4vh'}}>Пометить как нерабочую</button>
						<h2>Тип изделия: {this.props.listOfDevice.[this.props.device]}</h2> 
						<select name='device' id='select1' style={{fontSize: '4vh'}}>
							<optgroup label='Массовые гражданские изделия'>
								<option selected disabled>Выберите изделие</option>
								<option selected value='LB431'>{this.props.listOfDevice.LB431}</option>
								<option value='AM431'>{this.props.listOfDevice.AM431}</option>
								<option value='LK431'>{this.props.listOfDevice.LK431}</option>
								<option value='LK2432'>{this.props.listOfDevice.LK2432}</option>
								<option value='LT431'>{this.props.listOfDevice.LT431}</option>
								<option value='BT7596A'>{this.props.listOfDevice.BT7596A}</option>
								{/*<option value='CustomMass1'>{this.props.listOfDevice.CustomMass1}</option>
								<option value='CustomMass2'>{this.props.listOfDevice.CustomMass2}</option>
								<option value='CustomMass3'>{this.props.listOfDevice.CustomMass3}</option>*/}
							</optgroup>
								<optgroup label='Менее массовые гражданские изделия'>
								<option value='DOT43'>{this.props.listOfDevice.DOT43}</option>
								<option value='AM150'>{this.props.listOfDevice.AM150}</option>
								<option value='LXX78'>{this.props.listOfDevice.LXX78}</option>
								<option value='IL497'>{this.props.listOfDevice.IL497}</option>
								<option value='Music'>{this.props.listOfDevice.Music}</option>
								{/*<option value='CustomMed1'>{this.props.listOfDevice.CustomMed1}</option>
								<option value='CustomMed2'>{this.props.listOfDevice.CustomMed2}</option>
								<option value='CustomMed3'>{this.props.listOfDevice.CustomMed3}</option>*/}
							</optgroup>
							<optgroup label='Остальное'>
								{/*<option value='Ser512'>{this.props.listOfDevice.['Ser512']}</option>
								<option value='Ser588'>{this.props.listOfDevice.['Ser588']}</option>
								<option value='KP5XX'>{this.props.listOfDevice.['KP5XX']}</option>
								<option value='KP7XX'>{this.props.listOfDevice.['KP7XX']}</option>
								<option value='Ser2P'>{this.props.listOfDevice.['Ser2P']}</option>
								<option value='Ser537'>{this.props.listOfDevice.['Ser537']}</option>*/}
								<option value='CustomOth1'>{this.props.listOfDevice.['CustomOth1']}</option>
								{/*<option value='CustomOth2'>{this.props.listOfDevice.['CustomOth2']}</option>
								<option value='CustomOth3'>{this.props.listOfDevice.['CustomOth3']}</option>*/}
						</optgroup>
						</select>
						<button onClick={this.changeDevice} style={{fontSize: '4vh'}}>Перестроить</button><br/>
						<button onClick={this.returnToPlan} style={{position: 'absolute', left: '90vw', top : '10vh', backgroundColor: 'RGB(250, 76, 84)', fontSize: '10vh'}}>X</button>
						<h3>Заметки про данную зондовую установку:</h3>
						<textarea id='note1' onChange={this.changeNote} style={{fontSize: '3vh'}} rows='5' cols='50'>{text}</textarea><br />
					</div>

				)
		}
	}


}

export default Car;