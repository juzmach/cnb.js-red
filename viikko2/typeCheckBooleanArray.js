// Checking the type of given variable
function typeCheckBooleanArray(array){
	return array instanceof Array && array.every(typeCheckBoolean);
};
