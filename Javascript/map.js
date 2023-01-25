Array.prototype.customMap = function (callBack) {
  let result = [];

  this.forEach((value, index, array) => {
    result.push(callBack(value, index, array));
  });

  return result;
};

let array = [1, 2, 3, 4, 5];

let sqauredArray = array.customMap(function (val) {
  return val * 2;
});

console.log(sqauredArray);