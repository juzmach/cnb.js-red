// Checking the type of given variable
function typeCheckIntArray(array){

	// Checks if array is null
	if(array == null){
		return false;
	}

	// Loops through array and check that each value is an Integer
	for(int i = 0;i<array.length){
		if(typeof array[i] === "number" && Math.floor(array[i]) == array[i]){
			continue;
		}else{
			return false;
		}
	}
	return true;
};