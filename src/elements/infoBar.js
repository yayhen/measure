import React from 'react';
import ReactDOM from 'react-dom';

import {Styles} from './../styles/style.js'

class InfoBar extends React.Component {
	constructor(props){
		super(props);
	}
	state = {
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
		dvc: '',
	}

	mouseEnterHandler = (event) => {
		this.props.setCheckedDevice(event._targetInst.memoizedProps.pidor);
	}

	mouseLeaveHandler = (event) => {
		this.props.setCheckedDevice('');
	}

	render() {
		let counter = {};
		let total = 0;
		let plan = this.props.planArray;
		plan.forEach(function(item, ind, plan) {
			if (counter.[item.device] === undefined) {
				if (item.condition == 'worked') {counter.[item.device] = 1 ; total += 1;};
			} else {
				if (item.condition == 'worked') {counter.[item.device] += 1; total += 1; } 
				
			}
		});
		let rend = [];
		for (let item in counter) {
			let dvcColor = '';
			switch (item) {
				case 'AM431':
					dvcColor = this.state.ColorGroup.AM431
					break;
				case 'LB431':
					dvcColor = this.state.ColorGroup.LB431
					break;
				case 'LK431':
					dvcColor = this.state.ColorGroup.LK431
					break;
				case 'LT431':
					dvcColor = this.state.ColorGroup.LT431
					break;
				case 'BT7596A':
					dvcColor = this.state.ColorGroup.BT7596A
					break;
				case 'LK2432':
					dvcColor = this.state.ColorGroup.LK2432
					break;
				case 'CustomOth1':
					dvcColor = this.state.ColorGroup.WAR
					break;
				default:
					dvcColor = this.state.ColorGroup.Other
			}
			//this.setState({dvc: this.props.listOfDevice.[item]});
			let dvcc = this.props.listOfDevice.[item];
			rend.push(
					<div pidor={item} style={{align: 'left'}} onMouseEnter={this.mouseEnterHandler} onMouseLeave={this.mouseLeaveHandler}>
						<div style={{backgroundColor: dvcColor, display: 'inline',}}>
							&#8195;
						</div>
						{this.props.listOfDevice.[item]+': '+counter[item]}
					</div>
				)
		}
		rend.sort(function(a, b) {
			return b.props.children[1].substr(-2,2) - a.props.children[1].substr(-2,2) ;
		});
		// теперь необходимо не 431 серию переместить вниз массива
		var tmpElem=[];
		rend.forEach((itm, ind, rend)=> {
			if(itm.props.children[1].match("43")==null) {
				tmpElem.push(rend.splice(ind, 1));
			}
		});
		var fullRend = rend.concat(tmpElem);

		return (
				<div style={Styles.SmallInfoStyle}>
					<strong>Количество зондовых (всего {total}) по изделиям:</strong>
					{fullRend}
				</div>
			)
	}
}

export default InfoBar;