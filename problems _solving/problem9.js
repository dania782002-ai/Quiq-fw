                                                    function compose(...funcs) {
  return function(initialValue) {
    return funcs.reduceRight((acc, fn) => fn(acc), initialValue);
  };
}

function pipe(...funcs) {
  return function(initialValue) {
    return funcs.reduce((acc, fn) => fn(acc), initialValue);
  };
}
