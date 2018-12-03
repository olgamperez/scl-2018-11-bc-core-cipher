//aqui solo va el manejo del cifrado

window.cipher = { //Es el objeto
  encode: (offset, texto) => { //caracteristicas= (acción, valor)
    offset=parseInt(offset); // Se utiliza el parseInt para convertir el valor a un numero
    let resultado = '';
    for (let i=0; i<texto.length; i++){
      let letterAscii=texto[i].charCodeAt();
      if (letterAscii >= 65 && letterAscii <= 90 ) {
        let encryptedLetter=(letterAscii-65+offset)%26+65; 
        resultado += String.fromCharCode(encryptedLetter); // concatenando el resultado
      }else if (letterAscii >= 97 && letterAscii <= 122 ) {
        let encryptedLetter=(letterAscii-97+offset)%26+97; 
        resultado += String.fromCharCode(encryptedLetter); 
      }
      else if (letterAscii >= 48 && letterAscii <= 57 ) {
        let encryptedLetter=(letterAscii-48+offset)%10+48; 
        resultado += String.fromCharCode(encryptedLetter);
      } /*else if (letterAscii >= 164 && letterAscii <= 165 ) {
          continue; //omite la letra "ñÑ"
          resultado += String.fromCharCode(encryptedLetter);
      }*/ else{
        resultado += texto[i]
      } 
      }
      return resultado;
  },

    decode: (offset, texto) => {
    offset=parseInt(offset); 
    let resultado = '';
  for (let i=0; i<texto.length; i++){
    let letterAscii=texto[i].charCodeAt();
    if (letterAscii >= 65 && letterAscii <= 90 ) {
      let encryptedLetter=(letterAscii-65-offset)%26+65; 
      if(encryptedLetter <65){
        (encryptedLetter+=26)}
      resultado += String.fromCharCode(encryptedLetter);
    }else if (letterAscii >= 97 && letterAscii <= 122 ) {
      let encryptedLetter=(letterAscii-97-offset)%26+97; 
      if(encryptedLetter <97){
        (encryptedLetter+=26)
      }
      resultado += String.fromCharCode(encryptedLetter);
    }else if (letterAscii >= 48 && letterAscii <= 57 ) {
      let encryptedLetter=(letterAscii-48-offset)%10+48; 
      if(encryptedLetter <48){
        (encryptedLetter +=10)}
      resultado += String.fromCharCode(encryptedLetter);
    }/*else if (letterAscii >= 164 && letterAscii <= 165 ) {
      continue; 
      resultado += String.fromCharCode(encryptedLetter);
    } */
    else{
      resultado += texto[i]}
    } return resultado;
  }}
