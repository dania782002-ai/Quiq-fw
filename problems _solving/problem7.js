function commonCharacters(...strings) {
  let result = '';
  let first = strings[0];

  for (let char of first) {
    if (
      char !== ' ' &&
      !result.includes(char) &&
      strings.every(str => str.includes(char))
    ) {
      result += char;
    }
  }

  return result;
}
