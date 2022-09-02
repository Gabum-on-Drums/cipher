import cipher  from './cipher.js';  

document.getElementById("inputOriginal").addEventListener("keyup", 
    function() {
      this.value = this.value.toUpperCase(); 
    });  

  document.getElementById("botonCifrador").addEventListener("click", function() {
    let mensaje = document.getElementById("inputOriginal").value;
    let llave = document.getElementById("rango").value;
    document.getElementById("botonCifrador").style.color = "black";
    document.getElementById("botonDescifrador").style.color = "white";

    document.getElementById("resultado").value = cipher.encode(llave, mensaje);
    //console.log("boton cifrar");
  },
  true
  );
  document.getElementById("botonDescifrador").addEventListener("click", function() {
    let mensaje = document.getElementById("inputOriginal").value;
    let llave = document.getElementById("rango").value;
    document.getElementById("botonCifrador").style.color = "white";
    document.getElementById("botonDescifrador").style.color = "black";

    document.getElementById("resultado").value = cipher.decode(llave, mensaje);
    //console.log("boton descifrar");
  },
  true
  );  
