// Checking the type of given variable
function typeCheckStringArray(array){
	// Checks if array is null
	if(array == null){
		return false;
	}
	return array.every(typeCheckString);
};
