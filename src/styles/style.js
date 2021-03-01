const CarStyle = {
	width: '5vw',
	height: '7vh',
	fontSize: '4vmin',
	borderRadius: '0% 0% 20% 20%',
	position: 'absolute',
	//left: '3vw',
	//top: '3vh'
}

const SmallInfoStyle = {
	width: '25vw',
	height: '55vh',
	fontSize: '3vmin',
	position: 'absolute',
	left: '70vw',
	top: '40vh',
	//border: '3px solid green',
	overflow: 'auto',
	backgroundColor: 'dimGray',
	textAlign: 'left'
}

const carFullInfo = {
	width: '100vw',
	height: '100vh',
	position: 'absolute',
	left: '0vw',
	top: '0vh',
	backgroundColor: 'rgba(0, 0, 0, 0.95)',
	zIndex: '10',
	//transition: '1s',
	color: 'white',
}

const optSt = {
	width: '3vw',
	height: '3vw',
	position: 'absolute',
	left: '95vw',
	top: '1vh',
	backgroundColor: 'rgba(255, 255, 255, 0.7)',
	borderRadius: '10%',
}

const optStFull = {
	width: '50vw',
	height: '100vw',
	position: 'absolute',
	left: '50vw',
	top: '0vh',
	backgroundColor: 'rgba(228, 228, 228, 0.8)',
}

const Styles = {
	CarStyle: CarStyle,
	SmallInfoStyle: SmallInfoStyle,
	carFullInfo: carFullInfo,
	optSt: optSt,
	optStFull: optStFull,
}

export {Styles};