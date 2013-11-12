// Checking the type of given variable
function typeCheckNumArray(array){
	return array instanceof Array && array.every(typeCheckNum);
};
