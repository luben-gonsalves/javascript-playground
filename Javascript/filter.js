Array.prototype.customFilter = function (callBack) {
  let result = [];
  this.forEach(function (val, index, array) {
    if (callBack(val)) {
      result.push(val);
    }
  });
  return result;
};

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filteredArray = array.customFilter(function (val) {
  return val % 2 === 0;
});

console.log(filteredArray);

Array.prototype.customFilter = function (callback) {
  let result = [];

  this.forEach(function (value, index) {
    result.push(callback(value));
  });

  return result;
};
