// Checking the type of given variable
function typeCheckInt(variable){
	// First checks if the variable is number and secondly if it is Integer
	if(typeof variable === "number" && Math.floor(variable) == variable){
		return true;
	}
	return false;
};