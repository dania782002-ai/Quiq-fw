// Problem 1
Array.prototype.map = function(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      result.push(callback(this[i], i, this));
    }
  }
  return result;
};

var transform = function(element, index, array) {
  return array[index] + index + element;
};

console.log(["a", "b", "c"].map(transform)); // ['a0a','b1b','c2c']


// Problem 2
function asyncSum(a, b, callback) {
  setTimeout(function() {
    if (typeof a !== "number" || typeof b !== "number") {
      callback("Incorrect argument(s)");
    } else {
      callback(null, a + b);
    }
  }, 1000);
}

function logNumber(err, result) {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("The total is:", result);
  }
}

asyncSum(10, 7, logNumber);   // The total is: 17
asyncSum(10, "B", logNumber); // Error: Incorrect argument(s)


// Problem 3 (ADVANCED)
"callback kind is better than syncro kind";
