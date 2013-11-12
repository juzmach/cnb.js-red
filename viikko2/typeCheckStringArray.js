// Checking the type of given variable
function typeCheckIntArray(array){

	// Checks if array is null
	if(array == null){
		return false;
	}

	// Loops through array and check that each value is an Integer
	for(int i = 0;i<array.length){
		if(!typeCheckString(array[i])){
			return false;
		}
	}
	return true;
};
