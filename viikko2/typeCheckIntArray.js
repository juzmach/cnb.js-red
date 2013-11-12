// Checking the type of given variable
function typeCheckIntArray(array){
	return array instanceof Array && array.every(typeCheckInt);
};
