function reverseString(string) {
  let reverse = [];
  for (let i = 0; i < string.length; i++) {
    reverse[i] = string[string.length - (i + 1)];
  }

  return reverse.join("");
}

export {reverseString};