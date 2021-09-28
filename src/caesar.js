/**
 * Encrypt a phrase with the caesar algorithm.
 * @param {*} phrase The message to encrypt
 * @param {*} offset Offset of the alphabet to apply to message.
 * @returns {string} The encrypted message.
 */
export function caesarcipher(phrase, offset) {
  let encryption = [];
  phrase = phrase.toLowerCase();
  
  // 
  for (let i = 0; i < phrase.length; i++) {
    let char = phrase[i];

    // if lowercase, apply offset.
    if (char.match(/[a-z]/)) {
      let index = char.charCodeAt() + offset;
      if (index > 122) { 
        let offsetToGo = index - 122;
        index = 96 + offsetToGo;
      }
      let newChar = String.fromCharCode(index);
      
      encryption.push(newChar);
    } else {
      encryption.push(phrase[i]);
    }
  }

  return encryption.join("");
}