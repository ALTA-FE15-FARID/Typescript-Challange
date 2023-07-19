//Caesar Cipher

function shiftString(offset: number, str: string): string {
    const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    let shiftedStr = '';
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char === ' ') {
        shiftedStr += ' ';
        continue;
      }
      const charCode = char.charCodeAt(0);
      const isUppercase = charCode >= 65 && charCode <= 90;
      const alphabet = isUppercase ? lowercaseAlphabet.toUpperCase() : lowercaseAlphabet;
      const shiftedIndex = (alphabet.indexOf(char.toLowerCase()) + offset) % 26;
      const shiftedChar = alphabet[shiftedIndex];
      shiftedStr += isUppercase ? shiftedChar.toUpperCase() : shiftedChar;
    }
  
    return shiftedStr;
  }
  
  const offset = 3;
  const string1 = 'abc';
  console.log(shiftString(offset, string1));  // Output: def
  
  const string2 = 'abcdefghijklmnopqrstuvwxyz';
  console.log(shiftString(1, string2));  // Output: bcdefghijklmnopqrstuvwxyza
  
  const string3 = 'abcdefghijklmnopqrstuvwxyz';
  console.log(shiftString(1000, string3));  // Output: mnopqrstuvwxyzabcdefghijkl
  