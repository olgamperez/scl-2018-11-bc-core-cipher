//aqui solo va el manejo del cifrado

window.cipher = {
  encode: (offset, texto) => {
    offset=parseInt(offset);
    let resultado = '';
    for (let i=0; i<texto.length; i++){
      let letraAscii=texto[i].charCodeAt();
      if (letraAscii >= 65 && letraAscii <= 90 ) {
        let letraConvertida=(letraAscii-65+offset)%26+65; 
        resultado += String.fromCharCode(letraConvertida);
      }else if (letraAscii >= 97 && letraAscii <= 122 ) {
        let letraConvertida=(letraAscii-97+offset)%26+97; 
        resultado += String.fromCharCode(letraConvertida);
      }else{
        resultado += texto[i]
      }  
      }
      return resultado;
  },

    decode: (offset, texto) => {
    offset=parseInt(offset); 
    let resultado = '';
  for (let i=0; i<texto.length; i++){
    let letraAscii=texto[i].charCodeAt();
    if (letraAscii >= 65 && letraAscii <= 90 ) {
      let letraConvertida=(letraAscii-65-offset)%26+65; 
      if(letraConvertida <65){
        (letraConvertida+=26)
      };
      resultado += String.fromCharCode(letraConvertida);
    }else if (letraAscii >= 97 && letraAscii <= 122 ) {
      let letraConvertida=(letraAscii-97-offset)%26+97; 
      if(letraConvertida <97){
        (letraConvertida+=26)
      };
      resultado += String.fromCharCode(letraConvertida);
    }else{
      resultado += texto[i]
    }
    
    } 
    return resultado;
  }}
