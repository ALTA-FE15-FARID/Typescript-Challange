//Ubah Huruf

function encryptText(text: string): string {
    const alphabetBob = "KLMNOPQRSTUVWXYZABCDEFGHIJ";
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let encryptedText = "";
  
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const charIndex = alphabet.indexOf(char.toUpperCase());
  
      if (charIndex !== -1) {
        const encryptedChar = alphabetBob[charIndex];
        encryptedText += char === char.toUpperCase() ? encryptedChar : encryptedChar.toLowerCase();
      } else {
        encryptedText += char;
      }
    }
  
    return encryptedText;
  }
  
  const text = "SEPULSA OKE";
  const encryptedText = encryptText(text);
  console.log(encryptedText);
  