// Checking the type of given variable
function typeCheckStringArray(array){
	return array instanceof Array && array.every(typeCheckString);
};
