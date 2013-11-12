function typeCheckBoolean(variable){
	return variable === true || variable === false || toString.call(variable) == '[object Boolean]';
};