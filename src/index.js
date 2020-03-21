
exports.min = function min (array) {
  if (array == undefined || array.length == 0) return 0;
  return array.sort((a, b) => a-b).shift();
}

exports.max = function max (array) {
  if (array == undefined || array.length == 0) return 0;
  return array.sort((a, b) => a-b).pop();
}

exports.avg = function avg (array) {
  if (array == undefined || array.length == 0) return 0;
  return array.reduce((prewValue, currentValue) => prewValue + currentValue) / array.length
}
