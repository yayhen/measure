let planArray = [];

planArrayFilling = function() {
	for(let i = 0; i < 16; i++){
		for(let k = 0; k < 11; k++){
			planArray[i][k] = [0, 0, 0, 0];
		}
	}
	return planArray;
}

addCarToPlan = function(carN, x, y, dX=0, dY=0, angle=0) {
	planArray[x, y] = [carN, dX, dY, angle];
}