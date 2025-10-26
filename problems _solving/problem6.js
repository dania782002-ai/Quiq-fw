function balancedParens(str) {
  const stack = [];
  const brackets = { '(': ')', '[': ']', '{': '}' };

  for (let char of str) {
    if (brackets[char]) stack.push(char);
    else if (Object.values(brackets).includes(char)) {
      const last = stack.pop();
      if (brackets[last] !== char) return false;
    }
  }

  return stack.length === 0;
}

console.log(balancedParens('(')); 
console.log(balancedParens('()')); 
console.log(balancedParens(')(')); 
console.log(balancedParens('(())')); 
console.log(balancedParens('[](){}')); 
console.log(balancedParens('[({})]')); 
console.log(balancedParens('[(]{)}')); 
console.log(balancedParens('var wow = { yo: thisIsAwesome() }')); 
console.log(balancedParens('var hubble = function() { telescopes.awesome();'));