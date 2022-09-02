const cipher = {
    encode,
    decode
  };
  
  function encode(llave, mensaje) {
    if (llave === 0 || mensaje === "" || mensaje.length === 0 || llave === null){
      throw new TypeError();
    }
    let respuesta = "";
    let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    llave = ((llave % 26) + 26) %26;
    if (mensaje) {
     for (let i = 0; i < mensaje.length; i++) {     
       if (alfabeto.indexOf(mensaje[i]) != -1) {
         let posicion = ((alfabeto.indexOf(mensaje[i]) + llave) % 26);
         respuesta += alfabeto[posicion];
       } 
       else 
        respuesta += mensaje[i];
       
     }
   }
   //console.log ("texto cifrado " + respuesta);
     return respuesta;
 }
 
 function decode(llave, mensaje) {
  if (llave === 0 || mensaje === "" || mensaje.length === 0 || llave === null){
    throw new TypeError();
  } 
   let respuesta = "";
   let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   llave = ((llave % 26) - 26) %26;
   if (mensaje) {
     for (let i = 0; i < mensaje.length; i++) {
       if (alfabeto.indexOf(mensaje[i]) != -1) {
         let posicion = ((alfabeto.indexOf(mensaje[i]) - llave) % 26);
         respuesta += alfabeto[posicion]; 
       // } else if (mensaje[i] = " "){
       //   mensaje = " ";
       }
       else 
        respuesta += mensaje[i];
       
     }
   }
   //console.log("texto descifrado " + respuesta);
     return respuesta;
 }

export default cipher;