import React from 'react';
import ReactDOM from 'react-dom';
import Car from './../car.js'
import InfoBar from './../infoBar.js'
import Device from './../device.js'


class GenPlan extends React.Component {
	constructor(props) {
		super(props);
		this.changeStateDevice = this.changeStateDevice.bind(this);
		this.changeNotes = this.changeNotes.bind(this);
		this.changeWorked = this.changeWorked.bind(this);
		this.setCheckedDevice = this.setCheckedDevice.bind(this);
	}

	state = {
		planArray: [
			{carN: 1, posX: '0vw', posY: '5vh', angle: 'rotate(90deg)', zond: 'em-6010', device: 'Music', condition: 'worked'},
			{carN: 2, posX: '29vw', posY: '63vh', angle: 'rotate(180deg)', zond: 'china', device: 'LK431', condition: 'worked'},
			{carN: 3, posX: '23vw', posY: '63vh', angle: 'rotate(180deg)', zond: 'china', device: 'LK431', condition: 'worked'},
			{carN: 4, posX: '17vw', posY: '63vh', angle: 'rotate(180deg)', zond: 'china', device: 'LK431', condition: 'worked'},
			{carN: 55, posX: '35vw', posY: '63vh', angle: 'rotate(180deg)', zond: 'em-6010', device: 'Music', condition: 'worked'},
			{carN: 5, posX: '41vw', posY: '63vh', angle: 'rotate(180deg)', zond: 'china', device: 'AM431', condition: 'worked'},
			{carN: 6, posX: '47vw', posY: '63vh', angle: 'rotate(180deg)', zond: 'china', device: 'AM431', condition: 'worked'},
			{carN: 59, posX: '11vw', posY: '63vh', angle: 'rotate(180deg)', zond: 'china', device: 'LB431', condition: 'worked'},
			{carN: 60, posX: '5vw', posY: '63vh', angle: 'rotate(180deg)', zond: 'china', device: 'LT431', condition: 'worked'},

			{carN: 61, posX: '5vw', posY: '72vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 62, posX: '11vw', posY: '72vh', angle: 'rotate(0deg)', zond: 'button', device: 'AM431', condition: 'worked'},
			{carN: 63, posX: '17vw', posY: '72vh', angle: 'rotate(0deg)', zond: 'button', device: 'AM431', condition: 'worked'},
			{carN: 64, posX: '23vw', posY: '72vh', angle: 'rotate(0deg)', zond: 'button', device: 'AM431', condition: 'worked'},
			{carN: 65, posX: '29vw', posY: '72vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'LB431', condition: 'worked'},

			{carN: 66, posX: '23vw', posY: '90vh', angle: 'rotate(180deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 67, posX: '17vw', posY: '90vh', angle: 'rotate(180deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 68, posX: '11vw', posY: '90vh', angle: 'rotate(180deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 69, posX: '5vw', posY: '90vh', angle: 'rotate(180deg)', zond: 'em-6010', device: 'LT431', condition: 'worked'},

			{carN: 52, posX: '55vw', posY: '65vh', angle: 'rotate(90deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 51, posX: '55vw', posY: '77vh', angle: 'rotate(90deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 50, posX: '55vw', posY: '89vh', angle: 'rotate(90deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 85, posX: '60vw', posY: '89vh', angle: 'rotate(-90deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 84, posX: '60vw', posY: '77vh', angle: 'rotate(-90deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 83, posX: '60vw', posY: '65vh', angle: 'rotate(-90deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},

			{carN: 7, posX: '14vw', posY: '1vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 8, posX: '20vw', posY: '1vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 9, posX: '26vw', posY: '1vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 10, posX: '32vw', posY: '1vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 11, posX: '38vw', posY: '1vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 12, posX: '44vw', posY: '1vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 13, posX: '50vw', posY: '1vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 14, posX: '56vw', posY: '1vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'LT431', condition: 'worked'},
			{carN: 15, posX: '62vw', posY: '1vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'LB431', condition: 'worked'},

			{carN: 38, posX: '68vw', posY: '1vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 16, posX: '80vw', posY: '1vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 17, posX: '86vw', posY: '1vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},

			{carN: 25, posX: '8vw', posY: '14vh', angle: 'rotate(180deg)', zond: 'em-6010', device: 'LT431', condition: 'worked'},
			{carN: 24, posX: '14vw', posY: '14vh', angle: 'rotate(180deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 23, posX: '20vw', posY: '14vh', angle: 'rotate(180deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 22, posX: '26vw', posY: '14vh', angle: 'rotate(180deg)', zond: 'em-6010', device: 'LT431', condition: 'worked'},

			{carN: 21, posX: '50vw', posY: '14vh', angle: 'rotate(180deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 20, posX: '56vw', posY: '14vh', angle: 'rotate(180deg)', zond: 'em-6010', device: 'LB431', condition: 'worked'},

			{carN: 18, posX: '80vw', posY: '14vh', angle: 'rotate(180deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 19, posX: '74vw', posY: '14vh', angle: 'rotate(180deg)', zond: 'em-6010', device: 'LT431', condition: 'worked'},						

			{carN: 56, posX: '8vw', posY: '22vh', angle: 'rotate(0deg)', zond: 'button', device: 'AM431', condition: 'worked'},
			{carN: 57, posX: '14vw', posY: '22vh', angle: 'rotate(0deg)', zond: 'button', device: 'AM431', condition: 'worked'},
			{carN: 27, posX: '20vw', posY: '22vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'BT7596A' ,condition: 'worked'},
			{carN: 79, posX: '26vw', posY: '22vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},

			{carN: 28, posX: '38vw', posY: '22vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'AM431' ,condition: 'worked'},
			{carN: 29, posX: '44vw', posY: '22vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 74, posX: '50vw', posY: '22vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'LB431', condition: 'worked'},
			{carN: 86, posX: '56vw', posY: '22vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 34, posX: '62vw', posY: '22vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},

			{carN: 32, posX: '80vw', posY: '22vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'LB431', condition: 'worked'},
			{carN: 31, posX: '74vw', posY: '22vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},

			{carN: 42, posX: '8vw', posY: '35vh', angle: 'rotate(180deg)', zond: 'em-6010', device: 'BT7596A', condition: 'worked'},
			{carN: 41, posX: '14vw', posY: '35vh', angle: 'rotate(180deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 40, posX: '20vw', posY: '35vh', angle: 'rotate(180deg)', zond: 'em-6010', device: 'LK431', condition: 'worked'},
			{carN: 39, posX: '26vw', posY: '35vh', angle: 'rotate(180deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},

			{carN: 37, posX: '44vw', posY: '35vh', angle: 'rotate(180deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 45, posX: '50vw', posY: '35vh', angle: 'rotate(180deg)', zond: 'em-6010', device: 'LB431', condition: 'worked'},
			{carN: 35, posX: '56vw', posY: '35vh', angle: 'rotate(180deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 81, posX: '62vw', posY: '35vh', angle: 'rotate(180deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},

			{carN: 43, posX: '8vw', posY: '43vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 44, posX: '14vw', posY: '43vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 53, posX: '20vw', posY: '43vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 46, posX: '26vw', posY: '43vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},

			{carN: 47, posX: '44vw', posY: '43vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 48, posX: '50vw', posY: '43vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 49, posX: '56vw', posY: '43vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},

			{carN: 30, posX: '86vw', posY: '14vh', angle: 'rotate(180deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},
			{carN: 78, posX: '86vw', posY: '22vh', angle: 'rotate(0deg)', zond: 'em-6010', device: 'AM431', condition: 'worked'},

			{carN: 54, posX: '0vw', posY: '35vh', angle: 'rotate(-90deg)', zond: 'em-6010', device: 'Music', condition: 'worked'},
			{carN: 70, posX: '0vw', posY: '70vh', angle: 'rotate(-90deg)', zond: 'em-6010', device: 'Music', condition: 'worked'},
			{carN: 99, posX: '0vw', posY: '85vh', angle: 'rotate(-90deg)', zond: 'em-6010', device: 'Music', condition: 'worked'},
		],

		deviceColor: {
			AM431: 'springGreen',
			LB431: 'seaGreen',
			LK431: 'forestGreen',
			LT431: 'darkGreen',
			LK2432: 'yellowGreen',
			BT7596A: 'oliveDrab',
			MUSIC: 'lime',
			WAR: 'gold',
		},
		listOfDevice: {
			AM431: '431AM-1',
			LB431: '431LB',
			LK431: '431LK',
			LK2432: '432LK2',
			LT431: '431LT',
			BT7596A: 'BT7596A',
			CustomMass1: 'пусто',
			CustomMass2: 'пусто',
			CustomMass3: 'пусто',
			DOT43: 'ДОТ',
			AM150: 'АМ-1 150мм',
			LXX78: '78LXX',
			IL497: 'IL497',
			Music: 'Музыка',
			CustomMed1: 'пусто',
			CustomMed2: 'пусто',
			CustomMed3: 'пусто',
			Ser512: 'Серия 512',
			Ser588: 'Серия 588',
			KP5XX: 'КП 5ХХ',
			KP7XX: 'КП 7ХХ',
			Ser2P: 'серия 2П',
			Ser537: 'серия 537',
			CustomOth1: 'Военка',
			CustomOth2: 'пусто',
			CustomOth3: 'пусто',
		},
		listOfColor: [
			'lightGreen',
			'mediumSpringGreen',
			'springGreen',
			'seaGreen',
			'forestGreen',
			'darkGreen',
			'yellowGreen',
			'oliveDrab',
			'darkOliveGreen',
			'greenYellow',
			'lawnGreen',
			'lime',
			'limeGreen',
			'olive'
		],
		notes: {},
		checkedDevice: '',
	}

	componentDidUpdate() {
		var saveString = "";
		var sep = "!@##@!";
		this.state.planArray.forEach(item=>{
			saveString = item.posX +sep+ item.posY +sep+ item.angle +sep+ item.zond +sep+ item.device +sep+ item.condition;
			localStorage.setItem("znd" + item.carN, saveString);
			saveString = "";
		})

		if (this.state.notes.length!=0) {
			for (let key in this.state.notes) {
				localStorage.setItem('note'+ key, this.state.notes[key]);
			}
		}
	}

	componentDidMount() {
		var sep = "!@##@!";
		var loadArray = [];
		var loadObject = new Object;
		var toStateArray = [];
		for (let i = 0; i < localStorage.length; i++) {
			if (localStorage.key(i).match("znd") != null){
				loadArray = localStorage.getItem(localStorage.key(i)).split(sep);
				loadObject = {
					carN: localStorage.key(i).substr(3),
					posX: loadArray[0],
					posY: loadArray[1],
					angle: loadArray[2],
					zond: loadArray[3],
					device: loadArray[4],
					condition: loadArray[5],
				}
				toStateArray.push(loadObject);
			}
			loadArray.length = 0;
		}
		if (toStateArray.length != 0) {
			this.setState({
				planArray: toStateArray
			});
		}

		if (localStorage.length!=0){
			for (let i=0; i < localStorage.length; i++) {
				if(localStorage.key(i).match("note") != null) {
					let tmpNotes = {};
					tmpNotes.[localStorage.key(i).substr(4)] = localStorage.getItem(localStorage.key(i));
					console.log('note', tmpNotes);
					this.setState({
						notes: tmpNotes
					});
				}
			}
		}
	}

	changeStateDevice = function (carN, newDevice) {
		let tmp = this.state.planArray;
		tmp.forEach(function(itm, i, tmp){
			if (itm.carN == carN){
				itm.device = newDevice;
			}
		})
		this.setState({
			planArray: tmp
		});
	}

	changeNotes = function (carN, newNote) {
		let temp = this.state.notes;
		temp.[carN] = newNote;
		this.setState({
			notes: temp
		});
	}

	changeWorked = function (carN, cond) {
		let tmp = this.state.planArray;
		tmp.forEach(function(itm, i, tmp){
			if (itm.carN == carN){
				itm.condition = cond;
			}
		})
		this.setState({
			planArray: tmp
		});		
	}

	setCheckedDevice = function (newDevice) {
		this.setState({
			checkedDevice: newDevice
		});
	}

	render() {
		let colorMap = {};
		let colorCounter = 0;
		let a = this.state.planArray.map(item => {
			if (colorMap.[item.device] === undefined) {
				colorMap.[item.device] = this.state.listOfColor[colorCounter];
				colorCounter += 1;
			}
			return (
					<div key={item.carN} >
						<Car carN={item.carN} 
							posX={item.posX} posY={item.posY} 
							angle={item.angle} zond={item.zond} device={item.device} 
								 listOfDevice={this.state.listOfDevice} 
								changeStateDevice={this.changeStateDevice} 
								colorMap={colorMap} 
								notes={this.state.notes} 
								changeNotes={this.changeNotes} 
								condition={item.condition} 
								changeWorked={this.changeWorked}
								checkedDevice={this.state.checkedDevice} />
					</div>
				)
		});
		return (
			<div>
				{a}
				<InfoBar planArray={this.state.planArray}
				colorMap={colorMap} listOfDevice={this.state.listOfDevice} 
				changeNotes={this.state.changeNotes} notes={this.state.notes}
				setCheckedDevice={this.setCheckedDevice} />
				{/*<Device listOfDevice={this.state.listOfDevice}/>*/}
			</div>
		);
	}

}

export default GenPlan;