function typeCheckIntRegExp (variable) {
var reg = /^-?\d*$/
return (reg.test(variable));
}
