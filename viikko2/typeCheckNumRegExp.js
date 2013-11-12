function typeCheckNumRegExp (variable) {
var reg = /^-?\d+\.?\d*$/
return (reg.test(variable));
}
