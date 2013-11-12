// Checking the type of given variable
function typeCheckNum(variable){
	// Checks if the variable is number
	return !isNaN(variable) && typeof variable === "number";
};
