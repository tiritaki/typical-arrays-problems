
exports.min = function min (array) {
  if (array && array.length > 0) {
    return Math.min(...array)
} else {
    return 0;
}
}

exports.max = function max(array) {
if (array && array.length > 0) {
    return Math.max(...array)
} else {
    return 0;
}
}


exports.avg = function avg (array) {
  if (array && array.length > 0) {
  return ((array).reduce((a,v,i)=>(a*i+v)/(i+1))).toFixed(2);
} else {
  return 0;
}
}
