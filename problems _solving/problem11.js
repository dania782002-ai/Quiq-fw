function flatten(...args) {
  let result = [];

  for (let item of args) {
    if (Array.isArray(item)) {
      result.push(...flatten(...item));
    } else {
      result.push(item);
    }
  }

  return result;
}