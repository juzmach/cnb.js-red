// Checking the type of given variable
function typeCheckIntArray(array){

	// Checks if array is null
	if(array == null){
		return false;
	}

	// Loops through array and check that each value is a num
	for(int i = 0;i<array.length){
		if(typeof array[i] === "number"){
			continue;
		}else{
			return false;
		}
	}
	return true;
};