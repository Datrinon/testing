/**
 * Encrypt a letter. Helper method for caesar cipher.
 * 
 * @param {string} letter - the letter to encrypt.
 * @param {boolean} uppercase - Is the letter uppercase?
 * @param {number} offset - offset to apply to the letter.
 */
function encryptLetter(letter, uppercase, offset) {
  let alphabetStart = 96;
  let alphabetEnd = 122;

  if (uppercase) {
    alphabetStart = 64;
    alphabetEnd = 90;
  }

  let newCharIndex = letter.charCodeAt() + offset;

  if (newCharIndex > alphabetEnd) { 
    let offsetToGo = newCharIndex - alphabetEnd;
    newCharIndex = alphabetStart + offsetToGo;
  }
  
  return String.fromCharCode(newCharIndex);
}

/**
 * Encrypt a phrase with the caesar algorithm.
 * @param {*} phrase The message to encrypt
 * @param {*} offset Offset of the alphabet to apply to message.
 * @returns {string} The encrypted message.
 */
export function caesarcipher(phrase, offset) {
  if (offset === 0) {
    return phrase;
  }
  
  let encryption = [];
  
  for (let i = 0; i < phrase.length; i++) {
    let char = phrase[i];

    if (char.match(/[A-Z]/)) {
      encryption.push(encryptLetter(char, true, offset));
    } else if (char.match(/[a-z]/)) {
      encryption.push(encryptLetter(char, false, offset));
    } else {
      encryption.push(char);
    }
  }

  return encryption.join("");
}