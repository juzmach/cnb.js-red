// Checking the type of given variable
function typeCheckInt(variable){
	// First checks if the variable is number and secondly if it is Integer
	return typeCheckNum(variable) && Math.floor(variable) == variable;
};
